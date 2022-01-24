# Management System 

-----------------------

> ## 고객
> > ## 관리
> > > ## 시스템

-----------------------

+ ### 22/01/23
    + map 문법과 계층적으로 Component 구성하기
    + map을 이용할 때는 key props값을 주어야한다.

-----------------------

+ ### 22/01/23
    + material-ui를 이용한 Component Page화 및 Css 기능을 React 안에서 쉽게 이용하는 방법

-----------------------

+ ### 22/01/24
    + 기본적인 node.js를 이용한 server

        +  root폴더의 package.json 입력
        +  terminal > npm install -g nodemon
        +  terminal > npm i nodemon body-parser express
        +  gitignore 파일 root 폴더에도 넣기
        +  package.json에서 server.js를 이용하기로 했기 때문에 server.js 작성
            
            ```java script
            
                const express = require('express');
                const bodyParser = require('body-parser');
                const app = express();
                const port = process.env.PORT || 5000;

                app.use(bodyParser.json());
                app.use(bodyParser.urlencoded({extended:true}));

                app.get('/api/hello', (req,res) =>{
                    res.send({message : 'Hello express!'});
                });

                app.listen(port, ()=>console.log(`Listening on Port ${port}`));
            ```
            
        + proxy 이용 , terminal > npm install -g http-proxy-middleware
        + <setupProxy.js>
        ```java script

        const {createProxyMiddleware} = require('http-proxy-middleware');
        module.exports = function(app){
            app.use(
                '/api',
                createProxyMiddleware({
                    target:'http://localhost:5000',
                    changeOrigin : true,
                })
            );
        };

        ```
-----------------------