import PageTitle from './PageTitle.jsx';
import Drawing from './Drawing.jsx';

import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <section>
        <header>
          <PageTitle title="Coloreve" />
        </header>
        <article>
          <Drawing />
        </article>
      </section>
    );
  }
}
