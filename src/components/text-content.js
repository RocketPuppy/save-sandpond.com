import React from 'react'
import glamorous from "glamorous";
import styles from "../utils/styles";

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
  flex: "0 0 auto"
});

const FlexRow = glamorous.div(({ alignment }) => ({
  display: "flex",
  flexDirection: flexDirection[alignment],
  flexWrap: "wrap",
  justifyContent: "center"
}));

export default ({ alignment, image, children }) =>
  <FlexRow alignment={alignment}>
    <Paragraph>
      {children}
    </Paragraph>
    <Image>
      {image}
    </Image>
  </FlexRow>
