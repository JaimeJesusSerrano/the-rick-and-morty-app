import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  Card as MaterialUiCard,
  CardContent,
  CardActionArea,
  CardActions,
  Button,
} from '@material-ui/core'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import { Character } from '~Api/types'
import UnknownIcon from '~Assets/img/unknown.jpeg'
import CardContentItem from '~Screens/characters/components/CardContentItem'
import { deleteCharacterSelected, sendCharacterSelected } from '~Store/actions/character/Comparator'
import { RootState } from '~Store/reducers'
import { isSelected as isCardSelected } from '~Store/reducers/character/Comparator'

export interface CardProps {
  character: Character
  textWhenNoSelected: string
  textWhenSelected: string
}

const Card = ({
  character,
  textWhenNoSelected,
  textWhenSelected,
}: CardProps) => {
  const {
    id,
    gender,
    image,
    location,
    name,
    origin,
    species,
    status,
  } = character

  const dispatch = useDispatch()
  const comparatorData = useSelector(
    (state: RootState) => state.character.comparator
  )
  const isSelected: boolean = isCardSelected(comparatorData, id)
  const [isActionAreaOpened, setActionAreaOpened] = useState(false)

  const ActionArea = () => {
    return (
      <SCardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            if (isSelected) {
              dispatch(deleteCharacterSelected(id))
            } else {
              dispatch(sendCharacterSelected(character))
            }
          }}
        >
          {isSelected && textWhenSelected}
          {!isSelected && textWhenNoSelected}
        </Button>
      </SCardActions>
    )
  }

  const cardContentItems = [
    { title: 'NAME', value: name },
    { title: 'STATUS', value: status },
    { title: 'SPECIES', value: species },
    { title: 'GENDER', value: gender },
    { title: 'ORIGIN', value: origin.name },
    { title: 'LAST LOCATION', value: location.name },
  ]

  return (
    <SCard>
      {isActionAreaOpened && ActionArea()}
      <CardActionArea
        onClick={() => {
          setActionAreaOpened(!isActionAreaOpened)
        }}
      >
        <LazyLoadImage
          alt={name}
          effect="blur"
          height={200}
          placeholderSrc={UnknownIcon}
          src={image}
          threshold={500}
          width={200}
        />
      </CardActionArea>
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
    </SCard>
  )
}

const SCard = styled(MaterialUiCard)`
  border-radius: 20px;
  line-height: 0;
`

const SCardActions = styled(CardActions)`
  background-color: ${({ theme }) => theme.palette.secondary.main};
`

const SCardContent = styled(CardContent)`
  &:last-child {
    padding: 10px;
  }
  background-color: ${({ theme }) => theme.palette.secondary.main};
  padding: 10px;
`

export default Card
