import React from "react"
import "../pages/index.css"
import "antd/dist/antd.css"
import { Layout, Menu, Dropdown } from "antd"
import { DownOutlined } from "@ant-design/icons"
import styled from "styled-components"
import Logotype from "../images/Logotype.svg"
import Collapse from "../images/collapse.png"
import Light from "../images/1.png"
import Climate from "../images/2.png"
import Curtains from "../images/3.png"
import Multimedia from "../images/4.png"
import WiFi from "../images/5.png"
import Security from "../images/6.png"
import Gates from "../images/7.png"
import Electricity from "../images/8.png"
import {
  ClimateImg,
  ClimateText,
  CurtainsImg, CurtainsText, ElectricityImg, ElectricityText, GatesImg, GatesText,
  LightImg,
  LightText, Logo, MultimediaImg, MultimediaText, SecurityImg, SecurityText,
  Square,
  String, Typography, WiFiImg, WiFiText
} from "./constants/constants"

const { Header } = Layout

const OwnHeader = styled(Header)`
  height: 96.8px;
  padding: 0;
  line-height: 96px;
  background-color: #0B0A0A;
`

let Header2 = () => {

  const cleverHome = (
    <Typography style={{
      width: "660px", height: "281px", backgroundColor: "#1C1A1A", display: "flex",
      flexDirection: "column", color: "#FFFFFF", lineHeight: "16.8px"
    }}>
      <String>
        <Square>
          <LightImg src={Light} alt="Light" />
          <LightText>
            освещение
          </LightText>
        </Square>
        <Square>
          <ClimateImg src={Climate} alt="Climate" />
          <ClimateText>
            климат
          </ClimateText>
        </Square>
        <Square>
          <CurtainsImg src={Curtains} alt="Curtains" />
          <CurtainsText>
            шторы
          </CurtainsText>
        </Square>
        <Square>
          <MultimediaImg src={Multimedia} alt="Multimedia" />
          <MultimediaText>
            мультимедиа
          </MultimediaText>
        </Square>
      </String>
      <String>
        <Square>
          <WiFiImg src={WiFi} alt="WiFi" />
          <WiFiText>
            wi-fi
          </WiFiText>
        </Square>
        <Square>
          <SecurityImg src={Security} alt="Security" />
          <SecurityText>
            безопасность
          </SecurityText>
        </Square>
        <Square>
          <GatesImg src={Gates} alt="Gates" />
          <GatesText>
            автоматика ворот
          </GatesText>
        </Square>
        <Square>
          <ElectricityImg src={Electricity} alt="Electricity" />
          <ElectricityText>
            энергоснабжение
          </ElectricityText>
        </Square>
      </String>
    </Typography>
  )

  const company = (
    <Typography style={{
      width: "204px", height: "228px", backgroundColor: "#1C1A1A", display: "flex",
      flexDirection: "column", color: "#FFFFFF"
    }}>
      <div style={{
        flex: 1,
        width: "36px",
        height: "46px",
        marginTop: "27px",
        marginBottom: "16px",
        marginLeft: "45px"
      }}>О нас
      </div>
      <div
        style={{ flex: 1, width: "36px", height: "107px", marginBottom: "16px", marginLeft: "45px" }}>Сотрудничество
      </div>
      <div style={{ flex: 1, width: "36px", height: "64px", marginBottom: "16px", marginLeft: "45px" }}>Контакты</div>
    </Typography>
  )

  const forBusiness = (
    <Typography style={{
      width: "660px", height: "228px", backgroundColor: "#1C1A1A", display: "flex",
      flexDirection: "row", color: "#FFFFFF", lineHeight: "16.8px"
    }}>
      <div style={{ display: "flex", flexDirection: "column", marginRight: "5%" }}>
        <div style={{
          flex: 1,
          width: "168px",
          height: "17px",
          marginBottom: "45px",
          marginTop: "42px",
          marginLeft: "45px"
        }}>Автоматизация гостиниц
        </div>
        <div style={{ flex: 1, width: "282px", height: "17px", marginBottom: "45px", marginLeft: "45px" }}>Автоматизация
          музеев и галерей
        </div>
        <div style={{ flex: 1, width: "66px", height: "17px", marginLeft: "45px", marginBottom: "45px" }}>Умный жк</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignContent: "flex-end" }}>
        <div style={{
          flex: 1,
          width: "81px",
          height: "17px",
          marginTop: "42px",
          marginBottom: "45px",
          marginRight: "206px"
        }}>Умный офис
        </div>
        <div style={{ flex: 1, width: "109px", height: "17px", marginBottom: "45px", marginRight: "178px" }}>Учебные
          центры
        </div>
        <div
          style={{ flex: 1, width: "270px", height: "17px", marginBottom: "45px", marginRight: "17px" }}>Автоматизация
          кафе и ресторанов
        </div>
      </div>
    </Typography>
  )
  
  {
    return (
      <OwnHeader className="header">
        <Logo> <img src={Logotype} alt="Logo" /> </Logo>
        <Dropdown trigger="click" placement="bottomCenter" className="CollapsedDropdown" overlay={forBusiness}>
          <div>
            <img src={Collapse} alt="Collapse" />
          </div>
        </Dropdown>
        <Menu className="Menu" overflowedIndicator={<img src={Collapse} alt="Collapse" />} triggerSubMenuAction="hover"
              style={{ backgroundColor: "#0B0A0A", color: "white", overflow: "hidden" }} mode="horizontal">
          <Menu.Item key="cleverHome">
            <Dropdown placement="bottomCenter" arrow="true" overlay={cleverHome}>
              <div style={{ textTransform: "uppercase", fontFamily: "Exo 2" }}>
                умный дом <DownOutlined />
              </div>
            </Dropdown>
          </Menu.Item>
          <Menu.Item style={{ textTransform: "uppercase", fontFamily: "Exo 2" }} key="projects">
            проекты
          </Menu.Item>
          <Menu.Item style={{ textTransform: "uppercase", fontFamily: "Exo 2" }} key="showroom">
            шоурум
          </Menu.Item>
          <Menu.Item key="forBusiness">
            <Dropdown placement="bottomCenter" arrow="true" overlay={forBusiness}>
              <div style={{ textTransform: "uppercase", fontFamily: "Exo 2" }}>
                для бизнеса <DownOutlined />
              </div>
            </Dropdown>
          </Menu.Item>
          <Menu.Item style={{ textTransform: "uppercase", fontFamily: "Exo 2" }} key="news">
            новости
          </Menu.Item>
          <Menu.Item key="company">
            <Dropdown arrow="true" overlay={company}>
              <div style={{ textTransform: "uppercase", fontFamily: "Exo 2" }}>
                компания <DownOutlined />
              </div>
            </Dropdown>
          </Menu.Item>
        </Menu>
      </OwnHeader>
    )
  }
}

export default Header2;