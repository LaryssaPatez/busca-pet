import './index.css'
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"
import RouterContainer from "./routes/RouterContainer"
import { PetProvider } from './context/PetContext'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <PetProvider>
          <RouterContainer/>
        </PetProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
