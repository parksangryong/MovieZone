//App.js

import './App.css';
import {Component} from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Movie from './components/Movie';
import InputComp from './components/InputComp';
import no1 from './images/no1.jpg'
import no2 from './images/no2.jpg'
import no3 from './images/no3.jpg'
import no4 from './images/no4.jpg'
import no5 from './images/no5.jpg'
import no6 from './images/no6.jpg'
import no7 from './images/no7.jpg'

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      MovieList : [
        {id : 1, imgs: no1, title: "범죄도시3", country: "Korea", genre: "범죄", release: "2023-05-31", grade: 6.7},
        {id : 2, imgs: no2, title: "트랜스포머: 비스트의 서막", country: "USA", genre: "	액션/SF", release: "2023-06-06", grade: 7.4},
        {id : 3, imgs: no3, title: "플래시 ", country: "USA", genre: "액션/SF", release: "	2023-06-14", grade: 8.5},
        {id : 4, imgs: no4, title: "인어공주", country: "USA", genre: "어드벤처", release: "2023-05-24", grade: 2.7},
        {id : 5, imgs: no5, title: "남은 인생 10년", country: "Japan", genre: "로맨스", release: "2023-05-24", grade: 8.1},
        {id : 6, imgs: no6, title: "멍뭉이", country: "Korea", genre: "드라마", release: "2023-03-01", grade: 6.6},
        {id : 7, imgs: no7, title: "스즈메의 문단속 ", country: "Japan", genre: "애니메이션", release: "2023-03-08", grade: 7.3},
      ]
    }
  }

  addMovie=(movieinfo)=>{
    console.log("addMovie App");

    //console.log(movieinfo);
    const movieId = this.state.MovieList.length + 1;
    const movieObj = {id: movieId, title: movieinfo.title, country: movieinfo.country, genre: movieinfo.genre, release: movieinfo.release, grade: movieinfo.grade }
    console.log(movieObj);

	  //concat을 사용해 추가하기
    const concatMovieList = this.state.MovieList.concat(movieObj);

    this.setState({
      MovieList : concatMovieList
    })
  }

  deleteMovie = (id) => {
    console.log('deleteMovie App');

    const FilterList = this.state.MovieList.filter(
      (data) => (data.id !== id));

    this.setState({
      MovieList : FilterList
    })
  }

  modifyMovie = (id, title, release, genre, country, grade) => {
    console.log('modifyMovie App');

    const movieObj = {id: id, title: title, release: release, genre: genre, country: country, grade: grade};

    const modifyList = this.state.MovieList.map((data) => (
        data.id === movieObj.id ? {...data, ...movieObj} : data
    ));

    this.setState({
      MovieList : modifyList
    })
  }

  render(){
    const result = this.state.MovieList.map((data) => (
      <Movie key={data.title} id={data.id} title={data.title} imgs={data.imgs}
      country={data.country} genre={data.genre} release={data.release} 
      grade={data.grade} deleteMovie={this.deleteMovie} modifyMovie={this.modifyMovie} />
    ));

    return(
      <div id='App'>
        <Header />
        <InputComp addMovie={this.addMovie} />
        <div id='list'>
          {result}
        </div>
        <Footer/>
      </div>
    )
  }
}

export default App;
