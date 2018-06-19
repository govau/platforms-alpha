import * as React from "react";
import styled from "styled-components";
import { util } from "styled-system";
import { Box, Flex } from "grid-styled";

import Container from "./Container";
import Link from "./Link";
import * as coaLogo from "./coa.svg";

const theme = {
  header: {
    bgColor: "#313131"
  }
};

const COALogo = styled.img`
  height: 2.5rem;

  ${util.breaks()[1]} {
    height: 4.5rem;
  }
`;

const StyledHeader = styled.header`
  background-color: ${theme.header.bgColor};
  padding: 1.25rem 0;

  a {
    text-decoration: none;
  }
`;

const Title = styled.h1`
  display: inline-block;
  margin: 0 0 0 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;

  ${util.breaks()[1]} {
    font-size: 2.25rem;
  }
`;

interface Props {}

const Header: React.StatelessComponent<Props> = props => (
  <StyledHeader {...props}>
    <Container>
      <Box px={[3, 3, 3, 0]}>
        <Link to="/">
          <Flex alignItems="center">
            <Box>
              <COALogo src={coaLogo} alt="" />
            </Box>
            <Box>
              <Title>Platforms.gov.au</Title>
            </Box>
          </Flex>
        </Link>
      </Box>
    </Container>
  </StyledHeader>
);

export default Header;
