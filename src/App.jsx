import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter , Route , Routes} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Notes from './pages/Notes'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Courses from './pages/Courses'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Video from './pages/Video'
import CreateTeacher from './founder/CreateTeacher'
import UpdateTeacher from './founder/UpdateTeacher'
import FounderInfo from './founder/FounderInfo'
import AddCourses from './founder/AddCourses'


function App() {
  

  return <BrowserRouter>
  <Header />
  <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/notes" element={<Notes/>} />
      <Route path="/courses" element={<Courses/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/video" element={<Video/>} />
      <Route path='/create' element={<CreateTeacher/>}/>
      <Route path="/update" element={<UpdateTeacher/>} />
      <Route path="/founderinfo" element={<FounderInfo/>} />
      <Route path="/founder/addCourses" element={<AddCourses/>} />
    </Routes>
    {/* <Footer /> */}
    
  </BrowserRouter>
}

export default App
