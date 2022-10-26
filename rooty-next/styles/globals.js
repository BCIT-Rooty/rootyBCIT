import styled from 'styled-components'

export const FlexBox = styled.div`
    display:flex;
    justify-content:${props=>props.justifyContent || "center"};
    align-items:${props=>props.alignItems || "center"};
    flex-direction:${props=>props.dir || "row"};
    flex-wrap: ${props=>props.flexWrap};
    width: ${props=>props.width};
    height: ${props=>props.height};
    background-color: ${props=>props.bgColor};
    padding: ${props=>props.padding};
    margin: ${props=>props.margin || "0px"};
    min-height: ${props=>props.minHeight};
    background-image: ${props=>props.linearGradient || "none"}, url(${props=>props.bgImage});
    background-position: ${props=>props.bgPosition || "center"};
    background-size: ${props=>props.bgSize || "cover"};
    border-radius:${props=>props.borderRadius};
    filter: ${props=>props.filter};
    border: ${props=>props.border};
    z-index:${props=>props.zIndex};
    position: ${props=>props.position};
    top: ${props=>props.top};
    left:${props=>props.left};
    border-bottom-style: ${props=>props.borderBottom};
    box-shadow: ${props=>props.boxShadow};
    border-top: ${props=>props.topBorder};
    color: ${props=>props.color};
    font-weight: ${props=>props.fontWeight};
    cursor: ${props=>props.cursor}
`

export const Wrapper = styled(FlexBox) `
    width: 100vw;
    height: ${props=>props.height || "100vh"};
    padding:0px 0px 55px 0px;
    overflow-x: hidden;
    overflow-y: hidden
`

export const HorizontalScrollContainer = styled(FlexBox)`
    overflow-y: scroll;
    width: 100vw;
    scrollbar-width: none;
`

export const ImgPlaceholder = styled.div`
    width: ${props=>props.width || "134px"};
    height: ${props=>props.height || "154px"};
    border-radius: ${props=>props.borderRadius || "8px 0px 0px 8px"};
    background-image: url(${props=>props.bgImage});
    margin: ${props=>props.margin};
    background-position: center;
    background-size: cover;
`