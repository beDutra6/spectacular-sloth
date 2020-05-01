import React from 'react';
import _ from 'lodash';

import {safePrefix} from '../utils';

export default class Picture extends React.Component {
    render() {
        let image = _.get(this.props, 'image');
        let alt = _.get(this.props, 'alt');
        let cssClass = _.get(this.props, 'cssClass');
        return (
            <picture>
              <source srcSet={safePrefix(_.get(image, 'optimized'))} type="image/webp"/>
              <source srcSet={safePrefix(_.get(image, 'fallback'))} type="image/jpeg"/> 
              <img src={safePrefix(_.get(image, 'fallback'))} {...(alt ? {alt: alt} : null)}  {...(cssClass ? {className: cssClass} : null)}/>
            </picture>
        );
    }
}
