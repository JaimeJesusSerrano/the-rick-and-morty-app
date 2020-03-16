import { ActionType, DispatchAction, LocationListStateType } from '~Store/constants/locationList'
import { Action } from 'redux'

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
  action: DispatchAction
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
          currentPage: payload.currentPage,
          loading: false,
          name: payload.name,
          pages: {
            ...state.pages,
            [payload.currentPage]: payload.payload.results
          },
          totalPages: payload.payload.info.pages
        }
    default:
      return initialState
  }
}