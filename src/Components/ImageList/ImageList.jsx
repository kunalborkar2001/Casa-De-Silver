import * as React from 'react';
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

export default function QuiltedImageList({images}) {
  return (
    <ImageList
      sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {images.map((item) => (
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

// const itemData = [
//   {
//     img: 'https://d3kanykijpjn5y.cloudfront.net/908bc97625b208280f37953804ef7419.jpg',
//     title: 'Breakfast',
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: 'https://d3kanykijpjn5y.cloudfront.net/6a5b428df8859e58d33c004e37d8a9c7.jpg',
//     title: 'Burger',
//   },
//   {
//     img: 'https://d3kanykijpjn5y.cloudfront.net/9ac89fc55573c8b22e18c15e121fb932.jpg',
//     title: 'Camera',
//   },
//   {
//     img: 'https://d3kanykijpjn5y.cloudfront.net/de05b0fdacc67fa44645376023b3c88b.jpg',
//     title: 'Coffee',
//     cols: 2,
//   },
//   {
//     img: 'https://d3kanykijpjn5y.cloudfront.net/aa33664f4555a0587dbc1ec624ef5756.jpg',
//     title: 'Hats',
//     cols: 2,
//   },
//   {
//     img: 'https://d3kanykijpjn5y.cloudfront.net/6d40563d85c4a80a45750f4c8cca36cd.jpg',
//     title: 'Honey',
//     author: '@arwinneil',
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: 'https://d3kanykijpjn5y.cloudfront.net/b8d48b9489170645fc24b6716ff1cb0e.jpg',
//     title: 'Basketball',
//   },
//   {
//     img: 'https://d3kanykijpjn5y.cloudfront.net/3c887b215663bc164532137b63c1a082.jpg',
//     title: 'Fern',
//   },
//   {
//     img: 'https://d3kanykijpjn5y.cloudfront.net/a9e749346f08b9989128528267691699.jpg',
//     title: 'Mushrooms',
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: ambience1,
//     title: 'Tomato basil',
//   },
//   {
//     img: ambience2,
//     title: 'Sea star',
//   },
//   {
//     img: "	https://d3kanykijpjn5y.cloudfront.net/b361fad3ac3cee14d9719ce197b8069d.jpg",
//     title: 'Bike',
//     cols: 2,
//   },
// ];
