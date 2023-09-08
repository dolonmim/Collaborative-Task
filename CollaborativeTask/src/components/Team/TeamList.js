import React from 'react';

function TeamList({ teams }) {
  
  const teamItems = teams.map((team) => (
    <div key={team.id}>
      <h3>{team.name}</h3>
      <p>{team.description}</p>
      {}
    </div>
  ));

  return (
    <div>
      <h2>Team List</h2>
      {teamItems}
    </div>
  );
}

export default TeamList;
