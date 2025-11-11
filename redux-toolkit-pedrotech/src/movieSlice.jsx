import { createSlice } from "@reduxjs/toolkit";

const initialStateMovie = {
    movies: [
        {id:1, name:"Inception", director:"Christopher Nolan"},
        {id:2, name:"The Dark Knight", director:"Christopher Nolan"},
        {id:3, name:"Interstellar", director:"Christopher Nolan"},
        {id:4, name:"Pulp Fiction", director:"Quentin Tarantino"},
        {id:5, name:"The Matrix", director:"The Wachowskis"}
    ]
}

const movieSlice = createSlice({
    name:"movie",
    initialState: initialStateMovie,
    reducers:{
        addMovie:(state, action) =>{
            console.log("Action Payload:", action.payload);
            const lastMovie = state.movies[state.movies.length - 1];
            const newId = lastMovie ? lastMovie.id + 1 : 1;
            action.payload = {id:newId, name:action.payload.movieName, director:action.payload.directorName};
            state.movies.push(action.payload)
        },
        removeMovie:(state,action) =>{
            console.log(state.movies)
            const deleteId = action.payload;
            if(deleteId){
                state.movies.splice(deleteId - 1, 1);
                state.movies = state.movies.map((movie, index) => ({
                    ...movie,
                    id: index + 1
                }));

            }
        }
    }
})

export const {addMovie, removeMovie} = movieSlice.actions;
export default movieSlice.reducer;