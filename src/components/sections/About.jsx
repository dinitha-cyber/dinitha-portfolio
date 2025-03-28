import{ RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const technicalSkills = ["Python", "Java", "C#", ".NET", "React", "HTML", "CSS", "JavaScript", "SQL", "TailwindCSS"]
    const cybersecuritySkills = ["Metasploit", "Burp Suite", "Nmap", "Wireshark", "Kali Linux", "Penetration Testing", "Vulnerability Analysis", "Network Security", "Cloud Security"]
    return (
    <section 
        id="about" 
        className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>

        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> About Me</h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-grey-300 mb-6">
                Detail-oriented BSc(Hons) Computer Security Undergraduate (Expected Graduation: Dec 2025) with expertise in 
cybersecurity practices, penetration testing, and vulnerability analysis. Proficient in industry-standard tools 
(Metasploit, Burp Suite, Nmap) for identifying and mitigating security risks, coupled with strong analytical skills 
to deliver actionable reports. Skilled in full-stack web development (React,HTML, CSS, JavaScript), built responsive, 
secure, user-focused websites. Developed Python-based tools and projects showcased on GitHub, demonstrating 
problem-solving and coding proficiency. Eager to leverage technical acumen in cybersecurity or web development 
roles to drive innovation while expanding hands-on experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Technical</h3>
                        <div className="flex flex-wrap gap-2">
                            {technicalSkills.map((tech, key) =>(
                                <span key={key}className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">CyberSecurity</h3>
                        <div className="flex flex-wrap gap-2">
                            {cybersecuritySkills.map((tech, key) =>(
                                <span key={key}className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">🏫Education</h3>
                           <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>BSc(Hons)Computer Security</strong> - University of Plymouth (2022-2025)
                            </li>
                            <li>
                                Relevent Coursework: Cybersecurity, Network Security, Web Development, Software Engineering
                            </li>
                            <li>
                                <strong>GCE.Advanced Level Biology</strong> - Royal College Colombo (2007-2020)
                                 </li>
                            </ul>

                            
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">🎓Certifications</h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">SecOps SIEM Fundamentals from Google Cloud</h4>
                                    <p>Learned SIEM tools for real-time security 
                                    monitoring and threat detection.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">SOAR Fundamentals from Google Cloud</h4>
                                    <p>Learned about automating incident response workflow </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Foundation Level Threat Intelligence Analysis by ArcX</h4>
                                    <p>Learn what threat intelligence is and how it fits into the broader cybersecurity landscape. </p>
                                </div>
                                

                            </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
    );
};