import React from 'react'
import NavLandingPage from './NavLandingPage'
import LandingPage from './LandingPage'
import RefrencePage from './RefrencePage'
import AlgoritmaCnn from './AlgoritmaCnn'
import DeploymentPage from './DeploymentPage'
import FooterLandingPage from './FooterLandingPage'

function AllPages() {
    return (
        <div>
            <header>
                <NavLandingPage />
            </header>
            <div>
                <section id='/about'>
                    <LandingPage />
                </section>
                <section id='/dataset'>
                    <RefrencePage />
                </section>
                <section id='/algoritma'>
                    <AlgoritmaCnn />
                </section>
                <section id='/deployment'>
                    <DeploymentPage />
                </section>
            </div>
            <FooterLandingPage />
        </div>
    )
}

export default AllPages 
