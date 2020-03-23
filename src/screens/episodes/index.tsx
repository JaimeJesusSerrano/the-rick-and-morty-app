import { Grid } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { ReactComponent as Title } from '~Assets/img/episodes_title.svg'
import { fetchEpisodesSearch } from '~Store/actions/episode/EpisodeList'
import Comparator from './components/Comparator'
import List from './components/List'
import SearchBar from './components/SearchBar'

const Episodes = () => {
  const dispatch = useDispatch()

  return (
    <Grid container>
      <Grid item xs={12}>
        <Title />
      </Grid>
      <Grid item xs={12}>
        <SearchBar
          handleChange={debouncedSearchValue =>
            dispatch(fetchEpisodesSearch(1, debouncedSearchValue))
          }
        />
      </Grid>
      <Grid item xs={12}>
        <Comparator />
      </Grid>
      <Grid item xs={12}>
        <List />
      </Grid>
    </Grid>
  )
}

export default Episodes
