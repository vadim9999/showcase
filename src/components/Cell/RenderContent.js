import React, {
  Component, PureComponent
} from 'react';

import { Button, Icon, Layout, Row, Col, List, message, Avatar, Spin } from 'antd';

import { getFullGrocery } from '../../selectors/selector';
import TileLayout from '../TileLayout/TileLayout';

import WindowScroller from 'react-virtualized/dist/commonjs/WindowScroller';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import VList from 'react-virtualized/dist/commonjs/List';
import InfiniteLoader from 'react-virtualized/dist/commonjs/InfiniteLoader';

const { Header, Footer, Content } = Layout;

const ContentStyle = { margin: '24px 16px 0', fontSize: '14px' };

const divStyle = { padding: 24, background: '#fff', minHeight: 360 };

//@TODO after updates, i don't see a reason why we should keep this component. we can move all of this stuff into tile i assume...


class RenderContent extends PureComponent {
constructor(props){
  super(props)
  this.state = {
    data: [],
  }
}

  async componentDidMount(){

    try  {
    let response = await getFullGrocery(this.props.name);
    this.setState({
          data: response.data
        })
      } catch (e) {
        console.error("Can't connect to Database");
      }
  }

  getContent(){
    if(this.state.data == 0){
      return(
         <Spin className="demo-loading" />
      )
    }else {
      return (
        <TileLayout items={this.state.data} />
      )
    }
  }
  render(){
    const { data } = this.state;



    return (
      <Content style={ContentStyle}>


        <div style={divStyle}>

          {/* @TODO the problem here - we need to connect selectors and pass `name` variable here. it's not cool and not- reusable */}

          {/* old version: /* Should we really pass the name? or this is just because we don't have a propper ids here?
          If yes, then we should make it clear, so later we'll be able to  */}

        {this.getContent()}
        </div>

      </Content>
    )
  }
}
export default RenderContent;
