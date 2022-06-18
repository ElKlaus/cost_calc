import React from 'react';
import ReactDOM from 'react-dom/client';
import cn from 'classnames';

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <form action="">
        <label htmlFor="">
          Is isGoing
          <input 
            name='isGoing'
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label htmlFor="">
          Number of guests:
          <input 
            name='numberOfGuests'
            type="number"
            checked={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    )
  }
}

const root7 = ReactDOM.createRoot(document.getElementById('root'));
root7.render(<Reservation />);

class Button1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      primary: false,
    };
  }

  onIncrement = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  onChangeClass = () => {
    this.setState(({ primary }) => ({ primary: !primary }) );
  };

  render() {
    const buttonClass = cn([
      'btn',
      this.state.primary ? 'btn-brimary' : 'btn-secondary'
    ]);

    return <div>
      <button className='"btn btn-secondary m-3' onClick={this.onIncrement}>
        count: {this.state.count}
      </button>
      <button className={buttonClass} onClick={this.onChangeClass}>
        button
      </button>
    </div>
  }
}

const mountNode6 = document.getElementById('react-root');
const root61 = ReactDOM.createRoot(mountNode6);
root61.render(<Buttons />);


export default class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null
    };
  }

  selectLeft = () => this.setActive('left');
  
  selectRight = () => this.setActive('right');

  setActive = (active) => {
    this.setState({ active });
  }

  render() {
    const { active } = this.state;

    const sharedClasses = {
      btn: true,
      'btn-secondary': true,
    };

    const leftButtonClass = {
      ...sharedClasses,
      left: true,
      active: active === 'left',
    };

    const rightButtonClass = {
      ...sharedClasses,
      right: true,
      active: active === 'right',
    };

    return (
      <div className="btn-gtoup" role="group">
        <button type='button' onClick={this.selectLeft} className={cn(leftButtonClass)}></button>
        <button type='button' onClick={this.selectRight} className={cn(rightButtonClass)}></button>
      </div>
    )
  }
};

class Counter3 extends React.Component {
  constructor(props) {
    this.state = {
      count: this.props.count
    }
  }

  handleClick = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  render() {
    return <button onClick={this.handleClick}>
      count: {this.state.count}
    </button>
  }
};

Counter.defaultProps = {
  count: 0,
};

const vdom3 = <div>
  <Counter />
  <Counter count={5} />
</div>;

const mountNode33 = document.getElementById('react-root');
const root33 = ReactDOM.createRoot(mountNode33);
root33.render(vdom3)

class Counter2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }


  handleClick() {
    thic.state((state, props) => {
      const { count } = state;

      return { count: count + 1 };
    })
  }

  render() {
    return (
      <button onClick={handleClick}>Count: {this.state.count}</button>
    )
  }
}



class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  
  handleClick = () => {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <p>It is {this.state.date.toLocaleTimeString()}.</p>
        <button
          type="button"
          onClick={this.handleClick}
         >
          refresh
        </button>
      </div>
    );
  }
}

const mountNode = document.getElementById('react-root');
const root = ReactDOM.createRoot(mountNode);
root.render(<Clock />);




class List6 extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <ul>
        {data.map(item => <li>{item.name}</li>)}
      </ul>
    );
  }
}

const items6 = [
  { name: 'first' },
  { name: 'second' }
];

const mountNode3 = document.getElementById('react-root');
const root6 = ReactDOM.createRoot(mountNode);
root6.render(<List6 data={items6}/>) 

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
}

class ListGroup1 extends React.Component {
  render() {
    const { children } = this.props;
    const listRender = React.Children.map((item) => <li key={item.id} className='list-group-item'>{item}</li>);

    return (
      <ul className='list-group'>
        {listRender}
      </ul>
    )
  }
}

class List1 extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <ul>
        {data.map((item) => <li key={item.id}>{item.name}</li>)}
      </ul>
    )

  }
}

class ChildrenCounter1 extends React.Component {
  render() {
    const { children } = this.props;

    return <p>Count: {React.Children.count(children)}</p>
  }
}

class Button extends React.Component {
  render() {
    const { btnClass } = 'btn';

    if (isPressed) {
      btnClass += ' btn-pressed';
    } else if (isHovered) {
      btnClass += ' btn-over';
    }

    return <button className='{btnClass}'>{label}</button>
  }
}

this.setState((state, props) => {
  const { count } = state;

  return { count: count + 1 };
})

class Counter1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <button onClick={this.handleClick}>count: {this.state.count}</button>
    );
  }
}

const mountNode5 = document.getElementById("react-root");
const root5 = ReactDOM.createRoot(mountNode);
root.render(<Counter1 />);




class Counter extends React.Component {
  handleClick = () => {
    this.setState({ date: new Date() });
  }
}

class Clock extends React.Component {
  handleClick() {
    this.setState({ date: new Date() });
  }
}


class Clock extends React.Component {
  constructor(props) {
    super(props); // всегда обязательно
    this.state = { date: new Date() };
  }
}


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  
  handleClick = () => {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <p>It is {this.state.date.toLocaleTimeString()}.</p>
        <button
          type="button"
          onClick={this.handleClick}
         >
          refresh
        </button>
      </div>
    );
  }
}

const mountNode4 = document.getElementById('react-root');
const root4 = ReactDOM.createRoot(mountNode);
root.render(<Clock />);





// BEGIN
export default class ListGroup extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <ul className="list-group">
        {React.Children.map(children, (item) => <li className="list-group-item">{item}</li>)}
      </ul>
    );
  }
}
// END




React.Children.map(this.props.children, ...)

class ChildrenCounter extends React.Component {
  render() {
    const { children } = this.props
    return <p>Count: {React.Children.count(children)}</p>
  }
}

// // Count: 1
// <ChildrenCounter>
//   Second!
// </ChildrenCounter>

// // Count: 2
// <ChildrenCounter>
//   <p>First</p>
//   <ChildComponent />
// </ChildrenCounter>

// // Count: 2
// <ChildrenCounter>
//   {() => <h1>First!</h1>} // будет пропущено, поскольку не является dom-элементом
//   Second!
//   <p>Third!</p>
// </ChildrenCounter>

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

class TestComp1 extends React.Component {
  render() {
    const CustomClass = {
      width: '14px',
      display: 'inline-block',
    }

    return (
      <div style="CustomClass">
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
import { concat } from 'lodash';

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