import '../css/InputComp.css'
import {Component} from 'react'

class InputComp extends Component{
constructor(props){
    super(props);
    this.state = {
        title : '',
        release : '',
        genre : '',
        country : '',
        grade : ''
    }
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

addMovie = () => {
    console.log('InputComp Add');
    const movieinfo = this.state;

    this.props.addMovie(movieinfo);

    this.setState({
        title : '',
        release : '',
        genre : '',
        country : '',
        grade : ''
    })
}

render(){

    return(
        <div id='Inputcomp'>
            <div className='inq_t'>
                <div>
                <span className='inq'>제목 :</span> <input type='text' onChange={this.inputTitle} value={this.state.title} />
                </div>
               <div>
               <span className='inq'>개봉 :</span> <input type='text' placeholder='yyyy-mm-dd' onChange={this.inputRelease} value={this.state.release} />
                
               </div>
               <div>
               <span className='inq'>장르 :</span> <input type='text' onChange={this.inputGenre} value={this.state.genre} />
                
               </div>
               <div>
               <span className='inq'>국가 :</span> <input type='text' onChange={this.inputCountry} value={this.state.country} />
                
               </div>
               <div>
               <span className='inq'>평점 :</span> <input type='text' placeholder='1~10' onChange={this.inputGrade} value={this.state.grade} />
         
               </div>
                <br/>
                <br/>
                <br/>
                   </div>
            <div className='inq_p'>
                <span>
                    <input type="file" accept="image/*" />
                </span>
                <br/>
                <button onClick={this.addMovie}>추가</button>
            </div>
        </div>
    )
}
}

export default InputComp