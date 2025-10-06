import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
     {
        id : 1,
        title : "Volunteer Connect App (Group project)",
        description : "A mobile app built with Flutter, Riverpod, Express, and MySQL that connects volunteers with organizations and manages opportunities efficiently.",
        image : "/projects/volunteer-connect-2.png",
        tag : ["Flutter","Express", "MySQL"],
        demoUrl : " https://www.figma.com/design/cJ3yuE1zTnh3TTQZmpce8t/volunteer-connect?node-id=0-1&t=1YF1Hz2uK1rXOt3N-1",
        githubUrl : "https://github.com/JiruGutema/flutter_riverpod_final"
     },
     {
        id : 2,
        title : "Drum Kit Website ",
        description : "An interactive drum kit web app built with jQuery and CSS that lets users play sounds by clicking or pressing keys.",
        image : "/projects/drumKit.png",
        tag : ["Html","CSS","jQuery"],
        demoUrl : "#",
        githubUrl : "https://github.com/abigiyaDa/drum-kit-jQuery"
     },
     {
        id : 3,
        title : "Todo List Web App",
        description : "A full-featured todo list application built with EJS, Express, and CSS, allowing users to create, edit, and view detailed tasks.",
        image : "/projects/todo.png",
        tag : ["EJS","CSS","Express","Node.js"],
        demoUrl : "#",
        githubUrl : "https://github.com/abigiyaDa/Todo-using-ejs-node-express/tree/main/public/styles"
     },
     {
        id : 4,
        title : "Simple Product Catalog",
        description : "A responsive and simple Product Catalog Website using html and css",
        image : "/projects/products.png",
        tag : ["Html","CSS"],
        demoUrl : "https://abigiyada.github.io/ASSESSMNET1_AbigiyaDaniel_section4/Assessment1_AbigiyaDaniel_section4/",
        githubUrl : "https://github.com/abigiyaDa/ASSESSMNET1_AbigiyaDaniel_section4"
     },
     {
        id : 5,
        title : "Restaurant Ordering System (Group project)",
        description : "A group project built with Node.js, TypeScript, and HTML, where I contributed as a frontend developer to create an interactive ordering interface.",
        image : "/projects/restaurant.png",
        tag : ["Node.js", "TypeScript", "HTML"],
        demoUrl : "#",
        githubUrl : "https://github.com/Ephraimdebel/Restaurant_Ordering_System_2024_25"
     },
     {
        id : 6,
        title : "Old Portfolio Website",
        description : "My previous portfolio built with HTML, CSS, and JavaScript, showcasing my early web development projects and foundational skills.",
        image : "/projects/Portfolio.png",
        tag : ["HTML", "CSS", "JavaScript"],
        demoUrl : "https://abigiyada.github.io/UGR-5110-15-portfolio-profile-html-css-js/index.html",
        githubUrl : "https://github.com/abigiyaDa/UGR-5110-15-portfolio-profile-html-css-js/tree/final"
     },
]

export const ProjectsSection = () => {
    return(
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span></h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here’s a look at my recent projects — crafted with care, performance in mind, and a deep appreciation for good UI.
                </p>

                {/* display the projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project,key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            {/* styling for the image */}
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>
                            {/* styling for the tag */}
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tag.map((tag)=> (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        {/*link for the demo*/}
                                        <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20} />
                                        </a>
                                        {/* a link for the git hub */}
                                        <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a 
                        href="https://github.com/abigiyaDa/" 
                        target="_blank" 
                        className="cosmic-button w-fit flex items-center mx-auto gap-2">
                        Check My Github <ArrowRight size={16}/>
                    </a>
                </div>
            </div>

        </section>
    ) 
}