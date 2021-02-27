import React from "react";
import { Link } from 'react-scroll';
import resume from '../files/Yi Liu_resume.pdf';

const settings = {
  spy:true,
  smooth:true,
  duration:500,
  offset:3
}

const AppBar = (props) => {
  return (
    <header className="sticky-top page-header col-12">
      <nav className="navbar  navbar-expand-sm">

        <div className="d-flex flex-grow-1">
          <span class="w-100 d-lg-none d-block"></span>
          <Link className="navbar-brand" to="home" {...settings}>Yi Liu</Link>
          <div className="w-100 text-right">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon">
              <svg class="icon" viewBox="0 0 1441 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4537" height="24" width="24"><path d="M0 0h1441.148953v127.98981H0zM0 447.964334h1441.148953v127.98981H0zM0 896.01019h1441.148953v127.98981H0z" p-id="4538"></path></svg>
              </span>
            </button>
          </div>
        </div>


        <div className="collapse navbar-collapse flex-grow-1 text-right" id="navbar">
          <ul className="navbar-nav ml-auto flex-nowrap">
            <li className="nav-item">
              <Link className="nav-link" to="about" {...settings} > <span>About</span> </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="experience" {...settings}><span>Experience</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="projects" {...settings}><span>Projects</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="skills" {...settings}><span>Skills</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact" {...settings}><span>Contact</span></Link>
            </li>
            <li><a className="nav-link" href={resume} target="_blank" rel="noopener noreferrer"><span>Download CV</span></a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default AppBar;
