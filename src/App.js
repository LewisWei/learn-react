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
    firstName: React.PropTypes.string.required,
    lastName: React.PropTypes.string
};

/**
 * 配置属性默认值
 * @type {{lastName: string}}
 */
ComponentWithProps.defaultProps = {
    lastName: "Wei"
};

export {
    StatelessComponent,
    ComponentExtendReact,
    RenderComponentUseReactCreateElement,
    MultipleTagComponent,
    ComponentWithProps
}