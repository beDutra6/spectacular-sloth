import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import {safePrefix} from '../utils';
import Hero from './Hero';
import Header from './Header';
import Footer from './Footer';

export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>
                        {_.get(this.props, 'pageContext.frontmatter.title')}
                    </title>
                    <meta charSet="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initialScale=1.0"/>
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                    <link rel="stylesheet" href={_.get(this.props, 'pageContext.site.siteMetadata.snipcart_css')} />
                    <link rel="stylesheet" href={safePrefix('assets/css/main.css')}/>
                    <link rel="icon" type="image/png" href={safePrefix('images/favicon.png')}/>
                </Helmet>
                    {(_.get(this.props, 'pageContext.base') === 'index.md') ? 
                        <div className="header-wrapper">
                            <div className="header-wrapper__overlay">
                                <Hero {...this.props} page={this.props.pageContext} />
                                <Header {...this.props} page={this.props.pageContext} site={this.props.pageContext.site} />
                            </div>
                        </div>
                     : 
                        <Header {...this.props} page={this.props.pageContext} site={this.props.pageContext.site} />
                    }
                    {this.props.children}
                    <Footer {...this.props} page={this.props.pageContext} site={this.props.pageContext.site} />
            </React.Fragment>
        );
    }
}
