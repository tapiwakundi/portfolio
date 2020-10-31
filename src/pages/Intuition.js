import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import screenshot from './images/int-fs.png'

export default function Intuition() {
    return (
        <div>
            <div class="header">
                <Navbar />
                <div class="header-wrapper">
                    <div class="container center">
                        <h4>project showcase</h4>
                        <h1>Intuition</h1>
                        <p class="header-paragraph">Intuition is an online global money transfer application for international students who want a faster, and more secure way to transfer money from their home nation to their school. inTuition is commited to developing inovative technologies that make the global financial markets more convinient for end users.</p>
                        <a href="#" class="live-site-link yellow-link">visit live site →</a>
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
