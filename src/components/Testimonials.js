import React from 'react';
import _ from 'lodash';

import {safePrefix} from '../utils';

export default class Testimonials extends React.Component {
    render() {
        let testimonials = _.get(this.props, 'testimonials');
        return (
            <div className="quotes">
                {_.map(testimonials, (testimonial, testimonial_idx) => (<React.Fragment key={testimonial_idx}>
                    <div key={testimonial_idx} className="quotes__item">
                        <img src={safePrefix('images/quotes.svg')} alt="quotation mark icon" className="quotes__icon"/>
                        <div className="quotes__text">{_.get(testimonial, 'text')}</div>
                        <div className="quotes__author">{_.get(testimonial, 'author.name')}<span className="quotes__location">, {_.get(testimonial, 'author.location')}</span></div>
                    </div>
                    <div key={testimonial_idx} className="quotes__separator" />
                </React.Fragment>))}
            </div>
        );
    }
}
