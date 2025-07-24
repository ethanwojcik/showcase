
import { Linkedin, LinkedinIcon, Mail,Phone, Send } from "lucide-react";
import {useToast} from "../hooks/use-toast"
import { cn } from "../lib/utils";
import { useState } from "react";
export const Contact = () => {
    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(()=> {
            toast({
                title: "Message sent!",
                description: "Thank you for your message.",
            });
            setIsSubmitting(false);
        },1500);
    };

    return (
        <section id="contact"
        className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-2-2xl mx-auto">
                    Want to reach out? I am always excited to talk about new opportunities or projects. Feel free to send me an email, text, or connect with me on LinkedIn.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

                        <div className="space-y-6 justify-center">


                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 "> 
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium"> Email</h4>
                                    <a href="mailto:ewoj@umich.edu"
                                    className="text-muted-foreground hover:text-primary transition-colors">
                                        ewoj@umich.edu
                                    </a>
                                </div>
                            </div>


                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 "> 
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium"> Phone</h4>
                                    <a href="tel:+18622192694"
                                    className="text-muted-foreground hover:text-primary transition-colors">
                                        +1 (862) 219-2694
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 "> 
                                    <LinkedinIcon className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium text-center"> LinkedIn</h4>
                                    <a href="https://www.linkedin.com/in/ethan-wojcik/"
                                    className="text-muted-foreground hover:text-primary transition-colors">
                                        Ethan Wojcik
                                    </a>
                                </div>
                            </div>
                            <div></div>





                        </div>
                        


                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs"
                    onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="nlock text-sm font-medium mb-2"> Your Name</label>
                                
                                <input type ="text" id="name" name="Your Name" required className="w-full
                                px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Firstname Lastname..."/>
                            </div>

                        </form>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="email" className="nlock text-sm font-medium mb-2"> Your Email</label>
                                
                                <input type ="text" id="email" name="Your Email" required className="w-full
                                px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="example@gmail.com"/>
                            </div>

                        </form>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="message" className="nlock text-sm font-medium mb-2"> Your Message</label>
                                
                                <textarea id="email" name="Your Email" required className="w-full
                                px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="..."/>
                            </div>
                            <button type="submit"
                            disabled={isSubmitting}
                            className={cn("cosmic-button w-full flex items-center justify-center gap-2"

                            )}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                                
                                    <Send size={16}/>
                            </button>

                        </form>


                    </div>
                </div>
            </div>
        </section>
    );
};