import React from 'react'
import { useSelector } from 'react-redux'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { ExpansionPanelDetails, ExpansionPanelActions} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import Divider from '@material-ui/core/Divider'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'

import CharactersLocker from '~Screens/characters/components/CharactersLocker'
import { RootState } from '~Store/reducers'
import { Character } from '~Api/types'

const ExpansionPanelComparator = (): JSX.Element => {
  const [open, setOpen] = React.useState(false)
  const fetchCharacterSelected = useSelector(
    (state: RootState) => state.character.comparator
  )



  type CompareType = number | string


  const distance = (compare: CompareType, compared: CompareType):number => compare === compared?1:0


  const getHammingDistance = (charactersCompared: Character[]): number[] => {
    const compareCharacter = charactersCompared[0]
    const charactersBeingCompared = charactersCompared.slice(1);
    const hammingDistance = charactersBeingCompared.map(
      (character: Character) => (
        distance(compareCharacter.name, character.name) +
        distance(compareCharacter.location.name, character.location.name) +
        distance(compareCharacter.gender, character.gender) +
        distance(compareCharacter.status, character.status)
      )
    )
    return hammingDistance
  }

  const handleClose = () => {
    setOpen(false)
  }
  const handleToggle = () => {
    const {charactersSelected} = fetchCharacterSelected

    console.log(getHammingDistance(charactersSelected))
    setOpen(!open)
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
        <CharactersLocker/>
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
          onClick={handleToggle}
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
