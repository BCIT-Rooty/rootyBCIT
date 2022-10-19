export default function TextInput(props) {

  function aNewFunction(input) {
    console.log("This is the Title sohrab is writing::::::::>", input)
    props.onChangingTheText(input)
  }


  return (
    <>
      <label>
        {props.inputTitle}
        <input
          value={props.valueOfTheInput}
          onChange={(e) => aNewFunction(e.target.value)}
          type="text"
        />
      </label>
    </>
  );
}
