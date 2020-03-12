import { all, call, put, takeLatest } from 'redux-saga/effects'
import { ApiResponse, get } from '~Api'
import {
  CHARACTER_LIST_SUCCEEDED,
  CHARACTER_LIST_FAILED,
} from '~Store/constants/characterList'

interface PayloadType {
  name: string | undefined
  page: number
}
interface GetCharactersArgs {
  type: string
  payload: PayloadType
}
function* getCharacters({ payload }: GetCharactersArgs) {
  try {
    const { page, name } = payload
    const { data }: ApiResponse<'character', {}> = yield call(
      get,
      'character',
      payload
    )

    yield put({
      currentPage: page,
      name,
      payload: data,
      type: CHARACTER_LIST_SUCCEEDED,
    })
  } catch (e) {
    yield put({ type: CHARACTER_LIST_FAILED, message: e.message })
  }
}

function* charactersSaga() {
  yield all([
    takeLatest('CHARACTER_LIST_SEARCH', getCharacters),
    takeLatest('CHARACTER_LIST_FETCH', getCharacters),
  ])
}

export default charactersSaga
