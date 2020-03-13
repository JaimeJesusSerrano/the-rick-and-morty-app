import {
  CHARACTER_LIST_FETCH,
  CHARACTER_LIST_SEARCH,
} from '~Store/constants/characterList'

export const fetchCharactersPage = (page: number, name: string) => {
  return {
    type: CHARACTER_LIST_FETCH,
    payload: {
      page,
      name,
    },
  }
}

export const fetchCharactersSearch = (page: number, name: string) => {
  return {
    type: CHARACTER_LIST_SEARCH,
    payload: {
      page,
      name,
    },
  }
}
