import React from 'react';
import _ from 'lodash';

import Picture from './Picture';
import {Link} from '../utils';

export default class PromoSection extends React.Component {
    render() {
        let promotion = _.get(this.props, 'site.data.promotion');
        return (
            <section className="content__row content__row--bleed">
                <div className="promo">
                    <Picture {...this.props} image={_.get(promotion, 'image')} alt={_.get(promotion, 'title')} />
                    <div className="promo__message-container">
                        <h2 className="promo__title">{_.get(promotion, 'title')}</h2>
                        <p className="promo__subtitle">{_.get(promotion, 'subtitle')}</p>
                        <Link className="link link--light promo__link" to={_.get(promotion, 'cta.link')}>
                            {_.get(promotion, 'cta.text')}
                            <svg width="26" height="14" viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6819 6.07886H0V7.79048H22.8139L18.2402 12.3182L19.434 13.5L26 7L19.434 0.5L18.2402 1.68182L22.6819 6.07886Z" fill="#ffffff"/></svg>
                        </Link>
                    </div>
                </div>
            </section>
        );
    }
}
