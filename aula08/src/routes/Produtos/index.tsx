import styled from "styled-components";
import { Link } from "react-router-dom";
import { TipoProdutos } from "../../types";
import { useEffect } from "react";
import { listaProdutos } from "../../listaProdutos";


const MinhaTabela = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: 0 auto;
  font-size:20px;
  font-family: Arial, sans-serif;
    &
    img{
      max-width: 100%;
      display: block;
      width:10%;
      margin:0 auto;
    }
  
      th,td{
        text-align:center;
        padding: 20px 0;
        color:#fff;
        border:2px solid #afafafaf;
      }

      th{
        background-color: #333;
      }
      
      & tr:nth-child(odd){
        background-color: #676161;
      }

      & tr:nth-child(even){
        background-color: #413d3d;
      }
  
`
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
              <th>Editar</th>
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
                <td><Link to={`/editar/produtos/${produto.id}`}>Editar</Link></td>

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
