import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'

function App() {
  const [bookMarks, setBookMarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)
  const handleAddToBookMarks = (blog) => {
    const newBookMarks = [...bookMarks, blog]
    setBookMarks(newBookMarks)
  }
  const handleMarkAsRead = (time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
  }

  return (
    <>
      <Header></Header>
      <main className='grid grid-cols-3 container mx-auto gap-6'>
        <Blogs handleAddToBookMarks={handleAddToBookMarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <BookMarks bookMarks={bookMarks} readingTime={readingTime}>
        </BookMarks>
      </main>
    </>
  )
}

export default App
