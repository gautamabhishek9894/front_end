import React from 'react';
import { NavLink } from 'react-router-dom';

export const App = () => {
  const data = [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: '/about',
      name: 'About',
    },
    {
      path: '/cart',
      name: 'Cart',
    },
    {
      path: '/login',
      name: 'Login',
    },
  ];

  return (
    <div
      style={{
        border: '2px solid black',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '10px',
      }}
    >
      {data.map((el) => (
        <NavLink
          key={el.path}
          to={el.path}
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? 'blue' : 'black',
            fontWeight: isActive ? 'bold' : 'normal',
          })}
        >
          {el.name}
        </NavLink>
      ))}
    </div>
  );
};