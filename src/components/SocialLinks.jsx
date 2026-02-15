import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://www.instagram.com/_ishan_poudel_/" target="_blank"><FaInstagram /></a>
      <a href="https://www.facebook.com/ishan.poudel.758" target="_blank"><FaFacebookF /></a>
      <a href="https://www.linkedin.com/in/ishan-poudel-a3b8b0368/" target="_blank"><FaLinkedinIn /></a>
    </div>
  );
}

export default SocialLinks;