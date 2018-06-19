import * as React from "react";
import createBrowserHistory from "history/createBrowserHistory";
import { Router } from "react-router";
import styled from "styled-components";
import { Box, Flex } from "grid-styled";

import Container from "./Container";
import Header from "./Header";
import Footer from "./Footer";
import ProductCard from "./ProductCard";

const history = createBrowserHistory();

const Wrapper = styled.div`
  background-color: #f7f7f7;
`;

const Products = styled(Flex)``;

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Wrapper>
          <Header />
          <Container>
            <Products flexWrap="wrap" pt={[4]} pb={[4]}>
              <Box w={[1, 1, 1 / 3]} pt={[3, 2]} pb={[3, 2]} px={[3, 2]}>
                <ProductCard
                  links={[
                    {
                      href: "https://identity-website.apps.y.cld.gov.au/",
                      heading: "Identity"
                    },
                    {
                      href: "https://identity-website.apps.y.cld.gov.au/",
                      heading: "Exchange",
                      blurb:
                        "Convey, manage and coordinate the flow of identity attributes, claims and assertions"
                    },
                    {
                      href: "https://identity-website.apps.y.cld.gov.au/",
                      heading: "myGovID",
                      blurb: "The Commonwealth identity provider"
                    }
                  ]}
                />
              </Box>
              <Box w={[1, 1, 1 / 3]} pt={[3, 2]} pb={[3, 2]} px={[3, 2]}>
                <ProductCard
                  links={[
                    {
                      href: "https://message-website.apps.y.cld.gov.au/",
                      heading: "Message"
                    },
                    {
                      href: "https://message-website.apps.y.cld.gov.au/",
                      heading: "Message",
                      blurb: "Communicate with people via myGov"
                    },
                    {
                      href: "https://notify-website.apps.y.cld.gov.au/",
                      heading: "Notify",
                      blurb: "Inform people via text message and email"
                    }
                  ]}
                />
              </Box>
              <Box w={[1, 1, 1 / 3]} pt={[3, 2]} pb={[3, 2]} px={[3, 2]}>
                <ProductCard
                  links={[
                    {
                      href: "https://tell-website.apps.y.cld.gov.au/",
                      heading: "Tell"
                    },
                    {
                      href: "https://tell-website.apps.y.cld.gov.au/",
                      heading: "Profile information",
                      blurb:
                        "Keep your client databases synchronised with people’s information"
                    },
                    {
                      href: "https://tell-website.apps.y.cld.gov.au/",
                      heading: "Notification of death",
                      blurb:
                        "Integrate notifications of deaths into your business processes"
                    }
                  ]}
                />
              </Box>
              <Box w={[1, 1, 1 / 3]} pt={[3, 2]} pb={[3, 2]} px={[3, 2]}>
                <ProductCard
                  links={[
                    {
                      href: "https://todo/",
                      heading: "Marketplace"
                    },
                    {
                      href: "https://todo/",
                      heading: "Digital Marketplace",
                      blurb:
                        "Integrate your HR platforms with our Digital Marketplace services"
                    }
                  ]}
                />
              </Box>
              <Box w={[1, 1, 1 / 3]} pt={[3, 2]} pb={[3, 2]} px={[3, 2]}>
                <ProductCard
                  links={[
                    {
                      href: "https://todo/",
                      heading: "Open data"
                    },
                    {
                      href: "https://todo/",
                      heading: "Dashboards",
                      blurb:
                        "Give visibility to your services by building public dashboards"
                    },
                    {
                      href: "https://todo/",
                      heading: "Data.gov.au",
                      blurb: "An easy way to find, access and reuse public data"
                    }
                  ]}
                />
              </Box>
              <Box w={[1, 1, 1 / 3]} pt={[3, 2]} pb={[3, 2]} px={[3, 2]}>
                <ProductCard
                  links={[
                    {
                      href: "https://cloud.gov.au/",
                      heading: "Cloud"
                    },
                    {
                      href: "https://cloud.gov.au/",
                      heading: "Cloud.gov.au",
                      blurb: "PaaS for apps and backends"
                    }
                  ]}
                />
              </Box>
            </Products>
          </Container>
          <Footer />
        </Wrapper>
      </Router>
    );
  }
}

export default App;
