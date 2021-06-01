import React from "react"
import styled from "styled-components"
import { Divider } from "antd"
import "./index.css"
import Logotype from "../images/Logotype.svg"
import Instagram from "../images/Instagram.svg"
import Telegram from "../images/Telegram.svg"
import Facebook from "../images/Facebook.svg"
import YouTube from "../images/YouTube.svg"

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #0D0C0C;
`
const BigButton = styled.button`
  width: 100%;
  background-color: #4285F4;
  text-align: center;
  text-transform: uppercase;
  height: 150px;
  color: white;
  font-family: "Exo 2";
  font-weight: 700;
  font-style: normal;
  font-size: 22px;
  line-height: 21px;
  border: none;
  @media screen and (max-width: 1000px) {
    height: 90px;
    font-size: 16px;
  }
`

const BodyOfFooter = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  margin: 64px 0 71px 10%;
  align-items: flex-start;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    margin: 64px 10px 20px 10px;
  }
`

const Logo = styled.img`
  margin-right: 12%;
  width: 179.5px;
  @media screen and (max-width: 1000px) {
    margin-right: 0;
    margin-bottom: 55px;
  }
`

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 10%;
  width: 30%;
  justify-content: space-between;
  @media screen and (max-width: 1000px) {
    margin-right: 0;
    margin-bottom: 20px;
    width: 90%;
  }
`

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
`

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
`

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
`

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 23px;
`

const Icon = styled.img`
  height: 24px;
  margin-right: 45px;
`

const String = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  font-family: "Exo 2";
  line-height: 16.8px;
  margin-left: 10px;
  @media screen and (max-width: 1000px) {
   margin-bottom: 30px;
  }
`

const BigString = styled.div`
  font-size: 14px;
  font-style: normal;
  font-family: "Exo 2";
  text-transform: uppercase;
  font-weight: 500;
  line-height: 46px;
`

const IntellectualRights = styled.div`
  margin: 5px 0 76px 10%;
  display: flex;
  flex-direction: column;
  font-family: "Exo 2";
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  line-height: 46px;
  color: white;
  @media screen and (max-width: 1000px) {
    margin: 42px 10px 20px 10px;
  }
`

const MyDivider = styled(Divider)`
  background-color: #3E3D3D;
  z-index: 2;
  margin: 0 11% 0 0;
  min-width: 0;
  width: auto;
  @media screen and (max-width: 1000px) {
    min-width: 100%;
    margin-bottom: 41px;
  }
`;

const Abc = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`

const Footer = () => {
  return (
    <Container>
      <BigButton>
        получить консультацию
      </BigButton>
      <BodyOfFooter>
        <Logo src={Logotype} alt="Logo" />
        <Navigation>
          <LeftColumn>
            <BigString style={{ color: "#7E7E7E", marginBottom: "14px" }}>
              умный дом
            </BigString>
            <String>
              Освещение
            </String>
            <String>
              Климат
            </String>
            <String>
              Мультимедиа
            </String>
            <String>
              Безопасность
            </String>
            <String>
              Wi-fi
            </String>
            <String>
              Автоматика ворот
            </String>
            <String>
              Энергоснабжение
            </String>
          </LeftColumn>
          <RightColumn>
            <BigString>
              проекты
            </BigString>
            <BigString>
              для бизнеса
            </BigString>
            <BigString>
              новости
            </BigString>
            <BigString>
              шоурум
            </BigString>
            <BigString style={{ color: "#7E7E7E" }}>
              компания
            </BigString>
            <String>
              О нас
            </String>
            <String>
              Сотрудничество
            </String>
          </RightColumn>
        </Navigation>
        <Contacts>
          <BigString style={{ marginBottom: "10px" }}>
            контакты
          </BigString>
          <String style={{ marginLeft: "0" }}>
            Москва, Ул.Барклая д6 стр5<br />(БЦ Барклай Плаза)
          </String>
          <String style={{ lineHeight: "30px", marginLeft: "0" }}>
            +7(913)4210574
          </String>
          <String style={{ marginLeft: "0" }}>
            info@intelbuilding.ru
          </String>
          <Icons>
            <Icon src={Instagram} alt="Icon" />
            <Icon src={Facebook} alt="Icon" />
            <Icon src={Telegram} alt="Icon" />
            <Icon style={{ marginRight: "0" }} src={YouTube} alt="Icon" />
          </Icons>
        </Contacts>
      </BodyOfFooter>
      <IntellectualRights>
        <MyDivider />
        <Abc>
          <div style={{ marginRight: "4%" }}>
            IntelBuilding 2021
          </div>
          <div style={{ marginRight: "63%" }}>
            Privacy Policy
          </div>
          <div>
            Designed by
          </div>
        </Abc>
      </IntellectualRights>
    </Container>
  )
}

export default Footer