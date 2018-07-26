import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import FullContent from '../components/full-content';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.title },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <FullContent>
      {children()}
    </FullContent>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery2 {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
