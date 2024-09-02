import { Link } from "react-router-dom";
import { Nav,MenuList,MenuItem } from "../../style/styled";

export default function Menu(){
    return(
      <Nav>
        <MenuList>
            <MenuItem> <Link to="/">Home</Link></MenuItem>
            <MenuItem><Link to="/produtos">Produtos</Link></MenuItem>
            <MenuItem><Link to="/editar/produtos/1">Editar Produto - 1</Link></MenuItem>
        </MenuList>
      </Nav>
    );
  }