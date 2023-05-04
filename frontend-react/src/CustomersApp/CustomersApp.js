import Map from "../components/Map"
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Image,
  List,
  Menu,
  Segment,
} from "semantic-ui-react"
import Header from "../components/Header"

function App() {
  return (
    <>
      <Header title="Hot Dog Carts" />
      <Container>
        <Map />
      </Container>
    </>
  )
}

export default App
