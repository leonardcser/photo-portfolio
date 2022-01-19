import React from "react";
import { SectionLayout } from "@components/layouts/SectionLayout";

export const HomeSection: React.FC = () => {
    return (
        <SectionLayout>
            <div className="flex h-full items-center justify-center">
                <h1 className="text-9xl">Leonard Cseres</h1>
            </div>
        </SectionLayout>
    );
};
