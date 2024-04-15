/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Colleen Blake",
  title: emoji("Hey, I'm Colleen!"),
  subTitle: emoji(
    "Recent LaunchCode graduate and aspiring software developer with a unique blend of experience in customer service, management, and buying, coupled with an ongoing path in learning full-stack web development. Pursuing expertise in technologies such as C#, ASP.NET Core, JavaScript, React, SQLServer and MySQL. I am excited to bring my diverse background to a team that values creativity, collaboration, and innovation."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1Bpban6N_LY837rWQAQLSFHqmaP37OgWKLSPD64EZtTY/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/badcatlv",
  linkedin: "https://www.linkedin.com/in/colleenemilyblake/",
  gmail: "colleenemilyblake@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE NEW TECH STACKS AND BUILD COOL APPLICATIONS.",
  skills: [
    emoji(
      "⚡ Highly motivated, detail-oriented, and customer-focused professional with a passion for technology and learning."
    ),
    emoji(
      "⚡ Proficient in C#, ASP.NET Core, JavaScript, React, SQLServer and MySQL."
    ),
    emoji(
      "⚡ Experience with front-end technologies such as HTML, CSS, and Bootstrap."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C#",
      fontAwesomeClassname: "fas fa-windows"
    },
    {
      skillName: "asp.net",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-SERVER",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MYSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    // {
    //   skillName: "bootstrap",
    //   fontAwesomeClassname: "fab fa-bootstrap"
    // },
    // {
    //   skillName: "html-5",
    //   fontAwesomeClassname: "fab fa-html5"
    // },
    // {
    //   skillName: "css3",
    //   fontAwesomeClassname: "fab fa-css3"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Missouri",
      logo: require("./assets/images/missouri-tigers-logo-png-transparent.png"),
      subHeader: "Bachelor of Arts, English",
      duration: "September 2003 - April 2007",
      desc: "Took courses in literature, writing, and critical theory.",      
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Paraprofessional ",
      company: "Special School District- St. Louis County",
      companylogo: require("./assets/images/SSD.png"),
      date: "August 2023 - Present",
      descBullets: [
        "Record data to assess student progress and contribute to Individualized Education Plans (IEPs).",
        "Provide tailored assistance and support to students with diverse learning needs.",
        "Collaborate with teachers and therapists to implement behavioral and educational strategies."
      ]
    },
    {
      role: "Adult Beverage Buyer",
      company: "Whole Foods Market",
      companylogo: require("./assets/images/WFM.png"),
      date: "May 2019 - July 2023",
      descBullets: [
        "Monitored product movement, using data to inform buying processes to meet weekly sale goals.",
        "Used Instock Store Ordering Tool software to track sales data, inventory, and to place orders.",
        "Utilized Order-To-Shelf practices to reduce waste and keep back stock inventory below 5%"        
      ]    
    },
    {
      role: "Assistant Manager",
      company: "Found By the Pound",
      companylogo: require("./assets/images/FBP.png"),
      date: "November 2018 - April 2019",
      descBullets: [
        "Curated weekly displays using knowledge of market trends and customer preferences.",
        "Researched products using online resources to properly categorize and price new items.",
        "Managed daily records of transactions and generated reports for the store manager."
      ]      
    },
    {
      role: "Associate Manager/Buyer",
      company: "Avalon Exchange",
      companylogo: require("./assets/images/AE.jpg"),
      date: "August 2014 - October 2018",
      descBullets: [
        "Trained new employees on the Point of Sales system and store operations.",
        "Collaborated with a team to procure merch and keep monthly intake at 38% or less.",
        "Participated in monthly audits, using the data collected to adjust buying and pricing practices."

      ]      
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),

  achievementsCards: [
    {
      title: "LaunchCode Graduate",
      subtitle:
          "Completed the LaunchCode Web Development program",
      image: require("./assets/images/3-LaunchCode.jpg"),
      imageAlt: "LaunchCode Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/14egYE0VGf8BhCvkbYQeT1ksXVe9HfLGA/view?usp=sharing"
        },
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "colleenemilyblake@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
