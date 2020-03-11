export const fetchCharactersPage = (page: number, name: string) => {
  return {
    type: 'CHARACTERS_LIST_FETCH_REQUESTED',
    payload: {
      page,
      name,
    },
  }
}
