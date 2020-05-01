import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import NavCategories from '../components/NavCategories';
import {getPages} from '../utils';
import ProductGrid from '../components/ProductGrid';
import FeaturedProducts from '../components/FeaturedProducts';
import PromoSection from '../components/PromoSection';

export default class Category extends React.Component {
    render() {
        let category_product_pages = _.orderBy(_.filter(getPages(this.props.pageContext.pages, '/products'), ['frontmatter.category', _.get(this.props, 'pageContext.frontmatter.slug')]), 'frontmatter.name');
        let featured_product_pages = _.filter(getPages(this.props.pageContext.pages, '/products'), ['frontmatter.featured', true]);
        return (
            <Layout {...this.props}>
            <main className="content store">
                    <div className="content__row content__row--direction-row store__head">
                        <h1 className="store__title">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                    </div>
                    <div className="content__row store__container">
                        <nav className="store__nav">
                            <NavCategories {...this.props} page={this.props.pageContext} site={this.props.pageContext.site} />
                        </nav>
                        <section className="store__products">
                            <ProductGrid {...this.props} product_pages={category_product_pages} cssClass={'store__product-grid'} />
                        </section>
                    </div>
                    <section className="content__row">
                        <h2 className="content__row-title content__row-title--medium">
                            <svg width="29" height="25" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.152 3.4188C27.2129 1.75821 21.3251 -3.80243 14.4999 4.24829C7.33226 -3.80243 1.78532 1.75821 0.847792 3.4188C-0.859337 6.48936 0.164613 11.138 2.55492 13.3791L14.5015 25L26.4482 13.3791C28.8352 11.138 29.8592 6.49096 28.1521 3.4188H28.152Z" fill="#FDFDFD"/>
                            </svg>                    
                            Best Sellers
                        </h2>
                        <FeaturedProducts {...this.props} product_pages={featured_product_pages} />
                    </section>
                    <PromoSection {...this.props} site={this.props.pageContext.site} />
                </main>
            </Layout>
        );
    }
}
