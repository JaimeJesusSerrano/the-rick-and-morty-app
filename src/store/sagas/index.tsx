import { all } from 'redux-saga/effects'

import charactersSaga from '~Store/sagas/characterList'
import locationsSaga from '~Store/sagas/locationList'
import episodesSaga from '~Store/sagas/episodeList'

export default function* rootSaga() {
  yield all([
    charactersSaga(),
    locationsSaga(),
    episodesSaga(),
  ])
}

// TODO yield all files
