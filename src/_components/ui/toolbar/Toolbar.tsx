import React, {FC} from "react";
import * as styles from "./Toolbar.modules.css"
import avatar from "./test-user-avatar.png"
import gear from "./gear-icon.svg"
import {AuthenticationService} from "../../../_services/AuthenticationService";
import { useHistory } from "react-router-dom";

export const Toolbar: FC = () => {
    const history = useHistory();

    const handleSettingsButton = () => {
        new AuthenticationService().logout()
    };

    const handleAvatarButton = () => {
        history.push("/song")
    };

    return <div className={styles.Toolbar}>
        <div className={styles.Profile}>
            <img src={avatar}
                 onClick={handleAvatarButton}
                 alt={"avatar"}/>
            <span>TestowyNickNumer2</span>
        </div>

        <input className={styles.SearchInput}
               type={"text"}
               placeholder={"Szukaj..."}/>

        <div className={styles.Settings}>

        <button className={styles.Gear}
                onClick={handleSettingsButton}><img src={gear} alt={"Ustawienia"}/></button>
        </div>
    </div>
};