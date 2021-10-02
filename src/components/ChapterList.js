import React from 'react'
import {  Link } from 'gatsby'

const ChapterList = ({
    posts
})=> {
    return (
        <div >
          {posts.length > 0 ?
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
            )) : <h3>Comming soon</h3>}
        </div>
      )
}

export default ChapterList