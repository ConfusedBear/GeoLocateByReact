import React, { Component } from 'react';



export default class App extends Component {

constructor(props) {
  super(props)
  this.state = {
    msg : "wow",
    jingdu : "",
    weidu : ""
  }

}


success = (pos) => {
  var lng = pos.coords.longitude
  var lat = pos.coords.latitude

  this.setState ({
    msg : "lng: " + lng + "lat: " + lat,
    jingdu : lng,
    weidu : lat,
  })
}

error = (err) => {
  this.setState({
    msg : "Error: " + err
  })
}


requestLocation = () => {
  var options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0
  }

  // eslint-disable-next-line no-undef
  navigator.geolocation.getCurrentPosition(this.success, this.error, options)
}


  render() {
    this.requestLocation()

    return (
      <div>
      <h1>test</h1>
        <b>{this.state.msg}</b>
      </div>
    )
  }
}