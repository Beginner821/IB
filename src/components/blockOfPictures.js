import React from "react"
import styled from "styled-components"
import { ArrowRightOutlined } from "@ant-design/icons"
import "antd/dist/antd.css"
import { Carousel } from "antd"
import "../pages/index.css"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 67px;
  width: 100%;
  height: 100%;
`

const PicContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`

const Image = styled.img`
  width: 180px;
  height: 180px;
  margin-bottom: 33px;
`

const Description = styled.div`
  font-family: "Exo 2";
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 27px;
  margin-bottom: 19px;
  color: white;
`

const More = styled(Description)`
  font-weight: 500;
  line-height: 46px;
  text-transform: uppercase;
  color: white;
`

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  slidesToShow: 3,
  draggable: true,
}

const BlockOfPictures = ({ data }) => {

  return (
    <Container>
      <Carousel style={{width:"100%"}} {...settings}>
      {data.map((item, index) =>
        <div key={index}>
          <PicContainer>
            <Image src={item.imgUrl}/>
            <Description>
              {item.title}
            </Description>
            <More>
              подробнее <ArrowRightOutlined />
            </More>
          </PicContainer>
        </div>
      )}
      </Carousel>
    </Container>
  )
}

export default BlockOfPictures