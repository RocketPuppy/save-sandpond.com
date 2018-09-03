import React from 'react'
import Link from 'gatsby-link'
import FullWidth from "../components/full-width";
import Hero from "../components/hero";
import ContentHero from "../components/content-hero";
import glamorous from "glamorous";
import ActionContent from "../components/action-content";
import MailingListSignup from "../components/mailing-list-signup";

const IndexPage = ({ data }) => (
  <FullWidth>
    <Hero
      image={{
        title: "Header image",
        alt: "Sunset on Sand Pond",
        sizes: data.headerImage.sizes
      }}
      textColor="black"
      textOutlineColor="white"
      text="Save Sand Pond"
    />
    <ContentHero
      alignment="left"
      theme="green"
      header="Wildlife"
      image={{
        title: "Wildlife",
        alt: "Geese on Sand Pond",
        resolutions: data.wildlifeImage.resolutions
      }}
      text="The calm, secluded environment of Sand Pond makes it attractive to many kinds of waterfowl throughout the seasons, including egrets, herons, cormorants, hooded mergansers, various ducks, geese and swans. They can often be spotted in shallows along with turtles sunning themselves. The pond is also home to many fish, and fishing is a popular pastime for the residents as well as the birds! Rounding it off the pond is home to a diverse array of aquatic and non-aquatic plant life."
    />
    <ContentHero
      alignment="right"
      theme="blue"
      header="Recreation"
      alignment="right"
      image={{
        title: "Recreation",
        alt: "Paddle boats on Sand Pond",
        resolutions: data.recreationImage.resolutions
      }}
      text="The pond is open to Warwick residents year-round. Because of its exceptionally clean water many members of the community come to swim and boat on the pond. Between spring and summer the water is clear, and one can often see straight to the bottom. When summer is in full swing the children at the local daycare can be seen enjoying their fleet of paddle-boats. Beach access provides a convenient place to fish and swim."
    />
    <ContentHero
      alignment="left"
      theme="orange"
      header="Self-Storage"
      alignment="left"
      image={{
        title: "Self-Storage",
        alt: "Artist concept of self-storage on Sand Pond",
        resolutions: data.storageImage.resolutions
      }}
      text="Sadly, there is a proposal for a 3-story, 630 unit self-storage facility to be built on the northwest half of the pond at Pond Plaza, 1160 Post Road. Should the city allow this proposed self-storage center many of the attractive aspects of the pond will be eliminated. And there could be the potential of irreversible environmental harm to the fragile kettle pond. Fortunately we can work together to save this hidden gem Sand Pond for the Warwick community."
    />
    <ActionContent
      header={<span>Sand Pond News</span>}
      items={[
        (<a href="http://warwickonline.com/stories/neighbors-state-resolve-despite-solomons-declaration-to-save-pond,136340?">Warwick Beacon coverage of the Sand Pond Palooza.</a>),
        (<a href="http://warwickonline.com/stories/splash-before-the-clash,136264?">Warwick Beacon Sand Pond Palooza announcement coverage.</a>)
      ]}
    />
    <ActionContent
      header={<span>Help Save Sand&nbsp;Pond</span>}
      items={[
        (<span>Email us at: <a href="mailto:savesandpond@gmail.com">savesandpond@gmail.com</a></span>),
        (<div>
          <span>Donate:</span>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick"/ >
            <input type="hidden" name="hosted_button_id" value="J5A533UY4WRBE" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
        </div>),
        (<div><span>Join our mailing list:</span><MailingListSignup /></div>)
      ]}
    />
  </FullWidth>
);

export const pageQuery = graphql`
  query HeaderImageQuery {
    headerImage: imageSharp(id: { regex: "/sunset_large_cropped/" }) {
      sizes(maxWidth: 1400) {
        ...GatsbyImageSharpSizes
      }
    }
    wildlifeImage: imageSharp(id: { regex: "/heron/" }) {
      resolutions(height: 400) {
        ...GatsbyImageSharpResolutions
      }
    }
    recreationImage: imageSharp(id: { regex: "/paddle_boat_kids/" }) {
      resolutions(height: 400) {
        ...GatsbyImageSharpResolutions
      }
    }
    storageImage: imageSharp(id: { regex: "/storage_unit_rendering/" }) {
      resolutions(height: 400) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`;

export default IndexPage
