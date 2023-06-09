import '../css/Header.css'
import {Component} from 'react'

class Header extends Component{
constructor(props){
    super(props);
    this.state = {

    }
}

render(){
    return(
        <div className='Head'>
            <h1 className='header'>Movie Zone</h1>
            <hr/>
        </div>
    )
}
}

export default Header