import * as React from "react";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";

import Link from "./Link";
import Container from "./Container";
import P from "./P";
import FooterLinks from "./FooterLinks";
import * as coaLogo from "./coa.svg";

const theme = {
  footer: {
    color: "#ffffff",
    bgColor: "#333333",
    copyrightColor: "#bdbdbd"
  }
};

const COALogo = styled.img`
  height: 5rem;
`;

const StyledFooter = styled.footer`
  margin-top: 3rem;
  padding: 1.25rem 0;
  background-color: ${theme.footer.bgColor};
  color: ${theme.footer.color};
`;

const Copyright = styled(P)`
  margin-top: 2rem;
  padding-top: 1rem;
  color: ${theme.footer.copyrightColor};
  border-top: 1px solid #666666;
`;

interface Props {}

const Footer: React.StatelessComponent<Props> = props => (
  <StyledFooter {...props}>
    <Container>
      <Flex flexWrap="wrap" pt={3} pb={3} px={[3, 3, 3, 0]} align="center">
        <Box w={[1, 1 / 4]}>
          <Flex flexWrap="wrap" pt={3} pb={2} align="center">
            <Box>
              <COALogo
                src={coaLogo}
                alt="The Australian Government Coat of Arms"
              />
            </Box>
          </Flex>
        </Box>
        <Box w={[1, 3 / 4]}>
          <Flex flexWrap="wrap" align="center">
            <Box w={[1 / 2]}>
              <FooterLinks>
                <li>
                  <Link to="/about/">About Platforms.gov.au</Link>
                </li>
                <li>
                  <Link to="/contact/">Contact us</Link>
                </li>
                <li>
                  <Link to="/terms/">Terms of use</Link>
                </li>
                <li>
                  <Link to="/privacy/">Privacy</Link>
                </li>
              </FooterLinks>
            </Box>
            <Box w={[1 / 2]}>
              <FooterLinks>
                <li>
                  <Link to="/copyright/">Copyright</Link>
                </li>
                <li>
                  <Link to="/security/">Security</Link>
                </li>
                <li>
                  <Link to="/accessibility/">Accessibility</Link>
                </li>
                <li>
                  <Link to="/help/">Help</Link>
                </li>
              </FooterLinks>
            </Box>
          </Flex>
          <Copyright>
            © Commonwealth of Australia. With the exception of the Commonwealth
            Coat of Arms and where otherwise noted, this work is licensed under
            the CC BY 4.0 license.
          </Copyright>
        </Box>
      </Flex>
    </Container>
  </StyledFooter>
);

export default Footer;
