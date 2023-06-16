//App.js

import './App.css';
import {Component} from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Movie from './components/Movie';
import Pagenation from './components/Pagenation';
import no1 from './images/no1.jpg'
import no2 from './images/no2.jpg'
import no3 from './images/no3.jpg'
import no4 from './images/no4.jpg'
import no5 from './images/no5.jpg'
import no6 from './images/no6.jpg'
import no7 from './images/no7.jpg'
import no8 from './images/no8.jpg'
import no9 from './images/no9.jpg'
import no10 from './images/no10.jpg'
import no11 from './images/no11.jpg'
import no12 from './images/no12.jpg'
import no13 from './images/no13.jpg'

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
        {id : 7, imgs: no7, title: "스즈메의 문단속", country: "Japan", genre: "애니메이션", release: "2023-03-08", grade: 7.3},
        {id : 8, imgs: no8, title: "엘리멘탈", country: "USA", genre: "애니메이션", release: "2023-06-14", grade: 8.9},
        {id : 9, imgs: no9, title: "플래시", country: "USA", genre: "애니메이션", release: "2023-06-14", grade: 8.1},
        {id : 10, imgs: no10, title: "귀공자", country: "Korea", genre: "액션", release: "2023-06-21", grade: 8.7},
        {id : 11, imgs: no11, title: "해리포터와 마법사의 돌", country: "England", genre: "판타지/어드벤쳐", release: "2001-12-14", grade: 8.8},
        {id : 12, imgs: no12, title: "트랜스포머 3 ", country: "USA", genre: "액션/SF", release: "2011-06-29", grade: 6.5},
        {id : 13, imgs: no13, title: "기생충 ", country: "Korea", genre: "드라마", release: "2019-05-30", grade: 7.9},
      ],
      MoviePerPage : 6,	//한 페이지에 표시할 개수
      currentPage : 1	//현재 페이지
    }
  }

  setCurrentPage = (page) => {
    this.setState({
      currentPage : page
    })
  }
  // 현재 페이지를 설정하는 함수


  currentMovieList = (MovieList) => {
    const {MoviePerPage, currentPage} = this.state

    const startIndex = (currentPage-1)*(MoviePerPage);
    //0, 6
    const endIndex = MoviePerPage * currentPage;
    //6, 12 ...
    
    const slideList = MovieList.slice(startIndex, endIndex);

    return slideList
  }	// 표시할 갯수와 페이지번호를 받아서 시작과 끝 번호를 찾음
  // 페이지에 따른 표시할 값을 반환하는 함수


  addMovie=(movieinfo)=>{
    console.log("addMovie App");

    //console.log(movieinfo);
    const movieId = this.state.MovieList.length + 1;
    const movieObj = [{id: movieId, title: movieinfo.title, country: movieinfo.country, genre: movieinfo.genre, release: movieinfo.release, grade: movieinfo.grade }]
    console.log(movieObj);

	  //concat을 사용해 추가하기
    const concatMovieList = movieObj.concat(this.state.MovieList);

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
    const {MovieList, MoviePerPage, currentPage} = this.state

    const result = this.currentMovieList(MovieList).map((data) => (
      <Movie key={data.title} id={data.id} title={data.title} imgs={data.imgs}
      country={data.country} genre={data.genre} release={data.release} 
      grade={data.grade} deleteMovie={this.deleteMovie} modifyMovie={this.modifyMovie} />
    ));

    return(
      <div id='App'>
        <Header addMovie={this.addMovie} />
        <div id='list'>
          {result}
        </div>
        <Pagenation setCurrentPage={this.setCurrentPage}
        total={MovieList.length} MoviePerPage={MoviePerPage} currentPage={currentPage} />
        <Footer/>
      </div>
    )
  }
}

export default App;
