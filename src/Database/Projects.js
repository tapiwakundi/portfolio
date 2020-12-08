import intuitionThumbnail from '../pages/images/intuitionThumbnail.png'
import intuitionMockup from '../pages/images/intuitionMockup.png'
import teamappthumbnail from '../pages/images/team2.png'
import teamappMockup from '../pages/images/team-fs.jpg'
import dermigenThumbnail from '../pages/images/dermigenThumbnail.png'
import dermigenMockup from '../pages/images/dermigenMockup.png'


export const Projects = [
    {
        id: "intuition",
        name: "inTuition App",
        tags: ["Financial Markets", "Express", "Mongo DB", "JavaScript"],
        description: "Intuition is an online global money transfer application for international students who want a faster, and more secure way to transfer money from their home nation to their school. inTuition is commited to developing inovative technologies that make the global financial markets more convinient for end users.",
        pageDescription: "After speaking to an old friend who had an idea to develop an online global money transfer application, I was intrigued and could not pass on the opportunity to create a platform like this. I was excited to put my React and Node experience to build a highly scalable server and user-friendly front end experience. We are currently developing the mobile app for ios and android using react-native and a robust server to handle requests both from the web and mobile app. Through an iterative design process, we improved upon code-quality and the UI/UX.",
        thumbnail: intuitionThumbnail,
        mockup: intuitionMockup,
        link: '/experience/intuition'
    },
    {
        id: "dermigen",
        name: "DermiGen Website",
        tags: ["Skin Care", "E-Commerce", "Beauty"],
        description: "DermiGen is an organic skincare company that specializes in burn treatment creams. Unlike its competitors, it offers a cream with all natural ingredients and no side effects.",
        pageDescription: "After an energizing conversation with the owner of DermiGen, I could feel her passion for wanting to solve people's problems. I could see her vision and wanted to do my absolute best to bring that vision in the form of a beautiful website where her clients can find solutions that solve their problems. I designed the website using Adobe XD and Figma and the result was a clean, modern and focused website that keeps clients visiting ",
        thumbnail: dermigenThumbnail,
        mockup: dermigenMockup,
        link: '/experience/dermigen'
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

