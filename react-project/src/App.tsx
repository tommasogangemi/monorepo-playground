import React from 'react'
import './App.css'
import { APICommonFlag, getApiCommonFlag } from 'api-common'

type WithName = { name: string; flag: APICommonFlag }

const a: WithName = { name: '22', flag: 'Victory!' }

const App: React.FC = () => {
  return (
    <div className="App">
      <div style={{ marginTop: '250px' }}>{getApiCommonFlag()}</div>
    </div>
  )
}

export default App
