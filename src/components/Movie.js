import '../css/Movie.css'
import {Component} from 'react'

class Movie extends Component{
constructor(props){
    super(props);
    this.state = {
        title : props.title,
        release : props.release,
        genre : props.genre,
        country : props.country,
        grade : props.grade,
        edit : false
    }
}

deleteMovie = () => {
    console.log('delete Movie');

    const {id} = this.props

    this.props.deleteMovie(id);
}

modifyMovie = () => {
    console.log('modify Movie');

    if(this.state.edit === true){
        const {id} = this.props
        const {title, release, genre, country, grade} = this.state
        this.props.modifyMovie(id, title, release, genre, country, grade);
    }
    
    this.setState({
        edit : !this.state.edit
    })
}

inputTitle = (e) => {
    //console.log(e.target.value)
    this.setState({
        title: e.target.value
    })
}
inputRelease = (e) => {
    //console.log(e.target.value)
    this.setState({
        release: e.target.value
    })
}
inputGenre = (e) => {
    //console.log(e.target.value)
    this.setState({
        genre: e.target.value
    })
}
inputCountry = (e) => {
    //console.log(e.target.value)
    this.setState({
        country: e.target.value
    })
}
inputGrade = (e) => {
    //console.log(e.target.value)
    this.setState({
        grade: e.target.value
    })
}

render(){
    const {edit} = this.state;

    if(edit === false){
        return(
            <div className='Movie'>
                <div className='movie_img'>
                    <img src={this.props.imgs} alt={this.props.imgs} />
                </div>
                <div className='movie_txt'>
                    <span className='quest'>제목 :</span> <span className='answer'>{this.props.title}</span>
                    <br/>
                    <span className='quest'>개봉일 :</span> <span className='answer'>{this.props.release}</span>
                    <br/>
                    <span className='quest'>장르 :</span> <span className='answer'>{this.props.genre}</span>
                    <br/>
                    <span className='quest'>국가 :</span> <span className='answer'>{this.props.country}</span>
                    <br/>
                    <span className='quest'>평점 :</span> <span className='answer'>{this.props.grade}</span>
                </div>
                <button className='modifyBtn' onClick={this.modifyMovie}>수정</button>
                <button className='deleteBtn' onClick={this.deleteMovie}>삭제</button>
            </div>
        )
    }
    else if(edit === true){
        return(
            <div className='Movie'>
                <div className='movie_img'>
                    <img src={this.props.imgs} alt={this.props.imgs} />
                </div>
                <div className='movie_txt'>
                    <span className='quest'>제목 :</span> <span className='answerIn'><input type='text' onChange={this.inputTitle} defaultValue={this.props.title} /></span>
                    <br/>
                    <span className='quest'>개봉일 :</span> <span className='answerIn'><input type='text' onChange={this.inputRelease} defaultValue={this.props.release} /></span>
                    <br/>
                    <span className='quest'>장르 :</span> <span className='answerIn'><input type='text' onChange={this.inputGenre} defaultValue={this.props.genre} /></span>
                    <br/>
                    <span className='quest'>국가 :</span> <span className='answerIn'><input type='text' onChange={this.inputCountry} defaultValue={this.props.country} /></span>
                    <br/>
                    <span className='quest'>평점 :</span> <span className='answerIn'><input type='text' onChange={this.inputGrade} defaultValue={this.props.grade} /></span>
                </div>
                <button className='modifyBtn' onClick={this.modifyMovie}>저장</button>
                <button className='deleteBtn' onClick={this.deleteMovie}>삭제</button>
            </div>
        )
    }
}
}

export default Movie