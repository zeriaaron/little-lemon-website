export function isObjEqual(obj1, obj2) {
    const keys = Object.keys(obj1)
    for (const key of keys) {
        if (obj1[key] !== obj2[key]) return false
    }
    return true
}