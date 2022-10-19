export default function ImageInputS3(props) {



    return (
        <>
          <input
            type="file"
            accept="image/*"
            onInput={(e) => props.onInsertPhotoInsideS3(e)}
          ></input>
        </>
    )
}