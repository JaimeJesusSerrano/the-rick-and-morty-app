import React from 'react'
import { CardActionArea, CardMedia, Container } from '@material-ui/core'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { CharacterComparableInfo } from './Card'
import UnknownIcon from '~Assets/img/unknown.jpeg'

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

// list to test types and logic
const testCharacters: CharactersSelected = [rickSelected, mortySelected]

const CharactersLocker = (): JSX.Element => {
  const fetchCharacterSelected: CharactersSelected = testCharacters
  const charactersSelected = fetchCharacterSelected.map(
    (characterSelected: CharacterComparableInfo) => (
      <div key={characterSelected.name}>
        <CardActionArea>
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
