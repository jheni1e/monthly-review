import './App.css'
import DayCell from './components/DayCell'
import { mockEvents } from './mocks/mockEvents'

function App() {
  return (
    <>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column" }}>
      <h1>May 2026</h1>
      <DayCell day={1} events={mockEvents} />
    </div>
    </>
  )
}

export default App
