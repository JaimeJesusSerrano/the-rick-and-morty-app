import { GridList, GridListTile } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroller'
import { useDispatch, useSelector } from 'react-redux'
import Card from './Card'
import { Character } from '../../../services/api/types'
import { RootState } from '~Store/reducers'
import { fetchCharactersPage } from '~Store/actions/characterList'
import { getCharacterListUntilPage } from '~Store/reducers/characterList'

const Container = styled.div`
  margin-bottom: 50px;
`

const StyledGridList = styled(GridList)`
  justify-content: space-around;
`

const StyledGridListTile = styled(GridListTile)`
  margin-top: 10px;
`

const LazyList = () => {
  const dispatch = useDispatch()
  const characterListState = useSelector(
    (state: RootState) => state.characterListState
  )
  const { currentPage, info, name, pages } = characterListState
  const result: [] = getCharacterListUntilPage(characterListState, currentPage)

  const [hasMoreCharactersToLoad, setHasMoreCharactersToLoad] = useState(true)

  const loadMoreCharacters = () => {
    dispatch(fetchCharactersPage(currentPage + 1, name))
    // setHasMoreCharactersToLoad(false)
  }

  const Items =
    result &&
    result.map((character: Character) => (
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
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        <StyledGridList cellHeight="auto" spacing={4}>
          {Items}
        </StyledGridList>
      </InfiniteScroll>
    </Container>
  )
}

export default LazyList
