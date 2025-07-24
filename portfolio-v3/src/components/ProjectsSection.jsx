import { ArrowRight, ExternalLink, Github } from "lucide-react";


const projects = [
    {
        id:1,
        title: "Self Learning Frogger",
        description: "A fork of a python frogger project. Modified to use Deep Q-Learning to train an AI agent to play frogger",
        image: "/frog2.gif",
        tags: ["Python","Deep Learning","Work In Progress"],
        demoUrl: "#coming-soon",
        githubUrl: "https://github.com/ethanwojcik/frogger-ai"
    },
    {
        id:2,
        title: "Portfolio",
        description: "You are currently looking at it! Modern design ",
        image: "../ss.PNG",
        tags: ["React","JavaScript"],
        demoUrl: "#coming-soon",
        githubUrl: "#"
    }
];
export const ProjectsSection = () => {
    return (<section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">   
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured  
                    <span className="text-primary"> 
                        {" "}Projects
                    </span>
                </h2>
                <p className= "text-center text-muted-forground mb-12 max-w-2xl mx-auto">
                    Stay tuned as I continue to fill out this section with more projects. Currently I am working on Self Learning Frogger.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                    {projects.map((project,key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">

                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag)=>  (
                                        <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"> {tag}</span>
                                    ))}
                                </div>
                            

                        <h3 className="text-cl font-semibold mb-1">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.demoUrl}
                                    target="_blank"
                                     className="text-foreground/80 hover:text-primary transition-colors duration-300"> <ExternalLink size={20}> </ExternalLink></a>
                                    <a href={project.githubUrl} 
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"> <Github size={20}> </Github></a>
                                </div>
                            </div>
                            </div>
                        </div>
                    

                    ))}
                
                </div>
                <div className=" text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target = "_blank" href="https://github.com/ethanwojcik">
                        Check out my Github <ArrowRight size={16}/>
                    </a>

                </div>
                
            </div>
        </section>);
};