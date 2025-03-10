import { Box, Button } from '@chakra-ui/react'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import CreatePage from './Pages/CreatePage'
import Navbar from './components/ui/Navbar'
import { useColorModeValue } from './components/ui/color-mode'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box minH={"100hv"}  bg={useColorModeValue('gray.100', "gray.900")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/create' element={<CreatePage/>} />
      </Routes>
    </Box>
  )
}

export default App
