import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import screenshot from './images/team-fs.jpg'

export default function Chatapp() {
    return (
        <div>
            <div class="header">
               <Navbar />
                <div class="header-wrapper">
                    <div class="container center">
                        <h4>project showcase</h4>
                        <h1>Chatapp</h1>
                        <p class="header-paragraph">Full website design and build for a concept team collaboration platform. This website also includes a beautiful blog. I have built the website and the blog in Webflow which has one of the best CMS for blog hosting.</p>
                        <a href="https://team-app.webflow.io/" rel='noreferrer' target='_blank'class="live-site-link yellow-link">visit live site →</a>
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="screen-container">
                    <img alt="A screenshot of web page" src={screenshot} class="screen-image" /></div>
            </div>
         <Footer />

        </div>
    )
}
