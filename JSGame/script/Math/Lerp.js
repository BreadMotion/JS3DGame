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

/**
 * @param {Number} time - time - parsect*/
function EaseInCubic(time){
    return time * time * time;
}//function EaseInCubic

/**
 * @param {Number} time - time - parsect*/
function EaseOutCubic(time){
    return 1 + (time - 1) * time * time;
}//function EaseOutCubic

/**
 * @param {Number} time - time - parsect*/
function EaseInOutCubic(time){
    return time < 0.5 ? 4 * time * time * time : 1 + (time - 1) * (2 * (time - 1)) * (2 * time);
}//function EaseInOutCubic

/**
 * @param {Number} time - time - parsect*/
function EaseInQuart(time){
    time *= time;
    return time * time;
}//function EaseInQuart

/**
 * @param {Number} time - time - parsect*/
function EaseOutQuart(time){
    time = (time - 1) * time;
    return 1 - time * time;
}//function EaseOutQuart

/**
 * @param {Number} time - time - parsect*/
function EaseInOutQuart(time){
    if(time < 0.5){
        time * time;
        return 8 * time * time;
    }
    else{
        time = (time - 1) * time;
        return 1 - 8 * time * time;
    }
}//function EaseInOutQuart

/**
 * @param {Number} time - time - parsect*/
function EaseInQuint(time){
    const t2 = time * time;
    return time * t2 * t2;
}//function EaseInQuint

/**
 * @param {Number} time - time - parsect*/
function EaseOutQuint(time){
    let t2;
    if(time < 0.5){
        t2 = time * time;
        return 16 * time * t2 * t2;
    }
    else{
        t2 = (time - 1) * time;
        return 1 + 16 * time * t2 * t2;
    }
}//function EaseOutQuint

/**
 * @param {Number} time - time - parsect*/
function EaseInOutQuint(time){
    let t2;
    if(time < 0.5){
        t2 = time * time;
        return 16 * t * t2 * t2;
    }
    else{
        t2 = (time - 1) * time;
        return 1 + 16 * time * t2 * t2;
    }
}

/**
 * @param {Number} time - time - parsect*/
function EaseInExpo(time){
    return (Math.pow(2, 8 * time) - 1) / 255;
}//function EaseInExpo

/**
 * @param {Number} time - time - parsect*/
function EaseOutExpo(time){
    return 1 - Math.pow(2, -8 * time);
}//function EaseOutExpo

/**
 * @param {Number} time - time - parsect*/
function EaseInOutExpo(time){
    if(time < 0.5){
        return (Math.pow(2, 16 * time) - 1) / 510;
    }
    else{
        return 1 - 0.5 * Math.pow(2, -16 * (time - 0.5));
    }
}//function EaseInOut

/**
 * @param {Number} time - time - parsect*/
function EaseInCirc(time){
    return 1 - Math.sqrt(1 - time);
}//function EaseInCirc

/**
 * @param {Number} time - time - parsect*/
function EaseInOutCirc(time){
    return Math.sqrt(time);
}//function EaseInOutCirc

/**
 * @param {Number} time - time - parsect*/
function EaseInOutCirc(time){
    if(time < 0.5){
        return (1 - Math.sqrt(1 - 2 * time)) * 0.5;
    }
    else{
        return (1 + Math.sqrt(2 * time - 1)) * 0.5;
    }
}//function EaseInOutCirc

/**
 * @param {Number} time - time - parsect*/
function EaseInBack(time){
    return time * time * (2.70158 * time - 1.70158);
}//function EaseInBack

/**
 * @param {Number} time - time - parsect*/
function EaseOutBack(time){
    return 1 + (time - 1) * time * (2.70158 * time + 1.70158);
}//function EaseOutBack

/**
 * @param {Number} time - time - parsect*/
function EaseInOutBack(time){
    if(time < 0.5){
        return time * time * (7 * time - 2.5) * 2;
    }
    else{
        return 1 + (time - 1) * time * 2 * (7 * time + 2.5);
    }
}//function EaseInOutBack

/**
 * @param {Number} time - time - parsect*/
function EaseInElastic(time){
    let t2 = time * time;
    return t2 * t2 * Math.sin(time * Math.PI * 4.5);
}//function EaseInElastic

/**
 * @param {Number} time - time - parsect*/
function EaseOutElastic(time){
    let t2 = (time - 1) * (time - 1);
    return 1 - t2 * t2 * Math.cos(time * Math.PI * 4.5);
}//function EaseOutElastic

/**
 * @param {Number} time - time - parsect*/
function EaseInOutElastic(time){
    let t2;
    if(time < 0.45){
        t2 = time * time;
        return 8 * t2 * t2 * Math.sin(time * Math.PI * 9);
    }
    else if(time < 0.55){
        return 0.5 + 0.75 * Math.sin(time * Math.PI * 4);
    }
    else{
        t2 = (time - 1) * (time - 1);
        return 1 - 8 * t2 * t2 * Math.sin(time * Math.PI * 9);
    }
}//function EaseInOutElastic

/**
 * @param {Number} time - time - parsect*/
function EaseInBounce(time){
    return Math.pow(2, 6 * (time - 1)) * Math.abs(Math.sin(time * Math.PI * 3.5));
}//function EaseInBounce

/**
 * @param {Number} time - time - parsect*/
function EaseOutBounce(time){
    return 1 - Math.pow(2, -6 * time) * Math.abs(Math.cos(time * Math.PI * 3.5));
}//function EaseOutBounce

/**
 * @param {Number} time - time - parsect*/
function EaseInOutBounce(time){
    if(time < 0.5){
        return 8 * Math.pow(2,8 * (time - 1)) * Math.abs(Math.sin(time * Math.PI * 7));
    }
    else{
        return 1 - 8 * Math.pow( 2, -8 * time) * Math.abs(Math.sin(time * Math.PI * 7));
    }
}//function EaseInOutBounce