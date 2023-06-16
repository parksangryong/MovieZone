import '../css/Pagenation.css'
import { Component } from 'react'

class Pagenation extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    pageClick =(page) => {
        this.props.setCurrentPage(page);
    }// 페이지번호 클릭시 그 번호를 App으로 넘기는 함수


    prev = () => {
        const {currentPage} = this.props

        if(currentPage-1 < 1){
            alert('이동불가!');
            return
        }

        this.props.setCurrentPage(currentPage-1)
    }	// 앞 페이지로 이동하는 버튼 클릭시 현재 페이지 값을 불러와
    	// 1보다 작으면 이동불가를 출력, 아니면 페이지-1을 App으로 넘겨 페이지변경


    next = () => {
        const {currentPage, total, MoviePerPage} = this.props
        const endPage = Math.ceil(total/MoviePerPage);

        if(currentPage+1 > endPage){
            alert('이동불가!');
            return
        }
        this.props.setCurrentPage(currentPage+1)
    }	// 뒤 페이지로 이동하는 버튼 클릭시 현재 페이지 값을 불러와
    	// 마지막 페이지보다 크면 이동불가를 출력, 아니면 페이지+1을 App으로 넘겨 페이지변경


    render(){
        const {total, MoviePerPage, currentPage} = this.props;
        const endPage = Math.ceil(total/MoviePerPage);
        let pageNumber = [];
        for(var i=1; i<=endPage; i++){
            pageNumber.push(i);
        }

        const result = pageNumber.map(
            (page) => (<span id='page' 
            className={currentPage===page? 'active' : ''} 
            onClick={() => this.pageClick(page)}>{page}</span>)
        )

        return(
            <div id='pagelist'>
                <div id='pagebox'>
                    <button onClick={this.prev}>&lt;</button>
                    {result}
                    <button onClick={this.next}>&gt;</button>
                </div>
            </div>
        )
    }
}

export default Pagenation