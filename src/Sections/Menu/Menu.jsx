import "./Menu.css"
import Image from 'react-bootstrap/Image';
import Grid from '@mui/material/Unstable_Grid2';

const Menu = () => {
  return (
    <div className="Menu">
      <div className="menuHeading">
        <h1>Menu</h1>
      </div>
      <Grid container spacing={2}>
        <Grid xs={6} md={4} lg={3} >
          <div className="gridMenu">
            <Image className="menuImg" src="https://d3kanykijpjn5y.cloudfront.net/category-33451-small-200.jpg" alt="kunalborkar2001@gmail.com" />
            <h3>Best Seller</h3>
          </div>
        </Grid>
        <Grid xs={6} md={4} lg={3}>
          <div className="gridMenu">
            <Image className="menuImg" src="https://d3kanykijpjn5y.cloudfront.net/category-32553-small-200.jpg" alt="kunalborkar2001@gmail.com" />
            <h3 className="food">Food</h3>
          </div>
        </Grid>
        <Grid xs={6} md={4} lg={3}>
          <div className="gridMenu">
            <Image className="menuImg" src="https://d3kanykijpjn5y.cloudfront.net/category-32761-small-200.jpg" alt="kunalborkar2001@gmail.com" />
            <h3 className="dessert">Desserts</h3>
          </div>
        </Grid>
        <Grid xs={6} md={4} lg={3}>
          <div className="gridMenu">
            <Image className="menuImg" src="https://d3kanykijpjn5y.cloudfront.net/category-32762-small-200.jpg" alt="kunalborkar2001@gmail.com" />
            <h3>Beverages</h3>
          </div>
        </Grid>
        <Grid xs={6} md={4} lg={3}>
          <div className="gridMenu">
            <Image className="menuImg" src="https://d3kanykijpjn5y.cloudfront.net/category-33455-small-200.jpg" alt="kunalborkar2001@gmail.com" />
            <h3 className="drinks">Drinks</h3>
          </div>
        </Grid>

      </Grid>
    </div>
  )
}

export default Menu