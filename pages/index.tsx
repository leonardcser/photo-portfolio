import React from "react";

import { Container, Header, Main, Footer, Cards } from "@components";
import { HomeSection } from "@components/sections/HomeSection";

const Home: React.FC = () => {
    return (
        <Container>
            <Header />
            <HomeSection />
            <HomeSection />

            {/* <Main />
            <Cards />
            <Footer /> */}
        </Container>
    );
};

export default Home;
