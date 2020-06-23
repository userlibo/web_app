import React from 'react'
import {Rate} from 'antd'
import StyleObj from "@/css/movieItem.scss" 
export default class  extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <div className={StyleObj.movieItem} onClick={this.toMovieDetail}>
                <img className={StyleObj.img} src="/src/images/xiaoshenke.png"></img>
                <h3>电影名称:{this.props.title.length>10?this.props.title.slice(0,10)+'...':this.props.title.slice(0,10)}</h3>
                <h3>上映年份:{this.props.year}</h3>
                <h3>电影类型:{this.props.genres.join()}</h3>
                <Rate allowHalf defaultValue={this.props.rating.average/2} />
            </div>
        )
    }

    toMovieDetail=()=>
    {   console.log("movieItem--props:",this.props)

        // window.location.href='/#/movie/detail/1'
        this.props.history.push(`/movie/detail/${this.props.id}`)
    }


}