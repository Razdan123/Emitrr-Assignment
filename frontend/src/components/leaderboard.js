import React from 'react';

const Leaderboard = () => {
  const generateRandomScore = () => {
    return Math.floor(Math.random() * 100);
  };

  const generateRandomName = () => {
    const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack'];
    return names[Math.floor(Math.random() * names.length)];
  };

  const leaderboardData = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    name: generateRandomName(),
    score: generateRandomScore(),
  }));

  return (
    <div className="container" style={{ width: '60%', margin: '5% auto', backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2 className="mb-4 text-center">Leaderboard</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Name</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
