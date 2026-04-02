function webui_fn(functionName) {
    console.log('Calling backend function: ' + functionName);
    webui.call(functionName);
}