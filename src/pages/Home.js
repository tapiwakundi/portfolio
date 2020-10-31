import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ExperienceList from '../components/ExperienceList'
import Fade from 'react-reveal/Fade';



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
                        
                        
                        <p class="hero-paragraph">I design and build beautiful websites for businesses around the globe. If you need a modern and powerful website, send me an email and if we are a good fit, I will give you a time and cost estimate.</p>
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
                                <ExperienceList />
                               
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
                        <Fade bottom delay={400}>
                            <h3 >Development</h3>
                            <p>I build full-stack applications and CMS websites using React, Node, Express and various databases. I can create responsive, rugged and fully custom websites. I am eager to continue making applications that make people's lives easier through intuitive UI/UX and rigorous testing, and robust APIs.</p>
                            </Fade>
                            <Fade bottom delay={500}>
                            <h3 class="development-heading">Design</h3>
                            <p>I design beautiful websites for modern businesses. Any business today needs a website that wins customers’ trust and helps you do your business well. I make sure your website is up to that standard using various tools to plan, prototype and build the site. These tools include, but are not limited to, Adobe XD, Illustrator, Figma, Balsamiq and more.</p>
                            </Fade>
                           
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
