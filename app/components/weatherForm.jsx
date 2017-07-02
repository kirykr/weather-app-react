import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';

const WeatherForm = createReactClass({
  componentDidMount() {
    this._input.focus();
  },
  onFormSubmit(event) {
    event.preventDefault();
    let location = this._input.value;
    if ( location.length > 0 ) {
      this._input.value = '';
      this.props.onSearch(location);
    }
  },
  propTypes: {
    onSearch: PropTypes.func.isRequired
  },
  render () {
    return (
      <div className="row">
        <div className="col-xs-12">
          <form onSubmit={ this.onFormSubmit }>
            <fieldset className="alert alert-success">
              <div className="form-group has-success col-xs-12">
                <input type="text" className="form-control input-lg" ref={ (ref) => this._input = ref } id="exampleInputEmail1" placeholder="Enter your City Name..." />
              </div>
              <div className="col-xs-12 has-success">
                <button type="submit" className="btn btn-lg btn-block btn-info">Get The Weather</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
});

export default WeatherForm;
