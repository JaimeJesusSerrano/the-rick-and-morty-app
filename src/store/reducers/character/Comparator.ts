import {
  ActionType,
  RequestType,
  StateType,
} from '~Store/constants/character/Comparator'

const initialState: StateType = {
  error: false,
  charactersSelected: [],
}

export const comparatorReducer = (
  state: StateType = initialState,
  action: RequestType
): StateType => {
  switch (action.type) {
    case ActionType.COMPARATOR_CHARACTER_SELECTED_PUT_FAILED:
      return {
        ...initialState,
        error: action.error,
      }

    case ActionType.COMPARATOR_CHARACTER_SELECTED_PUT_SUCCESS:
      return {
        ...state,
        charactersSelected: [...state.charactersSelected, action.payload.character]

      }
    default:
      return initialState
  }
}
