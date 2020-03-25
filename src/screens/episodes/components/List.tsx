import { GridListTile } from '@material-ui/core'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import Card from './Card'
import { Episode } from '../../../services/api/types'
import { RootState } from '~Store/reducers'
import { getEpisodeList } from '~Store/reducers/episode/EpisodeList'
import ListLoader from '~Components/ListLoader'
import NoResponseImg from '~Assets/img/noresponse.jpg'
import { EpisodeListDispatcher } from '~Store/actions/episode/List'
import InfiniteScrollList from '~Components/InfiniteScrollList'

const List = () => {
  const dispatch = useDispatch()
  const episodeDispatcher = new EpisodeListDispatcher(dispatch)
  const episodeListState = useSelector((state: RootState) => state.episode.list)
  const {
    currentPage,
    loading,
    name,
    totalPages,
    criticalError,
  } = episodeListState
  const episodes: Episode[] = getEpisodeList(episodeListState)

  const [hasMoreEpisodesToLoad, setHasMoreEpisodesToLoad] = useState(true)

  const loadMoreEpisodes = () => {
    const newPage = (currentPage as number) + 1
    if (newPage > totalPages) {
      setHasMoreEpisodesToLoad(false)
    } else if (!loading && hasMoreEpisodesToLoad) {
      episodeDispatcher.fetchEpisodePage(newPage, name as string)
    }
  }

  if(loading && !episodes.length)
    return(
      <Container>
        <ListLoader/>
      </Container>
    )
  if(criticalError){
    return (
      <Container>
        <img
          src={NoResponseImg}
          alt="No response from Server"
          style={{width: '100%', marginTop: 10}}
          />
      </Container>
    )
  }

  if(!loading && totalPages === 0){
    return <Container> There are not episodes with this name</Container>
  }

  if (episodes && episodes.length){
    const Items = episodes.map(episode =>(
      <StyledGridListTile
      key={episode.id}
      cols={1}
      rows={1}
      style={{width: 200}}
      >
      <Card episode={episode} />
    </StyledGridListTile>

    ))
    return(
      <InfiniteScrollList
        hasMore={hasMoreEpisodesToLoad}
        loadMore={loadMoreEpisodes}
      >
        {Items}
      </InfiniteScrollList>
    )
  }

  return null
}

const Container = styled.div`
  margin-bottom: 50px;
`

const StyledGridListTile = styled(GridListTile)`
  margin-top: 10px;
`

export default List
