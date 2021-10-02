import React from 'react'
import PropTypes from 'prop-types'
import {  graphql, StaticQuery } from 'gatsby'
import ChapterList from './ChapterList'

class Book1ChapterList extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <ChapterList posts={posts} />
    )
  }
}

Book1ChapterList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

const query = () => (
  <StaticQuery
    query={graphql`
      query ChapterListQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" }, book: { eq: 1} } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                description
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Book1ChapterList data={data} count={count} />}
  />
)

export default query
