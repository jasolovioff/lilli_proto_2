import axios from 'axios';
import { SIMULATION } from './types';


export const submitSimulation = (values) => async dispatch => {
    console.log("-- submitSimulation --");
    const res = await axios.post('/api/simulation', values);
    dispatch({ type: SIMULATION, payload: res.data });
}

/*
export const submitSimulation = (values) => dispatch => {
    console.log("-- submitSimulation --");
    const res = axios.post('/api/simulation', values);
    dispatch({ type: SIMULATION, payload: res.data });
}
*/