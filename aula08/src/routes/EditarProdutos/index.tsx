import { useEffect, useState } from "react";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { TipoProdutos } from "../../types";
import { Imgs } from "../../style/styled";

export default function EditarProdutos(){


      //MUDANDO O TÍTULO DA PÁGINA!!!
      document.title = "EDITAR PRODUTOS";

      //Realizando um destructuring para recuperar o parâmetro que foi passado na rota:
      //Ex: Se a rota criada foi: /meus-dados/:dados
      //O destructuring irá recuperar o dado que foi passado na rota e atribuir a propriedade de um elemento cuja o nome é aquele criado na rota, antes do dois pontos,ou seja, (:dados)
      //Então teriamos que realizar a seguinte ação para receber esta informação.
      // const{dados} = useParams(), um detalhe aqui é que o useParams() pertence ao react-router e deve ser importado dele
      const {id} = useParams();

      const navigate:NavigateFunction = useNavigate();

      const [produto, setProduto] = useState<TipoProdutos>({
        id: 0,
        nome: "",
        preco: 0,
        marca:"",
        descricao: "",
        categoria: "",
        imagem: "",
      });

      const listaProdutosString = localStorage.getItem('lista') || '[]';
      const lista:TipoProdutos[] = JSON.parse(listaProdutosString);

      useEffect(() => {
        const produtoEncontrado = lista.find((produto) => produto.id === Number(id));
        if(produtoEncontrado) setProduto(produtoEncontrado);
      }, [id])
      
      const handleSubmit = ()=>{
        let idProd:number;
        if(produto){
          idProd = lista.findIndex(p => p.id == produto.id)
          lista.splice(idProd,1,produto);
          localStorage.setItem("lista", JSON.stringify(lista));
          alert("produto atualizado com sucesso!")
          
          navigate('/produtos');

        }else{
          alert("ocorreu um erro!")
          navigate('/produtos');
        }

      }

      return(
      <div>
        <h1>Olá, mundo sou o EditarProdutos!</h1>
        <div>
          <h2>ID: {id}</h2>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Nome:</label>
                  <input type="text" value={produto.nome} onChange={(e) => setProduto({...produto, nome: e.target.value})} />
              </div>
              <div>
                <label>Preço:</label>
                  <input type="number" value={produto.preco} onChange={(e) => setProduto({...produto, preco: Number(e.target.value)})} />
              </div>
              <div>
                <label>Marca:</label>
                  <input type="text" value={produto.marca} onChange={(e) => setProduto({...produto, marca: e.target.value})} />
              </div>
              <div>
                <label>Categoria:</label>
                  <input type="text" value={produto.descricao} onChange={(e) => setProduto({...produto, descricao: e.target.value})} />
              </div>
              <div>
                <figure>
                  <Imgs src={produto?.imagem} alt={produto.nome} />
                </figure>
              </div>
              <div>
                <button type="submit">Editar</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    );
  }