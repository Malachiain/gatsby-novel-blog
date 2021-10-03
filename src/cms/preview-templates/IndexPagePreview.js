import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page-template'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    const books = data.bookOne && data.bookTwo ? [data.bookOne, data.bookTwo]: []
    return (
      <IndexPageTemplate
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        mainpitch={data.mainpitch || {}}
        books={books}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
