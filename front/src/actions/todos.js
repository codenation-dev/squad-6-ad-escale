export function requestTodoList() {
    return {
        type: 'REQUEST_TODO_LIST'
    }
}

export function requestSingle(id) {
    return {
        type: 'REQUEST_SINGLE_ID',
        payload: id
    }
}

