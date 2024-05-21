import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-4">
      <div className="container mx-auto flex justify-center items-center">
        <div className="mr-4">
          <a href="https://www.facebook.com">
            <FaFacebook className="text-2xl mr-2" />
          </a>
        </div>
        <div className="mr-4">
          <a href="https://www.instagram.com">
            <FaInstagram className="text-2xl mr-2" />
          </a>
        </div>
        <div>
          <a href="https://web.whatsapp.com/">
            <FaWhatsapp className="text-2xl mr-2" />
          </a>
        </div>
      </div>
      <div className="container mx-auto text-center mt-2">
        <p>&copy; {new Date().getFullYear()} OnlyJS. All rights reserved.</p>
      </div>
    </footer>
  );
}
