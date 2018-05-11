import React from 'react'

export default class Post extends React.Component<any,any> {
    static getInitialProps ({ query }) {
        console.log(query);
        return { postId: query.id,postName:query.title }
      }
    

    render () {
        return (
            <div>
            <h1>{this.props.postId}==={this.props.postName}</h1>
            <p>This is the blog post content.</p >
          </div>
        )
    }
}