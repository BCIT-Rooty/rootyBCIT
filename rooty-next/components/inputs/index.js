import styled from "styled-components";
import { FlexBox, ImgPlaceholder } from "../../styles/globals";

export const InputRectangle = styled.input`
  background-color: ${props => props.bgColor || "#F7F7FC"};
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  cursor = ${props => props.cursor};
  font-family: 'Plus Jakarta Sans', sans-serif;
`;

const Img = styled.img`
  width: 60px;
  height: 60px;
  margin-left: 20px;
  border-radius: 10px;
`;

const TextArea = styled.textarea`
  background-color: ${(props) => props.bgColor};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  width: ${(props) => props.width || ""};
  min-height: ${(props) => props.minHeight};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  font-family: 'Plus Jakarta Sans', sans-serif;
`;

// function found online to make a div, in this case FlexBox, act to make
function promptFile(multiple) {
  var input = document.createElement("input");
  input.type = "file";
  input.multiple = multiple;
  input.accept = "image/*";
  return new Promise(function (resolve) {
    document.activeElement.onfocus = function () {
      document.activeElement.onfocus = null;
      setTimeout(resolve, 500);
    };
    input.onchange = function () {
      var files = Array.from(input.files);
      if (multiple) return resolve(files);
      resolve(files[0]);
    };
    input.click();
  });
}



// TODO THIS FUNCTION IS FOR THE PRICE INPUT SO THAT ANYTIME A NUMBER IS WRITTEN, IT WILL ALWAYS START WITH THE $ SIGN
// function addHash(elem) {
//   var val = elem.value;
//   if(!val.match(/^#/)) {
//     elem.value = "#" + val;
//   }
// }

export default function Input({
  type = "none",
  fileBgImage = "/camera.png",
  bgColor = "#F7F7FC",
  border = "none",
  borderRadius = "16px",
  width = "90vw",
  height = "40px",
  margin = "0px",
  placeholder = "Enter Text Here",
  padding = "15px",
  value,
  onChangingTheText = () => {},
  onInsertPhotoInsideS3 = () => {},
  cursor="pointer"
}) {

  function promptFilename() {
    promptFile().then(function (file) {
      onInsertPhotoInsideS3(file).then((result) => {
        document.querySelector("img").src = result || "no photo selected";
      });
    });
  }

  return (
    <FlexBox flexWrap="wrap">
      {type === "file" && (
        <FlexBox>
          <FlexBox
            width="70px"
            height="70px"
            onClick={() => promptFilename()}
            color="white"
            borderRadius="10px"
            boxShadow="0px 0px 8px rgba(0, 0, 0, 0.25)"
            cursor={cursor}
          >
            <ImgPlaceholder
              width="30px"
              height="30px"
              bgImage={fileBgImage}
            ></ImgPlaceholder>
          </FlexBox>
          <Img></Img>
        </FlexBox>
      )}

      {type !== "file" && (
        <InputRectangle
          value={value}  
          onChange={(e) => {
            console.log("this is it")
            onChangingTheText(e.target.value);
          }}
          type={type}
          placeholder={placeholder}
          bgColor={bgColor}
          border={border}
          borderRadius={borderRadius}
          width={width}
          height={height}
          margin={margin}
          padding={padding}
        ></InputRectangle>
      )}
    </FlexBox>
  );
}

export function TextInput({
  type = "none",
  bgColor = "#F7F7FC",
  border = "none",
  borderRadius = "16px",
  width = "90vw",
  minHeight = "95px",
  margin = "0px",
  placeholder = "Enter Text Here",
  padding = "15px",
  onChangingTheText = () => {},
}) {
  return (
    <FlexBox flexWrap="wrap">
      {type === "textarea" && (
        <TextArea
          onChange={(e) => {
            onChangingTheText(e.target.value);
          }}
          type={type}
          placeholder={placeholder}
          bgColor={bgColor}
          border={border}
          borderRadius={borderRadius}
          width={width}
          minHeight={minHeight}
          margin={margin}
          padding={padding}
        ></TextArea>
      )}
    </FlexBox>
  );
}
