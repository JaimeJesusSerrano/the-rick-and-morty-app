import React from 'react'
import { GridList } from '@material-ui/core'
import InfiniteScroll from 'react-infinite-scroller'
import styled from 'styled-components'
import ListLoader from '~Components/ListLoader'

interface InfiniteScrollListProps {
  children: React.ReactNode
  hasMoreCharactersToLoad: boolean
  loadMoreCharacters: () => void
}

const InfiniteScrollList = (props: InfiniteScrollListProps) => {
  const {
    children,
    hasMoreCharactersToLoad,
    loadMoreCharacters,
  } = props

  if (children) {
    return (
      <Container>
        <InfiniteScroll
          pageStart={1}
          loadMore={loadMoreCharacters}
          hasMore={hasMoreCharactersToLoad}
          loader={<ListLoader key={0} />}
        >
          <StyledGridList cellHeight="auto" spacing={4}>
            {children}
          </StyledGridList>
        </InfiniteScroll>
      </Container>
    )
  }
  return null
}

const Container = styled.div`
  margin-bottom: 50px;
`

const StyledGridList = styled(GridList)`
  justify-content: space-around;
`

export default InfiniteScrollList
