import "/src/App.css";
import HeaderSection from './Components/Header/HeaderSection'
import { ThemeProvider } from './Context/ThemeContext'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <ThemeProvider>
      <HeaderSection/>
      <Outlet/>
      
    </ThemeProvider>
  )
}

export default App
