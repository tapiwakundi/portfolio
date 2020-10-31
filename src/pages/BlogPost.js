import React, { Component } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import bloghero from './images/cardimg.jpeg'
import { title, header1, header2, para1, para2, para3, para4, para5, para6, para7, para8, para9, para10, subheader1, subheader2, subheader3, subheader4, summary } from '../components/Blog-components'


export default class BlogPost extends Component {
    render() {
        return (
            <div className='entry-hero'>

                <Navbar />


                <div class="headline-wrap blog-wrap">
                    <div class="highlight-box blog-info highlight-box-mobile">
                        <div class="highlight d9"></div>
                        <h1 class="hero-heading-blog">{title}</h1>
                        <h4 className="date-blog">Oct 1, 2020</h4>
                        <p >{summary}</p>
                    </div>
                    <img src={bloghero} alt="" />
                    <div className="blog-text">
                        <h3 className='blog-header' >{header1}</h3>
                        <p className='blog-paragraph' >{para1}<br /><br />{para2}
                        </p>
                        <br />
                        <h3 className='blog-header' >{header2}</h3><br /><h4 className='subheader-blog'>{subheader1}</h4>
                        <p>{para3}<br /><br />
                            {para4}
                        </p><br />
                        <h4 className='subheader-blog'>{subheader2}</h4>
                        <p>{para5} <br /><br />{para6} </p><h4 className='subheader-blog'><br />{subheader3}</h4>
                        <p>{para7} <br /><br />{para8} </p><h4 className='subheader-blog'><br />{subheader4}</h4>
                        <p>{para9} <br /><br />{para10} </p>
                    </div>

                </div>

                <div className="card-section">

                </div>
                <Footer />
            </div>
        )
    }
}
