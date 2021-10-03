import React from 'react'
import ChapterList from "../../components/Book2ChapterList";
import IndexPage from '../../components/IndexPage';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <IndexPage title={'Inka moonlighting'} chapterList={<ChapterList /> } />
      )
    }
  
}
