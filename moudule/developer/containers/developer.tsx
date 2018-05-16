import { compose, withHandlers, lifecycle, setStatic } from "recompose";
import { IProps } from '../constants/developer';
// import fetch from 'isomorphic-unfetch'
// import proxy from "proxy";
import proxy from "../../../proxy";

export const hoc = compose<IProps, any>(
    setStatic('getInitialProps',  async ({ req }) => {
        // *      a: proxy.execute.bind(proxy, nsA, keyA, {}),
        // *      b: proxy.execute.bind(proxy, nsB, keyB, {})
        let post1 = proxy.getNs("http1").get("post1");
        let post2 = proxy.getNs("http1").get("post2");
       
        proxy.executeAll({
            post1: post1.get.bind(post1, null, { params: 1}),
            article: post2.get.bind(post2, 1)
        }).then(console.log);

            // console.log("llll")
            // const responses = await Promise.all([
            // fetch(`https://jsonplaceholder.typicode.com/posts/1`),
            // fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`)
            // ])
            // const [article, comments] = await Promise.all(
            // responses.map(response => response.json())
            // )

            // const user = await fetch(
            // `https://jsonplaceholder.typicode.com/users/${article.userId}`
            // ).then(response => response.json())

            // const props = { article, comments, user }
            // debugger;
            // return props
        }
    ),
    withHandlers({
        
    }),
    lifecycle({
        componentDidMount:function(){
           
        }
    })
);