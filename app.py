import streamlit as st

# Page configuration
st.set_page_config(
    page_title="Ahmed Riyaz - Portfolio",
    page_icon="👨‍💻",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Custom CSS for styling
st.markdown("""
<style>
    /* Import fonts */
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Bebas+Neue&display=swap');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

    /* Global styles */
    .stApp {
        background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
        color: #ffffff;
        font-family: 'Inter', sans-serif;
    }

    /* Hero section */
    .hero-section {
        text-align: center;
        padding: 100px 20px;
        background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
        margin-bottom: 50px;
        border-radius: 10px;
    }

    .hero-title {
        font-family: 'Bebas Neue', cursive;
        font-size: 6rem;
        font-weight: 900;
        letter-spacing: 8px;
        margin-bottom: 20px;
        background: linear-gradient(45deg, #2196F3, #00bcd4);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .hero-subtitle {
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: 4px;
        color: #2196F3;
        margin-bottom: 20px;
    }

    .hero-description {
        font-size: 1.2rem;
        color: #cccccc;
        max-width: 600px;
        margin: 0 auto;
    }

    /* Section styles */
    .section-title {
        font-family: 'Bebas Neue', cursive;
        font-size: 3rem;
        letter-spacing: 4px;
        margin-bottom: 40px;
        color: #2196F3;
        text-align: center;
    }

    /* Project card styles */
    .project-card {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
        padding: 20px;
        margin-bottom: 20px;
        border: 1px solid rgba(33, 150, 243, 0.3);
        transition: transform 0.3s ease;
    }

    .project-card:hover {
        transform: translateY(-5px);
        border-color: #2196F3;
    }

    .project-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: #2196F3;
        margin-bottom: 10px;
    }

    .project-description {
        color: #cccccc;
        margin-bottom: 15px;
        line-height: 1.6;
    }

    .tech-tag {
        display: inline-block;
        background: rgba(33, 150, 243, 0.2);
        color: #2196F3;
        padding: 5px 12px;
        border-radius: 5px;
        margin-right: 8px;
        margin-bottom: 8px;
        font-size: 0.85rem;
        font-weight: 500;
    }

    /* Skill card styles */
    .skill-category {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
        padding: 25px;
        margin-bottom: 20px;
        border: 1px solid rgba(33, 150, 243, 0.3);
    }

    .category-title {
        font-size: 1.8rem;
        font-weight: 700;
        color: #2196F3;
        margin-bottom: 20px;
    }

    .skill-item {
        margin-bottom: 15px;
        padding: 15px;
        background: rgba(255, 255, 255, 0.03);
        border-radius: 8px;
        border-left: 3px solid #2196F3;
    }

    .skill-name {
        display: block;
        font-weight: 600;
        font-size: 1.1rem;
        color: #ffffff;
        margin-bottom: 5px;
    }

    .skill-desc {
        display: block;
        color: #cccccc;
        font-size: 0.9rem;
    }

    /* Experience/Education card styles */
    .timeline-item {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
        padding: 30px;
        margin-bottom: 25px;
        border-left: 4px solid #2196F3;
    }

    .timeline-title {
        font-size: 1.8rem;
        font-weight: 700;
        color: #2196F3;
        margin-bottom: 10px;
    }

    .timeline-institution {
        font-size: 1.2rem;
        font-weight: 600;
        color: #00bcd4;
        margin-bottom: 5px;
        display: block;
    }

    .timeline-date {
        font-size: 1rem;
        color: #888888;
        margin-bottom: 15px;
        display: block;
    }

    .timeline-quote {
        font-style: italic;
        font-size: 1.1rem;
        color: #2196F3;
        border-left: 3px solid #2196F3;
        padding-left: 20px;
        margin: 20px 0;
    }

    .timeline-highlights {
        list-style: none;
        padding-left: 0;
    }

    .timeline-highlights li {
        padding: 8px 0;
        color: #cccccc;
        position: relative;
        padding-left: 25px;
    }

    .timeline-highlights li:before {
        content: "▸";
        color: #2196F3;
        position: absolute;
        left: 0;
        font-weight: bold;
    }

    /* Contact styles */
    .contact-item {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
        padding: 15px 25px;
        margin-bottom: 15px;
        border: 1px solid rgba(33, 150, 243, 0.3);
        text-align: center;
    }

    .contact-item a {
        color: #2196F3;
        text-decoration: none;
        font-weight: 500;
    }

    .contact-item a:hover {
        color: #00bcd4;
    }

    /* About quote */
    .about-quote {
        font-family: 'Bebas Neue', cursive;
        font-size: 2rem;
        color: #2196F3;
        text-align: center;
        border-top: 2px solid #2196F3;
        border-bottom: 2px solid #2196F3;
        padding: 30px 20px;
        margin: 40px 0;
        letter-spacing: 2px;
    }

    /* Navigation pills */
    .nav-pills {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-bottom: 30px;
        flex-wrap: wrap;
    }

    .nav-pill {
        background: rgba(33, 150, 243, 0.2);
        color: #2196F3;
        padding: 10px 25px;
        border-radius: 25px;
        text-decoration: none;
        font-weight: 600;
        border: 1px solid #2196F3;
        transition: all 0.3s ease;
    }

    .nav-pill:hover {
        background: #2196F3;
        color: #ffffff;
    }

    /* Hide Streamlit branding */
    #MainMenu {visibility: hidden;}
    footer {visibility: hidden;}
    header {visibility: hidden;}
</style>
""", unsafe_allow_html=True)

# Navigation
st.markdown("""
<div class="nav-pills">
    <a href="#about" class="nav-pill">About</a>
    <a href="https://github.com/ahmed-riyaz" target="_blank" class="nav-pill">GitHub</a>
    <a href="https://www.linkedin.com/in/ahmedr1yaz/" target="_blank" class="nav-pill">LinkedIn</a>
</div>
""", unsafe_allow_html=True)

# Hero Section
st.markdown("""
<div class="hero-section">
    <h1 class="hero-title">AHMED<br>RIYAZ</h1>
    <p class="hero-subtitle">SOFTWARE DEVELOPER</p>
    <p class="hero-description">Code that hits different.</p>
</div>
""", unsafe_allow_html=True)

# About Section
st.markdown('<h2 class="section-title" id="about">THE PERSON BEHIND THE CODE</h2>', unsafe_allow_html=True)

col1, col2 = st.columns([2, 1])

with col1:
    st.markdown("""
    ### Python Developer & Software Engineer

    Like a driven developer on a mission, I'm passionate about creating software that makes a difference.
    I've honed my skills across Python development, game modding, and cybersecurity, constantly expanding
    my arsenal of knowledge and technical abilities.

    <div class="about-quote">
        "I DON'T JUST BUILD APPLICATIONS—I CRAFT EXPERIENCES."
    </div>

    Each project represents my commitment to quality, attention to detail, and desire to push the boundaries
    of what's possible through code. When I'm not deep in code editors, you'll find me exploring
    cybersecurity challenges, experimenting with new technologies, or analyzing the digital traces of cyber activities.
    """, unsafe_allow_html=True)

with col2:
    st.markdown("""
    <div style="text-align: center; padding: 50px; font-size: 5rem; color: #2196F3;">
        <i class="fas fa-code"></i>
    </div>
    """, unsafe_allow_html=True)

# Skills Section
st.markdown('<h2 class="section-title">POWER SKILLS</h2>', unsafe_allow_html=True)

col1, col2, col3 = st.columns(3)

with col1:
    st.markdown("""
    <div class="skill-category">
        <h3 class="category-title">Programming Languages</h3>
        <div class="skill-item">
            <span class="skill-name">Python</span>
            <span class="skill-desc">Primary weapon for automation, APIs, and data analysis</span>
        </div>
        <div class="skill-item">
            <span class="skill-name">Java</span>
            <span class="skill-desc">Building powerful backend systems and desktop applications</span>
        </div>
        <div class="skill-item">
            <span class="skill-name">JavaScript (ES6+)</span>
            <span class="skill-desc">Creating dynamic, interactive front-end experiences</span>
        </div>
        <div class="skill-item">
            <span class="skill-name">C#</span>
            <span class="skill-desc">Implementing design patterns and .NET development</span>
        </div>
        <div class="skill-item">
            <span class="skill-name">SQL/PLSQL</span>
            <span class="skill-desc">Crafting complex database queries and managing data pipelines</span>
        </div>
    </div>
    """, unsafe_allow_html=True)

with col2:
    st.markdown("""
    <div class="skill-category">
        <h3 class="category-title">Tech Arsenal</h3>
        <div class="skill-item">
            <span class="skill-name">Git & GitHub</span>
            <span class="skill-desc">Version control and collaboration essentials</span>
        </div>
        <div class="skill-item">
            <span class="skill-name">Game Modding Tools</span>
            <span class="skill-desc">Specialized equipment for game modifications</span>
        </div>
        <div class="skill-item">
            <span class="skill-name">Jupyter Notebooks</span>
            <span class="skill-desc">Lab for data experiments and analysis</span>
        </div>
        <div class="skill-item">
            <span class="skill-name">API Integration</span>
            <span class="skill-desc">Connecting to external services and data sources</span>
        </div>
    </div>
    """, unsafe_allow_html=True)

with col3:
    st.markdown("""
    <div class="skill-category">
        <h3 class="category-title">Special Abilities</h3>
        <div class="skill-item">
            <span class="skill-name">Full-Stack Development</span>
            <span class="skill-desc">Handling both frontend and backend responsibilities</span>
        </div>
        <div class="skill-item">
            <span class="skill-name">Cybersecurity & Ethical Hacking</span>
            <span class="skill-desc">Protecting the digital neighborhood</span>
        </div>
        <div class="skill-item">
            <span class="skill-name">Data Analysis & Visualization</span>
            <span class="skill-desc">Finding patterns in the chaos</span>
        </div>
        <div class="skill-item">
            <span class="skill-name">Machine Learning Fundamentals</span>
            <span class="skill-desc">Teaching computers to learn from data</span>
        </div>
    </div>
    """, unsafe_allow_html=True)

# Projects Section
st.markdown('<h2 class="section-title">PROJECTS</h2>', unsafe_allow_html=True)

# Project data
projects = [
    {
        "title": "RDR2 Weather & Lighting System",
        "description": "A spectacular redesign of Red Dead Redemption 2's atmospheric systems with hyper-realistic weather patterns and dynamic seasonal changes.",
        "tech": ["LUA", "RAGE Engine", "OpenIV"],
        "link": "https://github.com/ahmed-riyaz/Lights-and-Weather-system-remodeled",
        "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&auto=format"
    },
    {
        "title": "Vybe - Music Streaming Interface",
        "description": "A sleek, responsive music application that connects with the Spotify API for discovering and enjoying favorite tunes with style.",
        "tech": ["JavaScript", "HTML5", "CSS3", "Spotify API"],
        "link": "https://github.com/ahmed-riyaz/Vybe",
        "image": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop&auto=format"
    },
    {
        "title": "Heart Disease Analysis & Prediction",
        "description": "Using data science to potentially save lives by analyzing health metrics to identify risk factors for heart disease.",
        "tech": ["Python", "Jupyter", "Data Analysis"],
        "link": "https://github.com/ahmed-riyaz/Heart-Disease-Analysis-and-Prediction",
        "image": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&auto=format"
    },
    {
        "title": "ABSP-C# Workout Strategy Pattern",
        "description": "A flexible fitness application employing the Strategy Design Pattern to switch between different workout plans dynamically.",
        "tech": ["C#", ".NET Framework", "Strategy Pattern"],
        "link": "https://github.com/ahmed-riyaz/ABSP-C-",
        "image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&auto=format"
    },
    {
        "title": "Vehicle Maintenance System",
        "description": "A comprehensive system that streamlines vehicle maintenance processes with robust database integration and polished user interface.",
        "tech": ["Java", "PLSQL", "CSS"],
        "link": "https://github.com/ahmed-riyaz/VehicleMaintenanceSystem",
        "image": "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=250&fit=crop&auto=format"
    },
    {
        "title": "Course Management System",
        "description": "A comprehensive educational platform with robust database integration and polished user interface for course administration.",
        "tech": ["Java", "Hibernate ORM", "JavaFX", "SQL"],
        "link": "https://github.com/ahmed-riyaz/CourseManagementSystem1",
        "image": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&auto=format"
    },
    {
        "title": "HYDRATED E-commerce Collaboration",
        "description": "A team collaboration project building a modern e-commerce platform with sleek design and robust functionality for online retail experiences.",
        "tech": ["JavaScript", "React", "Node.js", "MongoDB"],
        "link": "https://github.com/ahmed-riyaz/HYDRATED",
        "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&auto=format"
    },
    {
        "title": "Dynamic GitHub Profile",
        "description": "A customized GitHub profile featuring dynamic stats, animated elements, and interactive components that showcase coding activity and achievements.",
        "tech": ["Markdown", "GitHub Actions", "SVG", "APIs"],
        "link": "https://github.com/ahmed-riyaz/ahmed-riyaz",
        "image": "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=250&fit=crop&auto=format"
    }
]

# Display projects in a grid
col1, col2 = st.columns(2)

for idx, project in enumerate(projects):
    with col1 if idx % 2 == 0 else col2:
        st.markdown(f"""
        <div class="project-card">
            <img src="{project['image']}" style="width: 100%; border-radius: 10px; margin-bottom: 15px;" alt="{project['title']}">
            <h3 class="project-title">{project['title']}</h3>
            <p class="project-description">{project['description']}</p>
            <div>
                {''.join([f'<span class="tech-tag">{tech}</span>' for tech in project['tech']])}
            </div>
            <p style="margin-top: 15px;">
                <a href="{project['link']}" target="_blank" style="color: #2196F3; text-decoration: none; font-weight: 600;">
                    View on GitHub →
                </a>
            </p>
        </div>
        """, unsafe_allow_html=True)

# Experience Section
st.markdown('<h2 class="section-title">PROFESSIONAL ADVENTURES</h2>', unsafe_allow_html=True)

st.markdown("""
<div class="timeline-item">
    <h3 class="timeline-title">Python Developer</h3>
    <span class="timeline-institution">Tech Power Solutions</span>
    <span class="timeline-date">April 2023 - March 2024</span>
    <div class="timeline-quote">
        "CRAFTING PYTHON APPLICATIONS THAT AUTOMATED PROCESSES AND IMPROVED EFFICIENCY"
    </div>
    <ul class="timeline-highlights">
        <li>Crafted Python applications that automated processes and improved efficiency</li>
        <li>Collaborated with cross-functional teams to deliver robust software solutions</li>
        <li>Implemented coding standards that ensured maintainable, reliable code</li>
        <li>Conducted thorough testing to guarantee software stability</li>
        <li>Resolved complex technical challenges with creative problem-solving</li>
    </ul>
</div>

<div class="timeline-item">
    <h3 class="timeline-title">Digital Marketing & Ethical Hacking Training</h3>
    <span class="timeline-institution">Ventakessan FinishUp, Inc.</span>
    <ul class="timeline-highlights">
        <li>Digital marketing strategies including web analytics, social media, and SEO</li>
        <li>Cybersecurity fundamentals and ethical hacking techniques</li>
        <li>Learned to identify threats and vulnerabilities in digital systems</li>
        <li>Gained hands-on experience through simulated security scenarios</li>
    </ul>
</div>

<div class="timeline-item">
    <h3 class="timeline-title">Fundamentals of Cybersecurity</h3>
    <span class="timeline-institution">Cisco Networking Academy</span>
    <ul class="timeline-highlights">
        <li>Mastered essential cybersecurity principles and network security</li>
        <li>Studied protection methodologies against various cyber threats</li>
        <li>Applied best practices for securing networks and systems</li>
        <li>Developed practical skills through simulated security challenges</li>
    </ul>
</div>
""", unsafe_allow_html=True)

# Education Section
st.markdown('<h2 class="section-title">KNOWLEDGE BASE</h2>', unsafe_allow_html=True)

st.markdown("""
<div class="timeline-item">
    <h3 class="timeline-title">Information Technology Solutions</h3>
    <span class="timeline-institution">HUMBER POLYTECHNIC</span>
    <span class="timeline-date">September 2024 - Present (Currently Studying)</span>
    <div class="timeline-quote">
        "EXPANDING MY WEB OF KNOWLEDGE IN ADVANCED IT SOLUTIONS"
    </div>
    <ul class="timeline-highlights">
        <li>Advanced programming concepts and software development methodologies</li>
        <li>Database design and management systems</li>
        <li>Network infrastructure and cybersecurity principles</li>
        <li>Web development technologies and frameworks</li>
        <li>Project management and team collaboration</li>
    </ul>
</div>

<div class="timeline-item">
    <h3 class="timeline-title">Bachelor of Engineering in Computer Science</h3>
    <span class="timeline-institution">KARPAGAM ACADEMY OF HIGHER EDUCATION</span>
    <span class="timeline-date">2018 - 2022</span>
    <div class="timeline-quote">
        "BUILDING THE FOUNDATION FOR MY CODING SUPERPOWERS"
    </div>
    <ul class="timeline-highlights">
        <li>Computer Science fundamentals and programming languages</li>
        <li>Data structures and algorithms</li>
        <li>Software engineering principles and design patterns</li>
        <li>Database management and system design</li>
        <li>Web technologies and application development</li>
        <li>Graduated with comprehensive knowledge in full-stack development</li>
    </ul>
</div>
""", unsafe_allow_html=True)

# Contact Section
st.markdown('<h2 class="section-title">SEND A SIGNAL</h2>', unsafe_allow_html=True)

st.markdown("""
<div style="text-align: center; margin-bottom: 30px;">
    <h3 style="color: #2196F3;">Ready to collaborate?</h3>
    <p style="color: #cccccc; max-width: 600px; margin: 0 auto;">
        Ready to collaborate on amazing projects or discuss how I can bring value to your team?
        My instincts are always tuned in for new opportunities.
    </p>
</div>
""", unsafe_allow_html=True)

col1, col2 = st.columns(2)

with col1:
    st.markdown("""
    <div class="contact-item">
        <i class="fas fa-envelope"></i>
        <a href="mailto:riyazkds@outlook.com">riyazkds@outlook.com</a>
    </div>
    <div class="contact-item">
        <i class="fab fa-linkedin"></i>
        <a href="https://linkedin.com/in/ahmedr1yaz" target="_blank">linkedin.com/in/ahmedr1yaz</a>
    </div>
    """, unsafe_allow_html=True)

with col2:
    st.markdown("""
    <div class="contact-item">
        <i class="fas fa-phone"></i>
        <a href="tel:+16472102306">+1 (647) 210-2306</a>
    </div>
    <div class="contact-item">
        <i class="fab fa-github"></i>
        <a href="https://github.com/ahmed-riyaz" target="_blank">github.com/ahmed-riyaz</a>
    </div>
    """, unsafe_allow_html=True)

# Footer
st.markdown("""
<div style="text-align: center; padding: 50px 20px; border-top: 1px solid rgba(33, 150, 243, 0.3); margin-top: 50px;">
    <p style="color: #888888;">&copy; 2024 Ahmed Riyaz. All rights reserved.</p>
</div>
""", unsafe_allow_html=True)
