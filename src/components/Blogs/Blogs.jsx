import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({ handleAddToBookMarks }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="col-span-2">
            <h1>total no of value: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog handleAddToBookMarks={handleAddToBookMarks} key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handleAddToBookMarks: PropTypes.func.isRequired
}
export default Blogs;