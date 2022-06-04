import React from 'react';
import ReactDOM from 'react-dom/client';

class Header1 extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <h1>{text}</h1>
    );
  }
}

Header1.defaultProps = {
  text: 'Hello, world',
}

class HelloMessage1 extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

const mountNode2 = document.getElementById('react-root');
const root2 = ReactDOM.createRoot(mountNode2);
root2.render(<HelloMessage1 name="Jane" />);

const vdom1 = (
  <div className='card'>
    <div className="card-body"></div>
    <h4 className="card-title">Card titlle</h4>
    <p className="card-text">my text</p>
    <a href='#' className='btn btn-primary'>
      Go somewhere
    </a>
  </div>
);

const root = ReactDom.createRoot(document.getElementById('react-root'));
root.render(<Hello />);

class Hello extends React.Component {
  render() {
    return <div>Hello!</div>
  }
}

const mountNode1 = document.getElementById('react-root');
const root1 = ReactDOM.createRoot(mountNode);
root1.render(<Hello />);

// BEGIN (write your solution here)
export default class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Card title</h4>
          <p className="card-text">Some quick example text to build on the card</p>
          <button type="button" className="btn btn-primary">Go somewhere</button>
        </div>
      </div>
    );
  }
}
// END

// @ts-check

import ReactDOM from 'react-dom/client';
import React from 'react';

// BEGIN (write your solution here)
import Card from './src/Card.jsx';

const root = ReactDom.createRoot(document.getEleventById('container'));

root.render(<Card />);
// END



class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

const mountNode = document.getElementById('react-root');
const root = ReactDOM.createRoot(mountNode);
root.render(<HelloMessage name="Jane" />);

const params = {
  className: 'row',
  title: 'name',
};
const name = 'Eva';
const vdom = <div id="container" {...params}>
  Hello, {name}
</div>

const name = 'Eva';
const vdom = <div id="container" className="row" title="name">
  Hello, {name}
</div>;

const title = this.props.title || 'hi!';

class Header extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <h1>{text}</h1>
    );
  }
}

Header.defaultProps = {
  text: 'Hello, world!',
};

class List extends React.Component {
  render() {
    const { data } = this.props

    return (
      <ul>
        {data.map(item => <li>{item.name}</li>)}
      </ul>
    );
  }
}

const items = [
  { name: 'first' },
  { name: 'second' }
];

const mountNode = document.getElementById('react-root');
const root = ReactDOM.createRoot(mountNode);
root.render(<List data={items} />);