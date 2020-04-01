import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components'
import {
  CardActionArea,
  CardMedia,
  Container,
  Grid,
  Paper,
  CardContent,
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

const CharactersLocker = ({ data }: CharactersLockerProps): JSX.Element => {
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
            <CardContent>
              {`Name : ${characterSelected.name} `}
              {`Species : ${characterSelected.species} `}
              {`Gender : ${characterSelected.gender} `}
              {`Status : ${characterSelected.status} `}
              {`Last location : ${characterSelected.location.name} `}
            </CardContent>
          </CardMedia>
        </CardActionArea>
      </div>
    )
  )
  return (
    <Container>
      <Grid item xs={12}>
        {fetchCharacterSelected.charactersSelected.length > 0 ? (
          <SPaper>{charactersSelected}</SPaper>
        ) : null}
      </Grid>

      <Grid item xs={12}>
        {fetchCharacterSelected.charactersSelected.length > 1 &&
        JSON.stringify(data) !== JSON.stringify({}) ? (
          <SPaper>
            <BarChartComparator values={data} />
          </SPaper>
        ) : null}
      </Grid>
    </Container>
  )
}

const SPaper = styled(Paper)`
  margin-top: 20px;
  padding: 2px;
  display: flex;
  flex-direction: column;
`

export default CharactersLocker
