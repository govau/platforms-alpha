import * as React from "react";
import styled from "styled-components";
import { Box } from "grid-styled";

import { MainLink, SubLink, isSubLink } from "./product-card";
import ArrowIcon from "./ArrowIcon";

// TODO: core stuff to move out

const blue = "#007099";

const Link = styled.a``;

// end core stuff

const MainHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.2rem;
  margin: 0;
  padding: 0;
`;

const SubHeading = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  line-height: 2rem;
  margin: 0;
`;

const Blurb = styled.p`
  margin: 0;
  padding-right: 3rem;
  font-size: 0.85rem;
  line-height: 1rem;
  color: #9d9d9d;
`;

const Wrapper = styled(Box)`
  text-align: left;
  background: #fff;
  border-top: 0.2rem solid ${blue};

  ${Link} {
    text-decoration: none;
    border-bottom: 1px #e0e0e0 solid;
    color: #414141;
    display: block;
    padding: 2rem;
    position: relative;

    ${ArrowIcon} {
      position: absolute;
      right: 2rem;
      top: 40%;
    }

    &:hover {
      text-decoration: none;
      background: #fbfbfb;
      color: ${blue};

      ${ArrowIcon} {
        fill: ${blue};
      }
    }
  }
`;

interface Props {
  links: (MainLink | SubLink)[];
}

const ProductCard: React.SFC<Props> = ({ links }) => (
  <Wrapper>
    {links.map(l => (
      <Link
        key={`${l.heading}${l.href}${isSubLink(l) ? l.blurb : ""}`}
        href={l.href}
      >
        {isSubLink(l) ? (
          <SubHeading>{l.heading}</SubHeading>
        ) : (
          <MainHeading>{l.heading}</MainHeading>
        )}
        {isSubLink(l) && <Blurb>{l.blurb}</Blurb>}
        <ArrowIcon />
      </Link>
    ))}
  </Wrapper>
);

export default ProductCard;
