import React from 'react';
import _ from 'lodash';

import {markdownify} from '../utils';

export default class StaticHeader extends React.Component {
    render() {
        let page = _.get(this.props, 'page');
        return (
            <section className="content__row content__row--bleed static-header__header">
              <h1 className="static-header__title content__row">{_.get(page, 'frontmatter.headline')}</h1>
              <div className="content__row static-header__content">
                {markdownify(_.get(page, 'frontmatter.introduction'))}
              </div>
            </section>
        );
    }
}
