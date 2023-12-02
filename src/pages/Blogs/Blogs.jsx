import { Helmet } from "react-helmet";
import useBlogs from "../../hooks/useBlogs";
import Blog from "./Blog";


const Blogs = () => {
    const { blogs} = useBlogs();
    const filteredBlogs = blogs.filter(blog=> blog.status === 'published');
    return (
       <div>
        <Helmet>
            <title>Blood Donation | Blogs</title>
        </Helmet>
         <div className="mt-10 mb-10">
              {filteredBlogs.length >0 ?<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-3/4 gap-5">
           {
               filteredBlogs.map(blog=><Blog key={blog._id} blog={blog}></Blog>)
            }
           </div>:
           <h1 className="text-2xl font-bold text-center text-blue-400">No blog has been published yet</h1> }
           
        </div>
       </div>
    );
};

export default Blogs;