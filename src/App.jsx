import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'

function App() {
  const [bookMarks, setBookMarks] = useState([])
  const handleAddToBookMarks = (blog) => {
    console.log(`handle book marks added! ${blog}`);
  }

  return (
    <>
      <Header></Header>
      <main className='grid grid-cols-3 container mx-auto gap-6'>
        <Blogs handleAddToBookMarks={handleAddToBookMarks}></Blogs>
        <BookMarks></BookMarks>
      </main>
    </>
  )
}

export default App
