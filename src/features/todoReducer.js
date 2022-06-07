import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
const initialState = {
  data: [{id:uuidv4()  , desc: 'This is Task1', isDone: true},{id:uuidv4() , desc: 'This is Task2', isDone: false},{id:uuidv4() , desc: 'This is Task3', isDone: true}]
};
export const todoReducer = createSlice({
  name: 'todo',   ///!qst abs : why we use the name of the reducer here ??
  initialState,
  reducers: {
    AddItemToStore: (state,action) => {
      state.data = [...state.data,{id:uuidv4()  , desc: action.payload, isDone: false}];
    },
    RemoveItemToStore: (state,action) => {
      state.data = state.data.filter(el=>el.id!==action.payload);
    },
    ChangeItemIsDone: (state,action) => {
      state.data = state.data.map(el =>
        el.id === action.payload
            ? {...el,isDone:!el.isDone}
            : el
        )
    },
    UpdateItemDesc: (state,action) => {   ///not working 
      state.data = state.data.map(el =>
        el.id === action.payload.id
            ? {...el,desc:action.payload.desc}
            : el
        )
    },
  },
});

export const { AddItemToStore, RemoveItemToStore, ChangeItemIsDone,UpdateItemDesc} = todoReducer.actions;

export default todoReducer.reducer;

// useSelector(state=>state.todo1.initialState) // state general + name slice + name initialstate