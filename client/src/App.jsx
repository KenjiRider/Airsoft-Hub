import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EventDetails from './pages/EventDetails'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import Events from './pages/Events'
import Teams from './pages/Teams'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import MyEvents from "./pages/MyEvents";
import CreateEvent from "./pages/CreateEvent";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/my-events" element={<MyEvents />} />
        <Route path="/create-event" element={<CreateEvent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
