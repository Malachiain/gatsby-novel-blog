import Layout from './/Layout'

import React from 'react'

const IndexPage = ({
     title,
    chapterList
 })=> {
      return (
        <Layout>
          <div
            className="full-width-image-container margin-top-0"
            style={{
              backgroundImage: `url('/img/harbour.jpg')`,
            }}
          >
            <h1
              className="has-text-weight-bold is-size-1"
              style={{
                boxShadow: '0.5rem 0 0 #4d64d8, -0.5rem 0 0 #4d64d8',
                backgroundColor: '#4d64d8',
                color: 'white',
                padding: '1rem',
              }}
            >
              {title}
            </h1>
          </div>
          <section className="section">
            <div className="container">
              <div className="content">
                {chapterList}
              </div>
            </div>
          </section>
        </Layout>
      )
  }
  export default IndexPage