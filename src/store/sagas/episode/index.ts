import { all,takeLatest } from 'redux-saga/effects'
import { ActionType } from "~Store/constants/episode/EpisodeList"
import { getEpisode } from '~Store/sagas/episode/EpisodeList'


export function* episodesSaga() {
  yield all([
    takeLatest(ActionType.EPISODE_LIST_SEARCH, getEpisode),
    takeLatest(ActionType.EPISODE_LIST_FETCH, getEpisode),
  ])
}

export default episodesSaga
