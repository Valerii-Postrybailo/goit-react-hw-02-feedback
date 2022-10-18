import React from "react"
import Section from './Section/Section'
import Statistics from './Statisticks/Statistics'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Notification from './Notification/Notification'

let totalFeedbackValue = 0;
let positiveFeedbackPercent = 0;

export class App extends React.Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  options = {
    good: "Good",
    neutral: "Neutral",
    bad: "Bad"
  }

  onLeaveFeedback = {

    addGoodFeedback : () => {
      this.setState((prevState) => ({
        good: prevState.good + 1, 
      }))

      this.countTotalFeedback()
      this.countPositiveFeedbackPercentage()
    },
    
    addNeutralFeedback : () => {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1
      }))

      this.countTotalFeedback()
      this.countPositiveFeedbackPercentage()
    },
    
    addBadFeedback : () => {
      this.setState((prevState) => {
        return {
          bad: prevState.bad + 1, 
      }})
      this.countTotalFeedback()
      this.countPositiveFeedbackPercentage()
    },
  }

  countTotalFeedback = () => {
    this.setState((prevState) => {
      totalFeedbackValue = prevState.bad + prevState.good + prevState.neutral
    })
  }
  
  countPositiveFeedbackPercentage = () => {
    this.setState((prevState) => {
      positiveFeedbackPercent = Number((prevState.good * 100/totalFeedbackValue).toFixed())
    })
  }

  render(){
    return(
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101'
        }}
      >

      <Section title="Please leave feedback">

        <FeedbackOptions 
          options = {this.options}
          onLeaveFeedback = {this.onLeaveFeedback}>
        </FeedbackOptions>

        {totalFeedbackValue < 1 ? (
          <Notification message = "There is no feedback" />
        ) : (
          <Statistics 
            good={this.state.good}
            neutral={this.state.neutral} 
            bad={this.state.bad} 
            total={totalFeedbackValue} 
            positivePercentage={positiveFeedbackPercent}>
          </Statistics>
        )}
      </Section>
    </div>
    )
  }
}
