import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'

function App() {


  return (
    <>
      <Header></Header>
      <main className='grid grid-cols-3 container mx-auto gap-6'>
        <Blogs></Blogs>
        <BookMarks></BookMarks>
      </main>
    </>
  )
}

export default App
