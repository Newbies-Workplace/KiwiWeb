import React, {FormEvent} from "react";
import * as styles from "./FormBox.modules.css";

/**
 * All forms submit should be handled with submit button function.
 */
const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    return false
};

export const FormBox = ({children}) => (
    <form
        onSubmit={handleSubmit}
        className={styles.LoginBox}>
        <div className={styles.TopAccentBar}/>
        <div className={styles.LoginBoxContent}>
        {children}
        </div>
    </form>
);