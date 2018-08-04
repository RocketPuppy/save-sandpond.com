import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styles from "../utils/styles";
import { css } from "glamor";

css.global('*', { position: "relative" });

const Layout = ({ children, data }) => (
  <div style={{ background: styles.colors.background }}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.title },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
      {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
