import React from "react"

let totalFeedbackValue = 0;
let positiveFeedbackPercent = 0;

export class FeedbackStatisticks extends React.Component {

  static defaultProps = {
    totalFeedbackValue: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  addGoodFeedback = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1, 
    }))
  }

  addNeutralFeedback = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1
    }))
  }

  addBadFeedback = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1, 
      }
    })
  }

  countTotalFeedback  = () => {
    this.setState((prevState) => {
      totalFeedbackValue = prevState.bad + prevState.good + prevState.neutral
    })
  }

  countPositiveFeedbackPercentage = () => {
    this.setState((prevState) => {
      positiveFeedbackPercent = prevState.good * 100/totalFeedbackValue
    })
  }

  render(){
    return(
    <div>
      <h1>Please leave feedback</h1>

      <div>
        <button type="button" 
        onClick = {() => {
          this.addGoodFeedback();
          this.countTotalFeedback();
          this.countPositiveFeedbackPercentage();
          }}>Good</button>

        <button type="button" 
        onClick = {() => {
          this.addNeutralFeedback(); 
          this.countTotalFeedback();
          this.countPositiveFeedbackPercentage();
          }}>Neutral</button>

        <button type="button" 
        onClick = {() => {
          this.addBadFeedback(); 
          this.countTotalFeedback();
          this.countPositiveFeedbackPercentage();
          }}>Bad</button>
      </div>
      
      <h2>Statistics</h2>
        <p>Good:{this.state.good}</p>
        <p>Neutral:{this.state.neutral}</p>
        <p>Bad:{this.state.bad}</p>
        <p>Total:{totalFeedbackValue}</p>
        <p>Positive feedback:{positiveFeedbackPercent.toFixed()}%</p>
    </div>
    )
  }
}

