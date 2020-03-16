import { all, call, put, takeLatest } from 'redux-saga/effects'
import { ApiResponse, get } from '~Api'
import {
  EPISODE_LIST_SUCCEEDED,
  EPISODE_LIST_FAILED,
  EPISODE_LIST_SEARCH,
  EPISODE_LIST_FETCH,
} from '~Store/constants/episodeList'

interface PayloadType {
  name: string | undefined
  page: number
}
interface GetEpisodesArgs {
  type: string
  payload: PayloadType
}
function* getEpisodes({ payload }: GetEpisodesArgs) {
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
      type: EPISODE_LIST_SUCCEEDED,
    })
  } catch (e) {
    yield put({ error: true, type: EPISODE_LIST_FAILED })
  }
}

function* episodesSaga() {
  yield all([
    takeLatest(EPISODE_LIST_SEARCH, getEpisodes),
    takeLatest(EPISODE_LIST_FETCH, getEpisodes),
  ])
}

export default episodesSaga
