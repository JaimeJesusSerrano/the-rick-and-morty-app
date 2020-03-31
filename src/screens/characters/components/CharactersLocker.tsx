import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import {
  CardActionArea,
  CardMedia,
  Container,
} from '@material-ui/core'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import UnknownIcon from '~Assets/img/unknown.jpeg'
import { RootState } from '~Store/reducers'
import { Character } from '~Api/types'
import { deleteCharacterSelected } from '~Store/actions/character/Comparator'
import BarChartComparator from '~Screens/characters/components/BarChartComparator'

type DataValues = {
  name: string
  similarity: number
}

export type DataComparator = {
  characterCompared: string
  data: DataValues[]
}

interface CharactersLockerProps {
  data: DataComparator
}

const CharactersLocker = ({data}:CharactersLockerProps):JSX.Element => {
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
  return (
    <Container>
      {charactersSelected}
      {JSON.stringify(data)!==JSON.stringify({})?<BarChartComparator values={data}/>:null}
    </Container>
  )
}

export default CharactersLocker
