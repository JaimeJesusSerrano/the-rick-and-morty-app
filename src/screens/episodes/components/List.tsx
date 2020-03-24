import {Grid, GridList, GridListTile} from '@material-ui/core'
import React, { useState } from 'react'
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroller'
import { useDispatch, useSelector } from 'react-redux'
import Card from './Card'
import { Episode } from '../../../services/api/types'
import { RootState } from '~Store/reducers'
import { getEpisodeList } from '~Store/reducers/episode/EpisodeList'
import Loader from '~Components/Loader'
import NoResponseImg from '~Assets/img/noresponse.jpg'
import { EpisodeListDispatcher } from '~Store/actions/episode/EpisodeList'

const Container = styled.div`
  margin-bottom: 50px;
`

const StyledGridList = styled(GridList)`
  justify-content: space-around;
`

const StyledGridListTile = styled(GridListTile)`
  margin-top: 10px;
`

const List = () => {
  const dispatch = useDispatch()
  const episodeDispatcher = new EpisodeListDispatcher(dispatch)
  const episodeListState = useSelector(
    (state: RootState) => state.episode.list
  )
  const { currentPage, loading, name, totalPages, criticalError } = episodeListState
  const episodes: Episode[] = getEpisodeList(episodeListState)

  const [hasMoreEpisodesToLoad, setHasMoreEpisodesToLoad] = useState(true)

  const loadMoreEpisodes = () => {
    const newPage = currentPage as number + 1
    if (newPage > totalPages) {
      setHasMoreEpisodesToLoad(false)
    } else if (!loading && hasMoreEpisodesToLoad) {
      episodeDispatcher.fetchEpisodePage(newPage, name as string)
    }
  }

  if (episodes && episodes.length) {
    const Items =
      episodes.map((episode: Episode) => (
        <StyledGridListTile
          key={episode.id}
          cols={1}
          rows={1}
          style={{ width: 200 }}
        >
          <Card episode={episode} />
        </StyledGridListTile>
      ))

    return (
      <Container>
        <InfiniteScroll
          pageStart={1}
          loadMore={loadMoreEpisodes}
          hasMore={hasMoreEpisodesToLoad}
          loader={
            <CustomLoader key={0}/>
          }
        >
          <StyledGridList cellHeight="auto" spacing={4}>
            {Items}
          </StyledGridList>
        </InfiniteScroll>
      </Container>
    )
  }

  if (!loading && !criticalError && totalPages === 0) {
    return (
      <Container>
        There are not characters with this name
      </Container>
    )
  }

  if (!loading && criticalError && totalPages === 0) {
    return (
      <Container>
        <img src={NoResponseImg} alt="No Response from Server"
             style={{width: '100%', marginTop: 10}}/>
      </Container>
    )
  }

  return (
    <Container>
      <CustomLoader />
    </Container>
  )
}

const CustomLoader = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Loader height={125} width={125} />
    </Grid>
  )
}

export default List
