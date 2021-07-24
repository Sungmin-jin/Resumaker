import React from "react";
import styled from "styled-components";

interface StyledCheckBox {
  checked: boolean;
}

interface CustomCheckbox {
  className?: string;
  name: string;
  checked: boolean;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement> & React.ChangeEvent<HTMLTextAreaElement>
  ) => void | undefined;
}

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${(props: StyledCheckBox) => (props.checked ? "salmon" : "white")};
  border: 1px solid #f19a34;
  transition: all 150ms;
  cursor: pointer;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${(props: StyledCheckBox) => (props.checked ? "visible" : "hidden")};
  }
`;

const CustomCheckbox = ({ className, checked, ...props }: CustomCheckbox) => (
  <CheckboxContainer className={className!}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

export default CustomCheckbox;
