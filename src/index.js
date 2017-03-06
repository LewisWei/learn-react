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

ReactDOM.render(
    <App.ComponentStateWithSetState/>,
    document.getElementById('ComponentStateWithSetState')
);

ReactDOM.render(
    <App.ComponentStateWithSetState/>,
    document.getElementById('ComponentStateChangeByChildComponent')
);

ReactDOM.render(
    <App.AccessNestedDataWithReactPropsChildren/>,
    document.getElementById('AccessNestedDataWithReactPropsChildren')
);

ReactDOM.render(
    <App.ComponentWithPropTypesValidation/>,
    document.getElementById('ComponentWithPropTypesValidation')
);

ReactDOM.render(
    <App.ComponentUseReactEventSystem/>,
    document.getElementById('ComponentUseReactEventSystem')
);

ReactDOM.render(
    <App.ComponentRefs/>,
    document.getElementById('ComponentRefs')
);