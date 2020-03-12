import {
  CHARACTER_LIST_FAILED,
  CHARACTER_LIST_FETCH,
  CHARACTER_LIST_SUCCEEDED,
} from '~Store/constants/characterList'

import { Character } from '../../../services/api/types'


type Dictionary = { [index: number]: {} }

interface CharacterListStateType {
  currentPage: number
  errors: any
  info: {}
  loading: boolean
  name: string
  pages: Dictionary // TODO add specific type
}

const initialState: CharacterListStateType = {
  currentPage: 1,
  errors: null,
  info: {},
  loading: false,
  name: '',
  pages: {},
}

interface ReduxActionType {
  type: string
  payload?: any
  pages: {}
  currentPage: number
  name: string
}

export const characterListReducer = (
  state: CharacterListStateType = initialState,
  action: ReduxActionType
) => {
  switch (action.type) {
    case CHARACTER_LIST_FETCH:
      return { ...state, loading: true }
    case CHARACTER_LIST_SUCCEEDED:
      return {
        ...state,
        currentPage: action.currentPage,
        info: action.payload.info,
        loading: false,
        name: action.name,
        pages: {
          ...state.pages,
          [action.currentPage]: action.payload.results,
        },
      }
    case CHARACTER_LIST_FAILED:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return initialState
  }
}

let numberState = 0

const counter = (num: number = numberState) => {
  numberState +=1
  return numberState

}
let characters: Character[] = []


export const getCharacterListUntilPage = (
  state: CharacterListStateType,
  page: number
) => {

  type Characters = Character[]
  const emptyCharacterArray: Characters = []

  console.log('state.pages')
  console.log(state.pages)
  Object.entries(state.pages).map(([key, value]) =>{
    console.log('index')
    console.log(key)
    console.log(value)
    console.log(page)
    if (Number(key) >= 1 && Number(key) <= page) {
      console.log(counter(1))
      const newCharacters: Character[] = value ? Object.values(value) : emptyCharacterArray
      characters = [...characters, ...newCharacters]
    }
    return characters
  })

  return characters
}


// 0: "2"
// 1: Array(20)
// 0: {id: 21, name: "Aqua Morty", status: "unknown", species: "Humanoid", type: "Fish-Person", …}
// 1: {id: 22, name: "Aqua Rick", status: "unknown", species: "Humanoid", type: "Fish-Person", …}
// 2: {id: 23, name: "Arcade Alien", status: "unknown", species: "Alien", type: "", …}
// 3: {id: 24, name: "Armagheadon", status: "Alive", species: "Alien", type: "Cromulon", …}
// 4: {id: 25, name: "Armothy", status: "Dead", species: "unknown", type: "Self-aware arm", …}
// 5: {id: 26, name: "Arthricia", status: "Alive", species: "Alien", type: "Cat-Person", …}
// 6: {id: 27, name: "Artist Morty", status: "Alive", species: "Human", type: "", …}
// 7: {id: 28, name: "Attila Starwar", status: "Alive", species: "Human", type: "", …}
// 8: {id: 29, name: "Baby Legs", status: "Alive", species: "Human", type: "Human with baby legs", …}
// 9: {id: 30, name: "Baby Poopybutthole", status: "Alive", species: "Poopybutthole", type: "", …}
// 10: {id: 31, name: "Baby Wizard", status: "Dead", species: "Alien", type: "Parasite", …}
// 11: {id: 32, name: "Bearded Lady", status: "Dead", species: "Alien", type: "Parasite", …}
// 12: {id: 33, name: "Beebo", status: "Dead", species: "Alien", type: "", …}
// 13: {id: 34, name: "Benjamin", status: "Alive", species: "Poopybutthole", type: "", …}
// 14: {id: 35, name: "Bepisian", status: "Alive", species: "Alien", type: "Bepisian", …}
// 15: {id: 36, name: "Beta-Seven", status: "Alive", species: "Alien", type: "Hivemind", …}
// 16: {id: 37, name: "Beth Sanchez", status: "Alive", species: "Human", type: "", …}
// 17: {id: 38, name: "Beth Smith", status: "Alive", species: "Human", type: "", …}
// 18: {id: 39, name: "Beth Smith", status: "Alive", species: "Human", type: "", …}
// 19: {id: 40, name: "Beth's Mytholog", status: "Dead", species: "Mytholog", type: "", …}
// length: 20
