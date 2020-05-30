import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'


const Definition = ({ word, definition }) => {
    return (
        <div className="columns is-gapless" style={{
            borderBottom: 'solid 1px grey'
        }
        }>
            <div className="column has-text-dark">{word}</div>
            <div className="column is-three-quarters">{definition}</div>
        </div>
    )
}

export const GlossaryPageTemplate = ({ title, definitions }) => {
    const sortedDefinitions = definitions.sort();
    return (
        <section className="section section--gradient">
            <div className="container">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <div className="section">
                            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                                {title}
                            </h2>
                            {sortedDefinitions.map(Definition)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


const GlossaryPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout>
            <GlossaryPageTemplate
                title={frontmatter.title}
                definitions={frontmatter.definitions}
            />
        </Layout>
    )
}

GlossaryPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default GlossaryPage;

export const pageQuery = graphql`
  query GlossaryPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "glossary-page" } }) {
      frontmatter {
        title
        definitions {
          word
          definition
        }
      }
    }
  }
`