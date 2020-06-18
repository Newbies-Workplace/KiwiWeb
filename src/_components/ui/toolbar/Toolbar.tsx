import React, {FC} from "react";
import * as styles from "./Toolbar.modules.css"
import avatar from "./test-user-avatar.png"
import gear from "./gear-icon.svg"
import {AuthenticationService} from "../../../_services/AuthenticationService";
import { useHistory } from "react-router-dom";

interface ToolbarProps {
    handleNavigationButton: () => void
}

export const Toolbar: FC<ToolbarProps> = (props: ToolbarProps) => {
    const history = useHistory();

    const handleNavigationButton = () => {
        props.handleNavigationButton()
    };

    const handleAvatarButton = () => {
        //history.push("/song")
        new AuthenticationService().logout()
    };

    return <div className={styles.Toolbar}>
        <div className={styles.Settings}>
            <button className={styles.Gear}
                    onClick={handleNavigationButton}><img src={gear} alt={"Ustawienia"}/></button>
        </div>

        <input className={styles.SearchInput}
               type={"text"}
               placeholder={"Szukaj..."}/>

        <div className={styles.Profile}>
            <span>TestowyNickNumer2</span>
            <img src={avatar}
                 onClick={handleAvatarButton}
                 alt={"avatar"}/>
        </div>
    </div>
};