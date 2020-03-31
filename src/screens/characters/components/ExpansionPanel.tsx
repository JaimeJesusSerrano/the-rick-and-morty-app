import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { ExpansionPanelActions, ExpansionPanelDetails } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import Divider from '@material-ui/core/Divider'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import CharactersLocker from '~Screens/characters/components/CharactersLocker'
import { RootState } from '~Store/reducers'
import { Character } from '~Api/types'

type DataValues = {
  name: string
  similarity: number
}

export type DataComparator = {
  characterCompared: string
  data: DataValues[]
}

const ExpansionPanelComparator = (): JSX.Element => {
  const [open, setOpen] = useState(false)
  const [chartData, setChartData] = useState({} as DataComparator)

  const fetchCharacterSelected = useSelector(
    (state: RootState) => state.character.comparator
  )

  type CompareType = number | string
  const { charactersSelected } = fetchCharacterSelected

  const distance = (compare: CompareType, compared: CompareType): number =>
    compare === compared ? 1 : 0

  const createData = (characters: Character[]): DataComparator => {
    const compareCharacter = characters[0]
    const charactersBeingCompared = characters.slice(1)
    const dataValues = charactersBeingCompared.map((character: Character) => ({
      name: character.name,
      similarity:
        distance(compareCharacter.name, character.name) +
        distance(compareCharacter.location.name, character.location.name) +
        distance(compareCharacter.gender, character.gender) +
        distance(compareCharacter.status, character.status),
    }))

    return {
      characterCompared: compareCharacter.name,
      data: dataValues
    }
  }

  const handleClose = () => {
    setTimeout(()=>{
      setOpen(false)
    },1000)
  }
  const handleToggle = (characters: Character[]) => {
    setOpen(!open)
    setChartData(createData(characters))
    handleClose()
  }

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography> Comparator</Typography>
      </ExpansionPanelSummary>
      <Divider />
      <ExpansionPanelDetails>
        <CharactersLocker data={chartData} />
      </ExpansionPanelDetails>
      <Divider />
      <ExpansionPanelActions>
        <Button size="small" variant="outlined">
          Cancel
        </Button>
        <Button
          size="small"
          color="primary"
          variant="outlined"
          onClick={() => handleToggle(charactersSelected)}
        >
          Compare
        </Button>
        <SBackdrop open={open} onClick={handleClose}>
          <CircularProgress color="inherit" />
        </SBackdrop>
      </ExpansionPanelActions>
    </ExpansionPanel>
  )
}

const SExpansionPanelComparator = styled(ExpansionPanelComparator)`
  background-color: ${({ theme }) => theme.palette.secondary.main};
`
const SBackdrop = styled(Backdrop)`
  z-index: ${({ theme }) => theme.zIndex.drawer + 1};
  color: #ffff;
`

export default ExpansionPanelComparator
