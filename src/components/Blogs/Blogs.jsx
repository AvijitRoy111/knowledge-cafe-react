import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handlerToaddBookmarks, handlerToAddReadingTime}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('Blogs.json')
        .then(res => res.json())
        .then(data =>setBlogs(data))
    },[])



    return (
        <div>
            <h1 className="mb-4 mx-32 mt-4">Blogs : {blogs.length}</h1>
            <div className="w-2/3 ">
                
                {
                    blogs.map(blog => <Blog 
                        key={blog.id} 
                        blog={blog}
                        handlerToaddBookmarks={handlerToaddBookmarks}
                        handlerToAddReadingTime ={handlerToAddReadingTime}
                        ></Blog>)
                }
                
            </div>
            
        </div>
    );
};

export default Blogs;