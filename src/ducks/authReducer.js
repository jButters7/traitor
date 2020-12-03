const initialState = {
  traitorUserId: null,
  traitorUsername: '',
  playerRole: null
}

const LOGIN_USER = 'LOGIN_USER';

export function loginUser(traitorUserId, traitorUsername, playerRole) {
  return {
    type: LOGIN_USER,
    payload: {
      traitorUserId,
      traitorUsername,
      playerRole
    }
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, traitorUserId: action.payload.traitorUserId, traitorUsername: action.payload.traitorUsername, playerRole: action.payload.playerRole }
    default:
      return initialState;
  }
}