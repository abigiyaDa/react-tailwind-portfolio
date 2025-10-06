import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import {cn} from '@/lib/utils';

export const ContactSection = () => {


    return(
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto ">
                    Have a project in mind or want to collaborate? Feel free to reach out!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Information
                            
                        </h3>

                        {/* contact info's email , ... */}
                        <div className="space-y-6 justify-center">

                            {/* email */}

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div >
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:abigiyada@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">abigiyada@gmail.com</a>
                                </div>
                            </div>

                            {/*  phone */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div >
                                    <h4 className="font-medium">Phone</h4>
                                    <a href="tel:+251909540418" className="text-muted-foreground hover:text-primary transition-colors">
                                        +251 909540418
                                    </a>
                                </div>
                            </div>

                            {/* Location  */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div >
                                    <h4 className="font-medium">Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Ethiopia, Addis Ababa
                                    </a>
                                </div>
                            </div>
                            
                        </div>
                        {/* socials  */}
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/abigiya-daniel-420405282/" target="_blank" ><Linkedin className="h-6 w-6 text-primary"/> </a>
                                <a href="https://www.instagram.com/abigiyada/" target="_blank"><Instagram className="h-6 w-6 text-primary" /> </a>
                                <a href="https://t.me/Abigiyada" target="_blank"><Send className="h-6 w-6 text-primary"/> </a>
                                <a href="https://github.com/abigiyaDa/" target="_blank"><Github className="h-6 w-6 text-primary"/> </a>

                            </div>
                        </div>
                    </div>

                    {/* contact form */}
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                        <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                            <input type="hidden" name="access_key" value="1c0d88d2-5296-42a3-9ffe-bbba5c3ccd41"></input>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input type="text" name="name" id="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary " placeholder="Abigiya Daniel..."/>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input type="email" name="email" id="email" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary " placeholder="abigiyada@gmail.com..."/>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea name="message" id="message" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="Hello, ..."/>
                            </div>
                            <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2",
                                ""
                            )}>
                                Send Message
                                <Send size={16}/>

                            </button>

                        </form>
                    </div>
                </div>
            </div>
            
        </section>
    )
}