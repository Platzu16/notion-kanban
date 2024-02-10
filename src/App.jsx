import { useState } from 'react'
import CustomKanban from './components/CustomKanban'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CustomKanban/>
    </>
  )
}

export default App
