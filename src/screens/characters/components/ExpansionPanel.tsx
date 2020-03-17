import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { ExpansionPanelDetails } from '@material-ui/core'
import SearchContainer from './SearchBar'

const ExpansionPanelComparator = (): JSX.Element => {
  return (
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography> Comparator</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>DROP ZONE</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
  )
}

export default ExpansionPanelComparator
