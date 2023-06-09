import React from "react"
import {
  GoogleMap,
  LoadScript,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api"
import apiKey from "../googleMapsApiKey.json"
import { Container, Button } from "semantic-ui-react"
import { Link } from "react-router-dom"

const mapStyles = {
  height: "80vh",
  // marginTop: "4em",
}

const onLoad = (marker) => {
  console.log("marker: ", marker)
}

const defaultCenter = {
  lat: 47.65629189632677,
  lng: -122.32059609201939,
}

const options = {
  disableDefaultUI: true,
  zoomControl: true,
}

/* const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []); */

class MapContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      carts: [],
      selected: null,
      setSelected: null,
    }
  }

  componentDidMount() {
    let test = fetch("http://localhost:3000/users/map")
      .then((results) => {
        return results.json()
      })
      .then((myJson) => {
        console.log("FetchResolved", myJson)
        this.setState({
          carts: myJson,
        })
        //console.log(this.state.carts[0].Cart_Id);
      })
  }

  resetSelected() {
    this.setState({ selected: {} })
  }

  render() {
    console.log(this.state.selected)
    const cartMarker = this.state.carts.map((cart) => {
      return (
        <Marker
          key={cart.Cart_Id}
          position={{
            lat: parseFloat(cart.Latitude),
            lng: parseFloat(cart.Longitude),
          }}
          cart={cart}
          onClick={() => {
            this.setState({ selected: [cart] })
          }}
        />
      )
    })

    const info = this.state.selected ? (
      //console.log("selected: " + this.state.selected[0].Cart_Name),
      <InfoWindow
        position={{
          lat: parseFloat(this.state.selected[0].Latitude),
          lng: parseFloat(this.state.selected[0].Longitude),
        }}
        onCloseClick={() => {
          this.setState({ selected: null })
        }}
      >
        <div className="infowindow">
          <h2>{this.state.selected[0].Cart_Name}</h2>
          <h5>Currently at:</h5>
          <p>{this.state.selected[0].Cart_Location}</p>
          <h5>Current Menu options:</h5>

          <p>{this.state.selected[0].Items}</p>
          {/* </div><button> Order Here! </button>  */}
          <Link to={`/menu/${this.state.selected[0].Cart_Id}`}>
            <div class="ui animated button yellow" tabIndex="0">
              <div class="visible content">Order Ahead</div>
              <div class="hidden content">
                <i className="right arrow icon"></i>
              </div>
            </div>{" "}
          </Link>
        </div>
      </InfoWindow>
    ) : null

    return (
      <>
        {" "}
        <LoadScript googleMapsApiKey={apiKey.key}>
          <GoogleMap
            mapContainerStyle={mapStyles}
            center={defaultCenter}
            zoom={13}
            options={options}
            carts={this.state.carts}
          >
            <h2 className="maph2">
              Hot Dogs!
              <span role="img" aria-label="hotdog">
                🌭
              </span>
            </h2>
            {cartMarker}
            {info}

            {/* <Marker onLoad={onLoad} position={defaultCenter} /> */}
          </GoogleMap>
        </LoadScript>
      </>
    )
  }
}

export default MapContainer
