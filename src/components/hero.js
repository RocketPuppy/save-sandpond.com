import React from 'react'
import glamorous from "glamorous";
import styles from "../utils/styles";
import Img from "gatsby-image";
import Title from "../components/title";

const FloatingText = glamorous.div(({ color, outlineColor }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  color: color,
  margin: styles.spacing.large,
  textShadow: `${outlineColor} 0px 0px 5px, ${outlineColor} 0px 0px 5px, ${outlineColor} 0px 0px 5px, ${outlineColor} 0px 0px 5px`,
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  justifyContent: "center",
}));

const Container = glamorous.div({
  width: "100%",
  alignSelf: "flex-start",
  marginBottom: styles.spacing.large,
  [styles.mediaQueries.phone]: {
    marginBottom: styles.spacing.small
  }
});

export default ({ image, textColor, textOutlineColor, text }) => (
  <Container>
    <Img {...image}/>
    <FloatingText color={textColor} outlineColor={textOutlineColor}>
      <Title centered>{text}</Title>
    </FloatingText>
  </Container>
);
