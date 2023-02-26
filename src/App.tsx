import { HashRouter } from "react-router-dom"
import { AppRoutes } from '../AppRoutes'

function App() {
  return (
    <div className="App">
      <HashRouter>
          <AppRoutes />
      </HashRouter>
    </div>
  )
}

export default App
