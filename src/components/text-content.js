import React from 'react'
import glamorous from "glamorous";
import styles from "../utils/styles";
import Img from "gatsby-image";

const margins = {
  left: `0 ${styles.spacing.medium} 0 0`,
  right: `0 0 0 ${styles.spacing.medium}`
};

const flexDirection = {
  left: "row",
  right: "row-reverse"
};

const Paragraph = glamorous.p({
  maxWidth: styles.layout.contentWidth,
  textAlign: "justify",
  flex: "2 1 50%"
});

const Image = glamorous.div({
  marginLeft: styles.spacing.medium,
  marginRight: styles.spacing.medium,
  flex: "0 0 auto",
  [styles.mediaQueries.phone]: {
    "& .image": {
      width: "300px !important",
      height: "300px !important",
    }
  }
});

const FlexRow = glamorous.div(({ alignment }) => ({
  display: "flex",
  flexDirection: flexDirection[alignment],
  flexWrap: "wrap",
  justifyContent: "center"
}));

export default ({ alignment, image, text }) =>
  <FlexRow alignment={alignment}>
    <Paragraph>
      {text}
    </Paragraph>
    <Image>
      <Img {...image} className="image"/>
    </Image>
  </FlexRow>
