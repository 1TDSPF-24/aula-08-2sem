import { Link } from "react-router-dom";
import styled from "styled-components";
import { listaProdutos } from "../../listaProdutos";

const ImgProdutos = styled.img`
  display:block;
  max-width:100%;
  width:20%;
  margin:0 auto;
`


export default function Produtos() {

  //MUDANDO O TÍTULO DA PÁGINA!!!
  document.title = "PRODUTOS";

  return (
    <div>
      <h1>Lista de Produtos!</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Marca</th>
            <th>Categoria</th>
            <th>Descrição</th>
            <th>Foto</th>
            <th>Editar | Excluir</th>
          </tr>
        </thead>
        <tbody>
          {listaProdutos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.nome}</td>
              <td>{produto.preco}</td>
              <td>{produto.marca}</td>
              <td>{produto.categoria}</td>
              <td>{produto.descricao}</td>
              <td><ImgProdutos src={produto.imagem} alt={produto.nome} /></td>
              <td>
                <Link to={`/editar/produtos/${produto.id}`}>Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={7}>
              Total de registros : <span>{listaProdutos.length}</span>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}