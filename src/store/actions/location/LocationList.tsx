import { Dispatch } from 'react'
import {
  ActionType,
  DispatchAction,
} from '~Store/constants/location/LocationList'

export class LocationListDispatcher {
  private readonly dispatch: Dispatch<DispatchAction>

  constructor(dispatch: Dispatch<DispatchAction>) {
    this.dispatch = dispatch
  }

  fetchLocationsPage = (page: number, name: string) =>
    this.dispatch({
      type: ActionType.LOCATION_LIST_FETCH,
      payload: { page, name },
    })

  fetchLocationsSearch = (name: string) =>
    this.dispatch({
      type: ActionType.LOCATION_LIST_SEARCH,
      payload: { page: 1, name },
    })
}
