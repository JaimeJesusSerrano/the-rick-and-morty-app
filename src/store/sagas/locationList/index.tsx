import { all, call, put, takeLatest } from 'redux-saga/effects'
import { ActionType, DispatchAction, LocationListActionType } from "~Store/constants/location/LocationList";
import { ApiResponse, get } from '~Api';

// REFACTOR FUNCTION
function* getLocationsApi(payload : LocationListActionType) {
  try {
    const { data }: ApiResponse<'location', {}> = yield call(
            get,
            'location',
            payload
          )
    return data
  } catch (error) { // Controls no internet connection
    yield put({ criticalError: true, type: ActionType.LOCATION_LIST_CONNECTION_FAILED}) // Stops loading and show no response
    throw Error(ActionType.LOCATION_LIST_CONNECTION_FAILED) // Throw error for tracing
  }
}

function* getLocations({payload} : DispatchAction) {
  const { page: currentPage, name } = payload
  const data = yield call(getLocationsApi, payload)
  if (data)
    yield put({
      payload: data, currentPage, name,
      type: ActionType.LOCATION_LIST_SUCCEEDED
    })
  else 
    yield put({ error: true, type: ActionType.LOCATION_LIST_FAILED})
}

// OLD FUNCTION
// function* getLocations({ payload }: DispatchAction) {
//   const { page: currentPage, name } = payload
//   try {
//     const { data }: ApiResponse<'location', {}> = yield call(
//       get,
//       'location',
//       payload
//     )

//     yield put({
//       payload: data, currentPage, name,
//       type: ActionType.LOCATION_LIST_SUCCEEDED
//     })

//   } catch (e) {
//     yield put({ error: true, type: ActionType.LOCATION_LIST_FAILED})
//   }
// }

function* locationsSaga() {
  yield all([
    takeLatest(ActionType.LOCATION_LIST_SEARCH, getLocations),
    takeLatest(ActionType.LOCATION_LIST_FETCH, getLocations),
  ])
}

export default locationsSaga