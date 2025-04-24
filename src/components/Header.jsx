import githubLogo from '../assets/img/github-logo.png';

const Header = () => {
  return (
    <header className="header">
      <img src={githubLogo} alt="GitHub logo" className="github-logo" />
      <h1 className="title">Perfil GitHub</h1>
    </header>
  );
};

export default Header;
