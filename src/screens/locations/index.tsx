import { Grid } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { ReactComponent as Title } from '~Assets/img/locations_title.svg'
import SearchBar from './components/SearchBar'
import { LocationListDispatcher } from '~Store/actions/locationList'

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
          handleChange={debouncedSearchValue => locationDispatcher.fetchLocationsSearch(1, debouncedSearchValue)}
        />
      </Grid>
    </Grid>
  )
}

export default Locations
