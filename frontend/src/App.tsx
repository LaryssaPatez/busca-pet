import './index.css'
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"
import RouterContainer from "./routes/RouterContainer"
import { PetProvider } from './context/PetContext'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PetProvider>
        <RouterContainer/>
      </PetProvider>
    </ThemeProvider>
  )
}

export default App
