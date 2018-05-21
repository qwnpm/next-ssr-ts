import Document, { Head, Main, NextScript } from 'next/document'
import stylesheet from '../styles/index.scss'

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    const page = renderPage()
    return { ...page, }
  }

  constructor (props) {
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids
    }
  }

  render () {
    return (
      <html>
        <Head>
          <title>lueluelue</title>
          <link rel="stylesheet" href="/_next/static/style.css" />
          {/* <style dangerouslySetInnerHTML={{ __html: this.props.css }} /> */}
        </Head>
        <body>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
