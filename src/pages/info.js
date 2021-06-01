import React from "react"
import "./index.css"
import Card from "../components/card"
import { InfoPage } from "../components/constants/constants"
import img from "../images/IB.png"

const data = [
  {
    title: "Lorem Ipsum - это текст-\"рыба\", часто используемый",
    text: "Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" " +
      "для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, исполь",
    imgUrl: img,
  },
  {
    title: "Lorem Ipsum - это текст-\"рыба\", часто используемый",
    text: "Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для " +
      "текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, исполь",
    imgUrl: img,
  },
  {
    title: "Lorem Ipsum - это текст-\"рыба\", часто используемый",
    text: "Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для т" +
      "екстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, исполь",
    imgUrl: img,
    cards: [{
      title: "Сабвуфер Sonance DB C White",
      text: "Lorem Ipsum",
      imgUrl: img
    },
      {
        title: "Сабвуфер Sonance DB C White",
        text: "Lorem Ipsum",
        imgUrl: img
      }]
  },
  {
    title: "Lorem Ipsum - это текст-\"рыба\", часто используемый",
    text: "Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для " +
      "текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, исполь",
    imgUrl: img,
    cards: [{
      title: "Сабвуфер Sonance DB C White",
      text: "Lorem Ipsum",
      imgUrl: img
    },
      {
        title: "Сабвуфер Sonance DB C White",
        text: "Lorem Ipsum",
        imgUrl: img
      },
      {
        title: "Сабвуфер Sonance DB C White",
        text: "Lorem Ipsum",
        imgUrl: img
      },
      {
        title: "Сабвуфер Sonance DB C White",
        text: "Lorem Ipsum",
        imgUrl: img
      }
    ]
  },
  {
    title: "Lorem Ipsum - это текст-\"рыба\", часто используемый",
    text: "Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для " +
      "текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, исполь",
    imgUrl: img,
    cards: [{
      title: "Сабвуфер Sonance DB C White",
      text: "Lorem Ipsum",
      imgUrl: img
    }
    ]
  },
  {
    title: "Lorem Ipsum - это текст-\"рыба\", часто используемый",
    text: "Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для " +
      "текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, исполь",
    imgUrl: img,
    cards: [{
      title: "Сабвуфер Sonance DB C White",
      text: "Lorem Ipsum",
      imgUrl: img
    },
      {
        title: "Сабвуфер Sonance DB C White",
        text: "Lorem Ipsum",
        imgUrl: img
      },
      {
        title: "Сабвуфер Sonance DB C White",
        text: "Lorem Ipsum",
        imgUrl: img
      },
      {
        title: "Сабвуфер Sonance DB C White",
        text: "Lorem Ipsum",
        imgUrl: img
      }]
  }
]


const Info = () => {
  return (
    <InfoPage>
      {data.map((item, index) =>
        <div key={index}>
          <Card isReversed={index % 2 !== 0} data={item} />
        </div>
      )}
    </InfoPage>
  )
}
export default Info
