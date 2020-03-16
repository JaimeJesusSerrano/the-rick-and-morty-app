import {
  EPISODE_LIST_FAILED,
  EPISODE_LIST_FETCH,
  EPISODE_LIST_SEARCH,
  EPISODE_LIST_SUCCEEDED,
} from '~Store/constants/episodeList'

import { Episode } from '../../../services/api/types'

type Dictionary = { [index: number]: {} }

interface EpisodeListStateType {
  currentPage: number
  error: boolean
  loading: boolean
  name: string
  pages: Dictionary // TODO add specific type
  totalPages: number
}

const initialState: EpisodeListStateType = {
  currentPage: 0,
  error: false,
  loading: false,
  name: '',
  pages: {},
  totalPages: 0,
}

interface ReduxActionType {
  currentPage: number
  error?: boolean
  name: string
  pages: {}
  payload?: any
  type: string
}

export const episodeListReducer = (
  state: EpisodeListStateType = initialState,
  action: ReduxActionType
) => {
  switch (action.type) {
    case EPISODE_LIST_FAILED:
      return {
        ...initialState,
        error: action.error,
        loading: false,
      }
    case EPISODE_LIST_FETCH:
      return { ...state, loading: true }
    case EPISODE_LIST_SEARCH:
      return { ...initialState, loading: true }
    case EPISODE_LIST_SUCCEEDED:
      return {
        ...state,
        currentPage: action.currentPage,
        loading: false,
        name: action.name,
        pages: {
          ...state.pages,
          [action.currentPage]: action.payload.results,
        },
        totalPages: action.payload.info.pages,
      }
    default:
      return initialState
  }
}

export const getEpisodeList = (state: EpisodeListStateType) => {
  let episodes: Episode[] = []
  const emptyEpisodeArray: Episode[] = []

  Object.entries(state.pages).map(([key, value]) => {
    if (Number(key) >= 1 && Number(key)) {
      const newEpisodes: Episode[] = value
        ? Object.values(value)
        : emptyEpisodeArray
      episodes = [...episodes, ...newEpisodes]
    }
    return episodes
  })

  return episodes
}
