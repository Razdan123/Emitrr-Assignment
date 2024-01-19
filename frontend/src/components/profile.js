import React, { useState } from 'react';

const ProfileComponent = () => {
  const [score, setScore] = useState(45); // Assuming the initial score is 45

  const profileData = {
    phoneNumber: '+91 8858246621',
    name: 'Rohit Razdan',
    emailId: 'razadnrohit73@gmail.com',
    isPhVerified: true,
    score: score,
  };

  const handleResetScore = () => {
    // Implement your logic to reset the score, for now, I'm setting it to 0
    setScore(0);
  };

  return (
    <div className="container" style={{ width: '60%', margin: '5% auto', backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2 className="mb-4 text-center">User Profile</h2>
      <div className="row mb-3">
        <div className="col-md-3">
          <label className="form-label text-muted">Phone Number:</label>
        </div>
        <div className="col-md-9">
          <p>{profileData.phoneNumber}</p>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-3">
          <label className="form-label text-muted">Name:</label>
        </div>
        <div className="col-md-9">
          <p>{profileData.name}</p>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-3">
          <label className="form-label text-muted">Email Id:</label>
        </div>
        <div className="col-md-9">
          <p>{profileData.emailId}</p>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-3">
          <label className="form-label text-muted">Is Phone Verified:</label>
        </div>
        <div className="col-md-9">
          <p>{profileData.isPhVerified ? 'Yes' : 'No'}</p>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-3">
          <label className="form-label text-muted">My Score</label>
        </div>
        <div className="col-md-9">
          <p>{profileData.score}</p>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-12 text-center">
          <button type="button" className="btn btn-danger" onClick={handleResetScore}>
            Reset Score
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
