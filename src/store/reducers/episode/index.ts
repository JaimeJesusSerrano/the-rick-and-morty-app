import { combineReducers } from "redux";
import { episodeListReducer } from './EpisodeList'
import { EpisodeListStateType } from '~Store/constants/episode/List'

interface EpisodeType {
  list: EpisodeListStateType
}

export const episodeReducer = combineReducers<EpisodeType>({
  list: episodeListReducer
})
