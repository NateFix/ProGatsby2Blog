import React from 'react';

import Layout from "../components/layout"

const About = ({location}) => (
    <Layout location={location}>
        <div>
            <h1>About Nate</h1>
            <p>
                Nate is a Master of Software Development student attending Wellington ICT Graduate School,
                due to graduate in November 2019. He likes Mahjong and long walks on the beach.
            </p>
        </div>
    </Layout>
)

export default About;