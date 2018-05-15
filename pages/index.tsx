import React from 'react'
import fetch from 'isomorphic-unfetch'
import { HeaderComponent } from '../moudule/components/header';

export default class Post extends React.Component<any,any> {
  static async getInitialProps ({}) {
    // fetch data as usual
    const responses = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/posts/1`),
      fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`)
    ])

    const [article, comments] = await Promise.all(
      responses.map(response => response.json())
    )

    const user = await fetch(
      `https://jsonplaceholder.typicode.com/users/${article.userId}`
    ).then(response => response.json())

    const props = { article, comments, user }
    debugger;
    return props
  }

  public render(){
    const { article, comments, user } = this.props
    return  <div>
       <HeaderComponent />
        <h1>{article.title}</h1>
        <div>
          <a href={`mailto:${user.email}`}>{user.name}</a>
        </div>
        <p>{article.body}</p>
        <ul>
          {comments.map(comment => (
            <li key={comment.id}>
              {comment.body}
              <br />
              By <strong>{comment.name}</strong>
            </li>
          ))}
        </ul>
    </div>
  }
}
