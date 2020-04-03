import React, { useState } from 'react'
import styled from 'styled-components'
import { Paper } from '@material-ui/core'
// Images import
import CharacterImg from '~Assets/img/characters.jpg'
import EpisodeImg from '~Assets/img/episodes.jpg'
import LocationImg from '~Assets/img/locations.jpg'


interface PaperProps {
  type?: PaperCardType
}

export enum PaperCardType {
  Character = "Characters",
  Episode = "Episodes",
  Location = "Locations"
}

const StyledPaper = styled(Paper)`
  cursor: pointer;
  position: relative;
  display: flex;
  margin: 5px;
  min-height: 250px;
  h1 {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    bottom: 0;
    width: 100%;
    text-align: center;
    color: #2f4052;
    text-shadow: 1px 3px 0px #00ff2c;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #00ff2ca3;
    font-size: 2.2em;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 250px;
  }
`

export const PaperCard = ({
  type = PaperCardType.Character
}: PaperProps) => {

  let PaperImage = CharacterImg
  const [elevation, setElevation] = useState(3);

  const onMouseOver = () => { setElevation(24) }
  const onMouseOut = () => { setElevation(3) }
  const onFocus = () => {} // Required by typescript rule
  const onBlur = () => {} // Required by typescript rule

  switch (type) {
    case PaperCardType.Character:
      PaperImage = CharacterImg
      break;
    case PaperCardType.Episode:
      PaperImage = EpisodeImg
      break;
    case PaperCardType.Location:
      PaperImage = LocationImg
      break;
    default:
      PaperImage = CharacterImg
      break;
  }

  return (
    <StyledPaper 
    onMouseOver={onMouseOver} onMouseOut={onMouseOut} onBlur={onBlur} onFocus={onFocus}
    elevation={elevation}>
      <h1>{type}</h1>
      <img src={PaperImage} alt={type}/>
    </StyledPaper>
  )
}
