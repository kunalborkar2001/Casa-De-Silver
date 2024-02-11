import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import QuiltedImageList from '../ImageList/ImageList';
import ambience1 from '../../Assets/ambience1.jpeg'
import ambience2 from '../../Assets/ambience2.jpeg'

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const ambienceImg = [
        {
          img: 'https://d3kanykijpjn5y.cloudfront.net/908bc97625b208280f37953804ef7419.jpg',
          title: 'Breakfast',
          rows: 2,
          cols: 2,
        },
        {
          img: 'https://d3kanykijpjn5y.cloudfront.net/6a5b428df8859e58d33c004e37d8a9c7.jpg',
          title: 'Burger',
        },
        {
          img: 'https://d3kanykijpjn5y.cloudfront.net/9ac89fc55573c8b22e18c15e121fb932.jpg',
          title: 'Camera',
        },
        {
          img: 'https://d3kanykijpjn5y.cloudfront.net/de05b0fdacc67fa44645376023b3c88b.jpg',
          title: 'Coffee',
          cols: 2,
        },
        {
          img: 'https://d3kanykijpjn5y.cloudfront.net/aa33664f4555a0587dbc1ec624ef5756.jpg',
          title: 'Hats',
          cols: 2,
        },
        {
          img: 'https://d3kanykijpjn5y.cloudfront.net/6d40563d85c4a80a45750f4c8cca36cd.jpg',
          title: 'Honey',
          author: '@arwinneil',
          rows: 2,
          cols: 2,
        },
        {
          img: 'https://d3kanykijpjn5y.cloudfront.net/b8d48b9489170645fc24b6716ff1cb0e.jpg',
          title: 'Basketball',
        },
        {
          img: 'https://d3kanykijpjn5y.cloudfront.net/3c887b215663bc164532137b63c1a082.jpg',
          title: 'Fern',
        },
        {
          img: 'https://d3kanykijpjn5y.cloudfront.net/a9e749346f08b9989128528267691699.jpg',
          title: 'Mushrooms',
          rows: 2,
          cols: 2,
        },
        {
          img: ambience1,
          title: 'Tomato basil',
        },
        {
          img: ambience2,
          title: 'Sea star',
        },
        {
          img: "	https://d3kanykijpjn5y.cloudfront.net/b361fad3ac3cee14d9719ce197b8069d.jpg",
          title: 'Bike',
          cols: 2,
        },
      ];


    
      const foodImg = [
        {
          img: 'https://d3kanykijpjn5y.cloudfront.net/237a209bbcf4fdbdc51c6b192275de64.jpg',
          title: 'Breakfast',
          rows: 2,
          cols: 2,
        },
        {
          img: 'https://d3kanykijpjn5y.cloudfront.net/9d86d7199a058b84417207290f74f480.jpg',
          title: 'Burger',
        },
        {
          img: 'https://d3kanykijpjn5y.cloudfront.net/b1295cf1e7c62cdfa7c5936de0b3afc8.jpg',
          title: 'Camera',
        },
        {
          img: 'https://d3kanykijpjn5y.cloudfront.net/2275a5172ba51e4cab39c7ce257990c9.jpg',
          title: 'Coffee',
          cols: 2,
        },
        {
          img: 'https://d3kanykijpjn5y.cloudfront.net/cc47a86dbf7dd4c6541b5c1429610266.jpg',
          title: 'Hats',
          cols: 2,
        },
        {
          img: 'https://d3kanykijpjn5y.cloudfront.net/f6ea7ea709541a2a0405a7b088676032.jpg',
          title: 'Honey',
          author: '@arwinneil',
          rows: 2,
          cols: 2,
        },
        {
          img: 'https://d3kanykijpjn5y.cloudfront.net/4ce5c8f881c55a405bd605d057440fef.jpg',
          title: 'Basketball',
        },
        {
          img: 'https://d3kanykijpjn5y.cloudfront.net/0f3429d2326be55ae2bb118f591c54ca.jpg',
          title: 'Fern',
        },
        {
          img: 'https://d3kanykijpjn5y.cloudfront.net/8d85bed484af776909d5a3387721e956.jpg',
          title: 'Mushrooms',
          rows: 2,
          cols: 2,
        },
      ];

    return (
        <Box sx={{ textAlign : "center" }}  >
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Ambience" />
                    <Tab label="Food" />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0} >
                <QuiltedImageList images={ambienceImg}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
            <QuiltedImageList images={foodImg}/>
            </CustomTabPanel>
        </Box>
    );
}