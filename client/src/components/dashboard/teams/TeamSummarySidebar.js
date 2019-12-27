import React from 'react';

function TeamSummarySidebar({ team }) {
  return (
    <div>
      <h1>{team.name}</h1>
      <h2>Description</h2>
      <p>{team.description}</p>
      <h2>Memebrs</h2>
      <ul>
        {team.members.map(member => (
          <li key={member._id}>{member.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default TeamSummarySidebar;
