import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ReactComponent as Title } from '~Assets/img/characters_title.svg'
import useDebounce from '~Hooks/useDebounce'
import { fetchCharactersSearch } from '~Store/actions/characterList'
import Comparator from './components/Comparator'
import List from './components/List'
import SearchBar from './components/SearchBar'

const Characters = () => {
  const dispatch = useDispatch()

  const [searchValue, setSearchValue] = useState()
  const handleSearch = (value: string) => setSearchValue(value)

  const debouncedSearchValue = useDebounce(searchValue, 500)

  useEffect(() => {
    dispatch(fetchCharactersSearch(1, debouncedSearchValue))
  }, [debouncedSearchValue, dispatch])

  return (
    <Grid container>
      <Grid item xs={12}>
        <Title />
      </Grid>
      <Grid item xs={12}>
        <SearchBar element={searchValue} handleChange={handleSearch} />
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

export default Characters
