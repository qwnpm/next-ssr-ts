import React from 'react'
import { hoc } from '../containers/recommend';

class Recommend extends React.Component<any,any> {
  public render(){
    const { article, comments, user } = this.props
    return  <div>
                <h1>{article && article.title}</h1>
                <div>
               {user && <a href={`mailto:${user.email}`}>{user.name}</a>} 
                </div>
                <p>{article && article.body}</p>
                <ul>
                {comments && comments.map(comment => (
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

const RecommendHoc = hoc(Recommend);
export default RecommendHoc;
