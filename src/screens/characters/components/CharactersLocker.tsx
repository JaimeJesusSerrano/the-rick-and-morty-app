import React from 'react'
import {
  Card as MaterialUiCard,
  CardMedia,
  Container,
  ExpansionPanelDetails,
} from '@material-ui/core'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import styled from 'styled-components'
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
  // TODO: get characters selected using redux.
  const fetchCharacterSelected: CharactersSelected = testCharacters
  const getCharactersSelected = fetchCharacterSelected.map(
    (characterSelected: CharacterComparableInfo) => (
      <div key={characterSelected.name}>
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
      </div>
    )
  )

  return <Container>{getCharactersSelected}</Container>
}

export default CharactersLocker
