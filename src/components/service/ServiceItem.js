import React from "react";

const ServiceItem = ({service}) => {

  const shortText = (text, maxLength = 50) => {

    if (!text) { return ' '}
    if (text.length <= maxLength) { return text }

    return text.substr(0, maxLength) + '...'
  }

  return (
    <div
      key={service.id}
      className="column is-one-third">
      <div className="feature-card is-bordered has-text-centered revealOnScroll delay-1" data-animation="fadeInLeft">
        <div className="card-title">
          <h4>{service.title}</h4>
        </div>
        <div className="card-icon">
          <img src={service.image} alt=""/>
        </div>
        <div className="card-text">
          <p>{shortText(service.description)}</p>
        </div>
        <div className="card-action">
          <a href="#" className="button btn-align-md accent-btn raised">Free Trial</a>
        </div>
      </div>
    </div>
  )
}

export default ServiceItem