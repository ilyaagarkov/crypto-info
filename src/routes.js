import React from 'react';
import HomePage from './Pages/Home';
import Settings from './Pages/Settings';
import Currency from './Pages/Currency';

export default [
  {
    path: '/',
    action: () => {
      return {
        component: <HomePage />
      }

    },
  },
  {
    path: '/settings',
    action: () => ({
      component: <Settings />
    })
  },
  {
    path: '/currency/:currencyId',
    action: ({params}) => {
      return {
        component: <Currency params={params} />
      }
    }
  }
];

