import React from 'react';
import PropTypes from 'prop-types';

const WeatherMessage = ({ location, temperature }) => {
  return (
    <div className="row">
      <div className="col-xs-12">
        <div className="alert alert-success" role="alert">
          <h2 className="text-center">It is {temperature} degree cielcius in {location}.</h2>
        </div>
      </div>
    </div>
  );
};

WeatherMessage.propTypes = {
  location: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired
};

export default WeatherMessage;
