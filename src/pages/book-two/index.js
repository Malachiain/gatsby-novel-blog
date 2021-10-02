import React from 'react'
import ChapterList from "../../components/Book2ChapterList";
import IndexPage from '../../components/IndexPage';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <IndexPage title={'2 South Auckland 2 Die'} chapterList={<ChapterList /> } />
      )
    }
  
}
