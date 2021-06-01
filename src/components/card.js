import React from "react"
import {
  InfoPage
} from "./constants/constants"
import ReturnContainer from "./container"

const Card = ({ data, isReversed }) => {
  return (
    <InfoPage>
     <ReturnContainer isReversed={isReversed} data={data} />
    </InfoPage>
  )
}

export default Card
