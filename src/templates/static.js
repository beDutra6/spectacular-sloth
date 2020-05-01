import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {htmlToReact} from '../utils';

export default class Static extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                <main className="content">
                    {htmlToReact(_.get(this.props, 'pageContext.html'))}
                </main>
            </Layout>
        );
    }
}
