import React from "react";
import styled from "styled-components";
import {Button} from 'antd';
import Arrow from "../images/arrow2.png";

const Container = styled.div`
  font-style: normal;
  font-weight: 200;
  font-size: 72px;
  line-height: 96px;
  /* identical to box height, or 133% */
  text-transform: uppercase;
  color: #FFFFFF;
  @media (max-width: 600px) {
    font-style: normal;
    font-weight: 200;
    font-size: 48px;
    line-height: 58px;
    text-transform: uppercase;
    color: #FFFFFF;
  }
`;


const BorderBottom = styled.div`
  width: 111px;
  margin-top: 28px;
  margin-bottom: 32px;
  border-bottom: solid 2px #4285F4;
`;


const ContentText = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  /* or 150% */
  max-width: 624px;
  color: #FFFFFF;
  @media (max-width: 600px) {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    /* or 150% */
    max-width: 320px;
    color: #FFFFFF;
  }
`;

const BtnContainer = styled.div`
  margin-right: 159px;
  margin-left: 0;
  display: flex;
  align-items: center;
  margin-top: 54px;
`;

const TextButton = styled.div`
  min-width: 216px;
  color: #4285F4;
  font-weight: bold;
  font-size: 16px;
  margin-left: 18px;
  @media (max-width: 600px) {
    min-width: 296px;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 46px;
    margin-left: 13px;
    /* identical to box height, or 383% */
    text-transform: uppercase;
    color: #4285F4;
  }
`;


const Btn = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BtnImg = styled.img`
  width: 13px;
  height: 25px;
  margin-left: 3px;
`;

export const Heading = () => {

  return (
    <>
      <Container>
        ЖК “Долина сетунь”
      </Container>
      <BorderBottom/>
      <ContentText>
        Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий
        безымянный печатник создал большую коллекцию размеров и форм шрифтов,
        используя Lorem Ipsum для распечатки образцов.
      </ContentText>
      <BtnContainer>
        <Btn shape="circle" type="primary" size={"large"}>
          <BtnImg src={Arrow}/>
        </Btn>
        <TextButton>
          хочу так же
        </TextButton>
      </BtnContainer>
    </>
  )
}