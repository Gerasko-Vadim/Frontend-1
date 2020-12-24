import React from "react";
import Modal from "react-modal";
import classes from "./modal.module.css";
import img1 from "./img/1.png"
import img2 from "./img/2.png"
import { Link } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import { errorMesseg } from "../../../redux/actions/marketInreriorPage/marketInterPage";
const customStyles = {
    overlay: {
        position: 'fixed',
        zIndex: 10
      },
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        height:"auto",
        width:"40%",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        position: 'fixed',
        zIndex: '10'
      },
};

Modal.setAppElement("#root");

function RegistrModalDemo() {
const dispatch = useDispatch();
  const isModal = useSelector((state) => state.RegistrOrg.isModal);
  // const language = useSelector(state => state.langReducer.lang)
  const language = localStorage.getItem('lang');
const isOpenModal=()=>{
    dispatch(errorMesseg())
}
  return (
    <Modal isOpen={isModal !== "" ? true:false}  style={customStyles}>
      <div className={classes.modal}>
        {(language == 1 || language == undefined) && <span className={classes.title}>Регистрация</span>}
        {language == 2 && <span className={classes.title}>Registration</span>}
        {language == 3 && <span className={classes.title}>Каттоо</span>}
        <div className={classes.content}>
          <img alt="img" src={isModal ===1 ? img1 : img2}/>
          <div className={classes.blockText}>
          <span className={classes.descr}>
              {(language == 1 || language == undefined) && isModal ===1 ?  "Прошла успешно. На почту отправлена ссылка для подтверждения"
                  : "Ошибка регистрации"}
              {language == 2 && isModal ===1 ?  "Прошла успешно. На почту отправлена ссылка для подтверждения"
                  : "An error has occurred! Try again"}
              {language == 3 && isModal ===1 ?  "Прошла успешно. На почту отправлена ссылка для подтверждения"
                  : "Ката кетти! Кайра аракет кылыңыз"}
          </span>
          </div>
        </div>
        <Link  onClick={()=>isOpenModal()}>OK</Link>
      </div>
    </Modal>
  );
}
export default RegistrModalDemo;