const browserL = navigator.language || navigator.browserLanguage;
const settingL = localStorage.getItem("language");
const href = location.href.replace(/\?.*/, "");

if (href.indexOf("://addonide.funmc.top/zh-hant") == -1 && (((browserL == "zh-HK" || browserL == "zh-TW") && settingL === null) || settingL == "zh-hant")) {
    location.replace(href.replace("://addonide.funmc.top/", "://addonide.funmc.top/zh-hant/"));
};

if (href.indexOf("://addonide.funmc.top/zh-hant") != -1 && ((browserL == "zh-CN" && settingL === null) || settingL == "zh-hans")) {
    location.replace(href.replace("://addonide.funmc.top/zh-hant/", "://addonide.funmc.top/"));
};
