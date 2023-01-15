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

    static findClass(tag) {
        switch (tag) {
            case 'h1':
                return 'fs-1';
            case 'h2':
                return 'fs-2';
            case 'h3':
                return 'fs-3';
            case 'h4':
                return 'fs-4';
            case 'h5':
                return 'fs-5';
            case 'h6':
                return 'fs-6';
        
            default:
                return '';
        }
    }
}