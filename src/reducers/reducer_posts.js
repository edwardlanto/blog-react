import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/';

//Defaulting the state I receive from actions to be an object
export default function(state = {}, action){
    switch(action.type){
        case FETCH_POST:

        
        return { ...state, [action.payload.data.id]:action.payload.data}
        // Spread operator below gives the object all previous pieces of state & stores them
        // By adding square braces around action.payload.data.id, your NOT creating an array, your using key interpolation and setting it is a key and value is action.payload.data
        case FETCH_POSTS:   
        return _.mapKeys(action.payload.data, "id");
        // Map Keys is a lodash function that converts an array to an object, and using the ID as the key for full object which is action.payload.data
        default: 
        return state;

        case DELETE_POST:
        return _.omit(state, action.payload)
    }


}