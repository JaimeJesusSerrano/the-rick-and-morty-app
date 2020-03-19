import React, { useState } from 'react'
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroller'
import { useDispatch, useSelector } from 'react-redux'
import {Grid, GridList, GridListTile} from '@material-ui/core'
import { LocationListDispatcher } from '~Store/actions/location/LocationList'
import { getLocationList } from '~Store/reducers/location/LocationList'
import { RootState } from '~Store/reducers'
import Loader from '~Components/Loader'
import { Location } from '~Api/types'
import Card from './Card'
import NoResponseImg from '~Assets/img/noresponse.jpg'

const Container = styled.div`
margin-bottom: 50px;
`

const StyledGridList = styled(GridList)`
justify-content: space-around;
`

const StyledGridListTile = styled(GridListTile)`
margin-top: 10px;
`

const List = () => {

  const dispatch = useDispatch()
  const locationDispatcher = new LocationListDispatcher(dispatch)

  const locationListState = useSelector(
    (state: RootState) => state.location.list
  )
  const { currentPage, loading, name, totalPages, criticalError } = locationListState
  const locations: Location[] = getLocationList(locationListState)

  const [hasMoreLocationsToLoad, setHasMoreLocationsToLoad] = useState(true)

  const loadMoreLocations = () => {
    const newPage = currentPage as number + 1
    if (newPage > totalPages) {
      setHasMoreLocationsToLoad(false)
    } else if (!loading && hasMoreLocationsToLoad) {
      locationDispatcher.fetchLocationsPage(newPage, name as string)
    }
  }

  if (locations && locations.length) {
    const Items =
      locations.map((location: Location) => (
        <StyledGridListTile
          key={location.id}
          cols={1}
          rows={1}
          style={{ width: 200 }}
        >
          <Card location={location} />
        </StyledGridListTile>
      ))

    return (
      <Container>
        <InfiniteScroll
          pageStart={1}
          loadMore={loadMoreLocations}
          hasMore={hasMoreLocationsToLoad}
          loader={
            <CustomLoader key={0}/>
          }
        >
          <StyledGridList cellHeight="auto" spacing={4}>
            {Items}
          </StyledGridList>
        </InfiniteScroll>
      </Container>
    )
  }

  if (!loading && !criticalError && totalPages === 0) {
    return (
      <Container>
        There are not locations with this name
      </Container>
    )
  }

  if (!loading && criticalError && totalPages === 0) {
    return (
      <Container>
        <img src={NoResponseImg} alt="No Response from Server" style={{width: '100%', marginTop: 10}}/>
      </Container>
    )
  }

  return (
    <Container>
      <CustomLoader />
    </Container>
  )


}


const CustomLoader = () => {
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

export default List