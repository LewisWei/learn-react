import React from "react";
import ReactDOM from "react-dom";

/**
 * 创建 stateless component
 */
const StatelessComponent = () => (
    <div>
        <h1>stateless component</h1>
        <p>简单渲染无状态的 Component</p>
    </div>
);

/**
 * 创建包含 state 的 Component
 */
class ComponentExtendReact extends React.Component {
    render() {
        return (
            <div>
                <h1>stateful component</h1>
                <p>继承自React.Component的有状态组件</p>
            </div>
        );
    }
}

/**
 * 使用 React.createElement 方法实现 render
 */
class RenderComponentUseReactCreateElement extends React.Component {
    render() {
        let title = React.createElement('h1', null, "render by createElement");
        let desc = React.createElement('p', null, "使用 React.createElement(tagName,props,children)创建元素");
        let root = React.createElement('div', null, title, desc);
        return root;
    }
}

/**
 * 多个标签的 render
 */
class MultipleTagComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>multiple Tags</h1>
                <p>render方法只接受一个父标签，因此需要将实现功能的子标签包裹到一个父级标签返回</p>
            </div>
        )
    }
}

/**
 * 为 Component 增加属性
 */
class ComponentWithProps extends React.Component {
    render() {
        let lastName = this.props.lastName;
        return (
            <div>
                <h1>Component Props</h1>
                <p>使用 ComponentName.propTypes 定义属性，属性类型使用 React.PropTypes.string 标识,在类型后跟.isRequired确定是否必需</p>
                <p>属性值可以在render方法内定义局部变量关联[this.props.属性名]，也可直接使用this.props获取</p>
                <p>可以通过 ComponentName.defaultProps 为属性设置默认值</p>
                <p>使用组件时通过 [K=V] 制定属性值, 在页面中显示属性值 eg. {this.props.firstName} {lastName}</p>
            </div>
        )
    }
}

/**
 * 配置属性的类型、是否必须
 * @type {{firstName: (*), lastName: *}}
 */
ComponentWithProps.propTypes = {
    firstName: React.PropTypes.string.isRequired,
    lastName: React.PropTypes.string
};

/**
 * 配置属性默认值
 * @type {{lastName: string}}
 */
ComponentWithProps.defaultProps = {
    lastName: "Wei"
};


/**
 * 为组件增加状态，在 render 中将状态和 input 元素绑定。
 * 在input onChange 事件触发时，触发 update 方法，达到单向绑定
 */
class ComponentStateWithSetState extends React.Component {
    constructor() {
        super();
        this.state = {
            txt: "this is the state txt"
        }
    }

    update(e) {
        this.setState({
            txt: e.target.value,
        })
    }

    render() {
        return (
            <div>
                <h1>ComponentStateWithSetState</h1>
                <h2>{this.state.txt}</h2>
                <input type="text" onChange={this.update.bind(this)}></input>
            </div>
        )
    }
}

/**
 * 使用子组件绑定父Component的state
 */
class ComponentStateChangeByChildComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            txt: "this is the state txt"
        }
    }

    update(e) {
        this.setState({
            txt: e.target.value,
        })
    }

    render() {
        return (
            <div>
                <h1>ComponentStateChangeByChildComponent</h1>
                <h2>{this.state.txt}</h2>
                <Widget update={this.update.bind(this)}></Widget>
            </div>
        )
    }
}

const Widget = (props) =>
    <input type="text" onChange={props.update}/>;


/**
 * 通过 props.children 包含子组件
 */
class AccessNestedDataWithReactPropsChildren extends React.Component {

    render() {
        return (
            <div>
                <h1>AccessNestedDataWithReactPropsChildren</h1>
                <Button>I<Heart/><Heart/>React</Button>
            </div>
        )
    }
}

const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component {
    render() {
        return <span>&hearts;</span>
    }
}

/**
 * 通过 propTypes 对属性进行校验
 */
class ComponentWithPropTypesValidation extends React.Component {
    render() {
        return (
            <div>
                <h1>ComponentWithPropTypesValidation</h1>
                <Title text="isRequired"/>
                <Title text="prop length < 15"/>
            </div>
        )
    }
}

const Title = (props) => <p>{props.text}</p>;

Title.propTypes = {
    text(props, propName, component){
        if (!(propName in props)) {
            return new Error(`missing prop ${propName}`)
        }
        if (props[propName].length > 15) {
            return new Error(`${propName} length must less than 15`);
        }
    }
};

/**
 * 使用 React 的事件绑定
 */
class ComponentUseReactEventSystem extends React.Component {

    constructor() {
        super();
        this.state = {
            eventName: "-----"
        };
        this.update = this.update.bind(this);
    }

    update(e) {
        this.setState({
            eventName: e.type
        })
    }

    render() {
        return (
            <div>
                <h1>ComponentUseReactEventSystem</h1>
                <textarea
                    onKeyPress={this.update}
                    onDoubleClick={this.update}
                    onBlur={this.update}
                    onFocus={this.update}
                    cols="30"
                    rows="5"
                />
                <p>{this.state.eventName}</p>
            </div>
        )
    }
}


/**
 * 使用 refs 来管理组件的关系
 */
class ComponentRefs extends React.Component {
    constructor() {
        super();
        this.state = {
            a: "",
            b: ""
        }
    }

    update() {
        this.setState({
            a: this.refs.a.value,
            b: this.b.refs.input.value
        })
    }

