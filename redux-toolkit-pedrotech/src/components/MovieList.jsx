import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "../movieSlice";
import EditMovie from "./EditMovie";

export default function MovieList() {
  const movies = useSelector((state) => state.movie.movies);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);


  const handleOnClickEdit = () => {
    setIsEditing(true)
  }

  

  
  const handleOnDeleteMovie = (id) => {
    dispatch(removeMovie(id));
  }
  


  const handleUpdateClick = () => {
    // TODO: your Redux update logic here
    // e.g. dispatch(updateMovie({ id: editMovieId, name: editName, director: editDirector }))
  };

  const handleClose = () => {
    setIsEditing(false);
    setEditMovieId(null);
    setEditName("");
    setEditDirector("");
  };

  return (
    <div className="w-full text-center space-y-10">
      <h1 className="text-4xl font-semibold text-gray-100 tracking-wide">
        Movie Collection
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {movies.map((movie) => (
          <div key={movie.id}>
          <div
            
            className="bg-white/5 border border-white/10 rounded-2xl 
                       shadow-[0_8px_30px_rgba(0,0,0,0.25)] 
                       hover:shadow-[0_8px_40px_rgba(255,255,255,0.1)]
                       backdrop-blur-md transition-all duration-300 p-6 
                       text-left flex flex-col justify-between"
          > <p className="text-white">{movie.id}</p>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {movie.name}
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Directed by{" "}
                <span className="text-gray-200">{movie.director}</span>
              </p>
            </div>

            <div className="flex gap-3 mt-auto">
              <button
                onClick={handleOnClickEdit}
                className="flex-1 px-4 py-2 text-sm font-medium text-gray-100 
                           border border-white/20 rounded-lg 
                           bg-white/5 hover:bg-white/10 hover:border-white/40 
                           transition-all duration-300"
              >
                Edit
              </button>
              <button
              onClick={()=>handleOnDeleteMovie(movie.id)}
                className="flex-1 px-4 py-2 text-sm font-medium text-red-300 
                           border border-red-400/30 rounded-lg 
                           bg-red-500/5 hover:bg-red-500/15 hover:border-red-400/50 
                           transition-all duration-300"
              >
                Delete
              </button>
            </div>
          </div>

          {
            isEditing && <EditMovie  movie={movie} isEditing={isEditing} setIsEditing={setIsEditing()} ></EditMovie>
          }

          </div>
          
        ))}
      </div>


    </div>
  );
}
