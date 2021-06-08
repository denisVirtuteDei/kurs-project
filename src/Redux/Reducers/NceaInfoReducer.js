import { SET_NCEA } from '../Constants/Types'

const initialState = {
  data: [],
}

export const nceaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NCEA:
      return {
        ...state,
        data: [...action.payload],
      }
    default:
      return state
  }
}
