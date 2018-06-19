import * as React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import styled, { css } from "styled-components";

const theme = {
  linkColor: "#007099"
};

const a = css`
  color: ${theme.linkColor};
  text-decoration-color: ${theme.linkColor};
  text-decoration-skip: ink;
  transition: color 0.35s ease-in-out, background-color 0.35s ease-in-out,
    text-decoration-color 0.35s ease-in-out;
  &:hover {
    text-decoration: none;
    text-decoration-color: rgba(255, 255, 255, 0);
  }
`;

const Link = styled(ReactRouterLink)`
  ${a};
`;

export default Link;

const StyledExternalLink = styled.a`
  ${a};
`;

interface ExternalLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const UnstyledExternalLink: React.StatelessComponent<
  ExternalLinkProps
> = props => <StyledExternalLink {...props} />;

export const ExternalLink = styled(UnstyledExternalLink)``;
