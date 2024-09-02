import { Link } from "react-router-dom";
import styled from "styled-components";
import { listaProduto } from "../../lista";

const StyledImgProdutos = styled.img`
  display: block;
  max-width: 100%;
  width: 20%;
  margin: 0 auto;
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
            <th>
              Nome
            </th>
            <th>
              Preço
            </th>
            <th>
              Marca
            </th>
            <th>
              Categoria
            </th>
            <th>
              Descrição
            </th>
            <th>
              Imagem
            </th>
            <th>
              Editar | Excluir
            </th>
          </tr>
        </thead>
        <tbody>
          {listaProduto.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.nome}</td>
              <td>{produto.preco}</td>
              <td>{produto.marca}</td>
              <td>{produto.descricao}</td>
              <td><StyledImgProdutos src={produto.imagem} alt="Imagem do produto " /></td>
              <td><Link to={`/editar/produtos/${produto.id}`}> </Link></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            {/* colSpan é para juntar a quantidade de celulares */}
            <td colSpan={7}>
              Total de registros: <span>{listaProduto.length}</span>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

// id: 1,
// nome: "Smartphone",
// preco: 1500.00,
// marca: "Apple",
// categoria: "Celulares",
// descricao: "Celular com tela de 6 polegadas e 4GB de RAM",
// imagem:"/img/produtos-640×462.png",