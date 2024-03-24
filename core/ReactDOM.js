import React from './React.js'

const createRoot = (container) => {
    return {
        render(App) {
            React.render(App, container)
        }
    }
}

const ReactDOM = {
    createRoot
}

export default ReactDOM