import React from 'react';
import ReactDOM from 'react-dom';
import * as App from './App';

ReactDOM.render(
    <App.StatelessComponent/>,
    document.getElementById('StatelessComponent')
);

ReactDOM.render(
    <App.ComponentExtendReact/>,
    document.getElementById('ComponentExtendReact')
);

ReactDOM.render(
    <App.RenderComponentUseReactCreateElement/>,
    document.getElementById('RenderComponentUseReactCreateElement')
);

ReactDOM.render(
    <App.MultipleTagComponent/>,
    document.getElementById('MultipleTagComponent')
);

ReactDOM.render(
    <App.ComponentWithProps firstName="Lewis"/>,
    document.getElementById('ComponentWithProps')
);