import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'



export const IndexPageTemplate = ({
  title,
  subheading,
  mainpitch,
  books
}) => (
  <div>
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url('/img/harbour.jpg')`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '75px',
          lineHeight: '1',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              '#4d64d8 0.5rem 0px 0px, #4d64d8 -0.5rem 0px 0px',
            backgroundColor: '#4d64d8',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              '#4d64d8 0.5rem 0px 0px, #4d64d8 -0.5rem 0px 0px',
            backgroundColor: '#4d64d8',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-11 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Novellas
                  </h3>
                  <div className="columns is-multiline">
                    {books.map(({ title, description, url }, index) => (
                      <div className="is-parent column is-6" key={index}>
                        <article
                          className={`blog-list-item tile is-child box notification `}
                        >
                          <header>
                            <p className="post-meta">
                              <Link
                                className="title has-text-primary is-size-4"
                                to={url}
                              >
                                {title}
                              </Link>

                            </p>
                          </header>
                          <p>
                            {description}

                          </p>
                        </article>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,

}
