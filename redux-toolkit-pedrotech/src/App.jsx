import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieList from './components/MovieList'
import InputMovie from './components/InputMovie'

function App() {

  return (
    <>
      <MovieList />
<InputMovie/>

    </>
  )
}

export default App
