import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import omar from '../assets/images/gferluga2024.png';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={omar} className="zoom" alt="thumbnail" width="100%"/>
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/gferluga" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/giancarloferluga/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Giancarlo Ferluga</h1>
          <p>Senior IT Manager, Switzerland Quality Champion</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/gferluga" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/giancarloferluga/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;