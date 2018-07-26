import React from 'react'
import Link from 'gatsby-link'
import FullContent from "../components/full-content";
import glamorous from "glamorous";

const Title = glamorous.h1({
  fontSize: "48px",
  fontWeight: "bold",
  textAlign: "center"
});

const IndexPage = () => (
  <FullContent>
    <Title>Save Sand&nbsp;Pond</Title>
    <h2>No Storage Facility</h2>
    <h3>Warwick, RI</h3>
  </FullContent>
)

export default IndexPage
