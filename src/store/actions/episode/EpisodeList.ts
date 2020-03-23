import {
  EPISODE_LIST_FETCH,
  EPISODE_LIST_SEARCH,
} from '~Store/constants/episodeList'

export const fetchEpisodesPage = (page: number, name: string) => {
  return {
    type: EPISODE_LIST_FETCH,
    payload: {
      page,
      name,
    },
  }
}

export const fetchEpisodesSearch = (page: number, name: string) => {
  return {
    type: EPISODE_LIST_SEARCH,
    payload: {
      page,
      name,
    },
  }
}
