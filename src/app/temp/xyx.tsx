import React from 'react';

const LandingPage: React.FC = () => {
    return (
        <div className="bg-gray-100">
            <header className="bg-white shadow">
                <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
                    <a href="#" className="text-xl font-bold text-gray-800">Logo</a>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="text-gray-600 hover:text-gray-800">Home</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-800">About</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-800">Services</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <main className="container mx-auto px-4 py-12">
                <section>
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to our Landing Page</h1>
                    <p className="text-lg text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id aliquam aliquet, nisl nunc tincidunt nunc, vitae lacinia nunc nunc id nunc.</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Get Started</button>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">About Us</h2>
                    <p className="text-lg text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id aliquam aliquet, nisl nunc tincidunt nunc, vitae lacinia nunc nunc id nunc.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Services</h2>
                    <ul>
                        <li>Service 1</li>
                        <li>Service 2</li>
                        <li>Service 3</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
                    <p className="text-lg text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id aliquam aliquet, nisl nunc tincidunt nunc, vitae lacinia nunc nunc id nunc.</p>
                </section>
            </main>

            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto px-4">
                    <p className="text-center">&copy; 2022 Your Company. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;