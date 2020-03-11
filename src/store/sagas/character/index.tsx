import { all, call, put, takeLatest } from 'redux-saga/effects'
import { ApiResponse, get } from '~Api'
import {
  FETCH_CHARACTERS_SUCCEEDED,
  FETCH_CHARACTERS_FAILED,
} from '~Store/constants/characters'

interface GetCharactersArgs {
  type: string
  payload: {}
}
function* getCharacters({ payload = {} }: GetCharactersArgs) {
  try {
    const { data }: ApiResponse<'character', {}> = yield call(
      get,
      'character',
      payload
    )
    yield put({
      type: FETCH_CHARACTERS_SUCCEEDED,
      payload: data,
    })
  } catch (e) {
    yield put({ type: FETCH_CHARACTERS_FAILED, message: e.message })
  }
}

function* charactersSaga() {
  yield all([takeLatest('FETCH_CHARACTERS_REQUESTED', getCharacters)])
}

export default charactersSaga
