import { SETS_REQUESTED } from '../constants/action-types'; 

export function getSets() {
  return { type: SETS_REQUESTED };
}