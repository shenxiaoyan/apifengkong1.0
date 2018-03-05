'use strict';

/**
 * 0.1.1
 * Deferred load js/css file, used for ui-jq.js and Lazy Loading.
 * 
 * @ flatfull.com All Rights Reserved.
 * Author url: http://themeforest.net/user/flatfull
 */

app.service("utifyFunction", function () {

    return function (obj) {

        var str = "";
        var count = 0;
        for (var key in obj) {
            count++;
            if (count === 1) {
                str += "?"
            }
            if (count > 1) {
                str += "&"
            }
            str = str + key + "=" + obj[key]
        }
        return str


    }

});