import { Episode } from '~Api/types'
import {
  ActionType,
  ResponseType,
  StateType,
} from '~Store/constants/episode/List'

const initialState: StateType ={
  criticalError: false,
  currentPage: 0,
  error: false,
  loading: false,
  name: '',
  pages: {},
  totalPages: 0,
}

export const listReducer = (
  state: StateType = initialState,
  action: ResponseType
): StateType => {
  switch (action.type) {
    case ActionType.EPISODE_LIST_CONNECTION_FAILED:
      return {
        ...initialState,
        criticalError: action.criticalError,
        loading: false
      }
    case ActionType.EPISODE_LIST_FAILED:
      return {
        ...initialState,
        error: action.error,
        loading: false,
      }
    case ActionType.EPISODE_LIST_FETCH:
      return { ...state, loading: true }
    case ActionType.EPISODE_LIST_SEARCH:
      return { ...initialState, loading: true }
    case ActionType.EPISODE_LIST_SUCCEEDED:
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

export const getEpisodeList = (state: StateType) => {
  let episodes: Episode[] = []
  const emptyEpisodeArray: Episode[] = []

  Object.entries(state.pages).map(([key, value])=>{
    if(Number(key) >= 1 && Number(key)) {
      const newEpisodes: Episode[] = value
        ? Object.values(value)
        : emptyEpisodeArray
      episodes = [...episodes, ...newEpisodes]
    }
      return episodes
    })

    return episodes
}
