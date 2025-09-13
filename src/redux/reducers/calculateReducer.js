import { ActionTypes } from "../constants/actionType";

const initialState = {
    CalculateHistory: [],
};

const calculateReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_HISTORY:
            return {
                ...state,
                CalculateHistory: [
                    ...state.CalculateHistory,
                    action.payload
                ],
            };
        case ActionTypes.REMOVE_HISTORY:
            return {
                ...state,
                CalculateHistory: [],
            };

        default:
            return state;
    }
};

export default calculateReducer;
