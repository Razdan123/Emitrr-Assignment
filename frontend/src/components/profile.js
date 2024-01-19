import React from 'react';

const ProfileComponent = () => {
  const profileData = {
    phoneNumber: '+91 8858246621',
    name: 'Rohit Razdan',
    emailId: 'razadnrohit73@gmail.com',
    isPhVerified: true,
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
    </div>
  );
};

export default ProfileComponent;
