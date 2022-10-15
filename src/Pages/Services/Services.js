import React, { useEffect, useState } from "react";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://thawing-journey-77356.herokuapp.com/services")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((services) => {
        setServices(services);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setServices(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="services-container">
      <h3>Here are the services we offer</h3>
      {loading && <div> Loading...</div>}
      {error && (
        <div>{`Seems likes there's a problem loading services - ${error}`}</div>
      )}
      <ul className="storylist">
        {services &&
          services.map(({ id, image, service_type, pricing }) => (
            <li className="card" key={id}>
              <img src={image} />
              <h2>{service_type}</h2>
              <p>{pricing}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Services;
