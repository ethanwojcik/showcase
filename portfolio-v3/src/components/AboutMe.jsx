import { Briefcase, Code, User } from "lucide-react";

export const AboutMe = () => {
    return(
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">
                            Me
                    </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Sample Text</h3>
                        <p className="text-muted-foreground">
                            I am a recent graduate from the University of Michigan with a Bachelor of Science in Engineering in Computer Science. Currently I am seeking work and made this website to showcase some of my skills. I have had a passion for coding ever since high school and love the problem solving aspect that comes with it
                        </p>
                        <p className="text-muted-foreground">
                            I have taken extensive upper level coursework at Michigan and tried to dip my toes into every discipline of CS I could. Some of my favorites were Operating Systems, Compiler Construction, and the ML, AI, and CV classes I took.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button"> 
                                Reach Out
                            </a>
                            <a className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-100"
                                href="../../public/resume.pdf" download="Ethan Wojcik Resume.pdf"> 
                                Download Resume
                            </a>
                        </div>
                    </div>
                                        <div className="flex justify-center">
                        <div className="w-56 h-56 rounded-xl overflow-hidden shadow-lg border-4 border-primary bg-gray-100 flex items-center justify-center">
 
                            { <img src="../../public/DSC_9168.jpg" alt="Profile" className="object-cover w-full h-full" /> }
                        </div>
                    </div>


                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> My past summer experience was...</h4>
                                    <p className="text-muted-foreground">
                                        as an automation developer intern at Federated Hermes were I designed and maintained C# test suites
                                    </p>
                                </div>
                             </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                                </div>   
                                 <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Some of my other passions include... </h4>
                                    <p className="text-muted-foreground">
                                        Skiing, video games, golf, and watching soccer
                                    </p>
                                </div>
                             </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                         <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                                </div>   
                                 <div className="text-left">
                                    <h4 className="font-semibold text-lg"> I am looking for...</h4>
                                    <p className="text-muted-foreground">
                                       Entry level software engineering positions
                                    </p>
                                </div>
                             </div>
                        </div>
                    </div>

                </div>
            </div>
        </section> 
    );
};