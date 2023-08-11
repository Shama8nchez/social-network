const SEND_MESSAGE = 'ADD_MESSAGE';
const TYPE_MESSAGE = 'TYPE_MESSAGE';

export const sendMessageAC = () => ({type: SEND_MESSAGE});
export const typeMessageAC = (value) => ({type: TYPE_MESSAGE, value: value});

const dialogReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      if (state.newMessage.trim()) {
        state.messages.push({ id: 4, message: state.newMessage });
        state.newMessage = '';
      }
      return state
    }
    case TYPE_MESSAGE: {
      state.newMessage = action.value;
      return state
    }

    default:
      return state
  }
}

export default dialogReducer;