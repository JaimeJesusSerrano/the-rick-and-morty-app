import { call, put } from 'redux-saga/effects'
import { ApiResponse, get } from '~Api'
import { ActionType, DispatchType } from '~Store/constants/episode/List'

export function* getEpisode({ payload }: DispatchType) {
  try {
    const { page, name } = payload
    const { data }: ApiResponse<'episode', {}> = yield call(
      get,
      'episode',
      payload
    )
    yield put({
      currentPage: page,
      name,
      payload: data,
      type: ActionType.EPISODE_LIST_SUCCEEDED,
    })
  } catch(error) {
    if (error.response) {
      yield put( {error: true, type: ActionType.EPISODE_LIST_FAILED})
    } else {
      yield put({
        criticalError: true,
        type: ActionType.EPISODE_LIST_CONNECTION_FAILED
      })
    }
  }
}
