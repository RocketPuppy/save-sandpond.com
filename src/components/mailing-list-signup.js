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
  maxWidth: "120px",
  alignSelf: "flex-end"
});

const VerticalForm = glamorous.form({
  display: "flex",
  flexDirection: "column",
  paddingRight: styles.spacing.small
});

const Feedback = glamorous.p({
  paddingLeft: styles.spacing.small,
  cursor: 'pointer',
  position: "relative",
  "&:hover": {
    border: "solid 1px grey",
    "&::after": {
      color: "black"
    }
  },
  "&:active": {
    border: "solid 1px black",
    "&::after": {
      color: "black"
    }
  },
  "&::after": {
    content: "\\D7",
    color: "grey",
    position: "absolute",
    right: styles.spacing.small,
    top: styles.spacing.small,
    fontFamily: "sans-serif",
    fontSize: "24px",
    lineHeight: "10px"
  }
},
  ({ success }) => (success ? {
    border: `solid 1px ${styles.colors.green}`,
    background: styles.colors.green
  } : {}),
  ({ error }) => (error ? {
    border: `solid 1px ${styles.colors.orange}`,
    background: styles.colors.orange
  } : {})
);

export default class MailingListForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      error: null,
      feedback: null,
      submitting: false
    };
  }

  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  onSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    const data = new FormData(e.target);
    if(!this.state.email || !this.state.email.trim()) {
      this.setState({ error: "Email is required." });
      return;
    }

    data.append("name", this.state.name.trim());
    data.append("email", this.state.email.trim());
    xhr.onreadystatechange = () => {
      if(xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 400) {
        this.setState({ feedback: "Signup successful!", error: null });
      } else if(xhr.readyState === 4 && xhr.status >= 400 && xhr.status < 500) {
        this.setState({ error: "Could not signup. Please enter a valid email and try again later.", feedback: null });
      } else if(xhr.readyState === 4) {
        this.setState({ error: "An error occurred. Please try again later.", feedback: null });
      }
    };
    this.setState({ submitting: true });
    xhr.open("POST", process.env.GATSBY_MAILING_LIST_SIGNUP_ENDPOINT);
    xhr.send(data);
    return false;
  };

  onCloseFeedback = () => {
    this.setState({ error: null, feedback: null, submitting: false });
  };

  render() {
    return (
      <VerticalForm onSubmit={this.onSubmit} method="POST" action={process.env.GATSBY_MAILING_LIST_SIGNUP_ENDPOINT}>
        {this.state.feedback && <Feedback onClick={this.onCloseFeedback} success>{this.state.feedback}</Feedback>}
        {this.state.error && <Feedback onClick={this.onCloseFeedback} error>{this.state.error}</Feedback>}
        {!this.state.feedback &&
          <SingleLineInput for="name">
            <span>Name:</span><SmallInput onChange={this.onChangeName} value={this.state.name} tabindex={0} type="text" name="name" />
          </SingleLineInput>
        }
        {!this.state.feedback &&
          <SingleLineInput for="email">
            <span>Email (required):</span><SmallInput onChange={this.onChangeEmail} value={this.state.email} tabindex={1} type="text" name="email" required />
          </SingleLineInput>
        }
        {!this.state.feedback && !this.state.submitting &&
          <SubmitButton type="submit">Submit</SubmitButton>
        }
      </VerticalForm>
    );
  }
}
