import AdminsApp from "./AdminApp/AdminApp"
import VendorsApp from "./VendorsApp/VendorsApp"
import CustomersApp from "./CustomersApp/CustomersApp"
import MenuSelection from "./CustomersApp/MenuSelection"

import React, { Component } from "react"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/menu/:id" element={<MenuSelection />} />
        <Route path="/admin/*" element={<AdminsApp />} />
        <Route path="/vendor/*" element={<VendorsApp />} />
        <Route path="/" element={<CustomersApp />} />
      </Routes>
    </div>
  )
}

export default App
