import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddBlog = () => {
  const { register, handleSubmit,reset } = useForm();

  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    // console.log(data, imageFile);

    const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        // image url from image bb

        const thumbnail= res.data.data.display_url;
        const blogData = {
            title: data.title,
            image: thumbnail,
            content: data.content,
            status : 'draft',
        }

        const result = await axiosPublic.post('/addBlog',blogData)
        if(result.data.insertedId){
            reset();
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Blog has been added",
                showConfirmButton: false,
                timer: 1500
              });
        }

      }
  };

  return (
    <div>
      <Helmet>
        <title>Blood Donation | Add Blog</title>
      </Helmet>
      <h2 className="text-center text-xl font-bold my-5">Add blog</h2>
      <div>
        <div className="mb-10 bg-red-500 shadow-lg">
          <div className="p-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <p className="text-sm font-semibold mb-2 text-white">Title*</p>
              <input
                {...register("title", { required: true })}
                type="text"
                placeholder="blog title"
                className="input input-bordered md:w-1/2"
              />

              <p className="text-sm font-semibold mt-5 mb-2 text-white">
                Thumbnail Image*
              </p>

              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input border-0 file-input-bordered file-input-sm w-full mb-4 max-w-xs"
              />
              <p className="text-sm font-semibold mt-5 mb-2 text-white">
                Content*
              </p>
              <textarea
                {...register("content", { required: true })}
                type="text"
                placeholder="content"
                className="input input-bordered w-full"
              ></textarea>

              <br />
              <button
                type="submit"
                className="text-red-500 shadow-lg btn bg-white border-0 mb-5 hover:bg-blue-500 hover:text-white"
              >
                Add Blog
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
