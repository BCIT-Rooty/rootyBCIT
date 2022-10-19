export default function TextInput(props) {


  return (
    <>
      <label>
        {props.inputTitle}
        <input
          value={props.valueOfTheInput}
          onChange={(e) => props.onChangingTheText(e.target.value)}
          type="text"
        />
      </label>
    </>
  );
}
