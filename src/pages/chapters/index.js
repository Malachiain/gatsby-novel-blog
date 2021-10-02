import React from 'react'
import ChapterList from "../../components/Book1ChapterList";
import IndexPage from '../../components/IndexPage';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <IndexPage title={'Death in the University of South Auckland'} chapterList={<ChapterList /> } />
      )
    }
  
}
