define("alipay/apww/1.2.0/apww",["$","./apww.css"],function(a,b){var c=a("$"),d=["offline","online","mobile"],e=".J_aliwangwang",f="ui-ww",g="http://www.taobao.com/webww/ww.php?ver=3&siteid=cntaobao&status=1&charset=utf-8&touid=",h="/muliuserstatus.aw?beginnum=0&site=cntaobao&charset=utf-8&callback=define&uids=";b.init=function(b){a("./apww.css"),b=b||{};var i=b.host?b.host:"https://couriercore.alipay.com",j=[],k=[];c(b.trigger||e).each(function(a,b){var d=c(b).attr("data-account");d&&(j.push(b),k.push(encodeURIComponent(d)))}),0!==k.length&&a.async(i+h+k.join(";"),function(a){c.each(j,function(e,h){var i=d[a&&a.success?a.data[e]:0],j=b.classPrefix||f;c(h).addClass([j,j+"-"+i].join(" ")).attr("href",g+encodeURIComponent(c(h).attr("data-account"))).attr("target","_blank")})})}}),define("alipay/apww/1.2.0/apww.css",[],function(){seajs.importStyle("a.ui-ww{background:url(https://i.alipayobjects.com/common/wangwang/apww130x60.gif) no-repeat scroll 0 0 transparent;display:inline-block;*display:inline;zoom:1;text-decoration:none!important;height:20px;width:67px}a.ui-ww-online{background-position:0 0}a.ui-ww-offline{background-position:0 -20px}a.ui-ww-mobile{background-position:0 -40px}.ui-ww-small{background:url(https://i.alipayobjects.com/common/wangwang/apww130x60.gif) no-repeat scroll 0 0 transparent;display:inline-block;*display:inline;zoom:1;text-decoration:none!important;height:20px;width:20px}.ui-ww-small-online{background-position:-80px 0}.ui-ww-small-offline{background-position:-80px -20px}.ui-ww-small-mobile{background-position:-80px -40px}.ui-ww-static{background:url(https://i.alipayobjects.com/common/wangwang/apww130x60.gif) no-repeat scroll 0 0 transparent;display:inline-block;*display:inline;zoom:1;text-decoration:none!important;height:20px;width:20px}.ui-ww-static-online{background-position:-110px 0}.ui-ww-static-offline{background-position:-110px -20px}.ui-ww-static-mobile{background-position:-110px -40px}")});
