import React from 'react'
import mockup from './images/team2.png'
import arrow from './images/arrow.svg'
import intuition from './images/int2.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'


export default function Home() {
    return (
        <div>

            <div class="hero">
               <Navbar />
                <div class="hero-wrap">
                    <div class="container">
                        <div class="headline-wrap">
                            <h1 class="hero-heading">Hi, I’m Tapiwa,</h1>
                            <div class="highlight-box">
                                <div class="highlight"></div>
                                <h1 class="hero-heading" >Web Designer</h1>
                            </div>
                            <h1 class="hero-heading">and</h1>
                            <div class="highlight-box">
                                <div class="highlight"></div>
                                <h1 class="hero-heading">Full-Stack</h1>
                            </div>
                            <h1 class="hero-heading">Developer</h1>
                        </div>
                        <p class="hero-paragraph">I design and build beautiful websites for businesses around the globe. If you need a modern and powerful website, send me an email. If we are a good fit, I will give you a time and cost estimate.</p>
                        <div class="button-wrapper">
                            <div class="button-border">
                                <a href="#Portfolio" class="button w-button ap">see my work</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="scroll-wrapper">
                <div class="container relative">
                    <div class="scroll-block">
                        <div class="scroll-arrow"></div>
                        <div class="scroll-text">scroll</div>
                    </div>
                </div>
            </div>
            <div id="Portfolio" class="section">
                <div class="container">
                    <div class="w-dyn-list">
                        <div role="list" class="w-dyn-items">
                            <div role="listitem" class="w-dyn-item">
                                <div class="project first-project">
                                    <div class="left-column">
                                        <h4 class="heading-5">latest work</h4>
                                        <h1>inTuition website</h1>
                                        <div class="tags-wrapper">
                                            <div class="tag">Finance</div>
                                            <div class="tag">React</div>
                                            <div class="tag">Express</div>
                                        </div>
                                        <div >
                                            <p class="portfolio-paragraph">I work at inTuition as the head developer, where I design the UI/UX of the application to create a highly attractive and user-friendly website. I integrated a robust authentication process using Bcrypt JS and Passport JS and ensured the application was operative through rigorous testing. I also leverage React/Redux, Node/Express and Mongo DB to create a full-stack application that functions at an optimal level.</p>
                                            <div class="button-wrapper">
                                                <div class="button-border">
                                                    <Link to='/intuition' class="button w-button ab">
                                                    see this project
                                                    </Link>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="/intuition" class="mockup-column">

                                        <img alt="A mockup of a project" src={intuition} class="mockup-img"/>
                                       
                                        <div class="mockup-hover">
                                            <div class="mockup-hover-text">See this project</div>
                                            <div class="mockup-arrow-wrapper">
                                                <img src={arrow} alt="" class="mockup-arrow" />
                                            </div>
                                        </div>
                                    </a>

                                </div>
                                <div class="project second-project">
                                    <div class="left-column">
                                        <h1>Team App website</h1>
                                        <div class="tags-wrapper">
                                            <div class="tag">Concept</div>
                                            <div class="tag">Webflow Design</div>
                                            <div class="tag">Responsive</div>
                                        </div>
                                        <div >
                                            <p class="portfolio-paragraph">Team App was a concept project for a team communication website. I made it through Webflow and took advantage of their powerful CMS platform to create a blog section that management can update on their timeline without a developer. This Application is fully responsive and highlights the foundational principles behind a reliable website for a growing company.</p>
                                            <div class="button-wrapper">
                                                <div class="button-border">
                                                    <a href="/chatapp" class="button w-button ab">see this project</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="/chatapp" class="mockup-column w-inline-block">

                                        <img alt="A mockup of a project" src={mockup} class="mockup-img" />
                                      
                                        <div class="mockup-hover">
                                            <div class="mockup-hover-text">See this project</div>
                                            <div class="mockup-arrow-wrapper">
                                                <img src={arrow} alt="" class="mockup-arrow" />
                                            </div>
                                        </div>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section bottom-section">
                <div class="container">
                    <div class="what-i-do">
                        <div class="left-column ">
                            <h1 class="hero-heading">What</h1>
                            <div class="highlight-box">
                                <div class="highlight"></div>
                                <h1 class="hero-heading">I do</h1>
                            </div>
                        </div>
                        <div class="right-column ">
                            <h3 >Development</h3>
                            <p>I build full-stack applications and CMS websites using React, Node, Express and various databases. I can create responsive, rugged and fully custom websites. I am eager to continue making applications that make people's lives easier through intuitive UI/UX and rigorous testing, and robust APIs.</p>

                            <h3 class="development-heading">Design</h3>
                            <p>I design beautiful websites for modern businesses. Any business today needs a website that wins customers’ trust and helps you do your business well. I make sure your website is up to that standard using various tools to plan, prototype and build the site. These tools include, but are not limited to, Adobe XD, Illustrator, Figma, Balsamiq and more.</p>

                            <h3 class="development-heading">Languages & Frameworks</h3>
                            <div class="tags-wrapper">
                                            <div class="tag">React JS</div>
                                            <div class="tag">Node JS</div>
                                            <div class="tag">Express JS</div>
                                            <div class="tag">Javascript</div>
                                            <div class="tag">Python</div>
                                            <div class="tag">HTML</div>
                                            <div class="tag">CSS</div>
                                            <div class="tag">Webflow</div>
                                            <div class="tag">Adobe XD</div>
                                            <div class="tag">Photoshop</div>
                                            <div class="tag">Tensorflow</div>
                                            <div class="tag">Sci-kit Learn</div>
                                        </div>
                            

                        </div>
                    </div>
                </div>
            </div>
          <Footer />
        </div>
    )
}
