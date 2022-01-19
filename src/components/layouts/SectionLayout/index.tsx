import React from "react";

import styles from "./index.module.scss";

export const SectionLayout: React.FC = ({ children }) => {
    return (
        <div className="relative">
            <div className={styles["section-layout"]}>{children}</div>
        </div>
    );
};
