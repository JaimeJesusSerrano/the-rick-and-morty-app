import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components'
import {
  CardActionArea,
  CardMedia,
  Grid,
  Paper,
  CardContent,
  Card as MaterialUiCard,
} from '@material-ui/core'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import UnknownIcon from '~Assets/img/unknown.jpeg'
import { RootState } from '~Store/reducers'
import { Character } from '~Api/types'
import { deleteCharacterSelected } from '~Store/actions/character/Comparator'
import BarChartComparator from '~Screens/characters/components/BarChartComparator'

import CardContentItem from '~Screens/characters/components/CardContentItem'

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
    (characterSelected: Character) => {
      const cardContentItems = [
        { title: 'NAME', value: characterSelected.name },
        { title: 'STATUS', value: characterSelected.status },
        { title: 'SPECIES', value: characterSelected.species },
        { title: 'GENDER', value: characterSelected.gender },
        { title: 'LAST LOCATION', value: characterSelected.location.name },
      ]
      return (
        <SCard key={uuidv4()}>
          <SCardActionArea
            onClick={() => {
              dispatch(deleteCharacterSelected(characterSelected.id))
            }}
          >
            <SCardMedia>
              <SLazyLoadImage
                alt={characterSelected.name}
                height={200}
                placeholderSrc={UnknownIcon}
                src={characterSelected.image}
                threshold={500}
                width={200}
              />
            </SCardMedia>
            <SCardContent>
              {cardContentItems.map(item => {
                return (
                  <CardContentItem
                    key={uuidv4()}
                    title={item.title}
                    value={item.value}
                  />
                )
              })}
            </SCardContent>
          </SCardActionArea>
        </SCard>
      )
    }
  )

  return (
    <Container>
      <SGrid item xs={12}>
        <CardPaper>
          {fetchCharacterSelected.charactersSelected.length > 0
            ? charactersSelected
            : null}
        </CardPaper>
      </SGrid>

      <Grid item xs={12}>
        {JSON.stringify(data) !== JSON.stringify({}) ? (
          <SPaper>
            <BarChartComparator values={data} />
          </SPaper>
        ) : null}
      </Grid>
    </Container>
  )
}

const SCardActionArea = styled(CardActionArea)`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.palette.secondary.main};
`
const SGrid = styled(Grid)`
  justify-content: center;
  display: flex;
`

const SPaper = styled(Paper)`
  margin-top: 20px;
  padding: 20px;
`
const CardPaper = styled(Paper)`
  margin-top: 20px;
  padding: 20px;
  flex-direction: column;
  display: flex;
  align-items: center;
`
const SCard = styled(MaterialUiCard)`
  margin-top: 10px;
  border-radius: 20px;
  line-height: 0;
`
const SCardMedia = styled(CardMedia)`
  padding: 10px;
  justify-content: center;
`

const SLazyLoadImage = styled(LazyLoadImage)`
  border-radius: 20px;
`
const SCardContent = styled(CardContent)`
  &:last-child {
    padding: 10px;
  }
  background-color: ${({ theme }) => theme.palette.secondary.main};
  padding: 10px;
`

const Container = styled.div`
  margin-bottom: 4px;
`

export default CharactersLocker
