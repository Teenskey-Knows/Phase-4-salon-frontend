import React, { useEffect, useState } from "react";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/?_limit=10")
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
      <ul>
        {services &&
          services.map(({ id, title, body }) => (
            <li key={id}>
              <h2>{title}</h2>
              <p>{body}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Services;
