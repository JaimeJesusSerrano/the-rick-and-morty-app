import { all, call, put, takeLatest } from 'redux-saga/effects'
import { ActionType, DispatchAction } from "~Store/constants/locationList";
import { ApiResponse, get } from '~Api';

function* getLocations({ payload }: DispatchAction) {
  try {
    const { page, name } = payload
    const { data }: ApiResponse<'location', {}> = yield call(
      get,
      'location',
      payload
    )

    yield put({
      currentPage: page,
      name,
      payload: data,
      type: ActionType.LOCATION_LIST_SUCCEEDED
    })

  } catch (e) {
    yield put({ error: true, type: ActionType.LOCATION_LIST_FAILED})
  }
}

function* locationsSaga() {
  yield all([
    takeLatest(ActionType.LOCATION_LIST_SEARCH, getLocations),
    takeLatest(ActionType.LOCATION_LIST_FETCH, getLocations),
  ])
}

export default locationsSaga