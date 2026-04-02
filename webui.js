// WebUI Frontend Bridge
// Executes bound backend C++ functions from JavaScript

function _callBackend(functionName, ...args) {
    try {
        const fn = window[functionName] || eval(functionName);
        if (typeof fn === 'function') {
            return fn(...args);
        } else {
            console.error('Function ' + functionName + ' not found');
            return null;
        }
    } catch (e) {
        console.error('Error calling ' + functionName + ':', e.message);
        return null;
    }
}



