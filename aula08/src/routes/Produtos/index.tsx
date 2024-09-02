import { MinhaTabela } from "../../style/styled";
import { TipoProdutos } from "../../types";
import { useEffect } from "react";
import { listaProdutos } from "../../listaProdutos";
import { FaEdit as Editar } from "react-icons/fa";
import { RiDeleteBin2Line as Excluir} from "react-icons/ri";
import { Link } from "react-router-dom";


export default function Produtos(){
      //MUDANDO O TÍTULO DA PÁGINA!!!
      document.title = "PRODUTOS";
      
      const listaProdutosString = localStorage.getItem('lista') || '[]';
      const lista:TipoProdutos[] = JSON.parse(listaProdutosString);

      useEffect(() => {
        listaProdutos.length;
      }, [lista])
      
    return(
      <div>
        <h1>Lista de Produtos</h1>
        <MinhaTabela>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Marca</th>
              <th>Catergoria</th>
              <th>Descrição</th>
              <th>Foto</th>
              <th>Editar | Excluir</th>
            </tr>
          </thead>
          <tbody>
            {lista.map((produto, index) => (
              <tr key={index}>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
                <td>{produto.marca}</td>
                <td>{produto.categoria}</td>
                <td>{produto.descricao}</td>
                <td><img src={produto.imagem} alt={produto.nome}/></td>
                <td><Link to={`/editar/produtos/${produto.id}`}><Editar/></Link> | <Link to={`/editar/produtos/${produto.id}`}><Excluir/></Link></td>

              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={7}>Total de Produtos: {lista.length}</td>
            </tr>
          </tfoot>
        </MinhaTabela>
        
      </div>
    );
  }
