
const UserCard = ({ avatar_url, name, bio }) => {
  return (
    <div className="user-card">
      <img src={avatar_url} alt="Avatar do usuário" className="user-avatar" />
      <div className="user-info">
        <h2 className="user-name">{name}</h2>
        <p className="user-bio">{bio}</p>
      </div>
    </div>
  );
};

export default UserCard;