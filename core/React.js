const createTextNode = (text) => {
    return {
        type: 'TEXT_ELEMENT',
        props: {
            nodeValue: text,
            children: [],
        }
    }
}

const createElement = (type, props, ...children) => {
    return {
        type,
        props: {
            ...props,
            children: children.map(child => {
                return typeof child === 'object' ? child : createTextNode(child)
            })
        }
    }
}

const render = (el, container) => {
    const dom = el.type === 'TEXT_ELEMENT' ? document.createTextNode(el.props.nodeValue) : document.createElement(el.type)
    Object.keys(el.props).forEach(key => {
        if (key !== 'children') {
            dom[key] = el.props[key]
        }
    })
    el.props.children.forEach(child => {
        render(child, dom)
    })

    container.appendChild(dom)
    return dom
}

const React = {
    render,
    createElement,
    createTextNode
}

export default React