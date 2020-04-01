import React from 'react'
import { Grid, Link } from '@material-ui/core'
import { useLocation } from 'react-router-dom'
import { PaperCard, PaperCardType } from './components/PaperCard'

export default () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Link href="/characters">
          <PaperCard type={PaperCardType.Character}/>
        </Link>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4}>
      <Link href="/episodes">
        <PaperCard type={PaperCardType.Episode}/>
        </Link>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Link href="/locations">
          <PaperCard type={PaperCardType.Location}/>
        </Link>
      </Grid>
    </Grid>
  )
}