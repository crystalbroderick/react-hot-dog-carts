import { Container, Image, Menu } from "semantic-ui-react"
function Header({ title }) {
  const menuStyle = {
    backgroundColor: "#CC2522",
    border: "1px solid #ddd",
    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)",
  }
  return (
    <Menu borderless style={menuStyle}>
      <Container>
        <Menu.Item>
          <Image size="tiny" className="logo" src="/Hotdog_logo.jpg" />
        </Menu.Item>
        <Menu.Item header>
          <h1 style={{ color: "#fff" }}>{title}</h1>
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default Header
