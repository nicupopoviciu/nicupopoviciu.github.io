//	HYPE.documents["Photonickup"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="Photonickup.hyperesources",c="Photonickup",e="photonickup_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/photonickup_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_596","HYPE_dtl_596",!0==(null!=a&&10>a||false==!0)?"HYPE-596.full.min.js":"HYPE-596.thin.min.js"),false==!0&&(a=a||l("HYPE_w_596","HYPE_wdtl_596","HYPE-596.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_596(c,e,{"0":{p:1,n:"Orbits.jpg",g:"17",t:"@1x"},"-1":{n:"PIE.htc"},"-2":{n:"blank.gif"}},h,["<link href='https://fonts.googleapis.com/css?family=Aleo:300&subset=latin' rel='stylesheet' type='text/css'>"],d,[{n:"Home",o:"1",X:[0]},{n:"Two",o:"10",X:[1]}],[{p:"600px",U:{},c:"#0096FF",bZ:180,d:1200,cA:false,K:{a:[{c:0,y:true,A:0,p:10,K:1,symbolOid:"8",b:"kTimelineDefaultIdentifier"}]},Y:1200,L:[{a:[{}],B:"Custom"}],Z:1200,v:{"21":{b:1080,z:1,K:"Solid",c:232,L:"Solid",d:65,aS:6,M:2,e:1,bD:"none",N:2,aT:6,dB:"button",O:2,g:"rgba(240, 240, 240, 0.000)",aU:6,bS:13,P:2,aV:6,j:"absolute",aI:10,k:"div",aJ:10,aK:10,aL:10,A:"#FFFFFF",B:"#FFFFFF",Z:"break-word",r:"inline",C:"#FFFFFF",s:"Aleo",D:"#FFFFFF",t:48,u:"normal",aA:{a:[{d:1.1000000000000001,p:1,g:6,e:"10"}]},F:"center",v:"normal",G:"#FFFFFF",aP:"pointer",w:"ENTER",x:"visible",I:"Solid",a:476,y:"preserve",J:"Solid"}},A:{a:[{b:"kTimelineDefaultIdentifier",symbolOid:"8",p:7}]},O:["21"],"_":0,bY:1,n:"Desktop",a:100,o:"9",T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},b:100},{o:"12",p:"600px",a:100,Y:1200,Z:1200,b:100,cA:false,c:"#FFFFFF",L:[],bY:1,d:1200,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["22"],n:"Desktop","_":1,v:{"22":{h:"17",p:"no-repeat",x:"visible",a:-927,q:"100% 100%",b:-927,j:"absolute",bS:37,z:1,k:"div",dB:"img",d:3054,c:3054,r:"inline",e:1}}}],{},g,{},
(function (shouldShow, mainContentContainer) {
	var loadingPageID = mainContentContainer.id + "_loading";
	var loadingDiv = document.getElementById(loadingPageID);

	if(shouldShow == true) {
		if(loadingDiv == null) {	
			loadingDiv = document.createElement("div");
			loadingDiv.id = loadingPageID;
			loadingDiv.style.cssText = "overflow:hidden;position:absolute;width:150px;top:40%;left:0;right:0;margin:auto;padding:2px;border:3px solid #BBB;background-color:#EEE;border-radius:10px;text-align:center;font-family:Helvetica,Sans-Serif;font-size:13px;font-weight:700;color:#AAA;z-index:100000;";
			loadingDiv.innerHTML = "Loading";
			mainContentContainer.appendChild(loadingDiv);
		}
 
		loadingDiv.style.display = "block";
		loadingDiv.removeAttribute("aria-hidden");
		mainContentContainer.setAttribute("aria-busy", true);
	} else {
		loadingDiv.style.display = "none";
		loadingDiv.setAttribute("aria-hidden", true);
		mainContentContainer.removeAttribute("aria-busy");
	}
})

,false,true,-1,true,true,true,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
