import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <FaTwitterSquare size={30} color={"#918E9B"} />
        </li>
        <li>
          <FaFacebookSquare size={30} color={"#918E9B"} />
        </li>
        <li>
          <FaInstagram size={30} color={"#918E9B"} />
        </li>
        <li>
          <FaLinkedin size={30} color={"#918E9B"} />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
