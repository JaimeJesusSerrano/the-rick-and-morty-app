import { ActionType } from '~Store/constants/character/Comparator'
import { Character } from '~Api/types'

export const sendCharacterSelected = (character: Character) => {
  return {
    type: ActionType.COMPARATOR_CHARACTER_SELECTED_PUT_SUCCESS,
    payload: {
      character,
    },
  }
}

