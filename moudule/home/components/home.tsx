import React from 'react'
import { hoc } from '../containers/home';
import HeaderComponent from '../../components/header';
import Head from 'next/head';
import RecommendHoc from '../../recommend';

class Home extends React.Component<any,any> {
  public render(){
    let { article, comments, user } = this.props
    return  <div>
              <HeaderComponent />
              <Head>
                  <title>仿掘金</title>
              </Head>
              <RecommendHoc {...{article, comments, user}}/>
            </div>
  }
}

const HomeHoc = hoc(Home);
export default HomeHoc;
