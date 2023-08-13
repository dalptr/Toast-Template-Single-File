document.addEventListener("DOMContentLoaded", function () {
    let divElement = document.createElement("div");
    divElement.id = "toast-container";
    document.body.appendChild(divElement);

    let linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    linkElement.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css";
    linkElement.integrity = "sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==";
    linkElement.crossOrigin = "anonymous";
    document.head.appendChild(linkElement);

    // styles.js
    const styles = `
    #toast-container {
        position: fixed;
        top: 32px;
        right: 32px;
        z-index: 999999;
    }
    
    .toast {
        display: flex;
        align-items: center;
        background-color: #fff;
        border-radius: 2px;
        padding: 20px 0;
        min-width: 400px;
        max-width: 450px;
        border-left: 4px solid;
        box-shadow: 0 5px 8px rgba(0, 0, 0, 0.08);
        transition: all linear 0.3s;
        height: 30px;
    }
    
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(calc(100% + 32px));
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes fadeOut {
        to {
            opacity: 0;
        }
    }
    
    .toast--success, .toast--success .toast__icon {
        color: #47d864;
    }
    
    .toast--info, .toast--info .toast__icon {
        color: #2f86eb;
    }
    
    .toast--warning, .toast--warning .toast__icon {
        color: #ffc021;
    }
    
    .toast--error, .toast--error .toast__icon {
        color: #ff623d;
    }
    
    .toast + .toast {
        margin-top: 24px;
    }
    
    .toast__icon {
        font-size: 24px;
    }
    
    .toast__icon,
    .toast__close {
        padding: 0 16px;
    }
    
    .toast__body {
        flex-grow: 1;
    }
    
    .toast__title {
        font-size: 16px;
        font-weight: 600;
        color: #333;
    }
    
    .toast__msg {
        font-size: 14px;
        color: #888;
        margin-top: 6px;
        line-height: 1.5;
    }
    
    .toast__close {
        font-size: 20px;
        color: rgba(0, 0, 0, 0.3);
        cursor: pointer;
    }

`;

    const styleTag = document.createElement('style');
    styleTag.innerHTML = styles;
    document.head.appendChild(styleTag);

});


const toastIconType = {
    success: "fas fa-check-circle",
    info: "fas fa-info-circle",
    warning: "fas fa-exclamation-circle",
    error: "fas fa-exclamation-circle",
};


function toast({title = "", message = "", type = "info", duration = 3000}) {
    const toastContainer = document.getElementById("toast-container");
    if (toastContainer) {
        const toast = document.createElement("div");
        const autoRemoveId = setTimeout(function () {
            toastContainer.removeChild(toast);
        }, duration + 1000);
        toast.onclick = function (e) {
            if (e.target.closest(".toast__close")) {
                toastContainer.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        };
        const icon = toastIconType[type];
        const delay = (duration / 1000).toFixed(2);
        toast.classList.add("toast", `toast--${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `
                    <div class="toast__icon">
                        <i class="${icon}"></i>
                    </div>
                    <div class="toast__body">
                        <h3 class="toast__title">${title}</h3>
                        <p class="toast__msg">${message}</p>
                    </div>
                    <div class="toast__close">
                        <i class="fas fa-times"></i>
                    </div>
                `;

        toastContainer.appendChild(toast);
    }
}
