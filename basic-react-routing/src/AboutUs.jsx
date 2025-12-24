import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/aboutus">About Us</Link>
          </li>
        </ul>
      </nav>
      <h2>This is About  Us Page</h2>
    </>
  );
}

export default AboutUs;
