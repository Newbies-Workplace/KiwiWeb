import React, {FC, useState} from "react";
import * as styles from "./LoginPage.modules.css";
import * as buttonStyles from "./../../_components/button/Button.modules.css";
import * as inputStyles from "./../../_components/button/Input.modules.css";
import { useHistory } from "react-router-dom";
import { AuthenticationService } from "../../_services/AuthenticationService";
import {FormBox} from "../../_components/containers/formBox/FormBox";

export const LoginPage: FC = () => {
    const history = useHistory();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    };

    const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    };

    const handleLoginButton = () => {
        new AuthenticationService()
            .login(email, password)
            .then((token: string) => {
                console.log("TOKEN: " + token);
                history.push('/');
            })
            .catch((error) => {

                console.error("error: " + error);
            });

        return false
    };

    const handleBackButton = () => {
        history.goBack()
    };

    return <div className={styles.Container}>
        <FormBox>
            <input className={inputStyles.Input}
                   onChange={handleEmailInput}
                   name={"email"}
                   placeholder={"user@kiwi.pl"}
                   autoComplete={"email"}
                   value={email}/>
            <input className={inputStyles.Input}
                   onChange={handlePasswordInput}
                   name={"password"}
                   placeholder={"hasło"}
                   type={"password"}
                   autoComplete={"current-password"}
                   value={password}/>

            <div className={styles.ButtonBar}>
                <button
                    type={"button"}
                    onClick={handleBackButton}
                    className={buttonStyles.Button}>Powrót</button>

                <button
                    type={"submit"}
                    className={buttonStyles.Button}
                    onClick={handleLoginButton}>Zaloguj</button>
            </div>
        </FormBox>
    </div>
};