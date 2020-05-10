import React, {FC} from "react";
import {Toolbar} from "../../_components/ui/toolbar/Toolbar";
import * as styles from "./HomePage.modules.css"

export const HomePage: FC = () => {
    return <div className={styles.Container}>
        <Toolbar/>
        <div className={styles.Content}>
            DOBRY KONTENT
        </div>
    </div>
};