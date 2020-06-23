const path=require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin");
const webpack=require("webpack");
const htmlPlugin=new HtmlWebpackPlugin({
    template:"./src/index.html",
    filename:"index.html"
});


module.exports={
   "plugins":[htmlPlugin],
   module:{
    rules:[{
        test:/\.js|jsx$/,use:'babel-loader',exclude:/node_modules/
        },
        {
            test:/\.css$/,use:['style-loader','css-loader']
        },
        {
            test:/\.s(a|c)ss$/,use:['style-loader',{loader:'css-loader',options:{
                modules:{localIdentName:'[path][name]-[local]-[hash:5]'}
            }},'sass-loader']
        },
        {
            test:/\.img|png|gif|bmp$/,use:'url-loader'
        },
        {
            test:/\.ttf|woff|woff2|eot|svg$/,use:'url-loader'
        }
         ]
   },
   resolve:{
      extensions:[".js",'.jsx',".json",".css",".less",".scss"],
      alias:{
          "@":path.join(__dirname,"./src"),
          "vue$":"vue/dist/vue.js"
      }
   }

}