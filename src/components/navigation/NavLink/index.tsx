import React from "react";

interface Props {
    href?: string;
}

export const NavLink: React.FC<Props> = ({ children, href }) => {
    return (
        <div className="mx-4">
            <h5>{children}</h5>
        </div>
    );
};
