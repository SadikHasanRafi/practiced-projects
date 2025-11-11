import React, { useState } from 'react'

export default function EditMovie({key,movie,isEditing,setIsEditing}) {
  const [editMovieId, setEditMovieId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editDirector, setEditDirector] = useState("");

  console.log("movie name is ", movie)


  return (
         
        <div
          className="mt-6 w-full max-w-2xl mx-auto bg-white/5 border border-white/10 
                     rounded-2xl backdrop-blur-md shadow-[0_10px_35px_rgba(0,0,0,0.5)]
                     p-6 text-left"
        >
          <h2 className="text-xl font-semibold text-gray-100 mb-4">
            Edit Movie
          </h2>

          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-300">Movie Name</label>
              <input
                type="text"
                value={movie.name}
                onChange={(e) => setEditName(e.target.value)}
                className="w-full px-4 py-2.5 bg-white/10 border border-white/15 
                           rounded-lg text-gray-100 placeholder-gray-400 
                           focus:outline-none focus:border-white/40 
                           focus:bg-white/15 transition-all duration-300"
                placeholder="Enter movie name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-300">Director Name</label>
              <input
                type="text"
                value={movie.director}
                onChange={(e) => setEditDirector(e.target.value)}
                className="w-full px-4 py-2.5 bg-white/10 border border-white/15 
                           rounded-lg text-gray-100 placeholder-gray-400 
                           focus:outline-none focus:border-white/40 
                           focus:bg-white/15 transition-all duration-300"
                placeholder="Enter director name"
              />
            </div>

            <div className="flex gap-3 justify-end pt-2">
              <button
                onClick={handleClose}
                className="px-5 py-2.5 text-sm font-medium text-gray-200 
                           border border-white/20 rounded-lg 
                           bg-white/5 hover:bg-white/10 hover:border-white/40 
                           transition-all duration-300"
              >
                Close
              </button>
              <button
                onClick={handleUpdateClick}
                className="px-5 py-2.5 text-sm font-medium text-gray-900 
                           rounded-lg bg-gray-100 hover:bg-white 
                           transition-all duration-300"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      
  )
}
