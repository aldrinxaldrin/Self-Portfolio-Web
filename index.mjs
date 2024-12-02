// Array for Navigation Links
const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about-section1" },
  { name: "Skills", href: "#skills-section1" },
  { name: "Projects", href: "#projects-section1" },
  { name: "Contact", href: "#contacts-section1" },
];

// Data for the Hero Section
const heroData = {
  hi: "Hi! My name is ",
  heading: "John Aldrin Anthony Portento",
  subheading: "Frontend Developer",
  description:
    "I’m a passionate frontend developer committed to creating visually stunning and user-centric web experiences that seamlessly blend design and functionality.",
  imgSrc: "images/pic2.png",
  imgAlt: "Hero Image",
  buttonText: "Explore More",
};

// Data for the About Section
const aboutData = {
  title: "About Me",
  name: "John Aldrin Anthony R Portento",
  description:
    "Hi, I'm John Aldrin Anthony R. Portento, a dedicated college student currently pursuing a Bachelor of Science in Information Technology at Marinduque State University. Beyond academics, I enjoy playing online games, watching movies, playing badminton, and exploring new places through travel. Hailing from the serene island of Mongpong, Santa Cruz, Marinduque, I am deeply motivated to achieve success and constantly seek opportunities to grow academically and personally.",
  subDescription: "With a passion for learning and a drive to excel, I am on my way to becoming your future Frontend Developer!",
  imgSrc: "images/pic3.png",
  imgAlt: "About Me",
  map: "images/map.png",
  flt1: "Passionate Learner",
  flt2: "Dedicated",
  flt3: "Motivated",
  flt4: "Curious and Adventurous",
  buttonText: "Show Skills",
};

// Data for the Skills Section
const skillsData = {
  title: "My Skills",
  description:
    "My skills showcase my expertise in a variety of programming languages that I've learned and honed throughout my journey. Each step of my learning experience has allowed me to build a strong foundation and expand my capabilities in web and software development.",
  skills: [
    { name: "HTML", imgSrc: "images/lang1.png", imgAlt: "HTML Logo",   skilldes: "I began my journey into web development by learning HTML during my second year of college, which sparked my interest in creating and designing websites."    },
    { name: "CSS", imgSrc: "images/lang3.png", imgAlt: "CSS Logo", skilldes: "I started using CSS back in my second year of college, enhancing my ability to style and design visually appealing websites." },
    { name: "JavaScript", imgSrc: "images/lang2.png", imgAlt: "JavaScript Logo", skilldes: "I began using JavaScript during the second semester of my second year in college, unlocking the power to make websites interactive and dynamic." },
    { name: "Python", imgSrc: "images/lang4.png", imgAlt: "Python Logo", skilldes: "I started using Python during my first year of college, discovering its versatility and power for solving problems and building projects." },
  ],
  buttonText: "Show Projects",

};

