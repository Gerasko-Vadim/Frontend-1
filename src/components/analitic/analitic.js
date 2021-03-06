import React, {useEffect,useState}  from "react";
import st from "./analitic.module.css";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { blogData } from '../../redux/actions/actions';
import noPhoto from './no_photo.jpg';

const Analitic = () => {
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
    const dispatch = useDispatch();
    const data = useSelector((state) => state.blogData.data.data);
    useEffect(() => {dispatch(blogData())}, []);
    const language = localStorage.getItem('lang');
    const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентабрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    const monthEng = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthKg = ['Үчтүн айы', 'Бирдин айы', 'Жалган Куран', 'Чын Куран', 'Бугу', 'Кулжа', 'Теке', 'Баш Оона', 'Аяк Оона', 'Тогуздун айы', 'Жетинин айы', 'Бештин айы'];

    return (
    <div className={st.analitic_container}>
        <div className={st.analitic_way}>
            {(language == 1 || language == undefined) && <>
                <Link to="/">Главная</Link>
                <span> / </span>
                <Link to="/analitic">Блог</Link>
            </>}
            {language == 2 && <>
                <Link to="/">Home</Link>
                <span> / </span>
                <Link to="/analitic">Blog</Link>
            </>}
            {language == 3 && <>
                <Link to="/">Башкы бет</Link>
                <span> / </span>
                <Link to="/analitic">Блог</Link>
            </>}
        </div>
        {(language == 1 || language == undefined) && <h2>Блог</h2>}
        {language == 2 && <h2>Blog</h2>}
        {language == 3 && <h2>Блог</h2>}
        <div className={st.analitic_content}>
            {data && data.map(elem =>(
                <Link to={`/analiticCard/${elem.id}`} key={elem.id} className={st.analitic_card}>
                    <div>
                        <img src={elem.images[0] === undefined ? noPhoto : elem.images[0].url} alt="img" />
                        <div className={st.card_info}>
                            <span className={st.card_date}>
                                <span>{ elem.date.match(/\d+/g)[2] } </span>
                                {(language == 1 || language == undefined) && <span>{ month[Number(elem.date.match(/\d+/g)[1] - 1)] } </span>}
                                {language == 2 && <span>{ monthEng[Number(elem.date.match(/\d+/g)[1] - 1)] } </span>}
                                {language == 3 && <span>{ monthKg[Number(elem.date.match(/\d+/g)[1] - 1)] } </span>}
                                <span>{ elem.date.match(/\d+/g)[0] }</span>
                            </span>
                            <h5 className={st.card_title}>{elem.header}</h5>
                            <p>{elem.description}</p>
                        </div>
                    </div>
                </Link>
            ))}
            
        </div>
    </div>
  );
};

export default Analitic;
