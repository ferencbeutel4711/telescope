function* lazyMap(array, mappingFn) {
    for (let x of array) yield mappingFn(x)
}

export function findAndMap(array, filterFn, mappingFn) {
    for (let mappedValue of lazyMap(array, mappingFn)) if (filterFn(mappedValue)) return mappedValue;
}
