import React from 'react';
import _ from 'lodash';

import {Link, safePrefix, classNames} from '../utils';

export default class NavCategories extends React.Component {
    render() {
        let site = _.get(this.props, 'site');
        let page = _.get(this.props, 'page');
        return (
            <ul className="store__nav-items">
                {_.map(_.get(this.props, 'pageContext.menus.categories'), (item, item_idx) => {
                    let isCurrentPage = _.get(page, 'frontmatter.title') === _.get(item, 'title');
                    let isActive = isCurrentPage ? true : false;
                    return (<React.Fragment key={item_idx}>
                        <li key={item_idx} className="store__nav-item">
                            <Link to={safePrefix(_.get(item, 'url'))} className={classNames('store__nav-item-link', {'store__nav-item-link--active': isActive})}>
                                {_.get(item, 'title')}
                            </Link>
                        </li>
                    </React.Fragment>)
                })}
            </ul>
        );
    }
}
