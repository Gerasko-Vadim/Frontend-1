import React from "react"
import {Route,Switch} from "react-router-dom"
import ResearchCards from "./researchCards"
import SubmitBtn from "./submitBtn/submitBtn"
import classes from "./organizationPage.module.css"
import DetailMarket from "./detailMarket/detailMarket"

const Content=()=>{
    return(
        <Switch>
            <Route exact path="/organization-page">
            <SubmitBtn/>    <div className={classes.cardTitle}>
                <span>Мои исследования</span>
            </div>
            <ResearchCards/>
            </Route>
          <Route path="/organization-page/submit-research"><DetailMarket/></Route>
        </Switch>
        
    )
}
export default Content;