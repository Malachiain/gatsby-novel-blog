import React from 'react'
import PropTypes from 'prop-types'
import  {GlossaryPageTemplate}  from '../../templates/glossary-page-template'

const GlossaryPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()


  if (data) {
    return (
      <GlossaryPageTemplate
        title={data.title}
        definitions={data.definitions}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

GlossaryPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default GlossaryPagePreview
