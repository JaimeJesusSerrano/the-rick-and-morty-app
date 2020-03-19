import { Grid } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { ReactComponent as Title } from '~Assets/img/locations_title.svg'
import List from './components/List'
import SearchBar from './components/SearchBar'
import { LocationListDispatcher } from '~Store/actions/location/LocationList'

const Locations = () => {

  const dispatch = useDispatch()
  const locationDispatcher = new LocationListDispatcher(dispatch)

  return (
    <Grid container>
      <Grid item xs={12}>
        <Title />
      </Grid>
      <Grid item xs={12}>
        <SearchBar
          handleChange={debouncedSearchValue => locationDispatcher.fetchLocationsSearch(debouncedSearchValue)}
        />
      </Grid>
      <Grid item xs={12}>
        <List />
      </Grid>
    </Grid>
  )
}

export default Locations
