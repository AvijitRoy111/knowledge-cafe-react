import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/Bookmarks/BookMarks'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [bookmarks, setBooksmakrs] =useState([]);

  const handlerToaddBookmarks = blog =>{
    console.log(bookmarks)
  }

  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className='md:flex'>
          <Blogs
            handlerToaddBookmarks ={handlerToaddBookmarks}
          ></Blogs>
          <BookMarks></BookMarks>
        </div>
      </div>

     
    </>
  )
}

export default App
