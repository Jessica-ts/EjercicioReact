import React from 'react';
import './App.css';
import Hoby from './Hoby';
import NuevoHoby from './NuevoHoby';
import Students from './Students';
import DeleteStudents from './deleteStudents';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class App extends React.Component {

  constructor( props ){
    super ( props )
    this.state = {
      nombre : "Jessica",
      apellido : "Tovar",
      hobbies : [{
        nombre : "Programar"
      },
      {
        nombre : "Dar clases"
      },
      {
        nombre : "Escuchar musica"
      },
      {
        nombre : "Ver peliculas" 
      }],
      students : [],
      apiURL : "http://localhost:8080"
    }

   // this.agregaHoby = this.agregaHoby.bind(this);
  }

  agregaHoby = (hoby) => {

    let listaNueva = [...this.state.hobbies, hoby];

    //listaNueva.push(hoby);

    this.setState({
      hobbies : listaNueva
    });
  }

  componentDidMount(){

    let url = `${this.state.apiURL}/api/students`;
    let settings = {
      method : 'GET'
    }
    
    fetch( url, settings )
      .then( response => {
        if( response.ok ){
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then( responseJSON => {
        this.setState({
          students : responseJSON
        })
      })
      .catch( err => {
        console.log(err);
      });


    let url2 = `${this.state.apiURL}/api/deleteStudent`;
    let settings2 = {
      method : 'DELETE',
      headers : {
        "Content-Type" : "application/json"
      }
    }
    
    fetch( url2, settings2 )
      .then( response => {
        if( response.ok ){
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then( responseJSON => {
        this.setState({
          students : responseJSON
        })
      })
      .catch( err => {
        console.log(err);
      });
  }


  render(){
    return (
      <BrowserRouter>
        <nav>
          <Link to='/'> Home </Link>
          <Link to='/students'> Students </Link>
          <Link to='/deleteStudents'> Delete Student </Link>
        </nav>
        <Route path='/students' render={(props) => <Students lista={this.state.students} />} />
        <Route path='/deleteStudents' render={(props) => <Students lista={this.state.students} />} />
        <div>
          Hola de nuevo {this.state.nombre} {this.state.apellido}
          
          <DeleteStudents={this.deleteStudent}/>
          <NuevoHoby agregaHoby={this.agregaHoby}/>
          <div>
            {this.state.hobbies.map( (hoby, index) => {
              return (
                <Hoby accion={hoby.nombre} test={index} />
              )
            })}
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
export default App;