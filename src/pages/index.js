import React from "react"
import "./index.css"
import "antd/dist/antd.css"
import Header2 from "../components/header"
import { Heading } from "../components/heading"
import styled from "styled-components"
import Info from "./info"
import Footer from "./footer"

const Container = styled.div`
  min-width: 290px;
  border-radius: 16px;
  padding: 160px;
  background-color: #0D0C0C;
  @media (max-width: 600px) {
    padding: 10px;
  }
`


let App = () => {
  return (
    <>
      <Header2 />
      <Container>
        <Heading />
        <Info/>
      </Container>
      <Footer />
    </>
  )
}

export default App