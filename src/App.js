import Top from './components/top/top'
import Aside from './components/aside/aside'
import WorkingArea from './components/workingArea/workingArea'
import './App.scss'

function App() {
  return (
    <main className="App main">
      <Top />
      <WorkingArea />
      <Aside />
    </main>
  )
}

export default App