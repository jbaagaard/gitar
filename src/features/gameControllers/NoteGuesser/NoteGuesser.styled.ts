import styled from "styled-components";
import {overlayOnHover, slideInRight} from "../../styled-components";

export const Wrapper = styled.div`
`
export const FretBoardWrapper = styled.div`
  margin: 0 auto;
  width: fit-content;
  margin-top: 32px;
  
`

export const LoadingWrapper = styled.div`
 width: 100%;
  height: 40px;
`

export const ComboMeter = styled.div`
  width: 100%;
  height: 40px;
  background-color: limegreen;
  ${slideInRight(10)}
  
  
`

export const NoteButtonWrapper = styled.div`
  margin-left: 16px;
`
export const NoteButtons = styled.div`
  display: flex;
  margin: 0 auto;
  width: fit-content;
  margin-top: 32px;
`

export const Stats = styled.div`
  display: flex;
  justify-content: center;
`

export const Stat = styled.div`
    &:first-child{
      border-right: 4px solid #2B2B31;
    }
  width: 320px;
`

export const StatsTitle = styled.div`
  font-size: 100px;
  text-align: center;
`

export const StatsText = styled.div`
  font-size: 100px;
  text-align: center;
`