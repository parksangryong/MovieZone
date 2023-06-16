import '../css/Header.css'
import {Component} from 'react'
import InputComp from './InputComp';

class Header extends Component{
constructor(props){
    super(props);
    this.state = {
        edit : false
    }
}

toggle = () => {
    this.setState({
        edit : !this.state.edit
    })
}

render(){
    const {edit} = this.state

    if(edit === false){
        return(
            <div className='Head'>
                <h1 className='header'  onClick={this.toggle}>Movie Zone</h1>
                <hr/>
    
            </div>
        )
    }
    else if(edit === true){
        return(
            <div className='Head'>
                <h1 className='header active'  onClick={this.toggle}>Movie Zone</h1>
                <hr/>
                <InputComp addMovie={this.props.addMovie} />
            </div>
        )
    }
    
}
}

export default Header