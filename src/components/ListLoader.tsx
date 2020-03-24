import React from 'react'
import { Grid } from '@material-ui/core'
import Loader from '~Components/Loader'

const ListLoader = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Loader height={125} width={125} />
    </Grid>
  )
}

export default ListLoader
