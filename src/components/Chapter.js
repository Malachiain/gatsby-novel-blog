import Content, { HTMLContent } from '../components/Content'
import React from 'react'
import Layout from './Layout'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

export const ChapterTemplate = ({
    content,
    contentComponent,
    description,
    title,
    helmet,
    pageContext
  }) => {
    const { next, prev } = pageContext
  
    const PostContent = contentComponent || Content
  
    return (
      <section className="section">
        {helmet || ''}
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                {title}
              </h1>
              <p>{description}</p>
              <PostContent content={content} />
            </div>
          </div>
          <div style={{
            justifyContent: 'space-between',
            display: 'flex',
            margin: '1em 0'
          }}>
            {prev ? <a href={prev} className="button has-text-dark">Previous chapter</a> : <span></span>}
            {next ? <a href={next} className="button has-text-dark">Next chapter</a> : <span></span>}
          </div>
          <p className="content">© 2020 David Lumsden</p>
        </div>
  
      </section>
    )
  }
  
  ChapterTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    helmet: PropTypes.object,
    pageContext: PropTypes.object,
  }
  
export  const Chapter = ({ data, pageContext }) => {
    const { markdownRemark: post } = data
  
    return (
      <Layout>
        <ChapterTemplate
          content={post.html}
          contentComponent={HTMLContent}
          description={post.frontmatter.description}
          helmet={
            <Helmet titleTemplate="%s | Chapter">
              <title>{`${post.frontmatter.title}`}</title>
              <meta
                name="description"
                content={`${post.frontmatter.description}`}
              />
            </Helmet>
          }
          title={post.frontmatter.title}
          pageContext={pageContext}
  
        />
      </Layout>
    )
  }
  
  Chapter.propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.object,
      pageContext: PropTypes.object
    }),
  }

