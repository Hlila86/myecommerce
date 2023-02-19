const getError = (err) => 
err.responses && err.reponse.data && err.response.data.message 
? err.response.data.message 
: err.message;

export {getError}