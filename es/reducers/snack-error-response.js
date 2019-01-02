var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

export default (function (state, action) {
    var snackbar = {
        type: 'alert',
        message: action.payload.message,
        open: true
    };
    return _extends({}, state, {
        snack: snackbar
    });
});