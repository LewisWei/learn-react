import React from 'react';

/**
 * 创建包含 state 的 Component
 */
// class App extends React.Component{
//     render(){
//         return <h1>Hello Lewis</h1>
//         // return React.createElement('h1',null,'Hello Lewis')
//     }
// }

/**
 * 创建 stateless component
 */
// const App = () => <h1>stateless component</h1>


/**
 * 多个标签的 render
 */
// class App extends React.Component {
//     render() {
//         // render 方法只能返回一个标签 ,如果出现多个标签需要将他们包裹起来返回
//         // 返回时使用 () 包裹或将父元素放在 return 语句的那一行
//         return (
//             <div>
//                 <h1>h1</h1>
//                 <h2>h2</h2>
//             </div>
//         )
//     }
// }


/**
 * 为 Component 增加属性
 */
class App extends React.Component {
    render() {
        let firstName = this.props.firstName
        let lastName = this.props.lastName
        return <h1>hello {firstName} {lastName}</h1>
    }
}

/**
 * 配置属性的类型、是否必须
 * @type {{firstName: (*), lastName: *}}
 */
App.propTypes = {
    firstName: React.PropTypes.string.required,
    lastName: React.PropTypes.string
};

/**
 * 配置属性默认值
 * @type {{lastName: string}}
 */
App.defaultProps = {
    lastName: "wei"
};

export default App