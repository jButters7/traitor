const initialState = {
  traitorUserId: null,
  traitorUsername: '',
  playerRole: null,
  joinedMissionId: null,
}

const LOGIN_USER = 'LOGIN_USER';
const JOIN_MISSION = 'JOIN_MISSION';

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

export function joinMission(missionId) {
  return {
    type: JOIN_MISSION,
    payload: {
      joinedMissionId: missionId
    }

  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, traitorUserId: action.payload.traitorUserId, traitorUsername: action.payload.traitorUsername, playerRole: action.payload.playerRole }
    case JOIN_MISSION:
      return { ...state, joinedMissionId: action.payload.joinedMissionId }
    default:
      return initialState;
  }
}