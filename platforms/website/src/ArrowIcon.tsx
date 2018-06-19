import * as React from "react";
import styled from "styled-components";

const UnstyledArrowIcon: React.SFC<{ className?: string }> = ({
  className
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 512"
    className={className}
  >
    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
  </svg>
);

const ArrowIcon = styled(UnstyledArrowIcon)`
  width: 0.5rem;
`;

export default ArrowIcon;
