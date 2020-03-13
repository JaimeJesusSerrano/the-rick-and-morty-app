import { Grid } from '@material-ui/core'
import React from 'react'
import { ReactComponent as Title } from '~Assets/img/episodes_title.svg'

const Episodes = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Title />
      </Grid>
    </Grid>
  )
}

export default Episodes
