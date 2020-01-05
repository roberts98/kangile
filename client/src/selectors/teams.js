import { createSelector } from 'reselect';

const teams = state => state.teams;

const searchTeamSelector = state => state.searchTerm;

export const teamsSelector = createSelector(
  teams,
  searchTeamSelector,
  (teams, searchTerm) => teams.filter(team => team.name.includes(searchTerm))
);
