import { useQuery } from "@tanstack/react-query";
import HTMLReactParser from "html-react-parser";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

import useAxiosSecure from "../../../hooks/useAxiosSecure";

const BlogDetails = () => {
  const params = useParams();

  const axiosSecure = useAxiosSecure();

  const {
    data: blog = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blog"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/blog/${params.id}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <span className="loading loading-spinner min-h-screen flex justify-center items-center mx-auto loading-lg"></span>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

//   console.log(blog && blog.content && blog.content.content);

  return (
    <div className= "shadow-lg pt-5 min-h-screen">
      <Helmet>
        <title>Blog | Details</title>
      </Helmet>
      <h1 className="text-3xl text-center font-bold">{blog.title}</h1>
      <div className="mx-auto mb-10 pt-5 max-w-[640px] max-h-[336px]">
        {" "}
        <img className="min-w-[320px] mx-auto md:min-w-[400px] md:min-h-[250px] lg:min-w-[640px] lg:min-h-[336px] max-w-[320px] md:max-w-[400px] md:max-h-[250px] lg:max-w-[640px] lg:max-h-[336px]" src={blog.image} alt={blog.title} />
      </div>
      <p className="text-base p-5">{HTMLReactParser(blog?.content?.content)}</p>
    </div>
  );
};

export default BlogDetails;
