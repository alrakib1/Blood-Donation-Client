import SendIcon from "@mui/icons-material/Send";
import { Button, TextField } from "@mui/material";
import Swal from "sweetalert2";
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';

const NewSletter = () => {

    const blue = {
        100: '#DAECFF',
        200: '#b6daff',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E5',
        900: '#003A75',
      };
    
      const grey = {
        50: '#F3F6F9',
        100: '#E5EAF2',
        200: '#DAE2ED',
        300: '#C7D0DD',
        400: '#B0B8C4',
        500: '#9DA8B7',
        600: '#6B7A90',
        700: '#434D5B',
        800: '#303740',
        900: '#1C2025',
      };
    
      const Textarea = styled(BaseTextareaAutosize)(
        ({ theme }) => `
        width: 320px;
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 8px 12px;
        border-radius: 8px;
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
        box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    
        &:hover {
          border-color: ${blue[400]};
        }
    
        &:focus {
          border-color: ${blue[400]};
          box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
        }
    
        // firefox
        &:focus-visible {
          outline: 0;
        }
      `,
      );


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
    }
  };
  return (
    <div >
      <div className="mt-10 h-full bg-cover bg-center bg-slate-200 ">
        <h3 className="text-center text-2xl italic font-semibold pt-10 mb-5">
          Send Us feedback
        </h3>
        <div className="w-3/4 mx-auto">
          <form className="space-y-4 mb-10" onSubmit={handleSubmit}>
          <Textarea name="message" aria-label="minimum height" minRows={3} placeholder="Your Feedback" />
            <TextField
              name="email"
              type="email"
              fullWidth
              label="Email"
              id="fullWidth"
            />
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewSletter;