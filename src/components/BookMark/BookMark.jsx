
const BookMark = ({bookmark}) => {
    const {description} = bookmark;
    return (
        <div >
            
            <div className="bg-[#FFFFFF] rounded-2xl mx-4 mb-5">
                <h3 className="text-xl font-semibold text-black py-2 px-3 ">Title : {description.slice(0,30)}</h3>
            </div>
        </div>
    );
};

export default BookMark;