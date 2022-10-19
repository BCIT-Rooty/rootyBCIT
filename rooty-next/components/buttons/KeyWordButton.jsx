export default function KeywordButton(props) {
  return (
    <>
      <h3>Choose keyword</h3>
      {props.keyWords.map((m) => (
        <button key={`${m} keyword`} onClick={(e) => props.onAddTagsToThePost(e, m)}>
          {m}
        </button>
      ))}
    </>
  );
}
