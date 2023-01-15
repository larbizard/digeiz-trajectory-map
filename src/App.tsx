import UserTrajectory from './Components/UserTrajectory'

import Trajectories from './assets/trajectoires.json'

import DigeizLogo from "./assets/LOGO-digeiz.png"
import { useState } from 'react'

import Select from 'react-select'

import { ValueLabel } from './common'

import UserCaracteristics from './Components/UserCaracteristics'

function App() {

  const [users, setUsers] = useState<Array<String>>([Trajectories[0].id])

  const options:Array<ValueLabel> = [];

  Trajectories.map(trajectory => options.push({
    value: trajectory.id,
    label: `User ${trajectory.id}`,
  }))

  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col bg-digeizPink p-4 xl:w-1/5">
          <img src={DigeizLogo} alt="Digeiz Logo" width="200px" />
          <h1 className="text-3xl font-bold py-5 text-digeizGreen">
            Select one user to see his path
          </h1>
          <Select className="py-5" options={options} value={options[0]} onChange={(e) => {if(e !== null ) setUsers([e.value])}}/>
          {Trajectories.filter(trajectory => users.includes(trajectory.id)).map(user => <UserCaracteristics userTrajectory={user} />)}
        </div>
        <div className="flex text-3xl font-bold w-full h-full">
          {Trajectories.filter(trajectory => users.includes(trajectory.id)).map(user => <UserTrajectory userTrajectory={user} />)}
        </div>
      </div>
    </div>
  )
}

export default App
