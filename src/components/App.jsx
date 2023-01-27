import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = {
    good: setGood,
    neutral: setNeutral,
    bad: setBad,
  };

  const onLeaveFeedback = e => {
    const { name } = e.target;
    options[name](prev => prev+1)
    
    // switch (name) {
    //   case 'good':
    //     setGood(good + 1);
    //     break;
    //   case 'neutral':
    //     setNeutral(neutral + 1);
    //     break;
    //   case 'bad':
    //     setBad(bad + 1);
    //     break;

    //   default:
    //     return;
    // }
  };
  // useEffect(() => {
  //   console.log('Mouting phase: same when componentDidMount runs');
  // }, [bad, good]);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };
  // console.log(countTotalFeedback());
  // console.log(countPositiveFeedbackPercentage());

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions options={Object.keys(options)} onLeaveFeedback={onLeaveFeedback} />
      {good > 0 && (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      )}
    </Section>
  );
};

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLiveFeedback = e => {
//     const { name } = e.target;
//     this.setState(
//       prevState => ({ [name]: prevState[name] + 1 }),
//       this.countTotalFeedback
//     );
//   };

//   countTotalFeedback = () => {
//     this.setState(
//       () => ({
//         total: this.state.neutral + this.state.good + this.state.bad,
//       }),
//       this.countPositiveFeedbackPercentage
//     );
//   };

//   countPositiveFeedbackPercentage = () => {
//     this.setState(() => ({
//       percentage: Math.round((this.state.good / this.state.total) * 100),
//     }));
//   };

//   render() {
//     const { good, neutral, bad, total, percentage } = this.state;
//     return (
//       <Section title="Please leave feedback">
//         <FeedbackOptions
//           options={Object.keys(this.state)}
//           onLeaveFeedback={this.onLiveFeedback}
//         />
//         {this.state.total ? (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={total}
//             positivePercentage={percentage}
//           />
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </Section>
//     );
//   }
// }
