import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class ChapterList extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div >
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent" key={post.id}>
              <article
                className={`blog-list-item box is-child `}
              >
                <header>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    width: '100%'
                  }}>
                  <div className="post-meta" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',

                  }}>
                    <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <p> {post.frontmatter.date} </p>
                  </div>
                    <p>{post.frontmatter.description}</p>
                  </div>
                </header>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

ChapterList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ChapterListQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
    render={(data, count) => <ChapterList data={data} count={count} />}
  />
)
