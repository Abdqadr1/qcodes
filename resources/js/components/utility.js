export default class Util {
    static ellipsis(text, len = 50) {
        return text.substring(0, len) + '...';
    }
}