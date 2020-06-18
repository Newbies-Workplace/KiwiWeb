import React, {FC} from "react";
import * as styles from "./Navigation.modules.css"
import cx from 'classnames'

interface NavigationProps {
    isOpen: boolean;
}

export const Navigation: FC<NavigationProps> = (props: NavigationProps) => {

    let navClass = styles.NavigationBar;
    if (props.isOpen) {
        navClass = cx(styles.NavigationBar, styles.Opened)
    }

    return <nav className={navClass}>
        <ul>
            <li>heh</li>
            <li>heh</li>
            <li>heh</li>
            <li>heh</li>
        </ul>
    </nav>
};