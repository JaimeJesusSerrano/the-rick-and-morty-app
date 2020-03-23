import { all, call, put, takeLatest } from 'redux-saga/effects'
import { ActionType, DispatchAction } from "~Store/constants/location/LocationList";
import { get } from '~Api';

// REFACTOR FUNCTION
function* getLocations({payload} : DispatchAction) {
  const { page: currentPage, name } = payload
  try {
    const { data } = yield call(get, 'location',payload)
    yield put({
      payload: data, currentPage, name,
      type: ActionType.LOCATION_LIST_SUCCEEDED
    })
  } catch (error) {
    if (error.response) { // Response but no results
      yield put({ error: true, type: ActionType.LOCATION_LIST_FAILED})
    } else { // No response from server
      yield put({ criticalError: true, type: ActionType.LOCATION_LIST_CONNECTION_FAILED})
    }
  }
}

function* locationsSaga() {
  yield all([
    takeLatest(ActionType.LOCATION_LIST_SEARCH, getLocations),
    takeLatest(ActionType.LOCATION_LIST_FETCH, getLocations),
  ])
}

export default locationsSaga