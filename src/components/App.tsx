import FreeTime from "entities/freeTime"
import { useState } from "react"
import Navbar from "./Navbar"
import Pages from "./Pages"

function App() {
  const [freeTimes, setFreeTimes] = useState<FreeTime[]>([])
  const [route, setRoute] = useState<string>('visualization')

  return (
    <div className='border-4 border-green-500 h-screen flex flex-col'>
      <div className='border-2 border-red-500 grow'>
        <Pages route={route} freeTimes={freeTimes} setFreeTimes={setFreeTimes} />
      </div>
      <div className='border-2 border-blue-500 h-12'>
        <Navbar route={route} setRoute={setRoute} />
      </div>
    </div>
  )
}

export default App
