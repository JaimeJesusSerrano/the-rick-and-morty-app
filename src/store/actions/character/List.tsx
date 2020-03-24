import { ActionType } from '~Store/constants/character/List'

export const fetchCharactersPage = (page: number, name: string) => {
  return {
    type: ActionType.CHARACTER_LIST_FETCH,
    payload: {
      page,
      name,
    },
  }
}

export const fetchCharactersSearch = (page: number, name: string) => {
  return {
    type: ActionType.CHARACTER_LIST_SEARCH,
    payload: {
      page,
      name,
    },
  }
}
