import React from 'react';
import Link from 'gatsby-link';
import FullContent from "../components/full-content";

const NotFoundPage = () => (
  <FullContent>
    <h1>404</h1>
    <h2>Page not found</h2>
    <Link to="/">Return Home</Link>
  </FullContent>
)

export default NotFoundPage
