import styled from "styled-components"

export const Square = styled.div`
  display: flex;
  flex-direction: column;
`

export const String = styled.div`
  display: flex;
  flex-direction: row;
`

export const LightImg = styled.img`
  width: 48px;
  height: 40.15px;
  margin: 37px 98px 21.85px 63px;
`;

export const LightText = styled.div`
  text-transform: uppercase;
  width: 82px;
  height: 17px;
  margin: 0 78px 54px 46px;
`;

export const ClimateImg = styled.img`
  width: 48px;
  height: 48px;
  margin: 34px 100px 17px 0;
`;

export const ClimateText = styled.div`
  text-transform: uppercase;
  width: 56px;
  height: 17px;
  margin: 0 97px 52px 0;
`;

export const CurtainsImg = styled.img`
  width: 55.83px;
  height: 48px;
  margin: 36px 110.17px 15px 0;
`;

export const CurtainsText = styled.div`
  text-transform: uppercase;
  width: 51px;
  height: 17px;
  margin: 0 82px 50px 4px;
`;

export const MultimediaImg = styled.img`
  width: 48px;
  height: 48px;
  margin: 37px 89px 14px 0;
`;

export const MultimediaText = styled.div`
  text-transform: uppercase;
  width: 111px;
  height: 17px;
  margin: 0 57px 54px -22px;
`;

export const WiFiImg = styled.img`
  width: 48px;
  height: 48px;
  margin: 0 105px 13px 63px;
`;

export const WiFiText = styled.div`
  text-transform: uppercase;
  width: 35px;
  height: 17px;
  margin: 0 75px 33px 70px;
`;

export const SecurityImg = styled.img`
  width: 40.93px;
  height: 48px;
  margin: 0 104.07px 15px 0;
`;

export const SecurityText = styled.div`
  text-transform: uppercase;
  width: 117px;
  height: 17px;
  margin: 0 25px 33px -24px;
`;

export const GatesImg = styled.img`
  width: 48px;
  height: 41.81px;
  margin: 0 110px 20.8px 0;
`;

export const GatesText = styled.div`
  text-transform: uppercase;
  width: 137px;
  height: 17px;
  margin: 0 24px 33px -35px;
`;

export const ElectricityImg = styled.img`
  width: 55.22px;
  height: 48px;
  margin: 0 85.78px 14px 0;
`;

export const ElectricityText = styled.div`
  text-transform: uppercase;
  width: 141px;
  height: 17px;
  margin: 0 42px 33px -30px;
`;

export const Logo = styled.div`
  float: left;
  margin: 0 10% 16px 10%;
`

export const Typography = styled.div`
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  line-height: 46px;
  font-family: "Exo 2";
`

export const OpenedCollapse = styled.div`
  width: 100%;
  height: 100%;
`

export const InfoPage = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0D0C0C;
`

export const Description = styled(Typography)`
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  width: 614px;
  height: 371px;
  @media screen and (min-width: 280px) and (max-width: 360px) {
    font-size: 12px;
    line-height: 17px;
  }
  @media screen and (min-width: 360px) and  (max-width: 415px) {
    font-size: 12px;
    line-height: 22px;
  }
  @media screen and (min-width: 416px) and (max-width: 479px) {
    font-size: 14px;
    line-height: 23px;
  }
  @media screen and (min-width: 480px) and (max-width: 584px) {
    font-size: 15px;
    line-height: 24px;
  }
  @media screen and (min-width: 585px) and (max-width: 635px) {
    font-size: 15px;
    line-height: 26px;
  }
  @media screen and (min-width: 636px) and (max-width: 715px) {
    font-size: 17px;
    line-height: 25px;
  }
  @media screen and (min-width: 716px) and (max-width: 1000px) {
    font-size: 20px;
    line-height: 29px;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
    height: 442px;
  }
`

export const Title = styled(Typography)`
  font-size: 22px;
  line-height: 33px;
  margin-bottom: 33px;
  height: 66px;
  @media screen and (min-width: 280px) and (max-width: 360px) {
    font-size: 15px;
    margin-bottom: 0;
    line-height: 22px;
  }
  @media screen and (min-width: 360px) and  (max-width: 415px) {
    font-size: 16px;
    line-height: 22px;
  }
  @media screen and (min-width: 416px) and (max-width: 479px) {
    font-size: 18px;
    line-height: 23px;
  }
  @media screen and (min-width: 480px) and (max-width: 584px) {
    font-size: 20px;
    line-height: 24px;
  }
  @media screen and (min-width: 585px) and (max-width: 635px) {
    font-size: 22px;
    line-height: 26px;
  }
  @media screen and (min-width: 636px) and (max-width: 715px) {
    font-size: 24px;
    line-height: 25px;
  }
  @media screen and (min-width: 716px) and (max-width: 1000px) {
    font-size: 28px;
    line-height: 29px;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`
