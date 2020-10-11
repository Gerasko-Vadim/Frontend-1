import React, { useState } from "react";
import classes from "./tabs.module.css";

const Tabs1 = () => {
  const [active, setAtive] = useState(1);
  return (
    <div className={classes.blockInfo}>
      <div className={classes.tabs}>
        <div
          className={active === 1 ? classes.activeTab : classes.tab}
          onClick={() => setAtive(1)}
        >
          Описание
        </div>
        <div
          className={active === 2 ? classes.activeTab : classes.tab}
          onClick={() => setAtive(2)}
        >
          Содержание
        </div>
        <div
          className={active === 3 ? classes.activeTab : classes.tab}
          onClick={() => setAtive(3)}
        >
          Об авторе
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.contentText}>
          <span>
            Аналитический обзор «Медицинские услуги: исследование потребителей
            Москвы и Московской области 2020» посвящен подробному анализу
            потребления медицинских услуг на московском рынке в условиях
            пандемии COVID-19. Обзор входит в серию исследований российского
            рынка частной медицины, выполненной командой аналитиков РБК. В
            исследовании выделены основные виды медицинского обслуживания,
            которыми жители московского региона пользовались в динамике в
            2010-2020 гг. Подробно изучены основные потребительские тренды рынка
            медицинских услуг в Московском регионе, включающие анализ влияния
            пандемии коронавируса COVID-19 на поведение россиян, их уровень
            дохода, а также потребление медицинских услуг. В исследовании
            содержится анализ частоты обращения к услугам различных специалистов
            в области медицины в динамике в 2018-2020 гг., а также определена
            динамика среднего чека посещения по различным врачам в 2018-2020 гг.
            Проанализированы формы оплаты медицинских услуг, включая теневой
            сегмент рынка. Показатели рассмотрены по следующими медицинским
            направлениям: дерматология, эндокринология, аллергология,
            гастроэнтерология, неврология, терапия, отоларингология,
            кардиология, маммология,
          </span>
        </div>
        <button className={classes.contentBtn}>Развернуть</button>
      </div>
    </div>
  );
};
export default Tabs1;
