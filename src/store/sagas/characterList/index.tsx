import { all, call, put, takeLatest } from 'redux-saga/effects'
import { ApiResponse, get } from '~Api'
import { ActionType } from '~Store/constants/character/List'

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
      type: ActionType.CHARACTER_LIST_SUCCEEDED,
    })
  } catch (e) {
    yield put({ error: true, type: ActionType.CHARACTER_LIST_FAILED })
  }
}

function* charactersSaga() {
  yield all([
    takeLatest(ActionType.CHARACTER_LIST_SEARCH, getCharacters),
    takeLatest(ActionType.CHARACTER_LIST_FETCH, getCharacters),
  ])
}

export default charactersSaga
