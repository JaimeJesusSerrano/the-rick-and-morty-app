import { Grid } from '@material-ui/core'
import React from 'react'
import { ReactComponent as Title } from '~Assets/img/locations_title.svg'

const Locations = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Title />
      </Grid>
    </Grid>
  )
}

export default Locations
