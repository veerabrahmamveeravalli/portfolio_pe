import React from 'react';
import optImg from '../assets/opt.JPG';
 // Assuming you have a CSS file for additional styles

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-300 flex items-center justify-center px-4 py-10">
            <div className="bg-white rounded-3xl shadow-2xl border border-blue-200 max-w-6xl w-full flex flex-col lg:flex-row overflow-hidden">
                {/* Left: Profile Image */}
                <div className="flex flex-col items-center justify-center bg-blue-100 p-10 lg:w-1/2">
                    <img
                        src={optImg}
                        alt="Profile"
                        className="w-100 h-100 rounded-full mb-6 shadow-xl border-8 border-blue-400"
                    />
                    <h1 className="text-4xl font-extrabold text-blue-700 drop-shadow text-center">
                        Veerabrahmam Veeravalli
                    </h1>
                </div>

                {/* Right: Content */}
                <div className="p-10 lg:w-1/2 space-y-8">
                    {/* About Me */}
                    <div>
                        <h2 className="text-2xl font-semibold text-blue-600 mb-2">About Me</h2>
                        <p className="text-gray-700 text-lg">
                            I’m Veerabrahmam Veeravalli, a passionate Software Engineer with a Master’s in Information Systems Technology from 
                            the University of North Texas. I specialize in backend development using Python and Django, cloud deployments on GCP 
                            and AWS, and database optimization with MySQL and SQL Server. I have hands-on experience building scalable APIs, 
                            automating CI/CD pipelines, and working in Agile teams.

                            I’m also skilled in modern web technologies like React and Tailwind CSS, and I enjoy creating dynamic, responsive user 
                            interfaces. My projects range from AI-powered tutoring assistants to interactive data dashboards, showcasing my ability 
                            to blend software engineering with data-driven insights. I’m eager to contribute to innovative software solutions and 
                            grow my expertise in cloud and full-stack development.
                        </p>
                    </div>

                    {/* Skills */}
                    <div>


                        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Skills</h2>
                        <ul className="list-disc list-inside text-gray-700 text-lg space-y-1">
                            <li>Python</li>
                            <li>SQL</li>
                            <li>GCP</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Tailwind CSS</li>
                            
                        </ul>
                    </div>

                    {/* Projects */}
                    <div>
                        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Projects</h2>
                        <p className="text-gray-700 mb-3">
                            Check out some of my projects that showcase my skills and passion for web development.
                        </p>
                        <a
                            href="/projects"
                            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-200 font-semibold"
                        >
                            View Projects
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

