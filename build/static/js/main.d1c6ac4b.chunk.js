(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/dark-rainy-glass.69ef0d15.jpg"},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(7),i=a.n(s),c=(a(13),a(2)),l=a(3),o=a(1),u=a(5),m=a(4),p=(a(14),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).state={time:"00:00:00 AM",className:""},r.updateTime=r.updateTime.bind(Object(o.a)(r)),r}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.interval=setInterval(this.updateTime,1e3)}},{key:"updateTime",value:function(){var e=new Date,t=e.getHours(),a=e.getMinutes();a<10&&(a="0"+a);var r=e.getSeconds();r<10&&(r="0"+r);var n=" AM";t>=12&&(n=" PM",t>12&&(t-=12)),t<10&&(t="0"+t),this.setState({time:t+":"+a+":"+r+n,className:"rise-animation"})}},{key:"render",value:function(){return n.a.createElement("div",{className:this.state.className,id:"clock"},this.state.time)}}]),a}(n.a.Component)),d=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).state={request:new XMLHttpRequest,temperature:"N/A",wind:"N/A",forecast:"N/A",imageUrl:"",className:"weather"},r.getWeatherData=r.getWeatherData.bind(Object(o.a)(r)),r}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.state.request.open("GET","https://api.weather.gov/gridpoints/LIX/61,92/forecast"),this.state.request.send(),this.interval=setInterval(this.getWeatherData,1e3)}},{key:"getWeatherData",value:function(){if(0!==this.state.request.status){var e=JSON.parse(this.state.request.responseText);this.setState({temperature:e.properties.periods[0].temperature}),this.setState({wind:"Wind: "+e.properties.periods[0].windSpeed+" "+e.properties.periods[0].windDirection}),this.setState({forecast:e.properties.periods[0].shortForecast}),this.setState({imageUrl:e.properties.periods[0].icon}),this.setState({className:"weather rise-animation"}),clearInterval(this.interval)}}},{key:"render",value:function(){return n.a.createElement("div",{className:this.state.className},n.a.createElement("div",{id:"temp-and-icon-div"},n.a.createElement("img",{src:this.state.imageUrl,alt:"weather icon"}),n.a.createElement("p",null,this.state.temperature,"\xb0F")),n.a.createElement("p",null,"Kenner, LA"),n.a.createElement("p",null,this.state.forecast," "),n.a.createElement("p",null,this.state.wind))}}]),a}(n.a.Component);var h=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("img",{id:"bg-image",src:a(15),alt:"rainy-glass"}),n.a.createElement("div",{id:"grid"},n.a.createElement(p,null),n.a.createElement(d,null)))};i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.d1c6ac4b.chunk.js.map