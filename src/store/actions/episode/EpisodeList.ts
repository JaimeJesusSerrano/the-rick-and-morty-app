import { Dispatch } from 'react';
import { ActionType, DispatchAction } from '~Store/constants/episode/EpisodeList'

export class EpisodeListDispatcher {
  private readonly dispatch: Dispatch<DispatchAction>;

  constructor(dispatch: Dispatch<DispatchAction>) {
    this.dispatch = dispatch;
  }

  fetchEpisodePage = (page: number, name: string) =>
    this.dispatch({ type: ActionType.EPISODE_LIST_FETCH, payload: {page, name} });

  fetchEpisodeSearch = (name: string) =>
    this.dispatch({ type: ActionType.EPISODE_LIST_SEARCH, payload: { page: 1, name } });
}
