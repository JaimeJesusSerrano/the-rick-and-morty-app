import { all, takeLatest } from 'redux-saga/effects'
import { ActionType } from '~Store/constants/episode/List'
import { getEpisode } from '~Store/sagas/episode/EpisodeList'

function* episodesSaga() {
  yield all([
    takeLatest(ActionType.EPISODE_LIST_SEARCH, getEpisode),
    takeLatest(ActionType.EPISODE_LIST_FETCH, getEpisode),
  ])
}

export default episodesSaga
