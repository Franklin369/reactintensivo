import { useState } from 'react'
import reactLogo from './assets/react.svg'

import { MyRoutes } from './routers/router'
function App() {
  const [count, setCount] = useState(0)

  return (
   <MyRoutes/>
  )
}

export default App
