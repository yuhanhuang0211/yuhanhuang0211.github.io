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
  username: "yuhanhuang0211",
  title: "Hi! I'm YuHan",
  subTitle: emoji(
    "A passionate learner with international research experience 🚀"
  ),
  /* 準備好簡歷後再更新連結上來 */
  /* resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  */
    displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/yuhanhuang0211",
  linkedin: "https://www.linkedin.com/in/%E9%9B%A8%E6%B6%B5-%E9%BB%83-4a58a42a6/",
  gmail: "isyuhann@gmail.com",
  // Instagram, Facebook, Gitlab and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "EAGER TO FILL UP ALL MY SCHEDULE, WITH ACTIVITIES & PROJECTS & COMPETITIONS & COURSES & VOLUNTEERING.",
  skills: [
    emoji(
      "⚡ Currently Exploring My Possibility in Digital Marketing and Full-stack Development"
    ),
    emoji(
      "⚡ My goal is to Become a Versatile Professional Who Creates Both Personal and Social Value"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Kinmen Senior High School",
      logo: require("./assets/images/kmshlogo.png"),
      subHeader: "General Stream",
      duration: "September 2020 - June 2023",
      desc: "Participated in many competitions and activities, winning some tities.",
      descBullets: [
        "NASA GLOBE Program - Meteorological Observer Volunteer",
        "NASA GLOBE Program - International Virtual Science Symposium (IVSS)｜Full-stared in biology field research",
        "NASA GLOBE Program - 2021 GLOBE Asia and Pacific Regional Meeting & Regional GLE｜Distinguished guest speaker",
        "Photography Club - Activity Officer",
        "Biology Research Club - Treasurer & Vice President",
      ]
    },
    {
      schoolName: "National Taipei University",
      logo: require("./assets/images/ntpulogo.png"),
      subHeader: "Bachelor of Accounting",
      duration: "September 2023 - Now",
      desc: "Ranked high in the first year, still being in love with competitions and activities.",
      descBullets: [
        "Google Developer Groups on Campus NTPU - Core Team Member (Marketing)",
        "Google Developer Groups on Campus NTPU - Lead",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Administration",
      progressPercentage: "80%"
    },
    {
      Stack: "Project Management",
      progressPercentage: "60%"
    },
    {
      Stack: "Digital Marketing",
      progressPercentage: "35%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Experience section

const Experiences = {
  display: false, //Set it to true to show Experiences Section
  experience: []
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Side Projects & Contributions to Open Source during My Free Time in College",
  projects: [
    {
      image: require("./assets/images/lawhelperlogo.png"),
      projectName: "NTPU LawHelper",
      projectDesc: "Using LLM model to assist students in solving questions about campus regulations.",
      footerLink: [
        {
          name: "Under Development",
        //  url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    //{
    //  image: require("./assets/images/nextuLogo.webp"),
    //  projectName: "Nextu",
    //  projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //  footerLink: [
    //    {
    //      name: "Visit Website",
    //      url: "http://nextu.se/"
    //    }
    //  ]
    //}
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  achievementsCards: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
/* const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
}; */

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a collaboration with my community or just want to say hi? My Inbox is open for all.",
  email_address: "isyuhann@gmail.com"
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
  Experiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,

  isHireable,
  // resumeSection
};
