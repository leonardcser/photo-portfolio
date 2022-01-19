import React from "react";
import { NavLink } from "../NavLink";

import styles from "./index.module.scss";

export const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <div className="flex content-center justify-between h-full">
                <NavLink>L.</NavLink>
                <div className="flex">
                    <NavLink>Work</NavLink>
                    <NavLink>Contact</NavLink>
                </div>
            </div>
        </div>
    );
};
