import React from "react";
import { Link } from "react-router-dom";
import data from "../../data/data.json";

const Card = () => {

  console.log(data);

  return (
    <>
      {data.map((item) => {
        return (
          <div className="cards">
            <div className="single-card">
              <div className="card-header">
                <span className="company">{item.name}</span>
                <Link to={`/profile/${item.id}`}>
                  <img
                    alt=""
                    src="/images/eye-solid.svg"
                    className="eye"
                  />
                </Link>
              </div>
              <div className="image">
                <img alt="" src="/images/image1.png" className="company-logo" />
              </div>
              <span className="progress-text">{item.status}</span>
              <div className="card-bottom">
                <div className="company-data">
                  <span>
                    Created At:{" "}
                    {new Date(item.created_at).toLocaleString(`en-US`)}
                  </span>
                  <span>
                    Updated At:{" "}
                    {new Date(item.updated_at).toLocaleString(`en-US`)}
                  </span>
                </div>
                <div className="company-data">
                  <span>Batch Processed: {item.batchprocessed}</span>
                  <span>Frequency: {item.frequency}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
