import React, {FC} from "react";
import * as styles from "./LandingPage.modules.css"
import * as buttonStyles from "./../../_components/button/Button.modules.css"
import { useHistory } from "react-router-dom";
import logo from "./kiwi-web-icon.png"

export const LandingPage: FC = () => {
    const history = useHistory();

    const handleLoginButton = () => {
        history.push('/login')
    };

    const handleRegisterButton = () => {
        history.push('/register')
    };

    return <div className={styles.Container}>
        <img className={styles.Logo} src={logo} alt={"Logo"}/>
        <h1>Kiwi</h1>
        <div className={styles.ButtonBar}>
            <button
                className={buttonStyles.Button}
                onClick={handleLoginButton}>Zaloguj</button>
            <br/>
            <button
                className={buttonStyles.Button}
                onClick={handleRegisterButton}>Zarejestruj</button>
        </div>
    </div>
};