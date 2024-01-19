import React from 'react';

const Navbar = ({ onTabClick }) => {
    const handleClick = (tab, event) => {
      event.preventDefault();
      onTabClick(tab);
    };

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#e3f2fd' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">LangQuiz</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/" onClick={(e) => handleClick('Quiz', e)}>Quiz</a>
            <a className="nav-link" href="/" onClick={(e) => handleClick('Profile', e)}>Profile</a>
            <a className="nav-link" href="/">LeaderBoard</a>
          </div>
          <div className="navbar-nav ms-auto">
            <a className="nav-link" href="/">LogOut</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
