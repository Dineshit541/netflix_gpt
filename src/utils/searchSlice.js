import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice ( {
    name:'searchmovies',
    initialState:{
        searchmovies:null
    },
    reducers:{
        addSearchMovies:(state,action) =>{
            state.searchmovies=action.payload;
        }
    }
}
)

export const {addSearchMovies}=searchSlice.actions;

export default searchSlice.reducer;