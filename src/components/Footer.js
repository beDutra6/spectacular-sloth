import React from 'react';
import _ from 'lodash';

import {Link, safePrefix} from '../utils';
import Picture from './Picture';

export default class Footer extends React.Component {
    render() {
        let page = _.get(this.props, 'page');
        let site = _.get(this.props, 'site');
        let menu = _.get(this.props, 'pageContext.menus.main');
        return (
            <footer className="footer">
                <div className="footer__container">
                    <Link to="/">
                        <Picture {...this.props} image={_.get(site, 'siteMetadata.logos.light')} cssClass={'footer__logo'} alt={'Planty logo'} />
                    </Link>
                    <ul className="footer__nav">
                        {_.map(menu, (item, item_idx) => (
                        <li key={item_idx} className="footer__nav-item">
                            <Link to={safePrefix(_.get(item, 'url'))} {...((_.get(item, 'title') === _.get(page, 'frontmatter.title')) ? {className: 'footer__nav-link footer__nav-link--active'} : {className: 'footer__nav-link'})}>
                            {_.get(item, 'title')}
                            </Link>
                        </li>
                        ))}
                    </ul>
                    <div className="footer__legal-notice"> Copyright 2019 Planty Inc. All rights reserved.</div>
                </div>
            </footer>
        );
    }
}
