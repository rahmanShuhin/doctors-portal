import React from 'react';
import "./SideBar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faUserInjured, faGripHorizontal, faSignOutAlt, faCogs } from '@fortawesome/free-solid-svg-icons';
const SideBar = () => {
  return (
    <div className="sidenav px-2 py-5">
      <div className="side-item">
        <Link to="/dashboard"><button className="my-md-3"><FontAwesomeIcon icon={faGripHorizontal} /> DashBoard</button></Link>
        <Link><button className="my-md-3"><FontAwesomeIcon icon={faCalendarCheck} /> Appointment</button></Link>
        <Link to="/patients"><button className="my-md-3"><FontAwesomeIcon icon={faUserInjured} /> Patients</button></Link>
        <Link><button className="my-md-3"><FontAwesomeIcon icon={faCalendarCheck} /> Prescriptions</button></Link>
        <Link><button className="my-md-3"><FontAwesomeIcon icon={faCogs} /> Setting</button></Link>
      </div>
      <Link to="/"><button className="btn text-light"><FontAwesomeIcon icon={faSignOutAlt} /> Log out</button></Link>
    </div>
  );
};

export default SideBar;