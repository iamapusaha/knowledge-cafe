import BookMark from "../BookMark/BookMark";
import PropTypes from 'prop-types';
const BookMarks = ({ bookMarks, readingTime }) => {
    return (
        <div>
            <div className="mb-6">
                <h1 className="text-2xl py-5 text-center bg-[#6047E41A] border border-indigo-600 rounded-lg font-bold text-[#6047EC]">Spent time on read : {readingTime} min</h1>
            </div>
            <div className=" rounded-lg bg-[#1111110D] h-fit pb-2">
                <h1 className="text-2xl font-bold text-center py-7">Bookmarked Blogs : {bookMarks.length}</h1>
                {
                    bookMarks.map((bookMark, idx) => <BookMark key={idx} bookMark={bookMark}></BookMark>)
                }
            </div>
        </div>
    );
};
BookMarks.propTypes = {
    bookMarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
};

export default BookMarks;