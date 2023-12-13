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
        {/* <h2 className="bg-[#000000] text-4xl text-white font-bold">Black</h2>
        <h2 className="bg-[#333333] text-4xl text-white font-bold">Dark gray </h2>
        <h2 className="bg-[#555555] text-4xl text-white font-bold">Charcoal Gray </h2>
        <h2 className="bg-[#000080] text-4xl text-white font-bold">Navy blue </h2>
        <h2 className="bg-[#228B22] text-4xl text-white font-bold">Frost green</h2>
        <h2 className="bg-[#008080] text-4xl text-white font-bold">Teal or Turquoise: </h2> */}
         <div className="mt-10 mb-10 text-black">
              {filteredBlogs.length >0 ?<div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5">
           {
               filteredBlogs.map(blog=><Blog key={blog._id} blog={blog}></Blog>)
            }
           </div>
              </div>:
           <h1 className="text-2xl min-h-screen flex justify-center items-center font-bold text-center text-red-600">No blog has been published yet</h1> }
           
        </div>
       </div>
    );
};

export default Blogs;