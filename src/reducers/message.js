import * as Types from './../constants/ActionType';
import * as Message from './../constants/Message';
var initialState = {
    text: Message.MSG_WELCOME
};

const message = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHANGE_MESSAGE:
            console.log(action);
            return {
                text: action.message
            }
        default:
            return { ...state };
    }
}

export default message;