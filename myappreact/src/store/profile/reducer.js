import { CHANGE_SHOW_NAME } from "./actions";
import { CHANGE_CHECK_BOX } from "./actions";
import { CHANGE_NAME } from "./actions";

const initialState = {
    name: 'Default',
    showName: true
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SHOW_NAME: {
            return {
                ...state,
                showName: !state.showName,
            };
        }
        case CHANGE_CHECK_BOX: {
            return {
                ...state,
                showName: !state.showName,
            };
        }
        case CHANGE_NAME: {
            return {
                ...state,
                name: action.name,
            };
        }
        default: 
            return state;
    };
};