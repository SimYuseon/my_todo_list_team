import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 0, name: "선냥", comment: "재밌다~!" },
    { id: 1, name: "현몽", comment: "몽몽테온" },
  ],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    loadComment: (state) => {
      state.todos = [...state.todos];
    },
    addComment: (state, actions) => {
      console.log(actions);
      state.todos = [...state.todos, actions.payload];
    },
  },
});

export const { loadComment, addComment } = todosSlice.actions;
export default todosSlice.reducer;
