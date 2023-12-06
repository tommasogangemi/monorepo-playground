import React from 'react'
import './App.css'
import { getApiCommonFlag } from 'api-common'

type WithName = { name: string }

const a: WithName = { name: '22' }

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">I am the react app</header>
      <div>{getApiCommonFlag()}</div>
    </div>
  )
}

export default App
