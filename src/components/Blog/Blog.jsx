import { IoBookmarksOutline } from 'react-icons/io5';
const Blog = ({blog, handlerToaddBookmarks , handlerToAddReadingTime}) => {
    const {coverImg, author, authorImage, publishDate, readTime, tags, description} = blog

    return (
        <div >
            <div className="bg-[#cccaca] rounded-2xl w-full mx-32 mb-10">
                <div>
                    <img className="w-[850px] rounded-t-2xl" src={coverImg} alt="image" />
                </div>
                <div className="flex justify-between items-center mx-6 pt-4">
                    <div className="flex gap-5 items-center"> 
                    <div>
                        <img className="rounded-full w-20" src={authorImage} alt="" />
                    </div>
                    <div className="">
                        <h3 className="text-black text-xl font-bold">{author}</h3>
                        <p  className="text-black text-base font-normal">{publishDate}</p>
                    </div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <div className='text-base font-normal'>
                            <h3>{readTime}</h3>
                        </div>
                        <div className='text-xl font-medium'>
                            <button onClick={() => handlerToaddBookmarks(blog)}
                            ><IoBookmarksOutline></IoBookmarksOutline>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mx-6 pt-5 pr-16">
                    <p className="text-2xl text-black font-bold">{description}</p>
                </div>
                <div className="text-base font-normal text-gray-800 mx-6 pt-4 flex gap-10 pb-6">
                    {
                        tags.map((tag, idx) => <span key={idx}><a>{tag}</a></span>)
                    }
                </div>
                <div className='pb-8'>
                    <button onClick={() =>handlerToAddReadingTime(readTime)}
                        className='text-xl font-medium text-[#6047EC]  underline underline-offset-2 decoration-[#6047EC]  ml-4  mr-[450px]'
                        >Mark as read</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;