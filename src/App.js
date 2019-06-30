import React, {Component} from 'react';
import './App.css';
import $ from 'jquery'

class App extends Component{

  constructor(){
    super();
    this.state = {dados: [], cep:''};
    this.setCep = this.setCep.bind(this);
    this.buscaCep = this.buscaCep.bind(this);
  }

  setCep(evento){
    this.setState({cep:evento.target.value});
  }

  buscaCep(evento){
    console.log('http://viacep.com.br/ws/'+this.state.cep+'/json/');
    evento.preventDefault();
    $.getJSON('http://viacep.com.br/ws/'+this.state.cep+'/json/',function(resposta){
      
    console.log(resposta);
    this.setState({dados:resposta})
    console.log("-----------------")
    console.log(this.state.dados)
    }.bind(this)
    )
  
  }
  render(){
    return(
      
      <div className="container">
        <div id="formulario">
          <form onSubmit={this.buscaCep.bind(this)} method="get" >
            <br/>
            <input id="cep" placeholder="Digite o cep " className="form-control form-control-mg" type="text" value={this.state.cep} onChange={this.setCep} /><br/>
            <button className="btn btn-primary btn-lg btn-block" type="submit">Buscar cep</button>
          </form>
        </div>
      <div>
        
        {
          <div>
          <h3>As seguintes informações foram encontradas para o cep: {this.state.dados.cep}</h3>
          <p>Estado: {this.state.dados.uf}</p>
          <p>Cidade: {this.state.dados.localidade}</p>
          <p>Bairro: {this.state.dados.bairro}</p>
          <p>Rua:    {this.state.dados.logradouro} </p>
         </div>
        }
      </div>       
    </div>
    )
  }
}
export default App;