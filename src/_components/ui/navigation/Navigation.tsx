import React, {FC} from "react";
import * as styles from "./Navigation.modules.css"
import classNames from 'classnames/bind';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMusic, faBook, faUserFriends, faEye, faHome} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

let cx = classNames.bind(styles);

interface NavigationProps {
    isOpen: boolean;
}

export const Navigation: FC<NavigationProps> = (props: NavigationProps) => {

    let navClass = cx({
        NavigationBar: true,
        Opened: props.isOpen
    });

    return <nav className={navClass}>

        <Link
            to={"/"}
            className={cx(styles.NavigationItem, styles.Selected)}>
            <FontAwesomeIcon icon={faHome} size={"2x"}/>
            <span>Główna</span>
        </Link>

        <Link
            to={"/"}
            className={styles.NavigationItem}>
            <FontAwesomeIcon icon={faEye} size={"2x"}/>
            <span>Odkrywaj</span>
        </Link>

        <Link
            to={"/song"}
            className={styles.NavigationItem}>
            <FontAwesomeIcon icon={faMusic} size={"2x"}/>
            <span>Muzyka</span>
        </Link>

        <Link
            to={"/"}
            className={styles.NavigationItem}>
            <FontAwesomeIcon icon={faBook} size={"2x"}/>
            <span>Playlisty</span>
        </Link>

        <Link
            to={"/"}
            className={styles.NavigationItem}>
            <FontAwesomeIcon icon={faUserFriends} size={"2x"}/>
            <span>Znajomi</span>
        </Link>

    </nav>
};