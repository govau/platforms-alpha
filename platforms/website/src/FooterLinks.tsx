import * as React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  > li {
    margin: 1rem 1rem 0 0;
    > a {
      color: inherit;
      text-decoration-color: inherit;
      &:hover {
        color: inherit;
        text-decoration-color: inherit;
      }
    }
  }
`;

interface Props {}

const FooterLinks: React.StatelessComponent<Props> = ({ children }) => (
  <Ul>{children}</Ul>
);

export default FooterLinks;
