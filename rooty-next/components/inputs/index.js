import styled from "styled-components";
import { FlexBox, ImgPlaceholder } from "../../styles/globals";

export const InputRectangle = styled.input`
  background-color: ${(props) => props.bgColor || "#F7F7FC"};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;

const Img = styled.img`
  width: 60px;
  height: 60px;
  margin-left: 20px;
  border-radius: 10px;
`;

const Label = styled.label``;

const TextArea = styled.textarea`
  background-color: ${(props) => props.bgColor};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  width: ${(props) => props.width || ""};
  min-height: ${(props) => props.minHeight};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
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

export default function Input({
  type = "none",
  fileBgImage = "/camera.png",
  bgColor = "#F7F7FC",
  border = "none",
  borderRadius = "10px",
  width = "350px",
  height = "35px",
  margin = "0px",
  placeholder = "Enter Text Here",
  padding = "10px",
  onChangingTheText = () => {},
  onInsertPhotoInsideS3 = () => {},
  onKeywordClick = () => {},
}) {
  function promptFilename() {
    promptFile().then(function (file) {
      // console.log(file)
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
          onChange={(e) => onChangingTheText(e.target.value)}
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
  fileBgImage = "/camera.png",
  bgColor = "#F7F7FC",
  border = "none",
  borderRadius = "10px",
  width = "350px",
  minHeight = "95px",
  margin = "0px",
  placeholder = "Enter Text Here",
  padding = "10px",
  onChangingTheText = () => {},
}) {
  return (
    <FlexBox flexWrap="wrap">
      {type === "textarea" && (
        <TextArea
          onChange={(e) => onChangingTheText(e.target.value)}
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
