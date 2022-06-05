import React from 'react';
import ReactDOM from 'react-dom/client';

class TestComp1 extends React.Component {
  render() {
    const CustomClass = {
      width: '14px',
      display: 'inline-block',
    }

    return (
      <div className="CustomClass">
        <ul style={{ position: 'relative' }}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    )
  }
}

const root3 = ReactDOM.createRoot(document.getElementById('react-root'));
root.render(<Hello />);

class DefinitionsList1 extends React.Component {
  render() {
    const { data } = this.props;

    if (data.length === 0) {
      return null;
    }

    const tags = data.map(({ dt, dd, id }) => (
      <React.Fragment key={id}>
        <dt>{dt}</dt>
        <dd>{dd}</dd>
      </React.Fragment>
    ));

    return (
      <dl>
        {tags}
      </dl>
    );
  }
}

class Section extends React.Component {
  render() {
    const { header, body } = this.props;

    return (
      <React.Fragment>
        <h2>{header}</h2>
        <div className="">{body}</div>
      </React.Fragment>
    )
  }
}

class TestComp extends React.Component {
  render() {
    const content = posts.map((posts) => 
      <Post
        key={post.id}
        id={post.id}
        title={post.title}
      />
    );

    return (
      <div className="someClass"></div>
    )
  }
}


class Button extends React.Component {
  render () {
    const { isPressed, isHovered, label } = this.props;
    // значение это true или false. Если значение true, то класс будет включен, если false – то нет
    // 'btn' это класс который будет подставлен в любом случае
    const btnClass = cn('btn', {
      'btn-pressed': isPressed,
      'btn-over': !isPressed && isHovered,
    });
    return <button className={btnClass}>{label}</button>;
  }
};

class Component extends React.Component {
  render() {
    const divStyle = {
      color: 'blue',
      fontSize: '50px',
    };

    return <div style={divStyle}>Hello World!</div>;
  }
}

const mountNode144 = document.getElementById('react-root');
const root144 = ReactDOM.createRoot(mountNode);
root.render(<Component />);



<div dangerouslySetInnerHTML={{ __html: '<p>content</p>' }}>more content</div>;

class Component extends React.Component {
  render() {
    const htmlString = 'This <i>text</i> should be rendered <b>"as is"</b>';
    return (
      <ul>
        <li dangerouslySetInnerHTML={{ __html: htmlString }} />
        <li>{htmlString}</li>
      </ul>
    );
  }
}

const mountNode13 = document.getElementById('react-root');
const root13 = ReactDOM.createRoot(mountNode);
root.render(<Component />);

// BEGIN
export default class Definitions extends React.Component {
  render() {
    const { data } = this.props;
    if (data.length === 0) {
      return null;
    }

    const tags = data.map(({ dt, dd, id }) => (
      <React.Fragment key={id}>
        <dt>{dt}</dt>
        <dd>{dd}</dd>
      </React.Fragment>
    ));

    return (
      <dl>
        {tags}
      </dl>
    );
  }
}
// END


/* eslint-disable react/prefer-stateless-function */

import React from 'react';

// BEGIN (write your solution here)
class DefinitionsList extends React.Component {
  render() {
    const { data } = this.props;
    const renderedList = data.map((item) => 
      <>
        <dt key={item.id}>{item.dt}</dt>
        <dd key={item.id}>{item.dd}</dd>
      </>);


    return (
      <dl>
        {renderedList};
      </dl>
    );
  }
}
// END

class Section extends React.Component {
  render() {
    const { header, body } = this.props;

    return (
      <>
        <h2>{header}</h2>
        <div>{body}</div>
      </>
    );
  }
}

class Section extends React.Component {
  render() {
    const { header, body } = this.props;

    return (
      <React.Fragment>
        <h2>{header}</h2>
        <div>{body}</div>
      </React.Fragment>
    );
  }
}

class List extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <ul>
        {data.map((item) => <li key={item.id}>{item.name}</li>)}
        <li>Элемент без key</li>
        <li>Ещё один элемент без key</li>
      </ul>
    );
  }
}

const content = posts.map((post) =>
  <Post
    key={post.id}
    id={post.id}
    title={post.title}
  />
);

class List extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <ul>
        {data.map((item) => <li key={item.id}>{item.name}</li>)}
      </ul>
    );
  }
}

class List extends React.Component {
  renderList() {
    // ...
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

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


// ================================================================

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

const root12 = ReactDom.createRoot(document.getElementById('react-root'));
root12.render(<Hello />);

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