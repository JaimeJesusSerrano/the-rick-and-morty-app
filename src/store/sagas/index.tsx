import { all } from 'redux-saga/effects'

import charactersSaga from '~Store/sagas/characterList'
import locationsSaga from '~Store/sagas/locationList'

export default function* rootSaga() {
  yield all([
    charactersSaga(),
    locationsSaga(),
  ])
}

// TODO yield all files
