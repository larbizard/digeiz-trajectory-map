import './App.css'

import UserTrajectory from './Components/UserTrajectory'

import Trajectories from './assets/trajectoires.json'

function App() {

  return (
    <div className="App">
      {Trajectories.map(element => <div style={{ backgroundColor: "white", width: "100%"}}>
        <UserTrajectory userTrajectory={element} />
        </div>)}
    </div>
  )
}

export default App
