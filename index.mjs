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
    "I'm a passionate frontend developer dedicated to crafting visually appealing and user-friendly web experiences.",
  imgSrc: "images/pic2.png",
  imgAlt: "Hero Image",
  buttonText: "Explore More",
};

// Data for the About Section
const aboutData = {
  title: "About Me",
  name: "John Aldrin Anthony R Portento",
  description:
    "Hello, my name is John Aldrin Anthony R Portento, and I am a college student now pursuing a Bachelor of Science in Information Technology at Marinduque State University. Outside of class, I enjoy playing online games, watching movies, playing badminton, and travelling. I'm studying hard to be successful in the future, and I'm always looking for new ways to learn and grow both academically and personally. I am from the island of Mongpong, Santa Cruz, Marinduque.",
  subDescription: "Your Future Frontend Developer",
  imgSrc: "images/pic3.png",
  imgAlt: "About Me",
  map: "images/map.png",
  buttonText: "Show Skills",
};

// Data for the Skills Section
const skillsData = {
  title: "My Skills",
  description:
    "This are my expertise in different kinds of programming languages along my journey.",
  skills: [
    { name: "HTML", imgSrc: "images/html.png", imgAlt: "HTML Logo",   skilldes: "Started my journey in learning HTML back in 2nd year college"    },
    { name: "CSS", imgSrc: "images/css.png", imgAlt: "CSS Logo", skilldes: "Started also using this way back in 2nd year college" },
    { name: "JavaScript", imgSrc: "images/js.png", imgAlt: "JavaScript Logo", skilldes: "I started using this in 2nd semester when I was in 2nd year college" },
    { name: "Python", imgSrc: "images/pyt.png", imgAlt: "Python Logo", skilldes: "I started using this when I'm in 1st year college" },
  ],
  buttonText: "Show Projects",

};

// Data for the Projects Section
const projectsData = {
  title: "My Projects",
  description: "Here are some of the projects I've worked on throughout my journey.",
  projects: [
    {
      name: "PCC Alab Carabaoan",
      imgSrc: "images/pcc.png", // Replace with actual image paths
      imgAlt: "Project 1 Image",
      link: "#project1", // Replace with actual project links
      projdes: "Integrative Programming Final project during my 2nd Year using php html Css and JavaScript.                 ",
    },
    {
      name: "World Hardest Game Semi 3D",
      imgSrc: "images/game.png", // Replace with actual image paths
      imgAlt: "Project 2 Image",
      link: "#project2", // Replace with actual project links
      projdes: "We recreated the world's hardest game, The Snubby Land, adding a semi-3D twist. This was made using Unity.",
    },
    {
      name: "MNHS Portal",
      imgSrc: "images/mnhsPortal.png", // Replace with actual image paths
      imgAlt: "Project 3 Image",
      link: "#project3", // Replace with actual project links
      projdes: "This was my Mobile App Development activity during my second year. It features a responsive layout.",

    },

    {
      name: "MNHS Admin UI",
      imgSrc: "images/mnhsAdmin.png", // Replace with actual image paths
      imgAlt: "Project 4 Image",
      link: "#project4", // Replace with actual project links
      projdes: "This was my Final Project in HCI during my second year. It is the main layout of the admin, and it can be accessed using mockplus",

    },
    {
      name: "MNHS Student UI",
      imgSrc: "images/mnhsStudent.png", // Replace with actual image paths
      imgAlt: "Project 5 Image",
      link: "#project5", // Replace with actual project links
      projdes: "This was my Final Project in HCI during my second year. It is the main layout of the user or student, and it can be accessed using mockplus",

    },
    {
      name: "Lab 5",
      imgSrc: "images/proj1.png", // Replace with actual image paths
      imgAlt: "Project 6 Image",
      link: "#project6", // Replace with actual project links
      projdes: "This was my Web Prog Activity. Efficient HTML and CSS code, including proper use of tags, classes, and IDs.",

    },
    {
      name: "Lab 6",
      imgSrc: "images/proj2.png", // Replace with actual image paths
      imgAlt: "Project 7 Image",
      link: "#project7", // Replace with actual project links
      projdes: "This was my Web Prog Activity. It features a responsive flexbox layout. Allows us to be efficient in HTML and CSS code",

    },
  ],
  buttonText: "Contact Me",

};

// Data for the Contacts Section
const contactsData = {
  title: "Contact Me",
  description: "I'd love to hear from you! Here's how you can reach me:",
  email: "john.doe@example.com",
  phone: "+123 456 7890",
  address: "123 Developer Lane, Code City, Programming Country",
};

// Footer Data
const footerData = {
  text: "© 2024 John Anthony. All Rights Reserved.",
  links: [
    { name: "GitHub", href: "https://github.com/john-anthony" },
    { name: "LinkedIn", href: "https://linkedin.com/in/john-anthony" },
    { name: "Twitter", href: "https://twitter.com/john_anthony" },
  ],
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
            <button id="explore-btn" class="btn"><a id="btnName" href="#about-section1">${heroData.buttonText}</button>
        </div>
    </div>
  `;
  document.body.appendChild(heroSection);
  const heroHeading = `${heroData.heading}`;
  const heroSubheading = `${heroData.subheading}`;
  const typingSpeed = 100; // Speed of typing (ms per character)
  const deletingSpeed = 50; // Speed of deleting (ms per character)
  const delayBetween = 1000; // Delay before retyping starts (ms)

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
        textIndex = (textIndex + 1) % texts.length; // Move to the next text or loop back
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
          </div>
        </section>
      </div>
    `;
    document.body.appendChild(aboutSection);

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
        <h1>${skillsData.title}</h1>
        <p>${skillsData.description}</p>
        <div class="skills" id="skills-section1">
          ${skillsData.skills
            .map(
              (skill) =>
                `<div class="skills1">
                  <img src="${skill.imgSrc}" alt="${skill.imgAlt}" class="skill-icon" />
                  <h3>${skill.name}</h3>
                  <p>${skill.skilldes}
                </div>`

            )
            .join("")}
        </div>
        <button id="project-btn" class="btn"><a id="btnName" href="#projects-section1">${skillsData.buttonText}</button>

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
          <h1>${projectsData.title}</h1>
          <p>${projectsData.description}</p>
          <div class="projects" id="projects-section1">
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
            <h1>${contactsData.title}</h1>
            <p>${contactsData.description}</p>
            <div class="contact-info" id="contacts-section1">
              <p><strong>Email:</strong> ${contactsData.email}</p>
              <p><strong>Phone:</strong> ${contactsData.phone}</p>
              <p><strong>Address:</strong> ${contactsData.address}</p>
            </div>
          `;  
          document.body.appendChild(contactSection);

          // Smooth scroll to the contact Section
          contactSection.scrollIntoView({ behavior: "smooth" });

          contactBtn.removeEventListener("click", handleContactClick);

          // Add Footer after the Contact Section
          const footer = document.createElement("footer");
          footer.className = "footer-section";
          footer.innerHTML = `
            <div class="footer-content">
              <p>${footerData.text}</p>
              <ul>
                ${footerData.links
                  .map(
                    (link) =>
                      `<li><a href="${link.href}" target="_blank">${link.name}</a></li>`
                  )
                  .join("")}
              </ul>
            </div>
          `;
          document.body.appendChild(footer);
        });
      });
    });
  });

  // Disable the "Fix Page" button to ensure it runs only once
  this.disabled = true;
});

