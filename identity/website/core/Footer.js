const React = require("react");

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + "docs/" + (language ? language + "/" : "") + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + "/" : "") + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div>
            <img
              src={`${this.props.config.baseUrl}img/coa.svg`}
              alt="The Australian Government Coat of Arms"
            />
          </div>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl("overview.html", this.props.language)}>
              Getting started
            </a>
            <a href={this.docUrl("installation.html", this.props.language)}>
              Installation
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href={this.props.config.baseUrl + "blog"}>Blog</a>
            <a href="https://github.com/govau/platforms-alpha">GitHub</a>
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
