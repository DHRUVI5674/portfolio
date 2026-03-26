import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import Button from '../components/Button';
import { Award } from 'lucide-react';

// Import certificate images
import sololearnCppImg from '../assets/sololearn_cpp.png';
import letsupgradeReactImg from '../assets/letsupgrade_react.png';
import freecodecampResponsiveImg from '../assets/freecodecamp_responsive.png';

const certificates = [
    {
        title: "Legacy Responsive Web Design V8",
        issuer: "freeCodeCamp",
        date: "2025",
        description: "Comprehensive 300-hour certification covering HTML5, CSS3, Flexbox, CSS Grid, and responsive design patterns for building accessible user interfaces.",
        image: sololearnCppImg
    },
    {
        title: "React Bootcamp",
        issuer: "LetsUpgrade",
        date: "2026",
        description: "Intensive 3-day React development bootcamp in collaboration with ITM Edutech and NSDC.",
        image: letsupgradeReactImg
    },
    {
        title: "Introduction to C++",
        issuer: "SoloLearn",
        date: "2026",
        description: "Certified in C++ fundamentals, coveraging syntax, data types, control structures, and object-oriented programming principles through practical exercises.",
        image: freecodecampResponsiveImg
    }
];

const Certificates = () => {
    return (
        <section id="certificates" className="py-20 bg-black/30">
            <div className="max-w-7xl mx-auto px-6">
                <SectionTitle title="Certifications" subtitle="Credentials and Milestones" />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <Card key={index} className="flex flex-col text-center items-center">
                            <div className="w-full h-40 overflow-hidden rounded-xl mb-6 relative">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                    <Award className="text-neon-cyan w-12 h-12" />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                            <p className="text-neon-cyan text-sm mb-4">{cert.issuer} • {cert.date}</p>
                            <p className="text-gray-400 text-sm mb-6">{cert.description}</p>

                            <Button
                                variant="outline"
                                className="w-full text-sm"
                                onClick={() => window.open(cert.image, '_blank')}
                            >
                                View Certificate
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
