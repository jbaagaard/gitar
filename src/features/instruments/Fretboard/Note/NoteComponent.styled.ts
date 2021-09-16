import styled from "styled-components";
import {overlayOnHover, StyledNote} from "../../../styled-components";

export const Wrapper = styled.div<{ firstNode: boolean }>`
  height: 50px;
  width: 100px;
  position: relative;
  border-right: ${props => props.firstNode ? "4px #2b2b31" : "2px darkgray"} solid;
  display: grid;
  place-content: center;
`

export const MiddleLine = styled.div`
  position: absolute;
  top: 50%;
  width: calc(100% + 2px);
  border-bottom: 2px solid #2b2b31;
`

export const Note = styled(StyledNote)`
`