var product = context.getVariable('verifyapikey.Verify-API-Key.apiproduct.name');
if( product === "" || product === null ){
    context.setVariable('flow.error','true');
} else {
    context.setVariable('flow.error','false');
}
