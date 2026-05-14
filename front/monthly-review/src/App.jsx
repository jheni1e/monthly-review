import './App.css'
import EventCard from './components/EventCard'
import { mockEvents } from './mocks/mockEvents'

function App() {
  return (
    <>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column" }}>
      <h1>Testing the Inter font</h1>
      <EventCard event={mockEvents[0]} />
    </div>
    </>
  )
}

export default App
