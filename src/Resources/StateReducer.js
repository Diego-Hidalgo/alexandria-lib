import React, { useReducer } from 'react';

const initialState = {
    isLoggedIn : false,
    user : ''
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
          return { ...state, isLoggedIn: true, user: action.payload };
        case 'LOGOUT':
          return { ...state, isLoggedIn: false, user: '' };
        default:
          return state;
      }
};

export const useStateReducer = () => {
    return useReducer(reducer, initialState);
};