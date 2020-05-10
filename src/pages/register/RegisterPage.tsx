import React, {FC, useState} from "react";
import * as styles from "./RegisterPage.modules.css"
import * as buttonStyles from "../../_components/button/Button.modules.css";
import * as inputStyles from "./../../_components/button/Input.modules.css";
import {FormBox} from "../../_components/containers/formBox/FormBox";
import {useHistory} from "react-router-dom";
import {AuthenticationService} from "../../_services/AuthenticationService";

export const RegisterPage: FC = () => {
    const history = useHistory();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    };
    const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    };
    const handleConfirmPasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value)
    };

    const handleBackButton = () => {
        history.goBack()
    };
    const handleRegisterButton = () => {
        new AuthenticationService()
            .register(email, password, confirmPassword)
            .then()
            .catch()
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
                   id={"new-password"}
                   name={"new-password"}
                   placeholder={"hasło"}
                   type={"password"}
                   autoComplete={"new-password"}
                   value={password}/>
            <input className={inputStyles.Input}
                   onChange={handleConfirmPasswordInput}
                   id={"confirm-new-password"}
                   name={"new-password"}
                   placeholder={"powtórz hasło"}
                   type={"password"}
                   autoComplete={"new-password"}
                   value={confirmPassword}/>

            <div className={styles.ButtonBar}>
                <button
                    type={"button"}
                    onClick={handleBackButton}
                    className={buttonStyles.Button}>Powrót</button>

                <button
                    type={"submit"}
                    className={buttonStyles.Button}
                    onClick={handleRegisterButton}>Zarejestruj</button>
            </div>
        </FormBox>
    </div>
};