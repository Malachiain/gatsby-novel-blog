import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import {GlossaryPageTemplate} from './glossary-page-template'





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