import PropTypes from 'prop-types';
import { BookmarkIcon } from '@heroicons/react/24/solid';

const Blog = ({ blog, handleAddToBookMarks }) => {
    const { title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div>
            <img className='w-full rounded-lg mb-8' src={cover} alt={`this image abourt ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-6'>
                    <img className='w-14 ' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p className='text-base font-semibold text-[#11111199]'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-1 text-xl font-semibold text-[#11111199]'>
                    <p>{reading_time} min read</p>
                    <button onClick={() => handleAddToBookMarks(`${title}`)}><BookmarkIcon className="h-6 w-6"></BookmarkIcon></button>
                </div>
            </div>
            <p className='text-4xl font-bold my-4'>{title}</p>
            <div className='mb-5'>
                {
                    hashtags.map((hash, idx) => <span key={idx}> #{hash}</span>)
                }
            </div>
            <a className='text-sm font-semibold text-[#6047EC]' href="#">Mark as read</a>
            <div className='my-10'>
                <hr />
            </div>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookMarks: PropTypes.func.isRequired
}
export default Blog;