import '../css/Footer.css'
import {Component} from 'react'

class Footer extends Component{
constructor(props){
    super(props);
    this.state = {

    }
}

render(){
    return(
        <div className='Foot'>
            <h4 className='footer'>Copy Right &copy; movie like Zone</h4>
        </div>
    )
}
}

export default Footer