import "./Location.css"

const Location = () => {
  return (
    <div className="Location" id="Location">
      <h1>Location</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7561.82628897964!2d73.756092!3d18.622976!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDM3JzIyLjciTiA3M8KwNDUnMzEuMiJF!5e0!3m2!1sen!2sin!4v1707660981585!5m2!1sen!2sin"
        className="map"
        height="450"
        style={{ border: "0" }} 
        loading="lazy"
        title="location"
      >
      </iframe>
    </div>
  );
};

export default Location;
