
import PropTypes from 'prop-types';

const BookMark = ({ bookMark }) => {
    return (
        <div className='bg-white rounded-lg m-4'>
            <h1 className='text-sm font-semibold p-5'>{bookMark.title}</h1>
        </div>
    );
};

BookMark.propTypes = {
    bookMark: PropTypes.object.isRequired
};

export default BookMark;