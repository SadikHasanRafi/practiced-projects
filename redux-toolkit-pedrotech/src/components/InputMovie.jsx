import React from 'react'
import { useDispatch } from 'react-redux';
import { addMovie } from '../movieSlice';

export default function InputMovie() {


    const dispatch = useDispatch();
    const [movieName, setMovieName] = React.useState('');
    const [directorName, setDirectorName] = React.useState('');

    const handleOnClick = () => {
        if (movieName && directorName) {
            dispatch(addMovie({movieName, directorName}));
            setMovieName('');
            setDirectorName('');
        }
    }
    


  return (
    <div className="w-full flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-semibold text-gray-100 tracking-wide mb-2">
        Add a Movie
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Movie Name"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
          className="flex-1 px-4 py-3 bg-white/10 border border-white/10 rounded-xl 
                     text-gray-100 placeholder-gray-400 focus:outline-none 
                     focus:border-white/30 focus:bg-white/15 transition-all duration-300"
        />

        <input
          type="text"
          placeholder="Director Name"
          value={directorName}
          onChange={(e) => setDirectorName(e.target.value)}
          className="flex-1 px-4 py-3 bg-white/10 border border-white/10 rounded-xl 
                     text-gray-100 placeholder-gray-400 focus:outline-none 
                     focus:border-white/30 focus:bg-white/15 transition-all duration-300"
        />
      </div>

      <button
        onClick={handleOnClick}
        className="mt-4 px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 
                   rounded-xl text-gray-100 font-medium transition-all duration-300 
                   shadow-[0_4px_20px_rgba(255,255,255,0.05)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.1)]"
      >
        Add Movie
      </button>
    </div>
  )
}
