;(function () {
    
    var __ACTION__ = 'post'
    , baseUrl = '/'
    , $service
    , $http//$resource,resource
    , mode = 'production'
    ;

    var href = window.location.href.toLowerCase;
    // if(href.indexOf('127.0.0.1') > -1 || href.indexOf('localhost')>-1){
	// 	mode = 'development';
	// 	__ACTION__ = 'jsonp';
	// 	baseUrl = 'http://';
	// }else if(href.indexOf('qc.can-dao.com')>-1 
	// 	|| href.indexOf('beta.can-dao.com')>-1
	// 	|| href.indexOf('beta5.can-dao.com')>-1
	// 	|| href.indexOf('http://10.200')>-1
	// ){
	// 	mode = 'qc';
    // }
    
    var errorCallback = {
        '500':()=>{console.error('500 错误 连接不存在');return true;}
        ,'404':()=>{console.error('404 错误 请求的网页不存在');return true;}
        ,'503':()=>{console.error('503 错误 服务不可用');return true;}
    }

    var service = {},$service,$resources,$caches
    ,$alertFn = (msg)=>{Com.alert(msg);}
    ,$loadingFn = ()=>{}
    ,$loadedFn = ()=>{}
    
    ;
    service.config = {}
})