import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const { title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div>
            <img className='w-full rounded-lg mb-8' src={cover} alt={`this image abourt ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-6'>
                    <img className='w-14 ' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p className='text-base font-semibold'>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <p>{reading_time} min read</p>
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
    blog: PropTypes.object.isRequired
}
export default Blog;