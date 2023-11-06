import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <h1>Caleb Wood</h1>
        <Link className="text-light" to="/">
          <h1 className="m-0">About Me</h1>
        </Link>
        <Link className="text-light" to="/projects">
          <h1 className="m-0">Portfilio</h1>
        </Link>
        <Link className="text-light" to="/contacts">
          <h1 className="m-0">Contact</h1>
        </Link>
        <Link className="text-light" to="/resume">
          <h1 className="m-0">Resume</h1>
        </Link>
        
      </div>
    </header>
  );
};

export default Header;