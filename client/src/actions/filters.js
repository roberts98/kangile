import { SET_TEXT_FILTER } from '../contants/filtersStore';

export const filterTeams = phrase => ({
  type: SET_TEXT_FILTER,
  payload: phrase
});
