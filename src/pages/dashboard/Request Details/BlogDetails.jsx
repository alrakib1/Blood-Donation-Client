import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const BlogDetails = () => {
    const params = useParams();
    const axiosPublic = useAxiosPublic();
  
    const {data: blog=[]} = useQuery({
        queryKey: ['blog'],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/blog/${params.id}`)
            return res.data;
        }
    })
   
    return (
        <div className="h-screen pt-5">
            <h1 className="text-2xl text-center font-bold">{blog.title}</h1>
           <div className="mx-auto mb-10 pt-5 max-w-[640px] max-h-[336px]"> <img src={blog.image} alt="" /></div>
           <p className="text-base p-5">Content: {blog.content}</p>
        </div>
    );
};

export default BlogDetails;