import { createSelector } from 'reselect';

const teams = state => state.teams.teams;

const searchTeamSelector = state => state.filters.searchTerm;

export const teamsSelector = createSelector(
  teams,
  searchTeamSelector,
  (teams, searchTerm) => teams.filter(team => team.name.includes(searchTerm))
);
