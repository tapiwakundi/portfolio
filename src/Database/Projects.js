import intuitionThumbnail from '../pages/images/int2.png'
import savonaThumbnail from '../pages/images/savona-thumbnail.png'
import teamappthumbnail from '../pages/images/team2.png'
import intuitionMockup from '../pages/images/int-fs.jpg'
import savonaMockup from '../pages/images/savona.png'
import teamappMockup from '../pages/images/team-fs.jpg'

export const Projects = [
    {
        id: "intuition",
        name: "inTuition website",
        tags: ["Financial Markets", "Express", "Mongo DB"],
        description: "Team App was a concept project for a team communication website. I made it through Webflow and took advantage of their powerful CMS platform to create a blog section that management can update on their timeline without a developer. This Application is fully responsive and highlights the foundational principles behind a reliable website for a growing company.",
        pageDescription: "Intuition is an online global money transfer application for international students who want a faster, and more secure way to transfer money from their home nation to their school. inTuition is commited to developing inovative technologies that make the global financial markets more convinient for end users.",
        thumbnail: intuitionThumbnail,
        mockup: intuitionMockup,
        link: '/experience/intuition'
    },
    {
        id: "savona",
        name: "Savona website",
        tags: ["Restaurant", "Webflow", "Content-Management-System"],
        description: "Savona is a local pizza restaurant in Calgary that serves the most delicious pizza, and I am excited to build their first website. I designed a modern website that reenforces Savona's culture, brand and identity. I integrated a robust online ordering process using moduurn to enable customers to order online and add a new avenue of revenue for the company",
        pageDescription: "Savona is a local pizza restaurant in Calgary that serves the most delicious pizza, and I am excited to build their first website. I designed a modern website that reenforces Savona's culture, brand and identity. I integrated a robust online ordering process using moduurn to enable customers to order online and add a new avenue of revenue for the company",
        thumbnail: savonaThumbnail,
        mockup: savonaMockup,
        link: '/experience/savona'
    },
    {
        id: "teamapp",
        name: "Team App website",
        tags: ["Concept", "Responsive", "Blog"],
        description: "Team App was a concept project for a team communication website. I made it through Webflow and took advantage of their powerful CMS platform to create a blog section that management can update on their timeline without a developer. This Application is fully responsive and highlights the foundational principles behind a reliable website for a growing company.",
        pageDescription: "Team App was a concept project for a team communication website. I made it through Webflow and took advantage of their powerful CMS platform to create a blog sect",
        thumbnail: teamappthumbnail,
        mockup: teamappMockup,
        link: '/experience/teamapp',
        live: "https://team-app.webflow.io/" 
    }
]

