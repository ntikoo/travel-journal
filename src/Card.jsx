import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <section className="card-section section-margin">
        <img alt="location image" src={props.googleMapsUrl} />
      </section>
      <section className="details details-section-margin ">
        <div className="location-details ">
          <p className="padd country-p">
            <span>
              <i className="fa fa-map-marker" aria-hidden="true"></i>
            </span>
            {props.location}
          </p>
          <a
            className="a-tag"
            href="https://goo.gl/maps/1DGM5WrWnATgkSNB8"
            target="_blank"
          >
            View on google maps
          </a>
        </div>
        <h2 className="title padd">{props.title}</h2>
        <p className="date-p">
          {props.startDate} - {props.endDate}
        </p>
        <p className="desc-p">{props.description} </p>
      </section>
    </div>
  );
}
