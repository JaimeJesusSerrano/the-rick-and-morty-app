import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import { ExpansionPanelActions, ExpansionPanelDetails } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import Divider from '@material-ui/core/Divider'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import CharactersLocker from '~Screens/characters/components/CharactersLocker'
import { RootState } from '~Store/reducers'
import { Character } from '~Api/types'
import { resetCharacterSelected } from '~Store/actions/character/Comparator'

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
  const dispatch = useDispatch()

  const fetchCharacterSelected = useSelector(
    (state: RootState) => state.character.comparator
  )

  type CompareType = number | string
  const { charactersSelected } = fetchCharacterSelected

  const resetChart = (): void => {
    setChartData({} as DataComparator)
  }

  const distance = (compare: CompareType, compared: CompareType): number =>
    compare === compared ? 1 : 0

  useEffect(() => {
    resetChart()
  }, [charactersSelected])

  const createData = (characters: Character[]): DataComparator => {
    const compareCharacter = characters[0]
    const charactersBeingCompared = characters.slice(1)
    const dataValues = charactersBeingCompared.map((character: Character) => ({
      name: character.name,
      similarity:
        distance(compareCharacter.species, character.species) +
        distance(compareCharacter.location.name, character.location.name) +
        distance(compareCharacter.gender, character.gender) +
        distance(compareCharacter.status, character.status),
    }))

    return {
      characterCompared: compareCharacter.name,
      data: dataValues,
    }
  }

  const handleClose = () => {
    setTimeout(() => {
      setOpen(false)
    }, 700)
  }
  const handleToggle = (characters: Character[]) => {
    if (characters.length > 1) {
      setOpen(!open)
      setChartData(createData(characters))
      handleClose()
    }
  }

  return (
    <ExpansionPanel
      disabled={charactersSelected.length < 1}
      expanded={charactersSelected.length > 0}
    >
      <ExpansionPanelSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography> Comparator</Typography>
      </ExpansionPanelSummary>
      <Divider />
      <SExpansionPanelDetails>
        <CharactersLocker data={chartData} />
      </SExpansionPanelDetails>
      <Divider />
      <ExpansionPanelActions>
        <Button
          size="small"
          onClick={() => {
            dispatch(resetCharacterSelected())
            resetChart()
          }}
          variant="outlined"
        >
          Cancel
        </Button>
        <Button
          color="primary"
          disabled={charactersSelected.length < 2}
          onClick={() => handleToggle(charactersSelected)}
          size="small"
          variant="outlined"
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

const SExpansionPanelDetails = styled(ExpansionPanelDetails)`
  justify-content: center;
`
const SBackdrop = styled(Backdrop)`
  color: #ffff;
  z-index: ${({ theme }) => theme.zIndex.drawer + 1};
`

export default ExpansionPanelComparator
