import React, { useState } from 'react'
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroller'
import { useDispatch, useSelector } from 'react-redux'
import {Grid, GridList, GridListTile} from '@material-ui/core'
import { LocationListDispatcher } from '~Store/actions/locationList'
import { getLocationList } from '~Store/reducers/locationList'
import { RootState } from '~Store/reducers'
import Loader from '~Components/Loader'
import { Location } from '~Api/types'
import Card from './Card'

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
    (state: RootState) => state.locationListState
  )

  const { currentPage, loading, name, totalPages } = locationListState
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
            <CustomLoader />
          }
        >
          <StyledGridList cellHeight="auto" spacing={4}>
            {Items}
          </StyledGridList>
        </InfiniteScroll>
      </Container>
    )
  }

  if (!loading && totalPages === 0) {
    return (
      <Container>
        There are not locations with this name
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