import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Link from './Link';


describe('Link components', () => {

  it('should render with href attribute', () => {
    const link = ReactDOMServer.renderToStaticMarkup(<Link to="/home" />);
    expect(link).toEqual('<a href="/home"></a>');
  });

  it('should render child component', () => {
  const link = ReactDOMServer.renderToStaticMarkup(<Link to="/home"><span>Click Me</span></Link>);
    expect(link).toEqual('<a href="/home"><span>Click Me</span></a>');
  });

  it('should render with passed className attribute', () => {
    const link = ReactDOMServer.renderToStaticMarkup(<Link to="/home" className="class"/>);
    expect(link).toEqual('<a href="/home" class="class"></a>');
  });

});
