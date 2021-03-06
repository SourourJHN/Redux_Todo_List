import React from 'react'
import { VISIBILITY_FILTER } from '../../constant'
import { SET_FILTER } from '../actionsTypes';

const initialState=VISIBILITY_FILTER.ALL;
const visibilityFilter = (state=initialState,action) => {
  switch(action.type){
    case SET_FILTER:{
      return action.payload.filter
    }
    default:{
        return state;
    }
  }
}
export default visibilityFilter;
