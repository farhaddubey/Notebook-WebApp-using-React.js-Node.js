import React from 'react'
import {
    Link
  } from "react-router-dom";

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <link className="navbar-brand" to="/">Navbar</link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <link className="nav-link active" aria-current="page" to="/">Home</link>
        </li>
        <li className="nav-item">
          <link className="nav-link" to="/">Link</link>
        </li>
        <li className="nav-item dropdown">
          <link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </link>
          <ul className="dropdown-menu">
            <li><link className="dropdown-item" to="/">Action</link></li>
            <li><link className="dropdown-item" to="/">Another action</link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><link className="dropdown-item" to="/">Something else here</link></li>
          </ul>
        </li>
        <li className="nav-item">
          <link className="nav-link disabled">Disabled</link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
