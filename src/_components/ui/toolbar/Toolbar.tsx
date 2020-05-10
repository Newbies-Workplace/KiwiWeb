import React, {FC} from "react";
import * as styles from "./Toolbar.modules.css"
import {AuthenticationService} from "../../../_services/AuthenticationService";

export const Toolbar: FC = () => {

    const logOut = () => {
        new AuthenticationService().logout()
    };

    //todo
    return <div className={styles.Toolbar}>
        <span>Profil</span>
        <input className={styles.SearchInput}
               type={"text"}
               placeholder={"Szukaj..."}/>
        <button onClick={logOut}>Wyloguj</button>
    </div>
};