export const processData = (extractedData) => {
    if(extractedData){
        const teamKeys = Object.keys(extractedData)
        function resultModel(team){this.team = team, this.matchesPlayed=0, this.wins=0, this.draws=0, 
            this.losses=0, this.points=0, this.goalFor=0, this.goalAgainst=0, this.goalDiff=0
        }
        const result =[]
        teamKeys.forEach((key) =>{
            let allGames = extractedData[key].reduce((resultObject,gameData) => {
                // console.log(resultObject)
               resultObject =  {...resultObject, 
                matchesPlayed: resultObject.matchesPlayed + 1, 
                goalFor: resultObject.goalFor + gameData.homeScore,
                goalAgainst: resultObject.goalAgainst + gameData.awayScore
            }
            // console.log(resultObject)
            if(gameData.homeScore > gameData.awayScore) resultObject = {...resultObject, wins: resultObject.wins + 1}
            else if(gameData.homeScore === gameData.awayScore) resultObject = {...resultObject, draws: resultObject.draws + 1}
            else resultObject = {...resultObject, losses: resultObject.losses + 1 }
            // console.log(resultObject)
            return resultObject
            
            },  new resultModel(key,0,0,0,0,0,0,0,0))
            // console.log(homeGames)
            //
            // FINISH THE REST OF THE UPDATE CODE FOR AWAY GAMES THEN CALCULATE THE DERIVED VALUES (POINTS AND GOALDIFF)
            
            const teamKeys2 = teamKeys.filter((teamKeys2) => key != teamKeys2)
            teamKeys2.forEach(key2 => extractedData[key2]
            .filter(awayGames => awayGames.awayTeam == key)
            .reduce((resultObject,gameData) =>{
                // console.log(resultObject)
                resultObject =  {...resultObject, 
                    matchesPlayed: resultObject.matchesPlayed + 1, 
                    goalFor: resultObject.goalFor + gameData.awayScore,
                    goalAgainst: resultObject.goalAgainst + gameData.homeScore
                }
                // console.log(resultObject)
            if(gameData.homeScore < gameData.awayScore) resultObject = {...resultObject, wins: resultObject.wins + 1}
            else if(gameData.homeScore === gameData.awayScore) resultObject = {...resultObject, draws: resultObject.draws + 1}
            else resultObject = {...resultObject, losses: resultObject.losses + 1 }
            // console.log(resultObject)
            allGames = resultObject
            },allGames))
            allGames = {...allGames, points: (3*allGames.wins)+allGames.draws, goalDiff: allGames.goalFor-allGames.goalAgainst}
            result.push(allGames)
        })
        // console.log(result)
        return result.sort(compareGoalFor).sort(compareGoalDiff).sort(comparePoints).reverse()
    }
    else return [];
}  


function compareGoalDiff(team1,team2) {
    if(team1.goalDiff < team2.goalDiff) return -1
    else if(team1.goalDiff > team2.goalDiff) return 1
    else return 0
}

function compareGoalFor(team1,team2) {
    if(team1.goalFor < team2.goalFor) return -1
    else if(team1.goalFor > team2.goalFor) return 1
    else return 0
}

function comparePoints(team1,team2) {
    if(team1.points < team2.points) return -1
    else if(team1.points > team2.points) return 1
    else return 0
}