// Data for the Projects Section
const projectsData = {
  title: "My Projects",
  description: "Throughout my journey, I’ve had the opportunity to work on a variety of projects that showcase my skills and growth as a developer. Each project represents my dedication to creating functional, visually appealing, and user-friendly web experiences.",
  projects: [
    {
      name: "PCC Alab Carabaoan",
      imgSrc: "images/pcc.png",
      imgAlt: "Project 1 Image",
      link: "#project1", 
      projdes: "Integrative Programming Final project during my 2nd Year using php html Css and JavaScript.                 ",
    },
    {
      name: "World Hardest Game Semi 3D",
      imgSrc: "images/game.png", 
      imgAlt: "Project 2 Image",
      link: "#project2", 
      projdes: "We recreated the world's hardest game, The Snubby Land, adding a semi-3D twist. This was made using Unity.",
    },
    {
      name: "MNHS Portal",
      imgSrc: "images/mnhsPortal.png", 
      imgAlt: "Project 3 Image",
      link: "#project3", 
      projdes: "This was my Mobile App Development activity during my second year. It features a responsive layout.",

    },

    {
      name: "MNHS Admin UI",
      imgSrc: "images/mnhsAdmin.png", 
      imgAlt: "Project 4 Image",
      link: "#project4", 
      projdes: "This was my Final Project in HCI during my second year. It is the main layout of the admin, and it can be accessed using mockplus",

    },
    {
      name: "MNHS Student UI",
      imgSrc: "images/mnhsStudent.png", 
      imgAlt: "Project 5 Image",
      link: "#project5", 
      projdes: "This was my Final Project in HCI during my second year. It is the main layout of the user or student, and it can be accessed using mockplus",

    },
    {
      name: "Lab 5",
      imgSrc: "images/proj1.png", 
      imgAlt: "Project 6 Image",
      link: "#project6", 
      projdes: "This was my Web Prog Activity. Efficient HTML and CSS code, including proper use of tags, classes, and IDs.",

    },
    {
      name: "Lab 6",
      imgSrc: "images/proj2.png",
      imgAlt: "Project 7 Image",
      link: "#project7", 
      projdes: "This was my Web Prog Activity. It features a responsive flexbox layout. Allows us to be efficient in HTML and CSS code",

    },
  ],
  buttonText: "Contact Me",

};

// Data for the Contacts Section
const contactsData = {
  title: "Contact Me",
  description: "Got a project in mind, need help with tech, or just want to chat? Reach out, and let's build something incredible together!",
  email: "JohnAnthony4102@gmail.com",
  phone: "+63907 991 3274",
  address: "Brgy. Mongpong Sta. Cruz Marinduque",
};

// Footer Data
const footerData = {
  text: "© 2024 John Aldrin Anthony Portento | All Rights Reserved.",
  links: [
    { name: "GitHub", href: "https://github.com/aldrinxaldrin", icon: "fa-github" },
    { name: "Facebook", href: "https://www.facebook.com/ynohtnaaldrin.john?mibextid=ZbWKwL", icon: "fa-facebook-f" },
    { name: "Twitter", href: "https://x.com/jan_AANTH0NY?t=2wqm1wwa_JMr1yBmyR32ZQ&s=09", icon: "fa-twitter" },
    { name: "Instagram", href: "https://www.instagram.com/j_anthony4102/profilecard/?igsh=MW5zdzNkd3Z6Y2htbg==", icon: "fa-instagram" },
  ]
};




