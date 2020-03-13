import { all, call, put, takeLatest } from 'redux-saga/effects'
import { ApiResponse, get } from '~Api'
import {
  CHARACTER_LIST_SUCCEEDED,
  CHARACTER_LIST_FAILED,
  CHARACTER_LIST_SEARCH,
  CHARACTER_LIST_FETCH,
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
    yield put({ error: true, type: CHARACTER_LIST_FAILED })
  }
}

function* charactersSaga() {
  yield all([
    takeLatest(CHARACTER_LIST_SEARCH, getCharacters),
    takeLatest(CHARACTER_LIST_FETCH, getCharacters),
  ])
}

export default charactersSaga
