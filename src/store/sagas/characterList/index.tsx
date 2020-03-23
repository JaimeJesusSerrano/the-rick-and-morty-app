import { all, call, put, takeLatest } from 'redux-saga/effects'
import { ApiResponse, get } from '~Api'
import { ActionType, DispatchType } from '~Store/constants/character/List'

function* getCharacters({ payload }: DispatchType) {
  try {
    const { page, name } = payload
    const { data }: ApiResponse<'character', {}> = yield call(
      get,
      'character',
      payload
    )

    yield put({
      currentPage: page,
      name,
      payload: data,
      type: ActionType.CHARACTER_LIST_SUCCEEDED,
    })
  } catch (error) {
    if (error.response) {
      // Response but no results
      yield put({ error: true, type: ActionType.CHARACTER_LIST_FAILED })
    } else {
      // No response from server
      yield put({
        criticalError: true,
        type: ActionType.CHARACTER_LIST_CONNECTION_FAILED,
      })
    }
  }
}

function* charactersSaga() {
  yield all([
    takeLatest(ActionType.CHARACTER_LIST_SEARCH, getCharacters),
    takeLatest(ActionType.CHARACTER_LIST_FETCH, getCharacters),
  ])
}

export default charactersSaga