// Event Listener for "Fix Page" Button
document.getElementById("plain-btn").addEventListener("click", function () {
  // Remove the Start Section
  const startSection = document.querySelector(".start");
  if (startSection) startSection.remove();

  // Dynamically Create the Hero Section
  const heroSection = document.createElement("section");
  heroSection.className = "hero";
  heroSection.id = "hero-section";

  heroSection.innerHTML = `
    <div class="hero-content" id="hero">
        <div class="navigation">
            <img id="icon" src="images/icon.jpg" alt="Site Icon" />
            <nav>
                <ul>
                    ${navLinks
                      .map(
                        (link) =>
                          `<li><a href="${link.href}">${link.name}</a></li>`
                      )
                      .join("")}
                </ul>
            </nav>
        </div>
        <div class="container">
            <div class="hero2">
                <div class="intro">
                    <h3>${heroData.hi}</h3>
                    <h1 id="typing-animation">${heroData.heading}</h1>
                    <h1>${heroData.subheading}</h1>
                    <p>${heroData.description}</p>
                </div>
                <img id="hero-image" src="${heroData.imgSrc}" alt="${heroData.imgAlt}" />
            </div>
            <button id="explore-btn" class="btn"><a id="btnName1" href="#about-section1">${heroData.buttonText}</button>
        </div>
    </div>
  `;
  document.body.appendChild(heroSection);
  const heroHeading = `${heroData.heading}`;
  const heroSubheading = `${heroData.subheading}`;
  const typingSpeed = 100; 
  const deletingSpeed = 50; 
  const delayBetween = 1000; 

  function typeAndDeleteText(elementId, texts, textIndex = 0, charIndex = 0, isDeleting = false) {
    const element = document.getElementById(elementId);

    // Set current text
    const currentText = texts[textIndex];

    // Typing or deleting logic
    if (isDeleting) {
      element.innerHTML = currentText.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length; 
        setTimeout(() => typeAndDeleteText(elementId, texts, textIndex, charIndex, isDeleting), delayBetween);
        return;
      }
    } else {
      element.innerHTML = currentText.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(() => typeAndDeleteText(elementId, texts, textIndex, charIndex, isDeleting), delayBetween);
        return;
      }
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(() => typeAndDeleteText(elementId, texts, textIndex, charIndex, isDeleting), speed);
  }

  // Start the animation
  const textsToType = [`${heroHeading}`,];
  // const textsToType = [`${heroHeading}`, `${heroSubheading}`];
  typeAndDeleteText("typing-animation", textsToType);

  

  // Event Listener for "Explore More" Button
  const exploreBtn = document.getElementById("explore-btn");
  exploreBtn.addEventListener("click", function handleExploreClick() {
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = "styles.css";
    document.head.appendChild(stylesheet);

    const aboutSection = document.createElement("section");
    aboutSection.className = "about-section";
    aboutSection.id = "about-section";

    aboutSection.innerHTML = `
      <div class="about-content" id="about-section1">
        <section class="about">
          <div class="info">
            <div class="info1">
              <div class="info3">
              <h1>${aboutData.title}</h1>
              <p>${aboutData.description}</p>
              <h3>${aboutData.subDescription}</h3>
              </div>
              <div id="map"alt="map"></div>
            </div>
            <div class="info2">
              <img id="about-image" src="${aboutData.imgSrc}" alt="${aboutData.imgAlt}" />
              <button id="skill-btn" class="btn"><a id="btnName" href="#skills-section1">${aboutData.buttonText}</button>
            </div>
            <div class="float">
              <p id="flt1">${aboutData.flt1}</p>
              <p id="flt2">${aboutData.flt2}</p>
              <p id="flt3">${aboutData.flt3}</p>
              <p id="flt4">${aboutData.flt4}</p>
              <p id="flt5"></p>
              <p id="flt6"></p>
              <p id="flt7"></p>
              <p id="flt8"></p>
              <p id="flt9"></p>
              <p id="flt10"></p>
            </div>
          </div>
        </section>
      </div>
    `;
    document.body.appendChild(aboutSection);

    document.getElementById("about-section1").addEventListener("mousemove", (event) => {
      // Create a new glowing element
      const glow = document.createElement("div");
      glow.className = "pointer-glow";
      glow.style.left = `${event.clientX}px`;
      glow.style.top = `${event.clientY}px`;
    
      // Append the glow to the section
      const section = document.getElementById("about-section1");
      section.appendChild(glow);
    
      // Remove the glow after the fade-out animation
      setTimeout(() => {
        glow.remove();
      }, 1000); 
    });
    
    

    // Smooth scroll to the about Section
    aboutSection.scrollIntoView({ behavior: "smooth" });
    
    // Remove the event listener after first click
    exploreBtn.removeEventListener("click", handleExploreClick);

    // Event Listener for "Show Skills" Button
    const skillBtn = document.getElementById("skill-btn");
    skillBtn.addEventListener("click", function handleSkillClick() {
      const skillSection = document.createElement("section");
      skillSection.className = "skills-section";
      skillSection.id = "skills-section";

      skillSection.innerHTML = `
        <div class="skills-container" id="skills-section1">
          <div class="skills-content">
            <h1>${skillsData.title}</h1>
            <p>${skillsData.description}</p>
          </div>
          <div class="skills">
            ${skillsData.skills
              .map(
                (skill) =>
                  `<div class="skills1">
                    <div class="skill-icon" > 
                      <img src="${skill.imgSrc}" alt="${skill.imgAlt}" /> 
                    </div>
                    <div class="skills2">
                      <h3>${skill.name}</h3>
                      <p>${skill.skilldes}
                    </div>
                  </div>`

              )
              .join("")}
          </div>
          <button id="project-btn" class="btn"><a id="btnName" href="#projects-section1">${skillsData.buttonText}</button>
        </div>

      `;
      document.body.appendChild(skillSection);

      // Smooth scroll to the Skills Section
      skillSection.scrollIntoView({ behavior: "smooth" });

      // Remove the event listener after first click
      skillBtn.removeEventListener("click", handleSkillClick);

      // Event Listener for "Show Projects" Button
      const projectBtn = document.getElementById("project-btn");
      projectBtn.addEventListener("click", function handleProjectClick() {
        const projectSection = document.createElement("section");
        projectSection.className = "projects-section";
        projectSection.id = "projects-section";

        projectSection.innerHTML = `
          <div class="projects-container" id="projects-section1">
            <div class="projects-content">
              <h1>${projectsData.title}</h1>
              <p>${projectsData.description}</p>
           </div>
          <div class="projects">
            ${projectsData.projects
              .map(
                (project) =>
                  `<div class="project">
                    <img src="${project.imgSrc}" alt="${project.imgAlt}" class="project-img" />
                    <h3>${project.name}</h3>
                    <p href="${project.link}" class="project-link">${project.projdes}</p>
                  </div>`
              )
              .join("")}
          </div>
          <button id="contact-btn" class="btn"><a id="btnName" href="#contacts-section1">${projectsData.buttonText}</button>

        `;
        document.body.appendChild(projectSection);

        // Smooth scroll to the project Section
        projectSection.scrollIntoView({ behavior: "smooth" });

        // Remove the event listener after first click
        projectBtn.removeEventListener("click", handleProjectClick);

        const contactBtn = document.getElementById("contact-btn");
        contactBtn.addEventListener("click", function handleContactClick() {
          const contactSection = document.createElement("section");
          contactSection.className = "contacts-section";
          contactSection.id = "contacts-section";

          contactSection.innerHTML = `
          <div class="contact-info" id="contacts-section1">
            <h2>${contactsData.title}</h2>
            <p>${contactsData.description}</p>
            <p><strong>Address:</strong> ${contactsData.address}</p>
            <p><strong>Phone:</strong> ${contactsData.phone}</p>
            <p><strong>E-mail:</strong> ${contactsData.email}</p>
          </div>
          <div class="contact-form">
            <form id="contact-form">
              <input type="text" id="name" name="name" placeholder="Name" required>
              <textarea id="message" name="message" placeholder="Enter Message..." required></textarea>
              <button type="submit">Message</button>
            </form>
          </div>
        `;
        document.body.appendChild(contactSection);

        // Smooth scroll to the contact section
        contactSection.scrollIntoView({ behavior: "smooth" });

        // Remove event listener to prevent multiple contact sections being added
        contactBtn.removeEventListener("click", handleContactClick);

          // Footer Section
        const footer = document.createElement("footer");
        footer.className = "footer-section";
        footer.innerHTML = `
        <div class="footer-content">
          <p>${footerData.text}</p>
          <ul class="social-links">
            ${footerData.links
              .map(
                (link) =>
                  `<li><a href="${link.href}" target="_blank"><i class="fab ${link.icon}"></i> ${link.name}</a></li>`
              )
              .join("")}
          </ul>
          <ul>
            ${navLinks
              .map(
                (link) =>
                  `<li><a href="${link.href}"><i class="fas ${link.icon}"></i> ${link.name}</a></li>`
              )
              .join("")}
          </ul>
        </div>
      `;        document.body.appendChild(footer);
      });
    });
  });
});        
  // Disable the "Fix Page" button to ensure it runs only once
  this.disabled = true;
});

