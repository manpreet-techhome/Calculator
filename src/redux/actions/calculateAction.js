import { ActionTypes } from "../constants/actionType";

export const addHistory = (TaskData) => ({
    type: ActionTypes.ADD_HISTORY,
    payload:  TaskData ,
});

export const removeHistory = () => ({
    type: ActionTypes.REMOVE_HISTORY
});

