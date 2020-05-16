import React, {FC} from "react";
import {Toolbar} from "../../_components/ui/toolbar/Toolbar";
import * as styles from "./HomePage.modules.css"
import {Route, Switch} from "react-router-dom";
import {SongPage} from "../song/SongPage";
import {Navigation} from "../../_components/ui/navigation/Navigation";

export const HomePage: FC = () => {

    return <div className={styles.Container}>
        <Toolbar/>
        <div className={styles.NavContainer}>
            <Navigation/>
            <div className={styles.Content}>
                <Switch>
                    <Route exact path={"/"} component={() => <div>test</div>} />
                    <Route exact path={"/song"} component={SongPage} />
                </Switch>
            </div>
        </div>
    </div>
};