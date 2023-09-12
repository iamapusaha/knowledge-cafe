import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'

function App() {
  const [bookMarks, setBookMarks] = useState([])
  const handleAddToBookMarks = (blog) => {
    const newBookMarks = [...bookMarks, blog]
    setBookMarks(newBookMarks)
  }

  return (
    <>
      <Header></Header>
      <main className='grid grid-cols-3 container mx-auto gap-6'>
        <Blogs handleAddToBookMarks={handleAddToBookMarks}></Blogs>
        <BookMarks bookMarks={bookMarks}>
        </BookMarks>
      </main>
    </>
  )
}

export default App
