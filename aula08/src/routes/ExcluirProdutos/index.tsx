import { useEffect, useState } from "react";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { TipoProdutos } from "../../types";
import { Imgs, ModalEditar } from "../../style/styled";

export default function ExcluirProdutos(){

      //MUDANDO O TÍTULO DA PÁGINA!!!
      document.title = "EXCLUIR PRODUTOS";

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
      
      const handleExcluir = (e:React.FormEvent<HTMLFormElement>)=>{
        
        e.preventDefault();

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

      const [modal, setModal] = useState(true);

      const isModal = () => {
        setModal(modal ? false:true);
        navigate("/produtos");
      }

      return(
      <div>
        <h1>EditarProdutos!</h1>
        <div>
            <ModalEditar open={modal}>
          <div>
            <form onSubmit={handleExcluir}>
              <div>
                <button onClick={isModal}> X </button>
              </div>
            <h2>Editar Produto</h2>
              <div>
                <label>Nome:</label>
                  <input type="text" name="nome" value={produto.nome}/>
              </div>
              <div>
                <label>Preço:</label>
                  <input type="number"  name="preco" value={produto.preco} />
              </div>
              <div>
                <label>Marca:</label>
                  <input type="text" name="marca" value={produto.marca}  />
              </div>
              <div>
                <label>Categoria:</label>
                  <input type="text" name="categoria" value={produto.descricao}  />
              </div>
              <div>
                <figure>
                  <Imgs src={produto?.imagem} alt={produto.nome} />
                </figure>
              </div>
              <div>
                <button type="submit">Excluir</button>
              </div>
            </form>
          </div>
          </ModalEditar>
        </div>
      </div>
    );
  }
