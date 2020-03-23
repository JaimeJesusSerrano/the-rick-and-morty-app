import {Grid, GridList, GridListTile} from '@material-ui/core'
import React, { useState } from 'react'
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroller'
import { useDispatch, useSelector } from 'react-redux'
import Card from './Card'
import { Episode } from '../../../services/api/types'
import { RootState } from '~Store/reducers'
import { fetchEpisodesPage } from '~Store/actions/episode/EpisodeList'
import { getEpisodeList } from '~Store/reducers/episode/EpisodeList'
import Loader from '~Components/Loader'

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
  const episodeListState = useSelector(
    (state: RootState) => state.episodeListState
  )
  const { currentPage, loading, name, totalPages } = episodeListState
  const episodes: Episode[] = getEpisodeList(episodeListState)

  const [hasMoreEpisodesToLoad, setHasMoreEpisodesToLoad] = useState(true)

  const loadMoreCharacters = () => {
    const newPage = currentPage + 1
    if (newPage > totalPages) {
      setHasMoreEpisodesToLoad(false)
    } else if (!loading && hasMoreEpisodesToLoad) {
      dispatch(fetchEpisodesPage(newPage, name))
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
          loadMore={loadMoreCharacters}
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

  if (!loading && totalPages === 0) {
    return (
      <Container>
        There are not characters with this name
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
