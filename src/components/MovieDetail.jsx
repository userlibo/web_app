import React from 'react'
import fetchJSONP from 'fetch-jsonp'
import Sobj from "@/css/movieDetail.scss"
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';


export default class  extends React.Component {

    constructor() {
        super()
        this.state={
          detail:{}
        }
    }
    componentWillMount()
    {
        // debugger
        let url=`https://api.douban.com/v2/movie/subject/${this.props.match.params.id}?apikey=0df993c66c0c636e29ecbb5344252a4a`
        fetchJSONP(url)
        .then(res=>{
            return res.json()
        }).then(data=>{
            console.log("detail--data:",data)
            this.setState({
                detail:data
            })
        })
        // debugger
    }
    render() {
        console.log("进入了movieDetail页面");
        let b=this.state.detail.images
        console.log("movie-state-detail:",this.state.detail)
        return (
        <div className={Sobj.movieDetailWrap} style={{textAlign:'center'}}>
        <div style={{textAlign:'left'}}>
                    <Button onClick={this.goback} type="primary" shape="round" icon={<ArrowLeftOutlined />} size={'large'}>
          返回上一页    
        </Button>
        </div>
        {/* <h1>movie详情页</h1> */}
        <img src="/src/images/xiaoshenke.png"/>
        {/* <img src={1?this.state.detail.images.large.replace('img3','img1'):'/src/images/xiaoshenke.png'} alt=""/> */}
        <h3>{this.state.detail.original_title}</h3>
        <p style={{textAlign:'left',textIndent:'2em'}}>{this.state.detail.summary}</p>
            </div>
        )
    }

    goback=()=>{
        this.props.history.go(-1)
    }

}