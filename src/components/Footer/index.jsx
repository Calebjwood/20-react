import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <footer className="w-100 mt-auto text-dark p-4">
        <Link to = 'https://github.com/Calebjwood'>
            <h1>gitHub</h1>
        </Link>
        <Link to = 'https://www.linkedin.com/in/caleb-wood-76675a27b/'>
            <h1>LinkedIn</h1>
        </Link>
    </footer>
  );
};

export default Footer;