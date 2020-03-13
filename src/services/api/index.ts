import axios, { AxiosPromise, AxiosResponse } from 'axios'
import {
  Character,
  CharacterFilters,
  Episode,
  EpisodeFilters,
  Location,
  LocationFilters,
  ResultsInfo,
} from './types'

const client = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
  timeout: 5000,
  method: 'get',
})

type MapEndpointToEntity<E> = E extends 'character'
  ? Character
  : E extends 'location'
  ? Location
  : Episode

type Filter<E> = E extends 'character'
  ? CharacterFilters
  : E extends 'location'
  ? LocationFilters
  : EpisodeFilters

type Endpoint = 'character' | 'location' | 'episode'

type Params<E extends Endpoint> =
  | string
  | number
  | string[]
  | number[]
  | Filter<E>
  | undefined

type GetResponse<E extends Endpoint, A> = A extends string | number
  ? MapEndpointToEntity<E>
  : A extends string[] | number[]
  ? MapEndpointToEntity<E>[]
  : ResultsInfo<MapEndpointToEntity<E>>

export type ApiResponse<
  E extends Endpoint,
  A extends Params<E>
> = AxiosResponse<GetResponse<E, A>>

export const get = <E extends Endpoint, A extends Params<E>>(
  endpoint: E,
  args: A
): AxiosPromise<GetResponse<E, A>> =>
  typeof args === 'number' || typeof args === 'string' || Array.isArray(args)
    ? client(`${endpoint}/${args}`)
    : client(endpoint, { params: args })
