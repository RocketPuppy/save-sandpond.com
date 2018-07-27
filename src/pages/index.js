import React from 'react'
import Link from 'gatsby-link'
import FullWidth from "../components/full-width";
import Title from "../components/title";
import Hero from "../components/hero";
import ContentHero from "../components/content-hero";
import TextContent from "../components/text-content";
import glamorous from "glamorous";

const IndexPage = () => (
  <FullWidth>
    <Hero>
      <Title>Save Sand&nbsp;Pond</Title>
      <h2>No Storage Facility</h2>
      <h3>Warwick, RI</h3>
    </Hero>
    <ContentHero alignment="left">
      <h2>Art In Ice</h2>
      <TextContent>
        Aenean id urna posuere, accumsan ipsum venenatis, maximus lectus. Duis urna sapien, fermentum quis cursus blandit, mollis eget justo. Sed metus mauris, feugiat in congue suscipit, ultricies in elit. Nam consequat aliquet lacus, quis mattis dui vulputate et. Proin lobortis ac ex nec ultricies. Aenean condimentum augue vel vulputate dignissim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris interdum gravida viverra. Fusce porta accumsan vulputate. Nunc eros eros, mollis at lacinia vitae, elementum ac mi. Aenean scelerisque pulvinar mollis. Integer vulputate ornare volutpat. Vivamus est arcu, egestas at dui eget, rutrum rutrum risus.
      </TextContent>
    </ContentHero>
    <ContentHero alignment="right">
      <h2>Liddle Tots 2 Teen</h2>
      <TextContent>
        Sed augue est, lacinia et euismod sit amet, ultricies et elit. Praesent facilisis lacus semper augue porttitor, et sodales elit faucibus. Praesent non dictum justo. Nullam vehicula purus a mollis laoreet. Mauris convallis odio non tortor sollicitudin, ut varius tellus luctus. Aenean consequat, libero at eleifend dignissim, enim libero vestibulum diam, quis eleifend dolor massa id magna. Vivamus luctus tempus accumsan. Maecenas ac risus non sapien volutpat accumsan eget at odio. Sed sit amet elit sed ligula dapibus tempor. Vestibulum risus nulla, molestie eget dolor sit amet, eleifend egestas lorem.
      </TextContent>
    </ContentHero>
    <ContentHero alignment="left">
      <h2>The Storage Center</h2>
      <TextContent>
        Fusce congue auctor quam quis blandit. Vestibulum commodo eleifend ex quis placerat. Cras tellus turpis, fringilla et facilisis in, vestibulum in enim. Vivamus at aliquam massa. Ut accumsan varius consectetur. Praesent tincidunt sed dolor non molestie. Quisque in ornare magna. Sed dapibus facilisis malesuada. Donec pharetra, dui ac tincidunt mattis, enim felis efficitur nunc, id elementum enim justo non ipsum. Curabitur aliquet vitae dui nec porta. Etiam eleifend eros ac sem vulputate sodales. Sed sapien nulla, egestas vitae malesuada convallis, fringilla a tellus.
      </TextContent>
    </ContentHero>
  </FullWidth>
)

export default IndexPage
