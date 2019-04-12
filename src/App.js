import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp'
import { Button } from 'antd'
import './App.css'


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      msg: "wow",
      GPSlng: "0",
      GPSlat: "0",
      Baidulng: "0",
      Baidulat: "0",
      address: "读取中"
    }

  }


  GPStoBaidutoAddress = () => {
    let url = "http://api.map.baidu.com/geoconv/v1/?coords=" + this.state.GPSlng + "," + this.state.GPSlat + "&from=1&to=5&ak=mUUbFKtgsaM2rWyuLLIDcyrSkhvGYzmn"
    console.log("url:" + url)
    fetchJsonp(url, {
      method: "GET",
      mode: 'cors',
      headers: {
        Accept: 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        // 'Access-Control-Allow-Origin': '*'
      },
      jsonpCallbackFunction: 'showLocation'
    }).then((response) => {
      return response.json()
    }).then(data => {
      let temp = data["result"]
      temp = temp[0]
      this.state.Baidulng = temp["x"]
      this.state.Baidulat = temp["y"]
      this.setState({

      })
      url = "http://api.map.baidu.com/geocoder/v2/?location=" + this.state.Baidulat + "," + this.state.Baidulng + "&output=json&pois=1&latest_admin=1&ak=mUUbFKtgsaM2rWyuLLIDcyrSkhvGYzmn"
      console.log("url:" + url)
      fetchJsonp(url, {
        method: "GET",
        mode: 'cors',
        headers: {
          Accept: 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
          // 'Access-Control-Allow-Origin': '*'
        },
        jsonpCallbackFunction: 'showLocation'
      }).then((response) => {
        return response.json()
      }).then(data => {
        let temp = data["result"]
        temp = temp["formatted_address"]
        // this.setState({ 
        //   address: temp
        // })
        this.state.address = temp
        this.setState({

        })
      })
      // this.setState({
      //   Baidulng: temp["x"],
      //   Baidulat: temp["y"],
      // })
    })
  }


  // GPStoBaidu = () => {
  //   let url = "http://api.map.baidu.com/geoconv/v1/?coords=" + this.state.GPSlng + "," + this.state.GPSlat + "&from=1&to=5&ak=mUUbFKtgsaM2rWyuLLIDcyrSkhvGYzmn"
  //   console.log("url:"+url)
  //   fetchJsonp(url, {
  //     method: "GET",
  //     mode: 'cors',
  //     headers: {
  //       Accept : 'application/json'
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //       // 'Access-Control-Allow-Origin': '*'
  //     },
  //     jsonpCallbackFunction: 'showLocation'
  //   }).then((response) => {
  //     return response.json()
  //   }).then(data => {
  //     let temp = data["result"]
  //     temp = temp[0]
  //     this.state.Baidulng = temp["x"]
  //     this.state.Baidulat = temp["y"]
  //     // this.setState({
  //     //   Baidulng: temp["x"],
  //     //   Baidulat: temp["y"],
  //     // })
  //   })
  // }

  // BaidutoAddress = () => {
  //   let url = "http://api.map.baidu.com/geocoder/v2/?location=" + this.state.Baidulat + "," + this.state.Baidulng + "&output=json&pois=1&latest_admin=1&ak=mUUbFKtgsaM2rWyuLLIDcyrSkhvGYzmn"
  //   console.log("url:" + url)
  //   fetchJsonp(url, {
  //     method: "GET",
  //     mode: 'cors',
  //     headers: {
  //       Accept: 'application/json'
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //       // 'Access-Control-Allow-Origin': '*'
  //     },
  //     jsonpCallbackFunction: 'showLocation'
  //   }).then((response) => {
  //     return response.json()
  //   }).then(data => {
  //     let temp = data["result"]
  //     temp = temp["formatted_address"]
  //     // this.setState({
  //     //   address: temp
  //     // })
  //     this.state.address = temp
  //   })
  // }


  success = (pos) => {
    // console.log("GPSlng:",pos.coords.longitude)
    // console.log("GPSlat:",pos.coords.latitude)
    this.state.GPSlng = pos.coords.longitude
    this.state.GPSlat = pos.coords.latitude
    let url = "http://api.map.baidu.com/geoconv/v1/?coords=" + this.state.GPSlng + "," + this.state.GPSlat + "&from=1&to=5&ak=mUUbFKtgsaM2rWyuLLIDcyrSkhvGYzmn"
    console.log("url:" + url)
    fetchJsonp(url, {
      method: "GET",
      mode: 'cors',
      headers: {
        Accept: 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        // 'Access-Control-Allow-Origin': '*'
      },
      jsonpCallbackFunction: 'showLocation'
    }).then((response) => {
      return response.json()
    }).then(data => {
      let temp = data["result"]
      temp = temp[0]
      this.state.Baidulng = temp["x"]
      this.state.Baidulat = temp["y"]
      
      url = "http://api.map.baidu.com/geocoder/v2/?location=" + this.state.Baidulat + "," + this.state.Baidulng + "&output=json&pois=1&latest_admin=1&ak=mUUbFKtgsaM2rWyuLLIDcyrSkhvGYzmn"
      console.log("url:" + url)
      fetchJsonp(url, {
        method: "GET",
        mode: 'cors',
        headers: {
          Accept: 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
          // 'Access-Control-Allow-Origin': '*'
        },
        jsonpCallbackFunction: 'showLocation'
      }).then((response) => {
        return response.json()
      }).then(data => {
        let temp = data["result"]
        temp = temp["formatted_address"]
        // this.setState({
        //   address: temp
        // })
        this.state.address = temp
        this.setState({

        })
      })
      // this.setState({
      //   Baidulng: temp["x"],
      //   Baidulat: temp["y"],
      // })
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
    // if((this.state.GPSlat === '0') && (this.state.GPSlng === '0')){
    //   this.requestLocation()
    // }
    // if((this.state.Baidulat === '0') && (this.state.Baidulng === '0')){
    //   this.GPStoBaidu()
    // }
    // if(this.state.address === '读取中'){
    //   this.BaidutoAddress()
    // }
    // this.GPStoBaidu()
    // this.BaidutoAddress()


    return (
      <div style={{ padding: '20px' }}>
        <h1>GPSlng: {this.state.GPSlng} GPSlat: {this.state.GPSlat}</h1>
        <br />
        <h1>Baidulng: {this.state.Baidulng} Baidulat: {this.state.Baidulat}</h1>
        <br />
        <h1>Address: {this.state.address}</h1>
      </div>
    )
  }
}