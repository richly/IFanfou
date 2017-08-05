//语言包配置
const init = (key,reload=false)=>{
    let localLang = window.localStorage.getItem(__PROJECT+"_lang");
    let current = key || localLang || LANG.langsArray[0]; 
    if (localLang !== current) {
        window.localStorage.setItem(__PROJECT+"_lang",current);
    }

    LANG.current = current;

    if(reload){
        window.location.reload();
    }
}

var LANG = {
    langs : [
        {key:'zh',name:'简' }
        ,{key:'hk',name:'繁'}
        ,{key:'en',name:'EN'}
    ]
    ,langsArray : []
    ,current : 'zh'
    ,langLib : {}
    ,keyLang : false
    ,filter:function(key){
        if(!key || LANG.langsArray.indexOf(Lang.current)==-1 || typeof LANG.langLib[key] === 'undefined'){return key;}
        let target = LANG.langLib[key];
        if(target[LANG.current]){return target[LANG.current];}
        return (Lang.keyLang?(key||target[LANG.langsArray.find(d=>target[d])]):(target[LANG.langsArray.find(d=>target[d])]||key)) || key;
    }
    ,set:function({langLib,lang,keyLang,reload=false}){
        if (langLib) {
            LANG.langLib = {...LANG.langLib,...langLib}
        }
        if (lang && LANG.langsArray.indexOf(LANG)>-1) {
            LANG.current = lang;
            init(lang,reload);
        }
        if (typeof keyLang !== 'undefined') { LANG.keyLang = !!keyLang; }

    }
};
const langsArray = LANG.langsArray.map(d=>d.map);
LANG.langsArray = langsArray;

init();

export default LANG;
export const set = LANG.set
export const langs = LANG.langs
export const lang = LANG.current