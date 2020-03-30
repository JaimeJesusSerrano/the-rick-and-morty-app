import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { CardActionArea, CardMedia, Container } from '@material-ui/core'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { CharacterComparableInfo } from './Card'
import UnknownIcon from '~Assets/img/unknown.jpeg'
import { RootState } from '~Store/reducers'
import { Character } from '~Api/types'
import { deleteCharacterSelected } from '~Store/actions/character/Comparator'

type CharactersSelected =
  | [CharacterComparableInfo, CharacterComparableInfo]
  | [CharacterComparableInfo]
  | []

const rickSelected: CharacterComparableInfo = {
  name: 'rick',
  gender: 'male',
  species: 'human',
  status: 'alive',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
}
const mortySelected: CharacterComparableInfo = {
  name: 'morty',
  gender: 'male',
  species: 'human',
  status: 'dead',
  image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
}

const testCharacters: CharactersSelected = [rickSelected, mortySelected]

const CharactersLocker = (): JSX.Element => {
  const fetchCharacterSelected = useSelector(
    (state: RootState) => state.character.comparator
  )
  const dispatch = useDispatch()

  const charactersSelected = fetchCharacterSelected.charactersSelected.map(
    (characterSelected: Character) => (
      <div key={uuidv4()}>
        <CardActionArea
          onClick={() => {
            dispatch(deleteCharacterSelected(characterSelected.id))
          }}
        >
          <CardMedia>
            <LazyLoadImage
              alt={characterSelected.name}
              height={200}
              placeholderSrc={UnknownIcon}
              src={characterSelected.image}
              threshold={500}
              width={200}
            />
          </CardMedia>
        </CardActionArea>
      </div>
    )
  )
  return <Container>{charactersSelected}</Container>
}

export default CharactersLocker
