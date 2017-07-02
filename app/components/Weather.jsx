import React from 'react';
import createReactClass from 'create-react-class';

import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

const Weather = createReactClass({
  getInitialState() {
    return {
      isLoading: false
    };
  },
  handleSearch(location) {

    this.setState({ isLoading: true });
    
    openWeatherMap.getTemp(location).then( temp => {
      return this.setState({
        location: location,
        temperature: temp,
        isLoading: false
      });
    }).catch( () => {
      this.setState({ isLoading: false });
    });
  },
  render () {
    let { isLoading, location, temperature } = this.state;
    const renderMessage = () => {
      if (isLoading) {
        return <div className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-success progress-bar-animated"
            role="progressbar" aria-valuenow="100" aria-valuemin="0"
            aria-valuemax="100" style={{width:'90%'}}>
             searching... </div></div>;
      }else if(location && temperature) {
        return <WeatherMessage location={ location } temperature={ temperature }/>;
      }else {
        return <div className="row">
          <div className="col-xs-12">
            <div className="alert alert-success" role="alert">
              <h2 className="text-center">Please enter Your city name.</h2>
            </div>
          </div>
        </div>;
      }
    };
    return (
      <div className="row">
        <div className="col col-md-6 col-md-offset-3">
          <div className="row">
            <div className="col-xs-12">
              <h1 className='text-center alert alert-success'>Weather Prodcasting</h1>
            </div>
          </div>
          <WeatherForm onSearch={ this.handleSearch }/>
          {renderMessage()}
        </div>
      </div>
    );
  }
});

export default Weather;
