import { all } from 'redux-saga/effects'

import charactersSaga from '~Store/sagas/character'
import episodesSaga  from '~Store/sagas/episode'
import locationsSaga from '~Store/sagas/locationList'

export default function* rootSaga() {
  yield all([
    charactersSaga(),
    episodesSaga(),
    locationsSaga(),
  ])
}
