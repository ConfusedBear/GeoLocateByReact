import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp'


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      msg: "wow",
      GPSlng: "120",
      GPSlat: "30",
      Baidulng: "120",
      Baidulat: "30",
      address: "读取中"
    }
    
    
  }

  GPStoBaidu = () => {
    let url = "http://api.map.baidu.com/geoconv/v1/?coords=" + this.state.GPSlng + "," + this.state.GPSlat + "&from=1&to=5&ak=mUUbFKtgsaM2rWyuLLIDcyrSkhvGYzmn"
    console.log("url:"+url)
    fetchJsonp(url, {
      method: "GET",
      mode: 'cors',
      headers: {
        Accept : 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        // 'Access-Control-Allow-Origin': '*'
      },
      jsonpCallbackFunction: 'showLocation'
    }).then((response) => {
      return response.json()
    }).then(data => {
      let temp = data["result"]
      temp = temp[0]
      // this.state.Baidulng = temp["x"]
      // this.state.Baidulat = temp["y"]
      this.setState({
        Baidulng: temp["x"],
        Baidulat: temp["y"],
      })
    })
  }

  BaidutoAddress = () => {
    let url = "http://api.map.baidu.com/geocoder/v2/?location=" + this.state.Baidulat + "," + this.state.Baidulng + "&output=json&pois=1&latest_admin=1&ak=mUUbFKtgsaM2rWyuLLIDcyrSkhvGYzmn"
    console.log("url:"+url)
    fetchJsonp(url, {
      method: "GET",
      mode: 'cors',
      headers: {
        Accept : 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        // 'Access-Control-Allow-Origin': '*'
      },
      jsonpCallbackFunction: 'showLocation'
    }).then((response) => {
      return response.json()
    }).then(data => {
      let temp = data["result"]
      temp = temp["formatted_address"]
      this.setState({
        address: temp
      })
      // this.state.address = temp
    })
  }


  success = (pos) => {
    this.setState({
      GPSlng: pos.coords.longitude,
      GPSlat: pos.coords.latitude,
    })
  }

  error = (err) => {
    this.setState({
      
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
    this.GPStoBaidu()
    this.BaidutoAddress()
    

    return (
      <div style={{ padding: '20px' }}>
        <h1>GPSlng: {this.state.GPSlng} GPSlat: {this.state.GPSlat}</h1>
        <br/>
        <h1>Baidulng: {this.state.Baidulng} Baidulat: {this.state.Baidulat}</h1>
        <br/>
        <h1>Address: {this.state.address}</h1>
      </div>
    )
  }
}