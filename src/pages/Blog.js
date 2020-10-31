import React, { Component } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import cardimg from './images/cardimg.jpeg'
import next from './images/next.png'
import violin from './images/violin.jpg'

export default class Blog extends Component {
    render() {
        return (
            <div>
                <div class="hero">
                    <Navbar />
                    <div class="hero-wrap">
                        <div class="container">
                            <div class="headline-wrap">
                                <div class="highlight-box">
                                    <div class="highlight"></div>
                                    <h1 class="hero-heading">Blog</h1>
                                </div>
                            </div>
                            <p class="hero-paragraph">With a passion for writing as well, i've published articles on medium but feel free to check them out here</p>
                            <div className="card-section">
                                <div class="card">
                                    <img src={cardimg} alt="Avatar" className='blog-card-img' />
                                    <div class="card-container">
                                        <h4 className="card-header">Navigating a Data Driven Landscape</h4>
                                        <p className='card-brief'>How implementing a data-driven culture in your company can lead to long term success.</p>
                                        <div className="bottom-row-card">
                                            <h4 className="date">Oct 1, 2020</h4>
                                            <div className="read-more">
                                                <a href="/blogpost"><h4 className="read-more-text">read more</h4></a>
                                                <img src={next} className='next-arrow-card' alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card next-card">
                                    <img src={violin} alt="Avatar" className='blog-card-img' />
                                    <div class="card-container">
                                        <h4 className="card-header">Deliberate Practice to Attain Eminency</h4>
                                        <p className='card-brief'>We've all been told practise makes perfect but what causes these marginal benefits?</p>
                                        <div className="bottom-row-card">
                                            <h4 className="date">Nov 3, 2020</h4>
                                            <div className="read-more">
                                                <a href="/blogpost"><h4 className="read-more-text">read more</h4></a>
                                                <img src={next} className='next-arrow-card' alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
