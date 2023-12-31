
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Gallery() {
  return (
    <ImageList
      sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://i.ibb.co/qmLBzsK/images.jpg',
    title: '',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.ibb.co/x5KXDmv/images-1.jpg',
    title: '',
  },
  {
    img: 'https://i.ibb.co/nr0pjzt/Blood-Donation-Campaign-in-ULAB-Dec-22-300x300.jpg',
    title: '',
  },
  {
    img: 'https://i.ibb.co/b3r7Ts8/642150b9adb06295793895.jpg',
    title: '',
    cols: 2,
  },
  {
    img: 'https://i.ibb.co/8gbXyDL/images-3.jpg',
    title: '',
    cols: 2,
  },
  {
    img: 'https://i.ibb.co/TRJJ5ZM/19-csralbum-77.jpg',
    title: '',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.ibb.co/Wc8g2ZV/images-4.jpg',
    title: '',
  },
  {
    img: 'https://i.ibb.co/LCkNbhW/istockphoto-1335544846-612x612.jpg',
    title: '',
  },
  {
    img: 'https://i.ibb.co/8mtNDMY/images-6.jpg',
    title: '',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.ibb.co/syG8jGc/2-0.jpg',
    title: '',
  },
  {
    img: 'https://i.ibb.co/x6FkTpf/23-2.jpg',
    title: '',
  },
  {
    img: 'https://i.ibb.co/s9PB6k5/26772-hd.jpg',
    title: '',
    cols: 2,
  },
];