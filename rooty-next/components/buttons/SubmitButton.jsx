export default function SubmitButton(props) {



    return (
        <>
        <button onClick={(e) => props.onSubmitButtonClicked(e) } type="submit">{props.textInsideTheButton}</button>
        </>
    )
}