import React from "react"
import "../pages/index.css"
import {
  Description, Title
} from "./constants/constants"
import BlockOfPictures from "./blockOfPictures"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: ${props => props.isReversed === "reversed" ? "auto auto 139px" : "auto auto 100px" };
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    margin-bottom: 139px;
    margin-left: 10px;
    margin-right: 10px;
  }
`

const Image = styled.img`
  width: 620px;
  height: 620px;
  order: ${props => props.isReversed === "reversed" ? "1" : "2" };
  @media screen and (max-width: 1000px) {
    width: 100%;
    height: 100%;
    order: ${props => props.cards === "cardsExist" ? "0" : "2" };
    margin-bottom: ${props => props.cards === "cardsExist" ? "37px" : "" };
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  order: ${props => props.isReversed === "reversed" ? "2" : "1" };
  margin: ${props => props.isReversed === "reversed" ? props.cards === "cardsExist" ? "20px 0 0 40px" : "73px 0 0 40px" : props.cards ? "16px 37px 0 0" : "36px 46px 0 0" };
  @media screen and (max-width: 1000px) {
    order: 1;
    margin: 0 0 40px 0;
}
`

const ReturnContainer = ({data, isReversed}) => {
  return (
      <Container isReversed = {isReversed ? "reversed" : ""}>
        <Image cards = {data.cards ? "cardsExist" : ""} isReversed = {isReversed ? "reversed" : "" } src={data.imgUrl} alt="Picture" />
        <TextContainer isReversed = {isReversed ? "reversed" : ""} cards = {data.cards ? "cardsExist" : ""}>
          <Title>
            {data.title}
          </Title>
          <Description >
            <div style={{marginBottom:"25px"}}>
              {data.text}
            </div>
            {data.cards ? <BlockOfPictures data={data.cards}/> : <div>
              зуя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять
              веков, но и перешагнул в электронный
              дизайн. Его популяризации в новое время послужили публикация листов
              Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа
              Aldus PageMaker, в шаблонах которых
              используется Lorem Ipsum.
              <div style={{marginBottom:"25px"}}/>
              послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время,
              программы электронной вёрстки типа
              Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
            </div>}
          </Description>
        </TextContainer>
      </Container>
  )
}

export default ReturnContainer
