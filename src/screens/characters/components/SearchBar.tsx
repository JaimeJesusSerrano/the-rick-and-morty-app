import { fade, Grid, InputBase } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import useDebounce from '~Hooks/useDebounce'

const SearchContainer = styled(Grid)`
  margin-top: 15px;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  height: 50px;
  background-color: ${({ theme }) => fade(theme.palette.common.white, 0.25)};
  &:hover {
    background-color: ${({ theme }) => fade(theme.palette.common.white, 0.5)};
  }
`

interface SearchBarProps {
  handleChange: (value: string) => void
}
const SearchBar = ({ handleChange }: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState('')
  const debouncedSearchValue = useDebounce(searchValue, 500)

  const onChange = (value: string) => setSearchValue(value)

  useEffect(() => {
    handleChange(debouncedSearchValue)
  }, [debouncedSearchValue, handleChange])

  return (
    <SearchContainer container justify="space-around" alignItems="center">
      <Grid container item xs={1} direction="column" alignItems="center">
        <SearchIcon />
      </Grid>
      <Grid item xs={11}>
        <InputBase
          fullWidth
          placeholder="Search a character"
          value={searchValue}
          onChange={e => onChange(e.target.value)}
          inputProps={{ 'aria-label': 'search' }}
        />
      </Grid>
    </SearchContainer>
  )
}

export default SearchBar
