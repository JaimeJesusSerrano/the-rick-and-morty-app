import { ActionType, DispatchAction, LocationListStateType, LocationListActionType } from '~Store/constants/location/LocationList'
import { Location } from '~Api/types'

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
        error: action.error,
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

// Ask Alexis: Esto va aquí?
export const getLocationList = (state: LocationListStateType) => {
  let locations: Location[] = []
  const emptyLocationArray: Location[] = []

  Object.entries(state.pages).map(([key, value]) => {
    if (Number(key) >= 1 && Number(key)) {
      const newLocations: Location[] = value
        ? Object.values(value)
        : emptyLocationArray
      locations = [...locations, ...newLocations]
    }
    return locations
  })

  return locations
}