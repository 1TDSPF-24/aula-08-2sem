import styled from "styled-components"

export const MeuH1 = styled.h1`
    background-color: blueviolet;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    width: 80%;
    border: 2px solid #0f0;
`

export const Header = styled.header`
  background-color: #4CAF50;
  padding: 20px;
  text-align: center;
  color: white;
  font-size: 1.5em;
`

// Estilizando o Footer
export const Footer = styled.footer`
  background-color: #333;
  padding: 10px;
  text-align: center;
  color: white;
  position: fixed;
  width: 100%;
  bottom: 0;
`

export const MainContent = styled.main`
  padding: 10px;
  margin-top: 10px; // Espaço para o Header
  margin-bottom: 40px; // Espaço para o Footer
  height:70vh;
`

// Estilizando o contêiner do menu
export const Nav = styled.nav`
  background-color: #333;
  padding: 10px;
`

// Estilizando a lista de itens do menu
export const MenuList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
`

// Estilizando o item de lista
export const MenuItem = styled.li`
  display: inline;

  &
  a{
  color:#fff;
  text-decoration: none;
  padding: 10px 20px;
  display: block;
  text-decoration:none;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  }

`

export const Imgs = styled.img`
  max-width: 100%;
  display: block;
  width:10%;
  margin:0 auto;
`


export const MinhaTabela = styled.table`
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
export const ColunaLink = styled.td`
  text-align:center;
  padding: 20px 0;
  color:#fff;
  border:2px solid #afafafaf;
  background-color: #333;
`

export const ModalEditar = styled.dialog`
  position: fixed;
  top: 0 ;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  &
  form{
    width: 80%;
    height: 80%;
    margin: 3% auto;
    background-color: #DCDCDC;
    padding: 20px;
    border:5px solid #1C1C1C;
    border-radius: 10px;

    &
    button{
      display:block;
      margin: 0 auto;
      width: 50%;
      height: 10vh;
      background-color: #333;
      color: #fff;
      border:5px solid #1C1C1C;
      border-radius: 10px;
      cursor:pointer;
      font-size:20px;
      
      &:hover{
        background-color: #555;
      }
    }
    &
    input{
      display:block;
      margin: 0 auto;
      width: 70%;
      height: 7vh;
      background-color: #333;
      color: #fff;
      border:5px solid #c1c1c1;
      border-radius: 10px;
      cursor:pointer;
      font-size:20px;
      padding:0 1%;
    }

    &
    label{
      display:block;
      margin: 1% auto;
      font-size:20px;
      width: 70%;
    }
    &
    #btnCloseModal{
      display:block;

      width: 55px;
      height: 55px;
      border-radius: 50%;

      background-color: #333;
      color: #fff;
      border:5px solid #1C1C1C;
      cursor:pointer;
      font-size:20px;
      float:right;
      &:hover{
        background-color: #555;
      }
    }
  }
`
