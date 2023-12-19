import { Component } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification'

export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
}

  plusFeedback = (state) => {
  this.setState((prev) => ({
        [state]: prev[state] + 1,
      }));
  };

  countTotalFeedback = () => (
    this.state.good + this.state.neutral + this.state.bad
  );
  countPositiveFeedbackPercentage = () => (
    this.countTotalFeedback() &&
    Math.round(this.state.good * 100
    / this.countTotalFeedback())
    
  );

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback"> 
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.plusFeedback} />
        </Section>
        {
           total ? 
        <Section title="Statistics" >
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage} />
        </Section>
            : 
            <Notification message="There is no feedback"/>
       }

      </>
    )
  };
};
