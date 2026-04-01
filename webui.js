function webui_call(name, ...args) {
    try {
        if (window.chrome && window.chrome.webview) {
            window.chrome.webview.postMessage({
                name: name,
                args: args
            });
        }
        else if (window.external && window.external.invoke) {
            window.external.invoke(
                JSON.stringify({
                    name: name,
                    args: args
                })
            );
        }
        else {
            console.log("WebUI bridge not found:",name,args);
        }
    }
        catch (e) {
            console.error("WebUI Error", e);
        }
    }


function showAlert(message) {
    alert(message);
}

function confirmAction(message) {
    return confirm(message);
}