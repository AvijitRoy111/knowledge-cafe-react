import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/Bookmarks/BookMarks'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [bookmarks, setBooksmakrs] =useState([]);
  const [readingTime, setReadingTime] =useState(0)

  const handlerToaddBookmarks = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBooksmakrs(newBookmarks);
  }

  const handlerToAddReadingTime = time =>{
    const timeNumber = parseInt(time);
    const newReadingTime = readingTime + timeNumber ;
    setReadingTime(newReadingTime)
  }
  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className='md:flex'>
          <Blogs
            handlerToaddBookmarks ={handlerToaddBookmarks}
            handlerToAddReadingTime ={handlerToAddReadingTime}
          ></Blogs>
          <BookMarks
            bookmarks ={bookmarks}
            readingTime ={readingTime}
          ></BookMarks>
        </div>
      </div>

     
    </>
  )
}

export default App
