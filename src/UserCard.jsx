import PropTypes from "prop-types";
import bg from "./assets/bg.jpg";
import bg1 from "./assets/bg1.jpg";
import bg2 from "./assets/background.jpg";
import n from "./assets/n.jpg";



const userData = [
  {
    name: "Nasik",
    city: "Colombo",
    description: "front-end developer",
    skills: ["java", "Python", "html", "Css", "Mongodb", "React", "Node.js"],
    online: true,
    profile: n, 
  },
  {
    name: "James",
    city: "Kandy",
    description: "back-end developer",
    skills: ["java", "Python", "html", "Css", "Mongodb"],
    online: false,
    profile: bg2, // Use bg directly
  },
  {
    name: "Sehara",
    city: "Matara",
    description: "front-end developer",
    skills: ["java", "Python", "html", "Css", "Mongodb", "React", "Node.js"],
    online: true,
    profile: bg, // Use bg directly
  },
  {
    name: "Pathum",
    city: "Ampara",
    description: "front-end developer",
    skills: ["java", "Python", "html", "Mongodb"],
    online: true,
    profile: bg1, // Use bg directly
  }
];

function User(props) {
  return (
    <div className="card-container">
      <span className={props.online ? "pro online" : "pro off"}>
        {props.online ? "ONLINE" : "OFFLINE"}
      </span>
      <img src={props.profile} className="img" alt="user" />
      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p>{props.description}</p>

      <div className="buttons">
        <button className="primary">Message</button> {/* Corrected typo */}
        <button className="primary outline">Following</button>
      </div>
      <div className="skills">
        <h3>Skills</h3>
        <ul>
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const UserCard = () => {
  return (
    <>
      {userData.map((user, index) => (
        <User
          key={index}
          name={user.name}
          city={user.city}
          description={user.description}
          skills={user.skills}
          online={user.online}
          profile={user.profile}
        />
      ))}
    </>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  online: PropTypes.bool.isRequired,
  profile: PropTypes.string.isRequired, // Ensure the profile is a valid string (path to the image)
};

export default UserCard;
