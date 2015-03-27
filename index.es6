import data from './data';

export function filterProps(tag) {
    let out = [];

    Object.keys(data).forEach(p => {
        if (data[p].indexOf(tag) >= 0) {
            out.push(p);
        }
    });

    return out;
}

export function excludePropsFor(tag, props) {
    const tagProps = filterProps(tag);
    let out = {};

    Object.keys(props).forEach(p => {
        if (tagProps.indexOf(p) === -1) {
            out[p] = props[p];
        }
    });

    return out;
}

export function onlyPropsFor(tag, props) {
    const propsForTag = filterProps(tag);
    let out = {};

    Object.keys(props).forEach(p => {
        if (propsForTag.indexOf(p) >= 0) {
            out[p] = props[p];
        }
    });

    return out;
}
