import AddFreeTime from "./AddFreeTime"
import Navbar from "./Navbar"

function App() {
  return (
    <div className='border-4 border-green-500 h-screen flex flex-col'>
      <div className='border-2 border-red-500 grow'>
        <AddFreeTime />
      </div>
      <div className='border-2 border-blue-500 h-12'>
        <Navbar />
      </div>
    </div>
  )
}

export default App
