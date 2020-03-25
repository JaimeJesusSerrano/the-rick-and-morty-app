import { combineReducers } from "redux";
import { episodeListReducer } from './List'
import { StateType as EpisodeListStateType } from '~Store/constants/episode/List'

interface EpisodeType {
  list: EpisodeListStateType
}

export const episodeReducer = combineReducers<EpisodeType>({
  list: episodeListReducer
})
