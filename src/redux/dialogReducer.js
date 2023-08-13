const SEND_MESSAGE = 'ADD_MESSAGE';
const TYPE_MESSAGE = 'TYPE_MESSAGE';

export const sendMessageAC = () => ({type: SEND_MESSAGE});
export const typeMessageAC = (value) => ({type: TYPE_MESSAGE, value: value});

const initialState = {
    dialogsUsers: [
      { id: 1, userName: 'Andrey' },
      { id: 2, userName: 'Anna' },
      { id: 3, userName: 'Eugeniy' },
      { id: 4, userName: 'Fedor' },
      { id: 5, userName: 'Denis' },
    ],
    messages: [
      { id: 1, message: 'Hello!' },
      { id: 2, message: 'How are you?' },
      { id: 3, message: 'Have fun!' },
    ],
    newMessage: '',
}

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      if (state.newMessage.trim()) {
        return {
          ...state,
          messages: [ ...state.messages, { id: 4, message: state.newMessage } ],
          newMessage: '',
        }
      }
      break;
    }
    case TYPE_MESSAGE: {
      return {
        ...state,
        newMessage: action.value
      }
    }

    default:
      return { ...state }
  }
}

export default dialogReducer;