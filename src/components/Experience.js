import React from 'react'
import { Link } from 'react-router-dom'
import Tag from './Tag'
import arrow from '../pages/images/arrow.svg'
import Fade from 'react-reveal/Fade';


export default function Experience({ experience }) {
    return (
        <div class="project first-project">


            <div class="left-column">
                <Fade left delay={500} duration={1500}>
                    <h4 class="heading-5">latest work</h4>
                    <h1>{experience.name}</h1>
                </Fade>

                <div class="tags-wrapper">
                    <Fade left delay={700} duration={2000} distance={'200px'}>
                        {experience.tags.map(tag => { return <Tag tag={tag} /> })}</Fade>

                </div>

                <Fade left delay={900} duration={1500}>
                    <div >
                        <p class="portfolio-paragraph">{experience.description}</p>
                        <div class="button-wrapper">
                            <div class="button-border">
                                <Link to={experience.link} class="button w-button ab">
                                    see this project
                        </Link>

                            </div>
                        </div>
                    </div>
                </Fade>
            </div>


            <Fade right duration={2500} >
                <Link to={experience.link} class="mockup-column">

                    <img alt="A mockup of a project" src={experience.thumbnail} class="mockup-img" />

                    <div class="mockup-hover">
                        <div class="mockup-hover-text">See this project</div>
                        <div class="mockup-arrow-wrapper">
                            <img src={arrow} alt="" class="mockup-arrow" />
                        </div>
                    </div>
                </Link>
            </Fade>


        </div>
    )
}
