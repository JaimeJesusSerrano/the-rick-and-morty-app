import {Grid, GridList, GridListTile} from '@material-ui/core'
import React, { useState } from 'react'
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroller'
import { useDispatch, useSelector } from 'react-redux'
import Card from './Card'
import { Character } from '~Api/types'
import { RootState } from '~Store/reducers'
import { fetchCharactersPage } from '~Store/actions/character/List'
import { getCharacterList } from '~Store/reducers/character/List'
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
  const characterListState = useSelector(
    (state: RootState) => state.character.list
  )
  const { currentPage, loading, name, totalPages } = characterListState
  const characters: Character[] = getCharacterList(characterListState)

  const [hasMoreCharactersToLoad, setHasMoreCharactersToLoad] = useState(true)

  const loadMoreCharacters = () => {
    const newPage = currentPage + 1
    if (newPage > totalPages) {
      setHasMoreCharactersToLoad(false)
    } else if (!loading && hasMoreCharactersToLoad) {
      dispatch(fetchCharactersPage(newPage, name))
    }
  }

  if (characters && characters.length) {
    const Items =
      characters.map((character: Character) => (
        <StyledGridListTile
          key={character.id}
          cols={1}
          rows={1}
          style={{ width: 200 }}
        >
          <Card character={character} />
        </StyledGridListTile>
      ))

    return (
      <Container>
        <InfiniteScroll
          pageStart={1}
          loadMore={loadMoreCharacters}
          hasMore={hasMoreCharactersToLoad}
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
