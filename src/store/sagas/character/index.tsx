import { all, takeLatest } from 'redux-saga/effects'
import { ActionType } from '~Store/constants/character/List'
import { getCharacters } from '~Store/sagas/character/List'

function* charactersSaga() {
  yield all([
    takeLatest(ActionType.CHARACTER_LIST_SEARCH, getCharacters),
    takeLatest(ActionType.CHARACTER_LIST_FETCH, getCharacters),
  ])
}

export default charactersSaga
