import { fade, InputBase } from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const SearchBar = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  background-color: ${({ theme }) => fade(theme.palette.common.white, 0.15)};
  &:hover {
    background-color: ${({ theme }) => fade(theme.palette.common.white, 0.25)};
  }
  margin-left: 0;
  margin-right: ${({ theme }) => theme.spacing(2)}px;
  width: 100%;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin-left: ${({ theme }) => theme.spacing(3)}px;
    width: auto;
  }
`

const SearchIconContainer = styled.div`
  width: ${({ theme }) => theme.spacing(7)}px;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SearchInput = styled(InputBase)`
  color: inherit;
  padding: ${({ theme }) => theme.spacing(1, 1, 1, 7)};
  transition: ${({ theme }) => theme.transitions.create('width')};
  width: 100%;
  ${({ theme }) => theme.breakpoints.up('md')} {
    width: 200px;
  }
`

const Search = () => {
  return (
    <SearchBar>
      <SearchIconContainer>
        <SearchIcon />
      </SearchIconContainer>
      <SearchInput
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </SearchBar>
  )
}

export default Search
