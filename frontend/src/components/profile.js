import React, { useState, useEffect } from 'react';

const ProfileComponent = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Make the API request to fetch user details
        const response = await fetch('http://localhost:5000/api/user/profile', {
          method: 'GET',
          headers: {
            'x-auth-token': localStorage.getItem('jwtToken'), // Include the JWT token
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserDetails(data.user);
        } else {
          console.error('Failed to fetch user details:', response.statusText);
        }
      } catch (error) {
        console.error('Error during API request:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  const handleResetScore = () => {
    // Implement your logic to reset the score, for now, I'm setting it to 0
    // You can make another API call if needed to update the server-side score
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      score: 0,
    }));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    userDetails && (
      <div className="container" style={{ width: '60%', margin: '5% auto', backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2 className="mb-4 text-center">User Profile</h2>
        <div className="row mb-3">
          <div className="col-md-3">
            <label className="form-label text-muted">Phone Number:</label>
          </div>
          <div className="col-md-9">
            <p>{userDetails.phoneNumber}</p>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-3">
            <label className="form-label text-muted">Name:</label>
          </div>
          <div className="col-md-9">
            <p>{userDetails.name}</p>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-3">
            <label className="form-label text-muted">Email Id:</label>
          </div>
          <div className="col-md-9">
            <p>{userDetails.email}</p>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-3">
            <label className="form-label text-muted">Is Phone Verified:</label>
          </div>
          <div className="col-md-9">
            <p>{userDetails.phoneNumber ? 'Yes' : 'No'}</p>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-3">
            <label className="form-label text-muted">My Score</label>
          </div>
          <div className="col-md-9">
            <p>{userDetails.score || 0}</p>
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
    )
  );
};

export default ProfileComponent;
