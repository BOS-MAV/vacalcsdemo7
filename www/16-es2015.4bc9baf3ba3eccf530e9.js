(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"9AGB":function(t,e,n){"use strict";var r=n("yoF8");function o(t){return 0===t.length?r.identity:1===t.length?t[0]:function(e){return t.reduce((function(t,e){return e(t)}),e)}}e.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return o(t)},e.pipeFromArray=o},FWf1:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=n("pshJ"),i=n("GiSu"),s=n("zB/H"),c=n("p//D"),a=n("n3uD"),u=n("MkmW"),l=function(t){function e(n,r,o){var s=t.call(this)||this;switch(s.syncErrorValue=null,s.syncErrorThrown=!1,s.syncErrorThrowable=!1,s.isStopped=!1,arguments.length){case 0:s.destination=i.empty;break;case 1:if(!n){s.destination=i.empty;break}if("object"==typeof n){n instanceof e?(s.syncErrorThrowable=n.syncErrorThrowable,s.destination=n,n.add(s)):(s.syncErrorThrowable=!0,s.destination=new h(s,n));break}default:s.syncErrorThrowable=!0,s.destination=new h(s,n,r,o)}return s}return r(e,t),e.prototype[c.rxSubscriber]=function(){return this},e.create=function(t,n,r){var o=new e(t,n,r);return o.syncErrorThrowable=!1,o},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},e.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},e.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},e}(s.Subscription);e.Subscriber=l;var h=function(t){function e(e,n,r,s){var c,a=t.call(this)||this;a._parentSubscriber=e;var u=a;return o.isFunction(n)?c=n:n&&(c=n.next,r=n.error,s=n.complete,n!==i.empty&&(u=Object.create(n),o.isFunction(u.unsubscribe)&&a.add(u.unsubscribe.bind(u)),u.unsubscribe=a.unsubscribe.bind(a))),a._context=u,a._next=c,a._error=r,a._complete=s,a}return r(e,t),e.prototype.next=function(t){if(!this.isStopped&&this._next){var e=this._parentSubscriber;a.config.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},e.prototype.error=function(t){if(!this.isStopped){var e=this._parentSubscriber,n=a.config.useDeprecatedSynchronousErrorHandling;if(this._error)n&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(e.syncErrorThrowable)n?(e.syncErrorValue=t,e.syncErrorThrown=!0):u.hostReportError(t),this.unsubscribe();else{if(this.unsubscribe(),n)throw t;u.hostReportError(t)}}},e.prototype.complete=function(){var t=this;if(!this.isStopped){var e=this._parentSubscriber;if(this._complete){var n=function(){return t._complete.call(t._context)};a.config.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}},e.prototype.__tryOrUnsub=function(t,e){try{t.call(this._context,e)}catch(n){if(this.unsubscribe(),a.config.useDeprecatedSynchronousErrorHandling)throw n;u.hostReportError(n)}},e.prototype.__tryOrSetError=function(t,e,n){if(!a.config.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,n)}catch(r){return a.config.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=r,t.syncErrorThrown=!0,!0):(u.hostReportError(r),!0)}return!1},e.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},e}(l);e.SafeSubscriber=h},FiyT:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();e.SubjectSubscription=function(t){function e(e,n){var r=t.call(this)||this;return r.subject=e,r.subscriber=n,r.closed=!1,r}return r(e,t),e.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var t=this.subject,e=t.observers;if(this.subject=null,e&&0!==e.length&&!t.isStopped&&!t.closed){var n=e.indexOf(this.subscriber);-1!==n&&e.splice(n,1)}}},e}(n("zB/H").Subscription)},GMZp:function(t,e,n){"use strict";e.isObject=function(t){return null!==t&&"object"==typeof t}},GiSu:function(t,e,n){"use strict";var r=n("n3uD"),o=n("MkmW");e.empty={closed:!0,next:function(t){},error:function(t){if(r.config.useDeprecatedSynchronousErrorHandling)throw t;o.hostReportError(t)},complete:function(){}}},LBXl:function(t,e,n){"use strict";e.UnsubscriptionError=function(){function t(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(t,e){return e+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t}()},MkmW:function(t,e,n){"use strict";e.hostReportError=function(t){setTimeout((function(){throw t}),0)}},Mxlh:function(t,e,n){"use strict";e.ObjectUnsubscribedError=function(){function t(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return t.prototype=Object.create(Error.prototype),t}()},Q1FS:function(t,e,n){"use strict";var r=n("yx2s"),o=n("Xwq/"),i=n("zfKp"),s=n("9AGB"),c=n("n3uD");function a(t){if(t||(t=c.config.Promise||Promise),!t)throw new Error("no Promise impl found");return t}e.Observable=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(t,e,n){var r=this.operator,i=o.toSubscriber(t,e,n);if(i.add(r?r.call(i,this.source):this.source||c.config.useDeprecatedSynchronousErrorHandling&&!i.syncErrorThrowable?this._subscribe(i):this._trySubscribe(i)),c.config.useDeprecatedSynchronousErrorHandling&&i.syncErrorThrowable&&(i.syncErrorThrowable=!1,i.syncErrorThrown))throw i.syncErrorValue;return i},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){c.config.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=e),r.canReportError(t)?t.error(e):console.warn(e)}},t.prototype.forEach=function(t,e){var n=this;return new(e=a(e))((function(e,r){var o;o=n.subscribe((function(e){try{t(e)}catch(n){r(n),o&&o.unsubscribe()}}),r,e)}))},t.prototype._subscribe=function(t){var e=this.source;return e&&e.subscribe(t)},t.prototype[i.observable]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return 0===t.length?this:s.pipeFromArray(t)(this)},t.prototype.toPromise=function(t){var e=this;return new(t=a(t))((function(t,n){var r;e.subscribe((function(t){return r=t}),(function(t){return n(t)}),(function(){return t(r)}))}))},t.create=function(e){return new t(e)},t}()},"Xwq/":function(t,e,n){"use strict";var r=n("FWf1"),o=n("p//D"),i=n("GiSu");e.toSubscriber=function(t,e,n){if(t){if(t instanceof r.Subscriber)return t;if(t[o.rxSubscriber])return t[o.rxSubscriber]()}return t||e||n?new r.Subscriber(t,e,n):new r.Subscriber(i.empty)}},ds6q:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=n("Q1FS"),i=n("FWf1"),s=n("zB/H"),c=n("Mxlh"),a=n("FiyT"),u=n("p//D"),l=function(t){function e(e){var n=t.call(this,e)||this;return n.destination=e,n}return r(e,t),e}(i.Subscriber);e.SubjectSubscriber=l;var h=function(t){function e(){var e=t.call(this)||this;return e.observers=[],e.closed=!1,e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return r(e,t),e.prototype[u.rxSubscriber]=function(){return new l(this)},e.prototype.lift=function(t){var e=new b(this,this);return e.operator=t,e},e.prototype.next=function(t){if(this.closed)throw new c.ObjectUnsubscribedError;if(!this.isStopped)for(var e=this.observers,n=e.length,r=e.slice(),o=0;o<n;o++)r[o].next(t)},e.prototype.error=function(t){if(this.closed)throw new c.ObjectUnsubscribedError;this.hasError=!0,this.thrownError=t,this.isStopped=!0;for(var e=this.observers,n=e.length,r=e.slice(),o=0;o<n;o++)r[o].error(t);this.observers.length=0},e.prototype.complete=function(){if(this.closed)throw new c.ObjectUnsubscribedError;this.isStopped=!0;for(var t=this.observers,e=t.length,n=t.slice(),r=0;r<e;r++)n[r].complete();this.observers.length=0},e.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},e.prototype._trySubscribe=function(e){if(this.closed)throw new c.ObjectUnsubscribedError;return t.prototype._trySubscribe.call(this,e)},e.prototype._subscribe=function(t){if(this.closed)throw new c.ObjectUnsubscribedError;return this.hasError?(t.error(this.thrownError),s.Subscription.EMPTY):this.isStopped?(t.complete(),s.Subscription.EMPTY):(this.observers.push(t),new a.SubjectSubscription(this,t))},e.prototype.asObservable=function(){var t=new o.Observable;return t.source=this,t},e.create=function(t,e){return new b(t,e)},e}(o.Observable);e.Subject=h;var b=function(t){function e(e,n){var r=t.call(this)||this;return r.destination=e,r.source=n,r}return r(e,t),e.prototype.next=function(t){var e=this.destination;e&&e.next&&e.next(t)},e.prototype.error=function(t){var e=this.destination;e&&e.error&&this.destination.error(t)},e.prototype.complete=function(){var t=this.destination;t&&t.complete&&this.destination.complete()},e.prototype._subscribe=function(t){return this.source?this.source.subscribe(t):s.Subscription.EMPTY},e}(h);e.AnonymousSubject=b},mbIT:function(t,e,n){"use strict";e.isArray=function(){return Array.isArray||function(t){return t&&"number"==typeof t.length}}()},n3uD:function(t,e,n){"use strict";var r=!1;e.config={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){if(t){var e=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+e.stack)}else r&&console.log("RxJS: Back to a better error behavior. Thank you. <3");r=t},get useDeprecatedSynchronousErrorHandling(){return r}}},"p//D":function(t,e,n){"use strict";e.rxSubscriber=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),e.$$rxSubscriber=e.rxSubscriber},pshJ:function(t,e,n){"use strict";e.isFunction=function(t){return"function"==typeof t}},"sIv/":function(t,e,n){"use strict";n.r(e),n.d(e,"CalculatorModule",(function(){return W}));var r=n("ofXK"),o=n("3Pt+"),i=n("TEn/"),s=n("tyNb");class c{constructor(t){this.text=t.text,this.description=t.description,this.type=t.type,this.min=t.min,this.max=t.max,this.id=t.id,this.value=t.value,this.hasUnits=t.hasUnits,this.unitType=t.unitType,this.selectedUnit=t.selectedUnit,this.unitOptions=t.unitOptions,this.options=t.options,this.isRequired=t.isRequired}validate(){var t;switch(this.type){case"number":return this.valid=!this.isRequired&&!this.value||this.value&&(!this.hasUnits||this.selectedUnit&&this.unitOptions.some(t=>t.val===this.selectedUnit))&&(!this.min||this.value>=this.min)&&(!this.max||this.value<=this.max);case"select":return this.valid=!this.isRequired&&!this.value||this.value&&(null===(t=this.options)||void 0===t?void 0:t.some(t=>t.val&&t.val===this.value));case"toggle":return this.valid=void 0!==this.value&&(!0===this.value||!1===this.value)}}}class a{constructor(t){if(this.questions=[],this.id=t.id,this.description=t.description,this.values=t.values,this.name=t.name,t.questions)for(let e=0;e<t.questions.length;e++){const n=t.questions[e];n.id=n.id?n.id:this.id+"-q"+e,this.questions.push(new c(n))}}validate(){return!this.questions.some(t=>!t.validate())}}class u{constructor(t){if(this.questionGroups=[],this.name=t.name,this.description=t.description,this.calcFunction=t.calcFunction,this.id=t.id,this.resultsMarkup=t.resultsMarkup,t.questionGroups)for(let e=0;e<t.questionGroups.length;e++){const n=t.questionGroups[e];n.id=n.id?n.id:this.id+"-qg"+e,this.questionGroups.push(new a(n))}}validate(){return!this.questionGroups.some(t=>!t.validate())}}class l{}var h=n("fXoL");function b(t,e){var n=Math.pow(10,e),r=(Math.round(t*n)/n).toFixed(e);return parseFloat(r)}function p(t,e,n,r){return"Male"===n?"White"===r?e-t[0]:e-t[1]:"White"===r?e-t[2]:e-t[3]}let d=(()=>{class t{constructor(t,e){this._factor=new Map,this._specimen=new Map,this._convUnit=new Map,this._SI_Unit=new Map,this._vals=this.handleUnits(t),"HF"===e?this.hf_calc():"ASCVD"===e?this.calc_risk_ASCVD():"ASCVD_Diab"===e?this.calc_DiaASCVD():"test"===e&&(this._results=[100,50,4,1e4,75])}get calc_results(){return this._results}handleUnits(t){const e=[];for(const n in t)if(t.hasOwnProperty(n)){const r=t[n];e[n]="string"==typeof r&&r.indexOf(":")>=0?r.substring(0,r.indexOf(":")):r}return e}hf_calc(){var t,e,n,r,o,i,s,c,a,u,l,h=this._vals.age,d=this._vals.sex,f="Male"===d?0:1,g=this._vals.race,v="White"===g?0:1,m=this._vals.smoker,M=this._vals.SBP,y=this._vals.diabetes?1:0,_=this._vals.hypertension?1:0,w=this._vals.BMI,S=this._vals.height,C=this._vals.weight,x=this._vals.pMI?1:0,O=this._vals.aFib?1:0,E=this._vals.COPD?1:0,P=this._vals.scr,A=this._vals.pCAD?1:0,q=new Array(2),k=new Array(2),L=new Array(2),j=new Array(2),U=new Array(2),F=new Array(2),D=new Array(2),z=new Array(2),T=new Array(2),V=new Array(2),W=new Array(2),Z=new Array(2);t=[[2733e-7,3444e-7,3619e-7,4377e-7],[.001114,.001364,.001423,.001686],[.03517,.0355,.03558,.0342],[.001274,.001306,.001324,.001214],[.007448,.007378,.007772,.007733],[564e-7,554e-7,616e-7,609e-7],[76.21,86.17,80.08,93.05],[6098,7835,6733,9054]],e=[[2733e-7,3444e-7,3619e-7,4377e-7],[.001114,.001364,.001423,.001686],[.03517,.0355,.03558,.0342],[.1172,.1179,.1179,.1148],[.007448,.007378,.007772,.007733],[564e-7,554e-7,616e-7,609e-7],[76.21,86.17,80.08,93.05],[6098,7835,6733,9054]];let H=new Map;if(H.set(0,.2377),H.set(1,.46217),H.set(2,.24107),H.set(3,.31372),H.set(4,.2081),H.set(5,.72708),H.set(6,.13677),H.set(7,.46656),H.set(8,.24067),H.set(9,.54047),H.set(10,.30329),H.set(11,.53331),H.set(12,.2261),H.set(13,.81355),H.set(14,.53959),H.set(15,.82059),r=(n=Math.pow(h,-2))*Math.log(h),q[0]=p(t[0],n,d,g),q[1]=p(e[0],n,d,g),k[0]=p(t[1],r,d,g),k[1]=p(e[1],r,d,g),"Current"===m){let t="0"+f.toString()+v.toString()+"1",e="1"+f.toString()+v.toString()+"1";W[0]=H.get(parseInt(t,2)),W[1]=H.get(parseInt(e,2))}else if("Former"===m){let t="0"+f.toString()+v.toString()+"0",e="1"+f.toString()+v.toString()+"0";W[0]=H.get(parseInt(t,2)),W[1]=H.get(parseInt(e,2))}else W[0]=0,W[1]=0;var G;o=1/M,i=Math.pow(M,-2),0!=w&&w||(w=C/(G=S)/G*703),c=Math.pow(w,-1),s=Math.pow(w,-2),a=c*Math.log(w),"Female"===d&&P<=.7?(u=144*Math.pow(P/.7,-.329)*Math.pow(.993,h),"African American"===g&&(u*=1.159)):"Female"===d&&P>.7?(u=144*Math.pow(P/.7,-1.209)*Math.pow(.993,h),"African American"===g&&(u*=1.159)):"Male"===d&&P<=.9?(u=144*Math.pow(P/.9,-.411)*Math.pow(.993,h),"African American"===g&&(u*=1.159)):"Male"===d&&P>.9&&(u=144*Math.pow(P/.9,-1.209)*Math.pow(.993,h),"African American"===g&&(u*=1.159)),l=Math.pow(u,2),L[0]=p(t[2],c,d,g),L[1]=p(e[2],c,d,g),j[0]=p(t[3],s,d,g),j[1]=p(e[3],a,d,g),U[0]=p(t[4],o,d,g),U[1]=p(e[4],o,d,g),F[0]=p(t[5],i,d,g),F[1]=p(e[5],i,d,g),D[0]=p(t[6],u,d,g),D[1]=p(e[6],u,d,g),z[0]=p(t[7],l,d,g),z[1]=p(e[7],l,d,g),"Male"===d&&"White"===g?(T[0]=-23673*q[0]+5920.4*k[0]+.53733*y+-270.14*L[0]+3066*j[0]+-1049.4*U[0]+60782*F[0],T[0]+=.43238*_+.79943*x+.64536*O+W[0]+.73618*E+-.059238*D[0],T[0]+=3754e-7*z[0],T[1]=-36839*q[1]+10034*k[1]+.54141*y+319.93*L[1]+-143.43*j[1]+-903.06*U[1]+55221*F[1],T[1]+=.27418*_+.86422*x+.58366*A+.4946*O+W[1]+.37526*E+-.053074*D[1],T[1]+=3372e-7*z[1]):"Male"===d&&"African American"===g?(T[0]=10787*q[0]+-3908.1*k[0]+.63235*y+-234.58*L[0]+2750.4*j[0]+-1217*U[0]+70479*F[0],T[0]+=.48128*_+.98355*x+.73928*O+W[0]+.61387*E+-.053562*D[0],T[0]+=2814e-7*z[0],T[1]=-12596*q[1]+3139.3*k[1]+.46185*y+258.9*L[1]+-113.95*j[1]+-967.59*U[1]+54779*F[1],T[1]+=.31285*_+.89877*x+.53809*A+.65053*O+W[1]+.26295*E+-.042165*D[1],T[1]+=2299e-7*z[1]):"Female"===d&&"White"===g?(T[0]=13951*q[0]+-5302.1*k[0]+.52417*y+-248*L[0]+2843.3*j[0]+-959.22*U[0]+58317*F[0],T[0]+=.74244*_+.91079*x+.58403*O+W[0]+.56266*E+-.059363*D[0],T[0]+=3701e-7*z[0],T[1]=-26532*q[1]+6659.8*k[1]+.58104*y+168.13*L[1]+-75.397*j[1]+-621.61*U[1]+28797*F[1],T[1]+=.41315*_+1.0276*x+.50868*A+.91438*O+W[1]+.43042*E+-.056461*D[1],T[1]+=3536e-7*z[1]):"Female"===d&&"African American"===g&&(T[0]=64403*q[0]+-19488*k[0]+1.0977*y+-159.4*L[0]+1857.7*j[0]+-1545.1*U[0]+93175*F[0],T[0]+=.57702*_+.48945*x+.74776*O+W[0]+.6554*E+-.041395*D[0],T[0]+=1988e-7*z[0],T[1]=-25884*q[1]+7016.3*k[1]+.63186*y+20.933*L[1]+-15.256*j[1]+-1763.4*U[1]+103730*F[1],T[1]+=.29358*_+.81117*x+.65882*A+1.7529*O+W[1]+.40719*E+-.043111*D[1],T[1]+=2094e-7*z[1]),V[0]=Math.exp(T[0]),V[1]=Math.exp(T[1]),"Male"===d&&"White"===g?(Z[0]=1-Math.pow(.9876515,V[0]),Z[1]=1-Math.pow(.9815184,V[1])):"Male"===d&&"African American"===g?(Z[0]=1-Math.pow(.9874179,V[0]),Z[1]=1-Math.pow(.977275,V[1])):"Female"===d&&"White"===g?(Z[0]=1-Math.pow(.9923794,V[0]),Z[1]=1-Math.pow(.9936674,V[1])):"Female"===d&&"African American"===g&&(Z[0]=1-Math.pow(.9936079,V[0]),Z[1]=1-Math.pow(.9941458,V[1])),Z[0]=b(100*Z[0],2),Z[1]=b(100*Z[1],2),this._results=Z}calc_risk_ASCVD(){var t,e=this._vals.age,n="Male"===this._vals.sex?0:1,r="White"===this._vals.race?0:1,o=this._vals.diabetes?1:0,i=this._vals.smoker?1:0,s=this._vals.hypertension?1:0,c=this._vals.statin?1:0,a=this._vals.SBP,u=this._vals.totchl,l=this._vals.hdl,h=new Array(1);u=u>150&&u<201?.01114:u>200&&u<251?.15278:u>250?.45186:0,t=Math.exp(e/5*.20551+.46515*n+-.17661*r+.4824*o+.41682*i+u+l/10*-.07256+a/10*.08852+.31875*s+-.07573*c-2.64999),h[0]=1-Math.pow(.99047,t),h[0]=b(100*h[0],2),this._results=h}calc_DiaASCVD(){var t,e,n,r,o,i,s,c,a,u,l,h,p,d,f,g,v,m,M,y,_,w=this._vals.age,S="Male"===this._vals.sex?0:1,C="White"===this._vals.race?0:1,x=this._vals.smoker?1:0,O=this._vals.diabetes?1:0,E=this._vals.statin?1:0,P=this._vals.SBP,A=this._vals.totchl,q=this._vals.hdl,k=this._vals.bpmed?1:0,L=this._vals.a1c,j=this._vals.egfr,U=this._vals.insulin?1:0,F=this._vals.sulfonyl?1:0,D=this._vals.otherDiab?1:0,z=this._vals.microAlb,T=new Array(4);t=18.9496*Math.log(w),e=Math.log(w)*Math.log(w)*-1.82065,n=-.21382*S,r=.003490576*C,o=3.90106*x,s=1.38594*Math.log(A),c=Math.log(A)*Math.log(w)*-.17667,a=.42114*Math.log(q),u=Math.log(q)*Math.log(w)*-.17799,l=Math.log(P)*k*.62768,h=Math.log(w)*Math.log(P)*k*-.14554,p=Math.log(w)*x*-.9256,i=-.033734*E,1===O?(d=.92618*Math.log(L),f=-.35818*Math.log(j),g=.281*U,v=.10185*F,m=-.080862*D,M=.002264563*z):(d=0,f=0,g=0,v=0,m=0,M=0),y=t+e+n+r+o+s+c+a+u+l+h+p+i+d+f+g+v+m+M,_=Math.exp(y-49.7547),T[0]=1-Math.pow(.94992,_),T[0]=b(100*T[0],2),t=33.5917*Math.log(w),e=Math.log(w)*Math.log(w)*-3.9584,n=-.14536*S,r=-.26031*C,o=2.15214*x,s=1.70872*Math.log(A),c=Math.log(A)*Math.log(w)*-.2292,a=-1.7841*Math.log(q),u=Math.log(q)*Math.log(w)*.29576,l=Math.log(P)*k*.87932,h=Math.log(w)*Math.log(P)*k*-.21101,p=Math.log(w)*x*-.47557,i=.037998*E,1===O?(d=.86555*Math.log(L),f=-.43044*Math.log(j),g=.27731*U,v=.082256*F,m=-.059207*D,M=.001920131*z):(d=0,f=0,g=0,v=0,m=0,M=0),y=t+e+n+r+o+s+c+a+u+l+h+p+i+d+f+g+v+m+M,_=Math.exp(y-72.9997),T[1]=1-Math.pow(.97855,_),t=25.7558*Math.log(w),e=Math.log(w)*Math.log(w)*-2.67664,n=-.13267*S,r=.26215*C,o=4.29949*x,s=-.17577*Math.log(A),c=Math.log(A)*Math.log(w)*.19084,a=1.88671*Math.log(q),u=Math.log(q)*Math.log(w)*-.50053,l=Math.log(P)*k*.81686,h=Math.log(w)*Math.log(P)*k*-.18904,p=Math.log(w)*x*-1.01281,i=-.053618*E,1===O?(d=1.08183*Math.log(L),f=-.16523*Math.log(j),g=.17974*U,v=.080476*F,m=-.074728*D,M=.002229916*z):(d=0,f=0,g=0,v=0,m=0,M=0),y=t+e+n+r+o+s+c+a+u+l+h+p+i+d+f+g+v+m+M,_=Math.exp(y-64.6638),T[2]=1-Math.pow(.98002,_),T[2]=b(100*T[2],2),t=-15.5846*Math.log(w),e=Math.log(w)*Math.log(w)*3.01077,n=-.31028*S,r=.016973*C,o=3.06123*x,s=.40314*Math.log(A),c=Math.log(A)*Math.log(w)*-.009322967,a=5.91861*Math.log(q),u=Math.log(q)*Math.log(w)*-1.44213,l=Math.log(P)*k*-.13179,h=Math.log(w)*Math.log(P)*k*.0373375,p=Math.log(w)*x*-.76306,i=-.16998*E,1===O?(d=.74074*Math.log(L),f=-.59522*Math.log(j),g=.44208*U,v=.19415*F,m=-.13477*D,M=.003061906*z):(d=0,f=0,g=0,v=0,m=0,M=0),y=t+e+n+r+o+s+c+a+u+l+h+p+i+d+f+g+v+m+M,_=Math.exp(y-12.3901),T[3]=1-Math.pow(.98686,_),T[3]=b(100*T[3],2),this._results=T}}return t.\u0275fac=function(e){return new(e||t)(h.Qb(Object),h.Qb(String))},t.\u0275prov=h.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var f=n("Uajm"),g=n("ds6q");let v=(()=>{class t{constructor(){this.submitClick=new g.Subject}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=h.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),m=(()=>{class t{constructor(){this.inputValueChange=new h.n}onChange(t){this.model.value=t,this.inputValueChange.emit({val:t}),setTimeout(()=>{this.valid=this.model.validate()},2e3)}ngOnInit(){this.valid=!0,"toggle"!==this.model.type||this.model.value||(this.model.value=!1)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=h.Eb({type:t,inputs:{model:"model"},outputs:{inputValueChange:"inputValueChange"}}),t})();function M(t,e){if(1&t&&(h.Mb(0,"ion-item"),h.Mb(1,"ion-label"),h.ic(2),h.Lb(),h.Kb(3,"ion-radio",3),h.Lb()),2&t){const t=e.$implicit;h.zb(2),h.jc(t.text),h.zb(1),h.Zb("value",t.val)}}const y=function(t){return{error:t}};let _=(()=>{class t extends m{constructor(t){super(),t.submitClick.subscribe(()=>{this.valid=this.model.validate()})}}return t.\u0275fac=function(e){return new(e||t)(h.Jb(v))},t.\u0275cmp=h.Db({type:t,selectors:[["app-input-select"]],inputs:{model:"model"},features:[h.wb],decls:6,vars:6,consts:[[3,"value","ionChange"],[1,"ion-text-wrap",3,"ngClass"],[4,"ngFor","ngForOf"],["slot","start",3,"value"]],template:function(t,e){1&t&&(h.Mb(0,"ion-list"),h.Mb(1,"ion-radio-group",0),h.Ub("ionChange",(function(t){return e.onChange(t.target.value)})),h.Mb(2,"ion-list-header"),h.Mb(3,"ion-label",1),h.ic(4),h.Lb(),h.Lb(),h.hc(5,M,4,2,"ion-item",2),h.Lb(),h.Lb()),2&t&&(h.zb(1),h.ac("value",e.model.value),h.zb(2),h.Zb("ngClass",h.bc(4,y,!e.valid)),h.zb(1),h.jc(e.model.text),h.zb(1),h.Zb("ngForOf",e.model.options))},directives:[i.n,i.t,i.H,i.o,i.m,r.h,r.i,i.l,i.s,i.F],styles:[".error[_ngcontent-%COMP%]{color:#c4262e}.error[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{border-color:#c4262e;border-width:1px}ion-input[_ngcontent-%COMP%]{text-align:right;padding-right:5px}"]}),t})();function w(t,e){if(1&t&&(h.Mb(0,"ion-select-option",6),h.ic(1),h.Lb()),2&t){const t=e.$implicit;h.Zb("value",t.val),h.zb(1),h.jc(t.text)}}function S(t,e){if(1&t){const t=h.Nb();h.Mb(0,"ion-select",4),h.Ub("input",(function(e){return h.dc(t),h.Wb().onUnitChange(e.target.value)})),h.hc(1,w,2,2,"ion-select-option",5),h.Lb()}if(2&t){const t=h.Wb();h.ac("value",t.model.selectedUnit),h.zb(1),h.Zb("ngForOf",t.model.unitOptions)}}const C=function(t){return{error:t}};let x=(()=>{class t extends m{constructor(t){super(),t.submitClick.subscribe(()=>{this.valid=this.model.validate()})}onUnitChange(t){this.model.selectedUnit=t,this.inputValueChange.emit({unit:t})}}return t.\u0275fac=function(e){return new(e||t)(h.Jb(v))},t.\u0275cmp=h.Db({type:t,selectors:[["app-input-number"]],inputs:{model:"model"},features:[h.wb],decls:5,vars:7,consts:[[3,"ngClass"],[1,"ion-text-wrap"],["type","number","min","{model.min}","max","{model.max}",3,"id","value","input"],[3,"value","input",4,"ngIf"],[3,"value","input"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,e){1&t&&(h.Mb(0,"ion-item",0),h.Mb(1,"ion-label",1),h.ic(2),h.Lb(),h.Mb(3,"ion-input",2),h.Ub("input",(function(t){return e.onChange(t.target.value)})),h.Lb(),h.hc(4,S,2,2,"ion-select",3),h.Lb()),2&t&&(h.Zb("ngClass",h.bc(5,C,!e.valid)),h.zb(2),h.jc(e.model.text),h.zb(1),h.ac("id",e.model.id),h.Zb("value",e.model.value),h.zb(1),h.Zb("ngIf",e.model.hasUnits))},directives:[i.l,r.h,i.m,i.k,i.D,r.j,i.v,i.H,r.i,i.w],styles:[".error[_ngcontent-%COMP%]{color:#c4262e}.error[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{border-color:#c4262e;border-width:1px}ion-input[_ngcontent-%COMP%]{text-align:right;padding-right:5px}"]}),t})();const O=function(t){return{error:t}};let E=(()=>{class t extends m{constructor(t){super(),t.submitClick.subscribe(()=>{this.valid=this.model.validate()})}}return t.\u0275fac=function(e){return new(e||t)(h.Jb(v))},t.\u0275cmp=h.Db({type:t,selectors:[["app-input-toggle"]],inputs:{model:"model"},features:[h.wb],decls:4,vars:6,consts:[[1,"ion-text-wrap",3,"ngClass"],[3,"id","checked","ionChange"]],template:function(t,e){1&t&&(h.Mb(0,"ion-item"),h.Mb(1,"ion-label",0),h.ic(2),h.Lb(),h.Mb(3,"ion-toggle",1),h.Ub("ionChange",(function(t){return e.onChange(t.target.checked)})),h.Lb(),h.Lb()),2&t&&(h.zb(1),h.Zb("ngClass",h.bc(4,O,!e.valid)),h.zb(1),h.jc(e.model.text),h.zb(1),h.ac("id",e.model.id),h.ac("checked",e.model.value))},directives:[i.l,i.m,r.h,i.z,i.a],styles:[".error[_ngcontent-%COMP%]{color:#c4262e}.error[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{border-color:#c4262e;border-width:1px}ion-input[_ngcontent-%COMP%]{text-align:right;padding-right:5px}"]}),t})();function P(t,e){if(1&t){const t=h.Nb();h.Mb(0,"app-input-select",3),h.Ub("inputValueChange",(function(e){return h.dc(t),h.Wb().onChange(e)})),h.Lb()}if(2&t){const t=h.Wb();h.Zb("model",t.model)}}function A(t,e){if(1&t){const t=h.Nb();h.Mb(0,"app-input-number",3),h.Ub("inputValueChange",(function(e){return h.dc(t),h.Wb().onChange(e)})),h.Lb()}if(2&t){const t=h.Wb();h.Zb("model",t.model)}}function q(t,e){if(1&t){const t=h.Nb();h.Mb(0,"app-input-toggle",3),h.Ub("inputValueChange",(function(e){return h.dc(t),h.Wb().onChange(e)})),h.Lb()}if(2&t){const t=h.Wb();h.Zb("model",t.model)}}let k=(()=>{class t{constructor(){this.questionValueChange=new h.n}onChange(t){t.val?this.model.value=t.val:t.unit&&(this.model.selectedUnit=t.unit),this.questionValueChange.emit(this.model)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=h.Db({type:t,selectors:[["app-question"]],inputs:{model:"model"},outputs:{questionValueChange:"questionValueChange"},decls:5,vars:4,consts:[[1,"question-div"],[3,"ngSwitch"],[3,"model","inputValueChange",4,"ngSwitchCase"],[3,"model","inputValueChange"]],template:function(t,e){1&t&&(h.Mb(0,"div",0),h.Mb(1,"div",1),h.hc(2,P,1,1,"app-input-select",2),h.hc(3,A,1,1,"app-input-number",2),h.hc(4,q,1,1,"app-input-toggle",2),h.Lb(),h.Lb()),2&t&&(h.zb(1),h.Zb("ngSwitch",null==e.model?null:e.model.type),h.zb(1),h.Zb("ngSwitchCase","select"),h.zb(1),h.Zb("ngSwitchCase","number"),h.zb(1),h.Zb("ngSwitchCase","toggle"))},directives:[r.k,r.l,_,x,E],styles:[""]}),t})();function L(t,e){if(1&t){const t=h.Nb();h.Mb(0,"div"),h.Mb(1,"app-question",2),h.Ub("questionValueChange",(function(e){return h.dc(t),h.Wb().onChange(e)})),h.Lb(),h.Lb()}if(2&t){const t=e.$implicit;h.zb(1),h.Zb("model",t)}}let j=(()=>{class t{constructor(){this.questionGroupValueChange=new h.n}onChange(t){this.model.questions.forEach(e=>e.id===t.id?t:e),this.questionGroupValueChange.emit(this.model)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=h.Db({type:t,selectors:[["app-question-group"]],inputs:{model:"model"},outputs:{questionGroupValueChange:"questionGroupValueChange"},decls:6,vars:2,consts:[[1,"question-group-card"],[4,"ngFor","ngForOf"],[3,"model","questionValueChange"]],template:function(t,e){1&t&&(h.Mb(0,"ion-card",0),h.Mb(1,"ion-card-header"),h.Mb(2,"ion-card-title"),h.ic(3),h.Lb(),h.Lb(),h.Mb(4,"ion-card-content"),h.hc(5,L,2,1,"div",1),h.Lb(),h.Lb()),2&t&&(h.zb(3),h.jc(e.model.name),h.zb(2),h.Zb("ngForOf",e.model.questions))},directives:[i.e,i.g,i.h,i.f,r.i,k],styles:["ion-card[_ngcontent-%COMP%]{--ion-background-color:#fff}"]}),t})(),U=(()=>{class t{constructor(){}ngOnInit(){this.renderedHTML=this.stringReplacement()}stringReplacement(){let t=this.model.markup||"<p>test 0:{0} 1:{1} 2:{2}</p>";this.model.results=this.model.results||[];for(let e=0;e<this.model.results.length;e++)t=t.replace("{"+e+"}",this.model.results[e].toString());return t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=h.Db({type:t,selectors:[["app-calculator-results"]],inputs:{model:"model"},decls:2,vars:1,consts:[[3,"innerHTML"]],template:function(t,e){1&t&&(h.Mb(0,"ion-card"),h.Kb(1,"ion-card-content",0),h.Lb()),2&t&&(h.zb(1),h.Zb("innerHTML",e.renderedHTML,h.ec))},directives:[i.e,i.f],styles:["ion-card[_ngcontent-%COMP%]{--ion-background-color:#fff}"]}),t})();function F(t,e){if(1&t){const t=h.Nb();h.Mb(0,"div",10),h.Mb(1,"app-question-group",11),h.Ub("questionGroupValueChange",(function(e){return h.dc(t),h.Wb(2).onChange(e)})),h.Lb(),h.Lb()}if(2&t){const t=e.$implicit;h.zb(1),h.Zb("model",t)}}function D(t,e){if(1&t){const t=h.Nb();h.Mb(0,"div",5),h.Mb(1,"div",6),h.Mb(2,"ion-card"),h.Mb(3,"ion-card-header"),h.Mb(4,"h2"),h.ic(5),h.Lb(),h.Lb(),h.Mb(6,"ion-card-content"),h.Mb(7,"p",7),h.ic(8),h.Lb(),h.Lb(),h.Lb(),h.hc(9,F,2,1,"div",8),h.Mb(10,"ion-button",9),h.Ub("click",(function(){return h.dc(t),h.Wb().onConfirmClick()})),h.ic(11,"Confirm and see results"),h.Lb(),h.Lb(),h.Lb()}if(2&t){const t=h.Wb();h.zb(5),h.jc(t.model.name),h.zb(3),h.jc(t.model.description),h.zb(1),h.Zb("ngForOf",t.model.questionGroups)}}function z(t,e){if(1&t){const t=h.Nb();h.Mb(0,"div"),h.Kb(1,"app-calculator-results",12),h.Mb(2,"ion-button",9),h.Ub("click",(function(){return h.dc(t),h.Wb().onBackClick()})),h.ic(3,"Adjust answers"),h.Lb(),h.Mb(4,"ion-button",9),h.Ub("click",(function(){return h.dc(t),h.Wb().onRestartClick()})),h.ic(5,"Start over"),h.Lb(),h.Lb()}if(2&t){const t=h.Wb();h.zb(1),h.Zb("model",t.resultsModel)}}const T=[{path:"",component:(()=>{class t{constructor(t,e,n){this.activatedRoute=t,this.sharedEvents=e,this.router=n}ngOnInit(){this.calculatorId=this.activatedRoute.snapshot.paramMap.get("id"),this.model=new u(this.getCalculator()),this.calculatorMode=!0,this.resultsModel=new l,this.resultsModel.markup=this.model.resultsMarkup}getCalculator(){return f.a.filter(t=>t.id===this.calculatorId).pop()}onChange(t){this.model.questionGroups.forEach(e=>e.questions=e.id===t.id?t.questions:e.questions)}onBackClick(){this.calculatorMode=!0}onRestartClick(){this.model=new u(this.getCalculator()),this.calculatorMode=!0}onConfirmClick(){if(!this.model.validate())return void this.sharedEvents.submitClick.next();const t={};for(const n of this.model.questionGroups)for(const e of n.questions)e.value&&(t[e.id]=e.hasUnits?e.value+":"+e.selectedUnit:e.value);const e=new d(t,this.model.id);this.resultsModel.results=e.calc_results,this.calculatorMode=!1}}return t.\u0275fac=function(e){return new(e||t)(h.Jb(s.a),h.Jb(v),h.Jb(s.g))},t.\u0275cmp=h.Db({type:t,selectors:[["app-calculator-page"]],decls:9,vars:5,consts:[[3,"translucent"],["slot","start"],[3,"fullscreen"],["id","calculator-main",4,"ngIf"],[4,"ngIf"],["id","calculator-main"],[1,"shown"],[2,"text-align","left"],["class","calculator-question-groups",4,"ngFor","ngForOf"],["expand","block",3,"click"],[1,"calculator-question-groups"],[3,"model","questionGroupValueChange"],[3,"model"]],template:function(t,e){1&t&&(h.Mb(0,"ion-header",0),h.Mb(1,"ion-toolbar"),h.Mb(2,"ion-buttons",1),h.Kb(3,"ion-menu-button"),h.Lb(),h.Mb(4,"ion-title"),h.ic(5),h.Lb(),h.Lb(),h.Lb(),h.Mb(6,"ion-content",2),h.hc(7,D,12,3,"div",3),h.hc(8,z,6,1,"div",4),h.Lb()),2&t&&(h.Zb("translucent",!0),h.zb(5),h.jc(e.model.name),h.zb(1),h.Zb("fullscreen",!0),h.zb(1),h.Zb("ngIf",e.calculatorMode),h.zb(1),h.Zb("ngIf",!e.calculatorMode))},directives:[i.j,i.A,i.d,i.q,i.y,i.i,r.j,i.e,i.g,i.f,r.i,i.c,j,U],styles:["ion-button[_ngcontent-%COMP%]{color:#f5f5f5;margin-bottom:5px}#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}ion-content[_ngcontent-%COMP%]{--ion-background-color:#bde18a}ion-card[_ngcontent-%COMP%]{--ion-background-color:#fff}"]}),t})()}];let V=(()=>{class t{}return t.\u0275mod=h.Hb({type:t}),t.\u0275inj=h.Gb({factory:function(e){return new(e||t)},imports:[[s.i.forChild(T)],s.i]}),t})(),W=(()=>{class t{}return t.\u0275mod=h.Hb({type:t}),t.\u0275inj=h.Gb({factory:function(e){return new(e||t)},imports:[[r.b,o.a,i.B,V]]}),t})()},yoF8:function(t,e,n){"use strict";e.identity=function(t){return t}},yx2s:function(t,e,n){"use strict";var r=n("FWf1");e.canReportError=function(t){for(;t;){var e=t.destination;if(t.closed||t.isStopped)return!1;t=e&&e instanceof r.Subscriber?e:null}return!0}},"zB/H":function(t,e,n){"use strict";var r=n("mbIT"),o=n("GMZp"),i=n("pshJ"),s=n("LBXl");function c(t){return t.reduce((function(t,e){return t.concat(e instanceof s.UnsubscriptionError?e.errors:e)}),[])}e.Subscription=function(){function t(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._unsubscribe=t)}var e;return t.prototype.unsubscribe=function(){var e;if(!this.closed){var n=this._parentOrParents,a=this._unsubscribe,u=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof t)n.remove(this);else if(null!==n)for(var l=0;l<n.length;++l)n[l].remove(this);if(i.isFunction(a))try{a.call(this)}catch(p){e=p instanceof s.UnsubscriptionError?c(p.errors):[p]}if(r.isArray(u)){l=-1;for(var h=u.length;++l<h;){var b=u[l];if(o.isObject(b))try{b.unsubscribe()}catch(p){e=e||[],p instanceof s.UnsubscriptionError?e=e.concat(c(p.errors)):e.push(p)}}}if(e)throw new s.UnsubscriptionError(e)}},t.prototype.add=function(e){var n=e;if(!e)return t.EMPTY;switch(typeof e){case"function":n=new t(e);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof t)){var r=n;(n=new t)._subscriptions=[r]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}var o=n._parentOrParents;if(null===o)n._parentOrParents=this;else if(o instanceof t){if(o===this)return n;n._parentOrParents=[o,this]}else{if(-1!==o.indexOf(this))return n;o.push(this)}var i=this._subscriptions;return null===i?this._subscriptions=[n]:i.push(n),n},t.prototype.remove=function(t){var e=this._subscriptions;if(e){var n=e.indexOf(t);-1!==n&&e.splice(n,1)}},t.EMPTY=((e=new t).closed=!0,e),t}()},zfKp:function(t,e,n){"use strict";e.observable=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}()}}]);