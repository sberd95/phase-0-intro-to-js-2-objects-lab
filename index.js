// Write your solution in this file!
const employee = {
    name: 'Jim',
    address: '123 Fake St'
}

function updateEmployeeWithKeyAndValue(Object, key, value) {
    const updatedEmp = {...Object}
    updatedEmp[key] = value
    return updatedEmp
}

function destructivelyUpdateEmployeeWithKeyAndValue(Object, key, value) {
    Object[key] = value
    return Object
}

function deleteFromEmployeeByKey(Object, key) {
    const updatedEmp = {...Object}
    delete updatedEmp[key]
    return updatedEmp
}

function destructivelyDeleteFromEmployeeByKey(Object, key) {
    delete Object[key]
    return Object
}