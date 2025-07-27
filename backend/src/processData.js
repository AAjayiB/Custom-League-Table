export const processData = (extractedData) => {
  // Checks if data exists
  if (extractedData) {
    // Creates a list from the keys in the data
    const teamKeys = Object.keys(extractedData);

    // User-defined object the results will be stored in
    function resultModel(team) {
      (this.team = team),
        (this.matchesPlayed = 0),
        (this.wins = 0),
        (this.draws = 0),
        (this.losses = 0),
        (this.points = 0),
        (this.goalFor = 0),
        (this.goalAgainst = 0),
        (this.goalDiff = 0);
    }
    const result = [];

    teamKeys.forEach((key) => {
      // computes all the data for a team's home games
      let allGames = extractedData[key]
        .filter((existingHomeGames) => existingHomeGames) // checks if the game exists (might not due to free api)
        .reduce((resultObject, gameData) => {
          resultObject = {
            ...resultObject,
            matchesPlayed: resultObject.matchesPlayed + 1,
            goalFor: resultObject.goalFor + gameData.homeScore,
            goalAgainst: resultObject.goalAgainst + gameData.awayScore,
          };
          if (gameData.homeScore > gameData.awayScore)
            resultObject = { ...resultObject, wins: resultObject.wins + 1 };
          else if (gameData.homeScore === gameData.awayScore)
            resultObject = { ...resultObject, draws: resultObject.draws + 1 };
          else
            resultObject = { ...resultObject, losses: resultObject.losses + 1 };
          return resultObject;
        }, new resultModel(key, 0, 0, 0, 0, 0, 0, 0, 0));

      // add the data for a team's away games to allGames to get data for both home and away games
      const teamKeys2 = teamKeys.filter((teamKeys2) => key != teamKeys2);
      teamKeys2.forEach((key2) =>
        extractedData[key2]
          .filter((definedAwayGames) => definedAwayGames) // checks if the game exists (might not due to free api)
          .filter((awayGames) => awayGames.awayTeam == key)
          .reduce((resultObject, gameData) => {
            resultObject = {
              ...resultObject,
              matchesPlayed: resultObject.matchesPlayed + 1,
              goalFor: resultObject.goalFor + gameData.awayScore,
              goalAgainst: resultObject.goalAgainst + gameData.homeScore,
            };
            if (gameData.homeScore < gameData.awayScore)
              resultObject = { ...resultObject, wins: resultObject.wins + 1 };
            else if (gameData.homeScore === gameData.awayScore)
              resultObject = { ...resultObject, draws: resultObject.draws + 1 };
            else
              resultObject = {
                ...resultObject,
                losses: resultObject.losses + 1,
              };
            allGames = resultObject;
          }, allGames)
      );

      // computes derived values (points & goal difference) for all a team's games
      allGames = {
        ...allGames,
        points: 3 * allGames.wins + allGames.draws,
        goalDiff: allGames.goalFor - allGames.goalAgainst,
      };

      // push the team's league statistics into the result array
      result.push(allGames);
    });

    // removes underscores in final data
    result.forEach((teamData) => teamData.team.replace("_", " "));

    // ranks the teams within the array
    return result
      .sort(compareGoalFor)
      .sort(compareGoalDiff)
      .sort(comparePoints)
      .reverse();
  }

  // returns an empty list if extractedData is empty
  else return [];
};

// compares goal difference between 2 teams
function compareGoalDiff(team1, team2) {
  if (team1.goalDiff < team2.goalDiff) return -1;
  else if (team1.goalDiff > team2.goalDiff) return 1;
  else return 0;
}

// compares goals for between 2 teams
function compareGoalFor(team1, team2) {
  if (team1.goalFor < team2.goalFor) return -1;
  else if (team1.goalFor > team2.goalFor) return 1;
  else return 0;
}

// compares points between 2 teams
function comparePoints(team1, team2) {
  if (team1.points < team2.points) return -1;
  else if (team1.points > team2.points) return 1;
  else return 0;
}
