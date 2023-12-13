import SendIcon from "@mui/icons-material/Send";
import { Button, TextField } from "@mui/material";
import Swal from "sweetalert2";


const NewSletter = () => {

    
      

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.email.value) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "You feedback has been sent to us",
        showConfirmButton: false,
        timer: 1500,
      });
      e.target.reset();
    }
  };
  return (
    <div >
      <div className="mt-10 h-full bg-cover bg-center bg-gradient-to-r from-teal-500 to-teal-900 text-white ">
        <h3 className="text-center text-2xl italic font-semibold pt-10 mb-5">
          Send Us feedback
        </h3>
        <div className="w-3/4 mx-auto">
          <form className="space-y-4 mb-10" onSubmit={handleSubmit}>
          {/* <textarea name="message" aria-label="minimum height"/> */}
          <TextField
          rows={10}
              name="message"
              type="text"
              fullWidth
              label="Your Message"
              // id="fullWidth"
              sx={{color:'#ffff'}}
              
            />
          {/* <textarea className="textarea textarea-bordered"  placeholder="Your Feedback" ></textarea> */}
            <TextField
              name="email"
              type="email"
              fullWidth
              label="Email"
              id="fullWidth"
              sx={{color:"#ffff"}}
            />
            <Button type="submit" sx={{color:'#ffff'}} variant="contained" endIcon={<SendIcon />}>
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewSletter;