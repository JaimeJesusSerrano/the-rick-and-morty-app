import { ActionType } from '~Store/constants/episode/List'

export const fetchEpisodesPage = (page: number, name: string) => {
  return {
    type: ActionType.EPISODE_LIST_FETCH,
    payload: {
      page,
      name,
    },
  }
}

export const fetchEpisodesSearch = (page: number, name: string) => {
  return {
    type: ActionType.EPISODE_LIST_SEARCH,
    payload: {
      page,
      name,
    },
  }
}
