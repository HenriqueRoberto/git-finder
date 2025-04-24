import { useState } from 'react';
import './index.css';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import UserCard from './components/UserCard';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(false);

  const handleSearch = async (username) => {
    if (!username) return;

    try {
      setError(false);
      setUserData(null);
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error('Usuário não encontrado');
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="background">
    <div className="extra-radial"></div> {/* radial por cima */}
    <div className="main-container">
      <Header />
      <SearchBox onSearch={handleSearch} />
      {userData && (
        <UserCard
          avatar_url={userData.avatar_url}
          name={userData.name || userData.login}
          bio={userData.bio || 'Este usuário não possui uma bio pública.'}
        />
      )}
      {error && <ErrorMessage />}
    </div>
  </div>
  );
}


export default App;
