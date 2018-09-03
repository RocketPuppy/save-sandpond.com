import React from 'react'
import glamorous from "glamorous";
import styles from "../utils/styles";

const SingleLineInput = glamorous.label({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: styles.spacing.small,
  flexWrap: "wrap"
});

const SmallInput = glamorous.input({
  marginLeft: styles.spacing.small,
  flex: "0 1 auto",
  [styles.mediaQueries.phone]: {
    marginLeft: 0,
  }
});

const SubmitButton = glamorous.button({
  marginBottom: styles.spacing.large,
  maxWidth: "100px",
  alignSelf: "flex-end"
});

const VerticalForm = glamorous.form({
  display: "flex",
  flexDirection: "column",
  paddingRight: styles.spacing.small
});

export default () => (
  <VerticalForm method="POST" action="/mailing-list-signup">
    <SingleLineInput for="name">
      <span>Name:</span><SmallInput tabindex={0} type="text" name="name" />
     </SingleLineInput>
    <SingleLineInput for="email">
      <span>Email (required):</span><SmallInput tabindex={1} type="text" name="email" required/>
    </SingleLineInput>
    <SubmitButton type="submit">Submit</SubmitButton>
  </VerticalForm>
);

//
//export default glamorous.h1(({ centered=false }) => ({
//  fontSize: "68px",
//  fontWeight: "700",
//  textAlign: centered ? "center" : "left",
//  fontFamily: styles.fontFamilies.singleHeader,
//  [styles.mediaQueries.phone]: {
//    fontSize: "36px",
//    margin: 0
//  },
//}));
//