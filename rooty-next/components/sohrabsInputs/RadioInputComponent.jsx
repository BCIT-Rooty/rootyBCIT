export default function RadioInputComponent(props) {
  return (
    <>
      {props.radioInputTopicArray.map((m) => (
       
          <label key={m} htmlFor={m}>
            {m}
            <input
              name={props.radioInputTopic}
              id={m}
              type="radio"
              value={m}
              onClick={(e) => props.radioFunctionInput(e.target.value)}
            />
          </label>
      
      ))}
    </>
  );
}
