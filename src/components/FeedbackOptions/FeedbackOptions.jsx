export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      {options.map(( name ) => (
        <button onClick={onLeaveFeedback} name={name} key={name}>
          {name[0].toUpperCase()+name.slice(1)}
        </button>
      ))}
      {/* <button onClick={onLeaveFeedback} name={options[0]}>
        Good
      </button>
      <button onClick={onLeaveFeedback} name={options[1]}>
        Neutral
      </button>
      <button onClick={onLeaveFeedback} name={options[2]}>
        Bad
      </button> */}
    </>
  );
};
