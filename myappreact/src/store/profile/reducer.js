import { CHANGE_SHOW_NAME } from "./actions";
import { CHANGE_CHECK_BOX } from "./actions"

const initialState = {
    name: 'Default',
    showName: false
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
                checked: !state.checked,
            };
        }
        default: 
            return state;
    };
};