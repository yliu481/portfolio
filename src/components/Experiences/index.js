import React from "react";
import PropTypes from "prop-types";

const eduList = [
  {
    name: "University of Ottawa",
    time: "Sep 2018 - Mar 2020",
    role: "Master - System Science (Specialization:Web Development)",
    description: "During this education, I gain knowledge about Machine Learning and Natural Language Processing, those things are fun, but I still like web technologies. I learned ReactJS, NodeJS and built a web application for AirMSMB inc. in a team of 5.",
    location: "Ottawa, Canada",
  },
  {
    name: "Beijing University of Chemical Technology",
    time: "Sep 2014 - June 2018",
    role: "Bachelor - Automation",
    description: "My bachelor degree is mainly about Electrical engineering and Automation, those courses include C language, Computer Network Protocol, data structures and algorithms, also this is where my interesting in web technologies starts, I learned about HTML, CSS, JS, PHP, SQL, Django and developed a mobile website for my university.",
    location: "Beijing, China",
  },
];

const careerList = [
  {
    name: "Freelance",
    time: "April 2020 - Present",
    role: "Web Developer",
    description: `<a href = "https://dpagold.com/">DPA GOLD https://dpagold.com/</a><br/>
    •	Maintained the company’s Shopify website. <br/>
    •	Developed customized and reusable sections and Built new pages, boosted sales by 30%.<br/>
    <a href = "http://www.waijiaomingshi.com">Zhong Jia Inc. http://www.waijiaomingshi.com</a><br/>
    •	Created company website for an educational institution, increased customers by 20%<br/>
    •	Deployed this website using Nginx.
    `,
    location: "Ottawa, Canada",
  },
  {
    name: "AirMSMB Inc.",
    time: "Jan 2019 - March 2020",
    role: "Front End Developer",
    description: `
    •	Worked in an agile team with 5 members to deliver a local E-commerce application that provides a possible solution for small businesses in their local area.<br/>
    •	Built reusable components and wrote unit-tests for performance and efficiency.<br/>
    •	Collaborated with team members using GitHub workflow.<br/>
    •	Designed and developed the shopping system and secure the transactions using Blockchain technology.
    `,
    location: "Ottawa Canada",
    link:"https://github.com/yliu481/BizMSM-gif-demon"
  },
];

const Experience = ({ exp }) => {
  return (
    <div className="experience row mb-5" >
      <div className="col-md-4 col-sm-12">
        <h4>{exp.name}</h4>
        <p>{exp.time}</p>
      </div>
      <div className="col-md-8">
        <strong>{exp.role}</strong>
        <p className="hidden-sm-down" dangerouslySetInnerHTML = {{__html:exp.description}}></p>
        <span className="span-info">
          <span><svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4063" height="24" width="24"><path d="M512 956.1088C750.8992 670.1056 870.4 464.5888 870.4 339.5584 870.4 152.064 709.9392 0 512 0S153.6 152.064 153.6 339.5584c0 124.928 119.5008 330.5472 358.4 616.448z" p-id="4064"></path><path d="M512 358.4m-153.6 0a153.6 153.6 0 1 0 307.2 0 153.6 153.6 0 1 0-307.2 0Z" fill="#F6F6F6" p-id="4065"></path></svg></span>
          {exp.location}
        </span>
        {exp.link?<><br/>
        <span className="span-info"><svg  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4894" height="24" width="24"><path d="M414.1 831.8c-61.3 61.3-160.7 61.3-222 0-61.3-61.3-61.3-160.7 0-222l140.7-140.7c15.63-15.63 15.63-40.97 0-56.6-15.63-15.63-40.97-15.63-56.6 0L135.5 553.2c-92.6 92.6-92.6 242.6 0 335.2s242.6 92.6 335.2 0l140.7-140.7c15.63-15.63 15.63-40.97 0-56.6-15.63-15.63-40.97-15.63-56.6 0L414.1 831.8zM887.8 136c-92.6-92.6-242.6-92.6-335.2 0L411.9 276.7c-15.63 15.63-15.63 40.97 0 56.6 15.63 15.63 40.97 15.63 56.6 0l140.7-140.7c61.3-61.3 160.7-61.3 222 0 61.3 61.3 61.3 160.7 0 222L690.5 555.3c-15.63 15.63-15.63 40.97 0 56.6 15.63 15.63 40.97 15.63 56.6 0l140.7-140.7c92.6-92.6 92.6-242.7 0-335.2z" p-id="4895"></path><path d="M320 703.8c17.2 17.2 45 17.2 62.2 0l321-321c17.2-17.2 17.2-45 0-62.2-17.2-17.2-45-17.2-62.2 0l-321 321c-17.2 17.1-17.2 45 0 62.2z" p-id="4896"></path></svg>
            <a href={exp.link}>{exp.link}</a>
        </span></> :''}

      </div>
    </div>
  );
};
Experience.protoTypes = {
  exp: PropTypes.objectOf(PropTypes.string),
};

function Experiences(props) {
  return (
    <div className="pt-md-5 pt-3 experiences" id="experience">
      <div className = "container">
        <h2 className="text-center">Experiences</h2>
        <p className="lead"></p>
        <hr />
        <h3>Educations</h3>
        <div>
          {eduList ? (
            eduList.map((item, index) => {
              return <Experience exp={item} key={`edu-${index}`} />;
            })
          ) : (
            <h4 className="text-center pb-3 pb-md-5 ">
              Empty, something goes wrong
            </h4> 
          )}
        </div>


        <hr />
        <h3>Careers</h3>
        <div>
          {careerList ? (
            careerList.map((item,index) => <Experience exp={item} key={`career-${index}`}/>)
          ) : (
            <h4 className="text-center pb-3 pb-md-5 ">
              Empty, something goes wrong
            </h4>
          )}
        </div>

      </div>

    </div>
  );
}

export default Experiences;
