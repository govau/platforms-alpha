import * as React from "react";
import styled from "styled-components";

const StyledP = styled.p``;

const P: React.StatelessComponent<{}> = props => <StyledP {...props} />;

export default P;
