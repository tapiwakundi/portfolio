import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import { Link } from 'react-router-dom'

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  margin-left: -10px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
    font-size: 30px;
  }
`

const SubNavbar = () => {
  return (
    <Nav>
      <Link to='/' class="brand w-nav-brand w--current">
        <div class="logo">Tapiwa.</div>
      </Link>

      <Burger />
    </Nav>
  )
}

export default SubNavbar