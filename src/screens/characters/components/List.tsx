import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { GridListTile } from '@material-ui/core'
import { Character } from '~Api/types'
import NoResponseImg from '~Assets/img/noresponse.jpg'
import InfiniteScrollList from '~Components/InfiniteScrollList'
import ListLoader from '~Components/ListLoader'
import { fetchCharactersPage } from '~Store/actions/character/List'
import { RootState } from '~Store/reducers'
import { getCharacterList } from '~Store/reducers/character/List'
import Card from '~Screens/characters/components/Card'

const List = () => {
  const dispatch = useDispatch()
  const characterListState = useSelector(
    (state: RootState) => state.character.list
  )
  const {
    criticalError,
    currentPage,
    loading,
    name,
    totalPages,
  } = characterListState
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

  if (loading && !characters.length) {
    return (
      <Container>
        <ListLoader />
      </Container>
    )
  }

  if (criticalError) {
    return (
      <Container>
        <img
          src={NoResponseImg}
          alt="No Response from Server"
          style={{ width: '100%', marginTop: 10 }}
        />
      </Container>
    )
  }

  if (!loading && totalPages === 0) {
    return <Container>There are not characters with this name</Container>
  }

  if (characters && characters.length) {
    const Items = characters.map(character => (
      <StyledGridListTile
        key={character.id}
        cols={1}
        rows={1}
        style={{ width: 200 }}
      >
        <Card
          character={character}
          textWhenNoSelected="Add it to comparator"
          textWhenSelected="Remove it from comparator"
        />
      </StyledGridListTile>
    ))

    return (
      <InfiniteScrollList
        hasMore={hasMoreCharactersToLoad}
        loadMore={loadMoreCharacters}
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
