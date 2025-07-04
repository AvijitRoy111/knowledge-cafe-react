import BookMark from "../BookMark/BookMark";

const BookMarks = ({bookmarks, readingTime}) => {
    return (

        <div className="w-1/3 mt-4 bg-[#1111110D] mr-32 rounded-2xl">
            <div>
                <h3 className="text-xl font-bold text-[#6047EC] text-center py-4 border-b-2 border-[#6047EC] mx-6">Spent time on read : {readingTime}</h3>
            </div>
        <h1 className="text-2xl font-bold text-black py-4 text-center">
            Bookmarked Blogs : {bookmarks?.length || 0}
        </h1>

        <div className="text-center space-y-4 pb-4">
            {
            bookmarks?.map((bookmark, idx) => (
                <BookMark 
                key={bookmark.id || idx}
                 bookmark={bookmark}

                  />
            ))
            }
        </div>
        </div>

    );
};

export default BookMarks;