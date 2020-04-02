import React from 'react'
import { Grid, Link } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import { PaperCard, PaperCardType } from './components/PaperCard'

const Home = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Link component={RouterLink} to="/characters">
          <PaperCard type={PaperCardType.Character}/>
        </Link>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4}>
      <Link component={RouterLink} to="/episodes">
        <PaperCard type={PaperCardType.Episode}/>
        </Link>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Link component={RouterLink} to="/locations">
          <PaperCard type={PaperCardType.Location}/>
        </Link>
      </Grid>
    </Grid>
  )
}

export default Home
