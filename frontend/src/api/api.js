import axios from 'axios'


export const getMatchData = async(params) => {
    const data = await axios.get('http://localhost:5000',{
        params: {
            t1:params.t1,
            t2:params.t2,
            t3:params.t3,
            t4:params.t4,
            t5:params.t5,
            t6:params.t6
        }
    })
    // if data isn't showning up for no particular reasoning add conditional chaining (?.)
    return data.data
    
}