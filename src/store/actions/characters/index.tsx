export const fetchCharacters = (value: any) => {
  return {
    type: 'FETCH_CHARACTERS_REQUESTED',
    payload: value
  }
}
