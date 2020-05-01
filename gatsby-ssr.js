/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react");
const safePrefix = require("./src/utils/safePrefix").default;

exports.onRenderBody = function({ setHeadComponents, setPostBodyComponents }) {

    setHeadComponents([
        
    ]);

    setPostBodyComponents([
        <React.Fragment>
            <script src={safePrefix('js/main.js')}/>
            <script src={_.get(this.props, 'pageContext.site.siteMetadata.snipcart_js')} defer/>
            <div hidden id="snipcart" data-api-key={_.get(this.props, 'pageContext.site.siteMetadata.snipcart_api_key')}>
              <cart-header title="Planty">
                <div className="root">
                  <header className="snipcart-cart-header" vIf="!loading">
                    <close-cart-action className="snipcart-cart-header__close-button snipcart-modal__close">
                      <icon className="snipcart-modal__close-icon snipcart__icon--blue-light" name="back-arrow" />
                      <span className="snipcart-modal__close-title snipcart__font--std">
                        &#123;&#123; $localize('actions.continue_shopping') &#125;&#125;
                      </span>
                    </close-cart-action>
                    <h3 className="snipcart-cart-header__title snipcart__font--black snipcart__font--secondary" vIf="title">
                      <img src={safePrefix(_.get(this.props, 'pageContext.site.siteMetadata.logos.dark.optimized'))} alt=""/>
                    </h3>
                    <div className="snipcart-cart-header__count snipcart__font--secondary snipcart__font--bold">
                      <icon name="cart" className="snipcart-cart-header__icon snipcart__icon--blue-dark" />
                      &#123;&#123; itemsCount &#125;&#125;
                    </div>
                  </header>
                  <header className="snipcart-cart-header" v-else>
                    <close-cart-action className="snipcart-modal__close">
                      <icon className="snipcart-modal__close-icon snipcart__icon--blue-light" name="back-arrow" />
                      <span className="snipcart-modal__close-title snipcart__font--std">
                        &#123;&#123; itemsCount &#125;&#125;
                      </span>
                    </close-cart-action>
                  </header>
                </div>
              </cart-header>
              <checkout section="header">
                <div className="root">
                  <div className="snipcart-layout__header">
                    <header className="snipcart-modal__header snipcart-modal__header--fixed">
                      <close-cart-action className="snipcart-modal__close">
                        <icon name="back-arrow" className="snipcart-modal__close-icon snipcart__icon--blue-light"
                          alt="actions.close_cart" />
                        <span className="snipcart-modal__close-title snipcart__font--std">
                          &#123;&#123; $localize('actions.continue_shopping') &#125;&#125;
                        </span>
                      </close-cart-action>
                      <img src={safePrefix(_.get(this.props, 'pageContext.site.siteMetadata.logos.dark.optimized'))} alt="" className="snipcart-modal__logo"/>
                      <div className="snipcart-modal__header-summary">
                        <div
                          className="snipcart-modal__header-summary-title snipcart__font--large snipcart__font--secondary snipcart__font--bold"clickprevent="showSummary">
                          <icon name="cart" className="snipcart__icon--blue-dark" />
                          <span>
                            &#123;&#123; total | money(cart.currency) &#125;&#125;
                          </span>
                          <media name="mobile, tablet">
                            <icon name="summaryIcon" className="snipcart__icon--blue-dark snipcart__icon--medium" />
                          </media>
                        </div>
                        <cart-summary className="snipcart-cart-summary--small" vIf="summaryVisible"close="closeSummary"></cart-summary>
                      </div>
                    </header>
                  </div>
                </div>
              </checkout>
            </div>
            
        </React.Fragment>
    ]);

};
