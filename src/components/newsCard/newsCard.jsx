import React, { useState } from "react";
import st from "./newsCard.module.css";

import f from "./img/f.png";
import in1 from "./img/in.png";
import twiter from "./img/twiter.png";
import vk from "./img/vk.png";
import bg from "./img/bg.png";
import { Link } from "react-router-dom";

const NewsCard = ({ key }) => {
  const [cardId, setCardId] = useState("");
  const [heightBlock,setHeightBlock]=useState('495px');
  const str =""

  const heightDiv=()=>{
    if(cardId){
str=str.slice(0, 1120)
    }
  }

  const showHidePara =(h)=>{
    setCardId(h)
    heightDiv()
  }
  return (
    <div className={st.analitic_card}>
      <div className={st.blockImg}>
        <img alt="img" src={bg} className={st.img} />
        <div className={st.buttomBlock}>
          <span className={st.buttomBlockTitle}>Поделится в соц сетях</span>
          <div className={st.icons}>
            <img src={in1} alt="" className={st.icon} />
            <img src={vk} alt="" className={st.icon} />
            <img src={f} alt="" className={st.icon} />
            <img src={twiter} alt="" className={st.icon} />
          </div>
        </div>
      </div>
      <div className={st.content}>
        <span className={st.date}>30 сентября 2020</span>
        <span className={st.title}>
          Рынок частной медицины 2020. База сетей
        </span>
        <span className={st.description}>
          Товарищи! консультация с широким активом влечет за собой процесс
          внедрения и модернизации дальнейших направлений развития. Задача
          организации, в особенности же новая модель организационной
          деятельности влечет за собой процесс внедрения и модернизации
          соответствующий условий активизации. Товарищи! реализация намеченных
          плановых заданий позволяет оценить значение систем массового участия.
          Равным образом постоянный количественный рост и сфера нашей активности
          влечет за собой процесс внедрения и модернизации существенных
          финансовых и административных условий <br />
          <br />
          Товарищи! консультация с широким активом влечет за собой процесс
          внедрения и модернизации дальнейших направлений развития. Задача
          организации, в особенности же новая модель организационной
          деятельности влечет за собой процесс внедрения и модернизации
          соответствующий условий активизации. Товарищи! реализация намеченных
          плановых заданий позволяет оценить значение систем массового участия.
          Равным образом постоянный количественный рост и сфера нашей активности
          влечет за собой процесс внедрения и модернизации существенных
          финансовых и административных условий
          
        </span>
        {cardId == key ? (
          <button className={st.btn} onClick={() => showHidePara("")}>
            Закрыть
          </button>
        ) : (
          <button className={st.btn} onClick={() => showHidePara(key)}>
            Развернуть
          </button>
        )}
      </div>
    </div>
  );
};
export default NewsCard;
