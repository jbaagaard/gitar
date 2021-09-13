import styled, {css} from "styled-components";

export const overlayOnHover = (amount?: number) => {
    return css`
      &:hover {
        &:after {
          position: absolute;
          display: block;
          content: "";
          background-color: rgba(0, 0, 0, ${amount ? amount : "0.05"});
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
        }
      }

      &:active {
        &:after {
          position: absolute;
          display: block;
          content: "";
          background-color: rgba(0,
          0,
          0,
          ${amount ? Math.min(amount * 2, 1) : "0.1"});
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
        }
      }
    `;
};

export const StyledNote = styled.div<{ visible: boolean, active: boolean, bgc: string }>`
  height: 40px;
  width: 40px;
  border-radius: 40px;
  background-color: ${props => props.visible ? props.bgc : "#fff"};

  border: 2px solid ${props => {
    if (props.visible)
      return "rgba(0,0,0,0)"
    else
      return props.active ? "rgb(100,255,100)" : "#2b2b31"
  }
  };
  text-align: center;
  line-height: 40px;
  z-index: 2;
  user-select: none;
  color: white;
  font-weight: 700;
  position: relative;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }

  ${overlayOnHover()}

`