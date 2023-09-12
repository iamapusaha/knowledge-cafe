import BookMark from "../BookMark/BookMark";
import PropTypes from 'prop-types';
const BookMarks = ({ bookMarks }) => {
    return (
        <div className=" rounded-lg bg-[#1111110D]">
            <h1 className="text-base font-bold text-center py-7">Bookmarked Blogs : {bookMarks.length}</h1>
            {
                bookMarks.map((bookMark, idx) => <BookMark key={idx} bookMark={bookMark}></BookMark>)
            }
        </div>
    );
};
BookMarks.propTypes = {
    bookMarks: PropTypes.array.isRequired
};

export default BookMarks;