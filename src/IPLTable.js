import React, { useEffect, useState } from 'react';

const IPLTable = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data')
      .then(response => response.json())
      .then(data => {
        // Sort the data based on NRR
        const sortedData = data.sort((a, b) => b.won - a.won);
        setTeams(sortedData);
      })
      .catch(error => console.error('Error fetching the data:', error));
  }, []);

  return (
    <div>
      <h1 >IPL 2022 Points Table</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Tied</th>
            <th>Points</th>
            <th>NRR</th>
          </tr>
        </thead>
        <tbody>
          {teams.map(team => (
            <tr key={team.id}>
              <td>{team.No}</td>
              <td>{team.Team}</td>
              <td>{team.Matches}</td>
              <td>{team.Won}</td>
              <td>{team.Lost}</td>
              <td>{team.Tied}</td>
              
              <td>{team.Points}</td>
              <td>{team.NRR}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IPLTable;
