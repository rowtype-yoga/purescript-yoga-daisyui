const renderMethodPUT = {renderMethod: v => "put"};
const renderMethodPOST = {renderMethod: v => "post"};
const renderMethodPATCH = {renderMethod: v => "patch"};
const renderMethodGET = {renderMethod: v => "get"};
const renderMethodDELETE = {renderMethod: v => "delete"};
const renderMethod = dict => dict.renderMethod;
export {renderMethod, renderMethodDELETE, renderMethodGET, renderMethodPATCH, renderMethodPOST, renderMethodPUT};