    render() {
        return (
            <div>
                <input
                    ref="a"
                    type="text"
                    onChange={this.update.bind(this)}
                />
                {this.state.a}
                <br/>
                <Input
                    ref={component => this.b = component}
                    update={this.update.bind(this)}
                />
                {this.state.b}
            </div>
        )
    }
}

/**
 * 也可在 ref 中使用 {component => this.属性 =component}组合其他组件的 ref
 */
class Input extends React.Component {
    render() {
        return (
            <div>
                <input
                    ref="input"
                    type="text"
                    onChange={this.props.update}
                />
            </div>
        )
    }
}

/**
 * Component 在 DOM 中的加载、卸载的生命周期
 */
class ComponentForMount extends React.Component {
    constructor() {
        super();
        this.state = {times: 0};
        this.update = this.update.bind(this);
    }

    update() {
        this.setState({
            times: this.state.times + 1
        });
    }

    // 第一个阶段：装载至DOM前触发
    componentWillMount() {
        console.log("componentWillMount");
        // 在 Render 之前执行
        this.setState({m: 2})
    }

    // 第二个阶段：render执行并装载至DOM后触发
    componentDidMount() {
        console.log("componentDidMount");
        // 装载到DOM后，添加定时器
        this.interval = setInterval(this.update, 1000);
    }

    // 第三个阶段：Component被移出DOM前触发
    componentWillUnmount() {
        console.log("componentWillUnmount");
        // 从DOM中卸载后，清理占用的资源
        clearInterval(this.interval);
    }

    render() {
        console.log("rendering");
        return <div>
            <button onClick={this.update}>{this.state.times * this.state.m}</button>
        </div>
    }
}

/**
 * mount and unMount Component
 */
class ComponentWrapper extends React.Component {
    mount() {
        ReactDOM.render(<ComponentForMount/>, document.getElementById("container"))
    }

    unMount() {
        ReactDOM.unmountComponentAtNode(document.getElementById("container"));
    }

    render() {
        return <div>
            <button onClick={this.mount.bind(this)}>Mount</button>
            <button onClick={this.unMount.bind(this)}>UnMount</button>
            <div id="container"></div>
        </div>
    }
}

/**
 * 根据属性的变化来控制组件是否需要更新
 */
class ComponentUpdatesWhenNewPropsReceive extends React.Component {
    constructor() {
        super();
        this.state = {
            increasing: false
        };
        this.update = this.update.bind(this);
    }

    update() {
        // 点击时重新渲染组件并且属性值自增1
        ReactDOM.render(
            <ComponentUpdatesWhenNewPropsReceive val={this.props.val + 1}/>,
            document.getElementById("ComponentUpdatesWhenNewPropsReceive"));
    }

    render() {
        console.log(this.state.increasing);
        return <div>
            <button onClick={this.update}>{this.props.val}</button>
        </div>
    }

    /**
     * 组件的属性被修改后，在受到此改变前触发。早于 render
     * @param nextProps
     */
    componentWillReceiveProps(nextProps) {
        this.setState({
            increasing: nextProps.val > this.props.val
        })
    }

    /**
     * 组件渲染前触发，控制组件是否可以更新。早于 render
     * @param nextProps
     * @param nextState
     * @returns {boolean} true 渲染 false 不渲染
     */
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.val % 5 === 0;
    }

    /**
     * 组件更新之后触发。晚于render
     * @param prevProps
     * @param prevState
     */
    componentDidUpdate(prevProps, prevState) {
        console.log(`prevProps.val= ${prevProps.val}`);
    }
}

ComponentUpdatesWhenNewPropsReceive.defaultProps = {
    val: 0
};

/**
 * 使用 map 遍历 Array 中的数据
 */
class UseMapCreateComponentFromArray extends React.Component {

    constructor() {
        super();
        // state 变化之后，会自动触发 render
        this.state = {
            items: [],
            filter: ''
        }
    }

    /**
     * 装载至 DOM 前获取数据
     */
    componentWillMount() {
        fetch('http://swapi.co/api/people/?format=json')
            .then(response => response.json())
            .then(({results:items}) => this.setState({items}))
    }

    /**
     * 定义绑定至 input 的事件函数
     * @param e
     */
    filter(e) {
        this.setState({
            filter: e.target.value.toLowerCase()
        })
    }

    render() {
        let items = this.state.items;
        // 过滤数据
        if (this.state.filter) {
            items = items.filter(
                item => item.name.toLowerCase().includes(this.state.filter)
            )
        }
        // 通过 map 遍历数据，每条数据必须有一个 key
        return <div>
            <hr/>
            <input type="text" onChange={this.filter.bind(this)}/>
            {items.map(item =>
                <Person key={item.name} person={item}/>
            )}
            <hr/>
        </div>
    }
}

const Person = (props) => <p>{props.person.name}</p>;

export {
    StatelessComponent,
    ComponentExtendReact,
    RenderComponentUseReactCreateElement,
    MultipleTagComponent,
    ComponentWithProps,
    ComponentStateWithSetState,
    ComponentStateChangeByChildComponent,
    AccessNestedDataWithReactPropsChildren,
    ComponentWithPropTypesValidation,
    ComponentUseReactEventSystem,
    ComponentRefs,
    ComponentWrapper,
    ComponentUpdatesWhenNewPropsReceive,
    UseMapCreateComponentFromArray
}