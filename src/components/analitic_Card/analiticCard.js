import React from 'react';
import st from './analiticCard.module.css';



const AnaliticCard = () => {

    return(
        <div className={st.container}>
            <span className={st.analiticCard_way}>Главная / Аналитика / Рынок частной медицины 2020</span>
            <div className={st.card_content}>
                <div className={st.card_img}>
                    <img src={require('../analitic/analitic_bg.png')} alt="img" />
                    <div className={st.shareIt}>
                        <span>Поделиться в соц сетях</span>
                        <div className={st.shareIt_icons}>
                        <div className="ya-share2" data-curtain data-size="l" data-services="vkontakte,facebook,twitter,linkedin"></div>
                        </div>
                    </div>
                </div>
                <div className={st.card_description}>
                    <span>30 сентября 2020
                    </span>
                    <h4>Рынок частной медицины 2020. База сетей</h4>
                    <p>Товарищи! консультация с широким активом влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Задача организации, в особенности же новая модель организационной деятельности влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Товарищи! реализация намеченных плановых заданий позволяет оценить значение систем массового участия. Равным образом постоянный количественный рост и сфера нашей активности влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий.
С другой стороны сложившаяся структура организации в значительной степени обуславливает создание модели развития. Задача организации, в особенности же новая модель организационной деятельности способствует подготовки и реализации направлений прогрессивного развития. Задача организации, в особенности же укрепление и развитие структуры требуют определения и уточнения систем массового участия. Таким образом консультация с широким активом требуют определения и уточнения форм развития. Повседневная практика показывает, что укрепление и развитие структуры позволяет оценить значение существенных финансовых и административных условий.

        С другой стороны дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации новых предложений. Равным образом реализация намеченных плановых заданий способствует подготовки и реализации соответствующий условий активизации. Равным образом постоянный количественный рост и сфера нашей активности требуют от нас анализа систем массового участия. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AnaliticCard;