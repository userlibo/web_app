import React from 'react'
import fetchJSONP from "fetch-jsonp"

import { Spin, Alert,Pagination} from 'antd';
import MovieItem from './MovieItem';

export default class  extends React.Component {
    constructor(props) {
        super(props)
        console.log("props:",props)
        this.state={
            isLoading:true,
            list:[],
            pageSize:4,
            total:0,
            currentPage:props.match.params.page,
            movieType:props.match.params.type   
        }
    }

    componentWillMount()
    {
        console.log("分页标记")
        console.log(this.props)

        // this.setState({
        //     movieType:this.props.match.params.type,
        //     currentPage:this.props.match.params.page
        // })
        // let movieType=this.props.match.params.type;
        // let currentPage=this.props.match.params.page;
        let url=`http://api.douban.com/v2/movie/${this.state.movieType}?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${(this.state.currentPage-1)*this.state.pageSize}&count=${this.state.pageSize}`
        
        fetchJSONP(url).then
        (
          res=>
          {
            return res.json();
          }
        ).then(
        
          data=>{
            console.log("douban电影:",data)
            this.setState({
                list:data.subjects||[],
                total:parseInt(data.total),
                isLoading:false
            })
          }
        )
      
    }
    
    componentWillReceiveProps(nextProps)
    {
        console.log("电影类型标记")
        console.log(nextProps)
        this.setState({
            movieType:nextProps.match.params.type,
            currentPage:nextProps.match.params.page,
            isLoading:true
        })
        
        let url=`http://api.douban.com/v2/movie/${nextProps.match.params.type}?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${(nextProps.match.params.page-1)*this.state.pageSize}&count=${this.state.pageSize}`
        
        fetchJSONP(url).then
        (
          res=>
          {
            return res.json();
          }
        ).then(
        
          data=>{
            console.log("douban电影:",data)
            this.setState({
                list:data.subjects||[],
                total:parseInt(data.total),
                isLoading:false
            })
          }
        )
    }


    render() {
        return (
            <div>
            {this.renderList()}
            </div>
        )
    }
    renderList=()=>{
        if(this.state.isLoading)
        {
           return (
    <Spin tip="Loading...">
    <Alert
      message="电影正在加载中..."
      description="请你耐心等待几秒钟..."
      type="info"
    />
     </Spin>

           )

        }else
        {
            console.log("total:",this.state.total)
          return <div>
              <div style={{display:'flex',flexWrap:'wrap'}}>
              {/* {this.props.match.params.type} */}
                {this.state.list.map(item =>
                {
                    return (<MovieItem  {...item} key={item.id} history={this.props.history}></MovieItem>)
                })}
          </div>
          <Pagination defaultCurrent={this.state.currentPage} pageSize={this.state.pageSize} total={this.state.total} onChange={this.pageChanged}/>
          </div>
        }

    }
    pageChanged=(page)=>{
        // console.log('执行了pageChange')
        // this.setState({
        //     curentPage:page
        // })
        this.setState({
            currentPage:page
        })
        let str=`/movie/${this.state.movieType}/${page}`;
        console.log("str--load",str)
        this.props.history.push(`/movie/${this.state.movieType}/${page}`);
        // window.location.href=`#/movie/${this.state.movieType}/${page}`

    }
    goback123=()=>{
        this.props.history.go(-1);
    }
}