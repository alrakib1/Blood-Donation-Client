import { Helmet } from "react-helmet";

import Blog from "./Blog";
import useShowBlogs from "../../hooks/useShowBlogs";
import { Stack } from "@mui/system";
import { Skeleton } from "@mui/material";

const Blogs = () => {
  const { blogs, isLoading } = useShowBlogs();

  return (
    <div>
      <Helmet>
        <title>Blood Donation | Blogs</title>
      </Helmet>
      {isLoading ? (
        <div className="mt-10 flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5">
            <Stack>
              <Skeleton
                variant="rectangular"
                width={250}
                animation="wave"
                height={120}
              />
              <Skeleton
                variant="text"
                width={250}
                animation="wave"
                sx={{ fontSize: "1rem" }}
              />
              <Skeleton
                variant="text"
                width={250}
                animation="wave"
                sx={{ fontSize: "1rem" }}
              />
              <Skeleton
                variant="rounded"
                width={250}
                animation="wave"
                height={60}
              />
            </Stack>
            <Stack>
              <Skeleton
                variant="rectangular"
                width={250}
                animation="wave"
                height={120}
              />
              <Skeleton
                variant="text"
                width={250}
                animation="wave"
                sx={{ fontSize: "1rem" }}
              />
              <Skeleton
                variant="text"
                width={250}
                animation="wave"
                sx={{ fontSize: "1rem" }}
              />
              <Skeleton
                variant="rounded"
                width={250}
                animation="wave"
                height={60}
              />
            </Stack>
            <Stack>
              <Skeleton
                variant="rectangular"
                width={250}
                animation="wave"
                height={120}
              />
              <Skeleton
                variant="text"
                width={250}
                animation="wave"
                sx={{ fontSize: "1rem" }}
              />
              <Skeleton
                variant="text"
                width={250}
                animation="wave"
                sx={{ fontSize: "1rem" }}
              />
              <Skeleton
                variant="rounded"
                width={250}
                animation="wave"
                height={60}
              />
            </Stack>
            <Stack>
              <Skeleton
                variant="rectangular"
                width={250}
                animation="wave"
                height={120}
              />
              <Skeleton
                variant="text"
                width={250}
                animation="wave"
                sx={{ fontSize: "1rem" }}
              />
              <Skeleton
                variant="text"
                width={250}
                animation="wave"
                sx={{ fontSize: "1rem" }}
              />
              <Skeleton
                variant="rounded"
                width={250}
                animation="wave"
                height={60}
              />
            </Stack>
          </div>
        </div>
      ) : (
        <div className="mt-10 mb-10 text-black">
          <div className="flex justify-center">
            {blogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5">
                {blogs.map((blog) => (
                  <Blog key={blog._id} blog={blog}></Blog>
                ))}
              </div>
            ) : (
              <h1 className="text-2xl lg:mt-20 flex justify-center items-center font-bold text-center text-white">
                Blogs have not been published yet
              </h1>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
