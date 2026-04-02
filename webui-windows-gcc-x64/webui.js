// WebUI JavaScript API Bridge
// Communicates with C++ backend via WebUI's internal mechanism

window.webui = {
    call: async function(funcName, data) {
        return new Promise((resolve, reject) => {
            // WebUI uses a special global function for backend calls
            // Try the most common pattern first
            if (window._webui_fn && typeof window._webui_fn === 'function') {
                try {
                    window._webui_fn(funcName, data, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            }
            // Fallback: try calling as window function directly with callback
            else if (typeof window[funcName] === 'function') {
                try {
                    // Try with both string payload and callback
                    const result = window[funcName](data);
                    resolve(result);
                } catch (e) {
                    reject(e);
                }
            }
            else {
                reject(new Error(`WebUI function '${funcName}' not found. Available methods: ${Object.keys(window).filter(k => typeof window[k] === 'function').slice(0, 10).join(', ')}`));
            }
        });
    }
};

// Log for debugging
console.log('WebUI bridge loaded');

