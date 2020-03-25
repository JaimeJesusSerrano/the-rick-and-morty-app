import { Episode } from '~Api/types'
import { ActionType, EpisodeListActionType, EpisodeListStateType } from '~Store/constants/episode/List'

const initialState: EpisodeListStateType = {
  currentPage: 0,
  error: false,
  criticalError: false,
  loading: false,
  name: '',
  pages: {},
  totalPages: 0,
}

export const episodeListReducer = (
  state = initialState,
  action: EpisodeListActionType
): EpisodeListStateType => {
  const { type, payload, currentPage, name } = action
  switch (type) {
    case ActionType.EPISODE_LIST_FAILED:
      return {
        ...initialState,
        error: action.error,
        loading: false,
      }
    case ActionType.EPISODE_LIST_CONNECTION_FAILED:
      return {
        ...initialState,
        criticalError: action.criticalError,
        loading: false,
      }
    case ActionType.EPISODE_LIST_FETCH:
      return { ...state, loading: true }
    case ActionType.EPISODE_LIST_SEARCH:
      return { ...initialState, loading: true }
    case ActionType.EPISODE_LIST_SUCCEEDED:
      return {
        ...state,
        currentPage,
        loading: false,
        name,
        pages: {
          ...state.pages,
          [currentPage as number]: payload.results,
        },
        totalPages: payload.info.pages,
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
