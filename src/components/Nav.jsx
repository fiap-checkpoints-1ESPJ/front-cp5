import { Link } from 'react-router-dom'

export function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/produtos">Produtos</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/cadastrar-produto">Cadastrar Produto</Link></li>
      </ul>
    </nav>
  );
}
