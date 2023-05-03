import { Routes, Route, Link } from "react-router-dom"
import CompOrderList from "../components/CompOrderList"
import OrdersList from "../components/OrdersList"
import VendorSettings from "./VendorSettings"
import MenuPanel from "./MenuPanel"

function VendorMenu() {
  return (
    <div>
      <div>
        <nav>
          <ul id="vendorMenu" className="topnav">
            <li className="tabcontent">
              <Link to="/vendor">Incomplete Orders</Link>
            </li>
            <li className="tabcontent">
              <Link to="/vendor/PickUpReady">Ready Orders</Link>
            </li>
            <li className="tabcontent">
              <Link to="/vendor/MenuSettings">Menu</Link>
            </li>
            <li className="tabcontent">
              <Link to="/vendor/CartSettings">Settings</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/vendor/PickUpReady" element={<CompOrderList />} />
          <Route path="/vendor/MenuSettings" element={<MenuPanel />} />
          <Route path="/vendor/CartSettings" element={<VendorSettings />} />
          <Route path="/vendor" element={<OrdersList />} />
        </Routes>
      </div>
    </div>
  )
}

export default VendorMenu

{
  /* 
// Add active class to the current button (highlight it) 
const header = document.getElementById("vendorMenu");
const btns = header.getElementsByClassName("tabcontent");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
*/
}
