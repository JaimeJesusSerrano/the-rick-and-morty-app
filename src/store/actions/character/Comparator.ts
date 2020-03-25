import { ActionType } from '~Store/constants/character/Comparator'
import {CardProps} from '~Screens/characters/components/Card'

export const sendCharacterSelected = (character: CardProps) => {
  return {
    type: ActionType.COMPARATOR_CHARACTER_SELECTED_POST,
    payload: {
      character,
    },
  }
}

export const fetchCharacterSelected = () => {
  return {
    type: ActionType.COMPARATOR_CHARACTER_SELECTED_POST,
    payload: {
    },
  }
}

