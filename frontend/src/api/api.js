import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api";

const api = axios.create({
  baseURL: BASE_URL,
});

export const getMatchData = async (params) => {
  try {
    const data = await api.get("/", {
      params: {
        t1: params.t1,
        t2: params.t2,
        t3: params.t3,
        t4: params.t4,
        t5: params.t5,
        t6: params.t6,
      },
    });
    // if data isn't showning up for no particular reasoning add conditional chaining (?.)
    return data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
