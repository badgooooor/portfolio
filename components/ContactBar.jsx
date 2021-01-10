import { FiGithub, FiInstagram } from "react-icons/fi";
import { AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";

export default function ContactBar() {
  return (
    <div className="fixed bottom-0 flex flex-col bg-white m-4 shadow-lg justify-center">
      <div className="p-2 transition duration-300 text-bunting ease-in-out hover:shadow-lg hover:bg-robins-egg-blue hover:text-razzmatazz">
        <a href="https://www.linkedin.com/in/yuttakhan-baingen-794853167/"><AiOutlineLinkedin size={24} /></a>
      </div>
      <div className="contact-sidebar-item">
        <a href="https://github.com/borbier"><FiGithub size={24} /></a>
      </div>
      <div className="contact-sidebar-item">
        <a href="https://www.instagram.com/b.or.bier/"><FiInstagram size={24} /></a>
      </div>
      <div className="contact-sidebar-item">
        <a href="mailto:yuttakhanbaingen@gmail.com"><AiOutlineMail size={24} /></a>
      </div>
    </div>
  );
}