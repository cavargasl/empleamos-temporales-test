import "./App.css"
import { NavBar } from "./components/NavBar"
import { Home } from "./page"
import { LayoutContainer } from "./styled-components"

function App() {
  return (
    <>
      <NavBar />
      <LayoutContainer>
        <Home />
      </LayoutContainer>
    </>
  )
}

export default App
