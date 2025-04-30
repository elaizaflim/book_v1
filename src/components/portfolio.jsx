function Portfolio() {
    return (
        <div>
            {/* ANG HEADER AT NAVIGATION BAR */}
            <header id='port-head'>
                <nav className="nav">
                    <a href="#about">About Me</a>
                    <a href="#skills">Skills</a>
                    <a href="#contacts">Contacts</a>
                </nav>
            </header>
            <main>
                {/* SECTION NG ABOUT AT LAHAT NG ELEMENTS SA LOOB */}
                <section className="first-section" >
                    <div className="main-text">
                        <img src="/public/EiziePro.jpg" alt="dsa" className="first-image"  id="about"/>
                        <h1>Nice to meet you!</h1>
                        <h2>I'm Eizie</h2>
                        <h3>Backend/Frontend Developer</h3>
                        <p>Hello! Im Elaiza Flores Lim, a passionate photographer with a creative eye for capturing meaningful moments. My journey into photography began with a love for storytelling through images. Over time, I’ve developed my skills in framing, lighting, and editing, allowing me to turn everyday scenes into powerful visual stories. Whether it’s portraits, nature, or events, I aim to capture emotions and details that often go unnoticed..</p>
                    </div> 
                </section>

                {/* SECTIONG NG SKILLS AT LAHAT NG ELEMENTS SA LOOB */}
                <section className="second-section" id="skills">
                    <div className="main-text-skills">
                        <h1>Skills</h1>
                        <ul>
                            <li>Photgrapher</li>
                            <li>Drawing</li>
                            <li>LightRoom</li>
                        </ul>
                        <i className="fa-brands fa-python fa-beat fa-2xl"></i>
                        <i className="fa-solid fa-code fa-beat fa-2xl"></i>
                        <i className="fa-brands fa-css3-alt fa-beat fa-2xl" ></i>
                        <h1>Work Experience</h1>
                        <ul>
                            <li>Freelance Photographer</li>
                            <li>Event Photographer</li>
                            <li>Photo Editor for Student</li>
                            <li>Basic Games</li>
                        </ul>
                    </div>
                </section>

                {/* SECTION NG PROJECTS AT LAHAT NG ELEMENTS SA LOOB */}
                <section className="third-section" id="projects">SS

                </section>
                
                {/* SECTION NG CONTACTS AT LAHAT NG ELEMENTS SA LOOB */}
                <section className="fourth-section" id="contacts">
                    <div className="main-text-contact">
                        <h1>My Contacts</h1>
                        <h2>You can call me anytime and anywhere</h2>
                        <p>Email: <a href="emailto:eiziefloreslim60@gmail.com" >eiziefloreslim60@gmail.com</a></p>
                        <p>Phone: <a href="tel:+639107725120" >09620755640</a></p>
                        <h1>Socials</h1>
                        <a href="https://www.facebook.com/elaizafloreslim.14" target="_blank"  rel="noreferrer"><i className="fa-brands fa-facebook fa-2xl fa-beat"></i></a>
                        <a href="https://www.instagram.com/cyb3r.pro/" target="_blank" rel="noreferrer"><i className="fa-brands fa-square-instagram fa-2xl fa-beat"></i></a>

                    </div>
                </section>
            </main>
            {/* PINAKA BABA AT SECTIONG NG FOOTER  */}
            <footer>
                <section>
                    <h4>© 2019 Eizie Flores Lim. All Rights Reserved</h4>
                </section>
            </footer>
        </div>
    );
}

export default Portfolio;