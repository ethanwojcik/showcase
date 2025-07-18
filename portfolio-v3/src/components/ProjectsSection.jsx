const projects = [
    {
        id:1,
        title: "Placeholder",
        description: "Desc",
        image: "../../public/vite.svg",
        tags: ["React","TailwindCSS",],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id:2,
        title: "Placeholder_2",
        description: "Desc",
        image: "../../public/vite.svg",
        tags: ["React",],
        demoUrl: "#",
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
                    Sample Text
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
                            </div>

                        
                        </div>
                    

                    ))}
                
                </div>
                
            </div>
        </section>);
};