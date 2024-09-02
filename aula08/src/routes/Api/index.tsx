import { useState } from "react";
import { Link } from "react-router-dom";


export default function Api(){

    //MUDANDO O TÍTULO DA PÁGINA!!!
    document.title = "Home";

    //Realizar um request para a API do Github com fetch
    const [user, setUser] = useState([{
      id:0,
      name: '',
      bio: '',
      avatar_url: '',
      followers: '',
      following: '',
      location: '',
      login: '',
      }]);
    //Criar o fetch com promises, then, sem async, para todos os users do github
    const fetchUsers = async () => {
      const response = await fetch('https://api.github.com/users');
      const data = await response.json();
      setUser(data);
      console.log(user);
      }
    
      //Realizar uma apresentaçao neste componente dos dados que foram recebidos:
      return (
        <div>
          <h1>Home</h1>
          <h2>Olá</h2>
          <Link to="/users">Ver todos os usuários</Link>
          <button onClick={fetchUsers}>Atualizar</button>
                <ul>
                  {user.map((user) => (
                    <li key={user.id}>
                      <img src={user.avatar_url} alt={user.name} />
                      <p>{user.login}</p>
                    </li>
                      ))}
                </ul>
        </div>
          );
      }