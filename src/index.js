import React from "react"
import ReactDOM from "react-dom"
import App from "@/components/App.jsx"
import fetchJSONP from "fetch-jsonp"

fetchJSONP("http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10").then
(
  res=>
  {
    return res.json();
  }
).then(
  data=>{
    console.log("douban电影:",data)
  }
)


ReactDOM.render(
      <App></App>
    ,
    document.getElementById("app")
)




