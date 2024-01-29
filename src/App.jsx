import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileFetcher from './ProfileFetcher'
import ProfileFetcherForm from './ProfileFetcherForm'

function App() {

  return (
    <>
      <h1>Search Any Github Profile</h1>
      <ProfileFetcher/>
    </>
  )
}

export default App
