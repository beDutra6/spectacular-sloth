import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import StaticHeader from '../components/StaticHeader';
import {markdownify, safePrefix, Link} from '../utils';

export default class Faq extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <main className="content faq">
              <StaticHeader {...this.props} page={this.props.pageContext} />
              {_.map(_.get(this.props, 'pageContext.frontmatter.questions'), (question, question_idx) => (
                <section key={question_idx} className="content__row faq__section">
                  <div className="faq__section-content-container">
                    <h2 className="faq__question">{_.get(question, 'question')}</h2>
                    <div className="faq__answer">
                      {markdownify(_.get(question, 'answer'))}
                    </div>
                  </div>
                </section>
              ))}
              <section className="content__row content__row--bleed faq__contact">
                <img src={safePrefix('images/promo.jpg')} alt="" className="faq__contact-image"/>
                <div className="faq__contact-text-container">
                  <h3 className="faq__contact-title">Still have questions? <br/> Contact us.</h3>
                  <div className="faq__contact-info-container">
                    <p className="faq__contact-address">226 rue St-Joseph E, Québec, QC, Canada, G1K 3A9</p>
                    <p className="faq__contact-telephone">+1-202-555-0112</p>
                    <p className="faq__contact-email">geeks@snipcart.com</p>
                    <div className="faq__seperator" />
                    <Link className="faq__map-link link link--filled link--reversed" to="https://goo.gl/maps/g6za62bN9BHrNTVt5">
                      On the map
                      <svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.25031 0C3.67589 0 0 3.67445 0 8.25031C0 12.8247 8.25031 24 8.25031 24C8.25031 24 16.5006 12.8247 16.5006 8.25031C16.5006 3.67445 12.8247 0 8.25031 0ZM8.25031 11.9993C6.15084 11.9993 4.49991 10.3498 4.49991 8.24888C4.49991 6.1494 6.1494 4.49847 8.25031 4.49847C10.3498 4.49847 12.0007 6.14796 12.0007 8.24888C12.0007 10.3498 10.3498 11.9993 8.25031 11.9993Z" fill="white"/>
                      </svg>            
                    </Link>
                  </div>
                </div>
              </section>
            </main>
            </Layout>
        );
    }
}
