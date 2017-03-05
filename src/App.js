import React from 'react';


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
    ComponentUseReactEventSystem
}