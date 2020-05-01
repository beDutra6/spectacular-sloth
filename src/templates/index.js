import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {getPages} from '../utils';
import FeaturedProducts from '../components/FeaturedProducts';
import ProductGrid from '../components/ProductGrid';
import Testimonials from '../components/Testimonials';
import PromoSection from '../components/PromoSection';

export default class Index extends React.Component {
    render() {
        let featured_product_pages = _.filter(getPages(this.props.pageContext.pages, '/products'), ['frontmatter.featured', true]);
        let category_pages = _.orderBy(getPages(this.props.pageContext.pages, '/category'), 'frontmatter.name');
        let categoryIndex = 0;
        return (
            <Layout {...this.props}>
            <main className="content">
                <section className="content__row content__row--overlap">
                    <h2 className="content__row-title content__row-title--light">
                        <svg width="29" height="25" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.152 3.4188C27.2129 1.75821 21.3251 -3.80243 14.4999 4.24829C7.33226 -3.80243 1.78532 1.75821 0.847792 3.4188C-0.859337 6.48936 0.164613 11.138 2.55492 13.3791L14.5015 25L26.4482 13.3791C28.8352 11.138 29.8592 6.49096 28.1521 3.4188H28.152Z" fill="#FDFDFD"/>
                        </svg>
                        Best sellers
                    </h2>
                    <FeaturedProducts {...this.props} product_pages={featured_product_pages} />
                </section>
                <section className="content__row">
                    {_.map(category_pages, (category_page, category_page_idx) => {
                        let categoryIndex = categoryIndex + 1;
                        let category_product_pages = _.orderBy(_.filter(getPages(this.props.pageContext.pages, '/products'), ['frontmatter.category', _.get(category_page, 'frontmatter.slug')]), 'frontmatter.title');
                        let count = _.size(category_product_pages);
                        return (
                            (categoryIndex < 3) && 
                                (count > 0) && <React.Fragment key={category_page_idx}>
                                    <h2 key={category_page_idx} className="content__row-title">{_.get(category_page, 'frontmatter.title')}</h2>
                                    <ProductGrid key={category_page_idx} {...this.props} product_pages={category_product_pages} cssClass={'product-grid--draggable'} />
                                </React.Fragment>
                        )
                    })}
                </section>
                <section className="content__row">
                    <h2 className="content__row-title">Testimonials</h2>
                    <Testimonials {...this.props} testimonials={_.get(this.props, 'pageContext.site.data.testimonials.data')} />
                </section>
                <PromoSection {...this.props} site={this.props.pageContext.site} />
            </main>
            </Layout>
        );
    }
}
