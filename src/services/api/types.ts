export interface Info {
  count: number
  pages: number
  next: string
  prev: string
}

export type ResultsInfo<T> = {
  info: Info
  results: T[]
}

// Character types
export interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  location: RelatedLocation
  image: string
  episode: string[]
  url: string
  created: string
}

export interface Origin {
  name: string
  url: string
}

export interface RelatedLocation {
  name: string
  url: string
}

export interface CharacterFilters {
  name?: string
  status?: 'alive' | 'dead' | 'unknown'
  species?: string
  type?: string
  gender?: 'female' | 'male' | 'genderless' | 'unknown'
}

// Location types
export interface Location {
  id: number
  name: string
  type: string
  dimension: string
  residents: string[]
  url: string
  created: string
}

export interface LocationFilters {
  name?: string
  type?: string
  dimension?: string
}

// Episode types
export interface Episode {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: string
}

export interface EpisodeFilters {
  name?: string
  episode?: string
}

export type CharacterInfo = ResultsInfo<Character>
export type LocationInfo = ResultsInfo<Location>
export type EpisodeInfo = ResultsInfo<Episode>
