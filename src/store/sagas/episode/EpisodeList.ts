// REFACTOR FUNCTION
import { call, put } from 'redux-saga/effects'
import { get } from '~Api'
import {
  ActionType,
  DispatchAction,
} from '~Store/constants/episode/List'

export function* getEpisode({ payload }: DispatchAction) {
  const { page: currentPage, name } = payload
  try {
    const { data } = yield call(get, 'episode', payload)
    yield put({
      payload: data,
      currentPage,
      name,
      type: ActionType.EPISODE_LIST_SUCCEEDED,
    })
  } catch (error) {
    if (error.response) {
      // Response but no results
      yield put({ error: true, type: ActionType.EPISODE_LIST_FAILED })
    } else {
      // No response from server
      yield put({
        criticalError: true,
        type: ActionType.EPISODE_LIST_CONNECTION_FAILED,
      })
    }
  }
}
