

export default class Util {
    static ellipsis(text, len = 50) {
        if (text.length <= len) return text;
        
        return text?.substring(0, len) + '...';
    }

    static listFormData(data, formData){
        for (const key of Object.keys(data)) {
            console.log(key, data[key]);
            formData.set(key, data[key]);
        }
    }

    static checkAuthError(status, navigate=null) {
        const pathName = window.location.pathname;
        if (
            status && (status === 401 || status === 419)
            && pathName !== '/admin/login' && pathName !== '/admin/signup'
        )
            window.location='/admin/login';
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

    static showImage(file, setImage, setToast, mutate) {
        const fileReader = new FileReader();
        fileReader.onload = (event) => {
            const image = new Image();
            image.src = event.target.result;
            image.onload = function () {
                const height = this.height;
                const width = this.width;
                if (height < 540 || width < 1100) {
                    //TODO: specify image text
                    setToast(s => ({...s, show: true, message: "Image dimension is not accepted", severity: 'warning' }))
                    return false;
                }else{
                    setImage(event.target.result);
                    mutate();
                    return true;
                }
            };
        }
        fileReader.readAsDataURL(file);
    }

    static hasRole(roles, roleName) {
        return roles.some(role => role.name == roleName);
    }

    static hasAnyRole(roles, rolesArray) {
        for (let i = 0; i < rolesArray.length; i++) {
            const role = rolesArray[i];
            if (this.hasRole(roles, role)) return true;
        }
        return false;
    }

    static checkImagesInArticle() {
        const content = document.querySelector("#articleContent");
        if (content) {
            const images = content.querySelectorAll('img');
            for (let i = 0; i < images.length; i++) {
                const element = images[i];
                if (element.alt === '') {
                    return false
                }
            }
            return true;
        }
        return false;
    }
}