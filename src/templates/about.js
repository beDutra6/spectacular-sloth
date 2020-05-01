import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import StaticHeader from '../components/StaticHeader';
import Picture from '../components/Picture';
import {markdownify} from '../utils';
import PromoSection from '../components/PromoSection';

export default class About extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <main className="content about">
              <StaticHeader {...this.props} page={this.props.pageContext} />
              {_.map(_.get(this.props, 'pageContext.frontmatter.bulletpoints'), (bulletpoint, bulletpoint_idx) => (
                <section key={bulletpoint_idx} className="content__row about__section">
                  <Picture {...this.props} image={_.get(bulletpoint, 'image')} alt={_.get(bulletpoint, 'title')} cssClass={'about__section-image'} />
                  <div className="about__section-content-container">
                    <h2 className="about__section-title">{_.get(bulletpoint, 'title')}</h2>
                    <div className="about__section-content">
                      {markdownify(_.get(bulletpoint, 'description'))}
                    </div>
                  </div>
                </section>
              ))}
              <PromoSection {...this.props} site={this.props.pageContext.site} /> 
            </main>
            </Layout>
        );
    }
}
