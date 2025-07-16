import axios from 'axios'


const getMatchData = async(params) => {
    axios.create({
        method: 'GET',
        baseURL: 'http://localhost:5000',
        params: {
            t1:params.t1,
            t2:params.t2,
            t3:params.t3,
            t4:params.t4,
            t5:params.t5,
            t6:params.t6
        }
    })
}