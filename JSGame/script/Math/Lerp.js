/**Easing Lerp Function*/

/**
 * @param {Number} time - parsect*/
function EaseInSine(time) {
    return Math.sin(Math.PI * 0.5 * time);
}//function EaseInSine

/**
 * @param {Number} time - time - parsect*/
function EaseOutSine(time){
    return 1.0 + Math.sin(Math.PI * 0.5 * (time - 1.0));
}//function EaseOutSine

/**
 * @param {Number} time - time - parsect*/
function EaseInOutSine(time){
    return 0.5 * (1.0 + Math.sin(Math.PI * (time - 0.5)));
}//function EaseInOutSine

/**
 * @param {Number} time - time - parsect*/
function EaseInQuad(time){
    return time * time;
}//function EaseInQuad

/**
 * @param {Number} time - time - parsect*/
function EaseInOutQuad(time){
    return time < 0.5 ? 2.0 * time * time : time * (4.0 - 2.0 * time) - 1.0;
}//function EaseInOutQuad

