export function onSuccess() {
    notify({message : 'SUCCESS'})
}

export function onError() {
    notify({message : 'ERROR'})
}

export function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
    return order(...arguments)    
}

export function postOrder(variety, quantity) {
    return order({variety, quantity}, onSuccess, onError) 
}
