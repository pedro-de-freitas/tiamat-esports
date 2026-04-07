import Layout from "./components/layout/Layout"
import { ThemeProvider } from "./context/useTheme"
import Home from "./pages/home/app"

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  )
}

export default App