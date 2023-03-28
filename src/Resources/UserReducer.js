import React, { useReducer } from 'react';

const initialState = {
    users : []
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'REGISTER':
          return { ...state, users : action.payload };
        default:
          return state;
      }
};