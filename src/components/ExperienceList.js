import React from 'react'
import {Projects} from '../Database/Projects'
import Experience from './Experience'


export default function ExperienceList() {
    return (
        <div>
            {
                    Projects.map(experience => {
                        return <Experience experience={experience} key={experience.id}/>
                    })
            }
        </div>
    )
}
