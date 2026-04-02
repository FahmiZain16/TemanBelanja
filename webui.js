// WebUI Frontend Bridge
// Executes bound backend C++ functions from JavaScript

console.log('[WebUI] Initializing bridge...');

// These functions will be called by the HTML
// They execute the C++ backend functions and return results

// Wrapper to help find and call functions
function _callBackend(functionName, ...args) {
    try {
        // Try to find and call the function in window scope
        const fn = window[functionName] || eval(functionName);
        if (typeof fn === 'function') {
            console.log('[WebUI] Calling ' + functionName + '(' + args.join(', ') + ')');
            const result = fn(...args);
            console.log('[WebUI] Result:', result);
            return result;
        } else {
            console.error('[WebUI] Function ' + functionName + ' not found');
            return null;
        }
    } catch (e) {
        console.error('[WebUI] Error calling ' + functionName + ':', e.message);
        return null;
    }
}

console.log('[WebUI] Bridge ready');
console.log('[WebUI] Checking for bound functions...');

// Check what functions are available
setTimeout(function() {
    const expectedFuncs = ['add_item', 'delete_item', 'toggle_check', 'update_value', 'update_amount', 'get_cart'];
    const available = [];
    const missing = [];
    
    expectedFuncs.forEach(func => {
        if (typeof window[func] === 'function') {
            available.push(func);
        } else {
            missing.push(func);
        }
    });
    
    console.log('[WebUI] Available functions:', available);
    if (missing.length > 0) {
        console.warn('[WebUI] Missing functions:', missing);
    }
}, 500);



