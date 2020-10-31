import React from 'react';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';


const Ul = styled.a`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  a {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    z-index: 2;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 400px;
    padding-top: 3.5rem;
    padding-right: 3.5rem;
    text-align: center;
    transition: transform 0.3s ease-in-out;
    a {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to="/#Portfolio" class="nav-link yellow-link w-nav-link">my work</Link>
      <Link to="/blog" class="nav-link yellow-link w-nav-link">blog</Link>
      <Link to="mailto:tapiwakundi@gmail.com" class="nav-link yellow-link w-nav-link">get in touch</Link>
    </Ul>
  )
}

export default RightNav
