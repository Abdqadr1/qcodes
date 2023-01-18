export default class Util {
    static ellipsis(text, len = 50) {
        return text.substring(0, len) + '...';
    }

    static getSelectionText() {
        var text = "";
        if (window.getSelection) {
            text = window.getSelection().toString();
        } else if (document.selection && document.selection.type != "Control") {
            text = document.selection.createRange().text;
        }
        return text;
    }
    static listFormData(data, formData){
        for (const key of Object.keys(data)) {
            console.log(key, data[key]);
            formData.set(key, data[key]);
        }
    }

    static useThrottle (cb, delay) {
        let shouldWait = false;
        let waitArgs = null;
        let setTimeoutFunc = () => {
            if (waitArgs == null) {
                shouldWait = false;
            }else {
                cb(...waitArgs);
                waitArgs = null;
                setTimeout(setTimeoutFunc, delay);
            }
        };

        return (...args) => {
        if(shouldWait) {
            waitArgs = args
            return;
        }
        cb(...args)
        shouldWait = true;
        setTimeout(setTimeoutFunc, delay)
        };
    }
}