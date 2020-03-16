import { ActionType, DispatchAction, LocationListStateType, LocationListActionType } from '~Store/constants/locationList'

const initialState: LocationListStateType = {
  currentPage: 0,
  error: false,
  loading: false,
  name: '',
  pages: {},
  totalPages: 0,
}

export const locationListReducer = (
  state: LocationListStateType = initialState,
  action: LocationListActionType
): LocationListStateType => {
  const { type, payload } = action
  switch (type) {
    case ActionType.LOCATION_LIST_FAILED:
      return {
        ...initialState,
        error: payload.error,
        loading: false
      }
    case ActionType.LOCATION_LIST_FETCH:
        return { ...state, loading: true }
    case ActionType.LOCATION_LIST_SEARCH:
        return { ...initialState, loading: true }
    case ActionType.LOCATION_LIST_SUCCEEDED: 
        return {
          ...state,
          currentPage: action.currentPage,
          loading: false,
          name: action.name,
          pages: {
            ...state.pages,
            [action.currentPage as number]: payload.results
          },
          totalPages: payload.info.pages
        }
    default:
      return initialState
  }
}