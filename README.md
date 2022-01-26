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

+ ### 22/01/26
    + React 라이프사이클
        * comstructor() 를 불러온다
        * componentWillMount() //컴포넌트가 마운트 되기전에 함수 불러와짐
        * render() // 컴포넌트를 그린다
        * componentDidMount() 


        +  props or state 가 변경되는 경우는 shouldComponentUpdate() 가 호출되어 render() 가 호출된다.
        +  따라서 React에서는 상태 변경유지보수만으로 뷰를 재구성이 가능하다.

    + @material-ui/core/CircularProgress 
        + 이것을 이용하여 서버에서 들고온 데이터의 양이 많거나 로딩이 지연되고 있을 때 프로그래스바를 보여준다.

-----------------------

+ ### 22/01/26
    + mysql을 이용한 서버 연동, 오류가나서 계속 찾아보며 변경을 계속 했는데 초기화해줘야함 . 우선 mongodb를 빠르게 공부하고 mongodb로 대체해서 변경할 예정

-----------------------    