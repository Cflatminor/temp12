/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright В© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright В© 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */











 /*
  * jQuery Easing Compatibility v1 - http://gsgd.co.uk/sandbox/jquery.easing.php
  *
  * Adds compatibility for applications that use the pre 1.2 easing names
  *
  * Copyright (c) 2007 George Smith
  * Licensed under the MIT License:
  *   http://www.opensource.org/licenses/mit-license.php
  */

 jQuery.extend( jQuery.easing,
 {
 	easeIn: function (x, t, b, c, d) {
 		return jQuery.easing.easeInQuad(x, t, b, c, d);
 	},
 	easeOut: function (x, t, b, c, d) {
 		return jQuery.easing.easeOutQuad(x, t, b, c, d);
 	},
 	easeInOut: function (x, t, b, c, d) {
 		return jQuery.easing.easeInOutQuad(x, t, b, c, d);
 	},
 	expoin: function(x, t, b, c, d) {
 		return jQuery.easing.easeInExpo(x, t, b, c, d);
 	},
 	expoout: function(x, t, b, c, d) {
 		return jQuery.easing.easeOutExpo(x, t, b, c, d);
 	},
 	expoinout: function(x, t, b, c, d) {
 		return jQuery.easing.easeInOutExpo(x, t, b, c, d);
 	},
 	bouncein: function(x, t, b, c, d) {
 		return jQuery.easing.easeInBounce(x, t, b, c, d);
 	},
 	bounceout: function(x, t, b, c, d) {
 		return jQuery.easing.easeOutBounce(x, t, b, c, d);
 	},
 	bounceinout: function(x, t, b, c, d) {
 		return jQuery.easing.easeInOutBounce(x, t, b, c, d);
 	},
 	elasin: function(x, t, b, c, d) {
 		return jQuery.easing.easeInElastic(x, t, b, c, d);
 	},
 	elasout: function(x, t, b, c, d) {
 		return jQuery.easing.easeOutElastic(x, t, b, c, d);
 	},
 	elasinout: function(x, t, b, c, d) {
 		return jQuery.easing.easeInOutElastic(x, t, b, c, d);
 	},
 	backin: function(x, t, b, c, d) {
 		return jQuery.easing.easeInBack(x, t, b, c, d);
 	},
 	backout: function(x, t, b, c, d) {
 		return jQuery.easing.easeOutBack(x, t, b, c, d);
 	},
 	backinout: function(x, t, b, c, d) {
 		return jQuery.easing.easeInOutBack(x, t, b, c, d);
 	}
 });






 /*
  * based off of Louis-Rémi Babé rotate plugin (https://github.com/lrbabe/jquery.rotate.js)
  *
  * cssTransforms: jQuery cssHooks adding a cross browser, animatible transforms
  *
  * Author Bobby Schultz
  *
  * https://github.com/puppybits/QTransform/blob/master/example.html
  */
  //
 (function($) {

     var div = document.createElement('div'),
       divStyle = div.style;

     //give props to those who dont have them
     $.cssProps.transform =
         divStyle.MozTransform === '' ? 'MozTransform' :
         (divStyle.msTransform === '' ? 'msTransform' :
         (divStyle.WebkitTransform === '' ? 'WebkitTransform' :
         (divStyle.OTransform === '' ? 'OTransform' :
         (divStyle.Transform === '' ? 'Transform' :
         false))));
     $.cssProps.transformOrigin =
         divStyle.MozTransformOrigin === '' ? 'MozTransformOrigin' :
         (divStyle.msTransformOrigin === '' ? 'msTransformOrigin' :
         (divStyle.WebkitTransformOrigin === '' ? 'WebkitTransformOrigin' :
         (divStyle.OTransformOrigin === '' ? 'OTransformOrigin' :
         (divStyle.TransformOrigin === '' ? 'TransformOrigin' :
         false))));

     //define supported or not
     $.support.transform = $.cssProps.transform !== false || divStyle.filter === '' ? true : false;
     $.support.transformOrigin = $.cssProps.transformOrigin !== false ? true : false;

     //if ONLY IE matrixes are supported (IE9 beta6 will use css3)
     $.support.matrixFilter = (divStyle.filter === '' && $.cssProps.transform === false) ?
         true : false;
     div = null;

     //stop if no form of transforms are supported
     if($.support.transform === false)
         return;

     //opt out of letting jquery handle the units for custom setters/getters
     $.cssNumber.skew =
     $.cssNumber.skewX =
     $.cssNumber.skewY =
     $.cssNumber.scale =
     $.cssNumber.scaleX =
     $.cssNumber.scaleY =
     $.cssNumber.rotate =
     $.cssNumber.matrix = true;

     $.cssNumber.transformOrigin =
     $.cssNumber.transformOriginX =
     $.cssNumber.transformOriginY = true;


     if($.support.matrixFilter) {
         $.cssNumber.transformOrigin =
         $.cssNumber.transformOriginX =
         $.cssNumber.transformOriginY = true;

         $.cssProps.transformOrigin = 'matrixFilter';
     }

     $.cssHooks.transform = {
         set: function(elem, val, unit) {
             if($.support.matrixFilter) {
                 elem.style.filter = [val].join('');
             } else {
                 elem.style[$.cssProps.transform] = val+'%';
             }
         },
         get: function(elem, computed) {
             if($.support.matrixFilter) {
                 return elem.style.filter;
             } else {
                 return elem.style[$.cssProps.transform];
             }
         }
     };

     $.cssHooks.transformOrigin = {
         set: function(elem, val, unit) {
             if(!$.support.matrixFilter) {
                 val = (typeof val === 'string') ? val : val+(unit || '%');
                 elem.style[$.cssProps.transformOrigin] = val;
             } else {
                 val = val.split(",");
                 $.cssHooks.transformOriginX.set( elem, val[0] );
                 if(val.length > 1) {
                     $.cssHooks.transformOriginY.set( elem, val[1] );
                 }
             }
         },
         get: function(elem, computed) {
             if(!$.support.matrixFilter) {
                 return elem.style[$.cssProps.transformOrigin];
             } else {
                 var originX = $.data( elem, 'transformOriginX' );
                 var originY = $.data( elem, 'transformOriginY' );
                 return originX && originY && originX === originY ? originX : '50%';
             }
         }
     };

     $.fx.step.transformOrigin = function( fx ) {
         $.cssHooks.transformOrigin.set( fx.elem, fx.now, fx.unit);
      };

     $.cssHooks.transformOriginX = {
         set: function(elem, val, unit) {
             if(!$.support.matrixFilter) {
                 val = (typeof val === 'string') ? val : val+(unit || '%');
                 elem.style[$.cssProps.transformOrigin+'X'] = val;
             } else {
                 $.data( elem, 'transformOriginX', unit ? val+unit : val );
                 setIEMatrix(elem);
             }
         },
         get: function(elem, computed) {
             if(!$.support.matrixFilter) {
                 return elem.style[$.cssProps.transformOrigin+'X'];
             } else {
                 var originX = $.data( elem, 'transformOriginX' );
                 switch(originX) {
                     case 'left': return '0%';
                     case 'center': return '50%';
                     case 'right': return '100%';
                 }
                 return originX ? originX : '50%';
             }
         }
     };

     $.fx.step.transformOriginX = function( fx ) {
         $.cssHooks.transformOriginX.set( fx.elem, fx.now, fx.unit);
      };

     $.cssHooks.transformOriginY = {
         set: function(elem, val, unit) {
             if(!$.support.matrixFilter) {
                 val = (typeof val === 'string') ? val : val+(unit || '%');
                 elem.style[$.cssProps.transformOrigin+'Y'] = val;
             } else {
                 $.data( elem, 'transformOriginY', unit ? val+unit : val );
                 setIEMatrix(elem);
             }
         },
         get: function(elem, computed) {
             if(!$.support.matrixFilter) {
                 return elem.style[$.cssProps.transformOrigin+'Y'];
             } else {
                 var originY = $.data( elem, 'transformOriginY' );
                 switch(originY) {
                     case 'top': return '0%';
                     case 'center': return '50%';
                     case 'bottom': return '100%';
                 }
                 return originY ? originY : '50%';
             }
         }
     };

     $.fx.step.transformOriginY = function( fx ) {
         $.cssHooks.transformOriginY.set( fx.elem, fx.now, fx.unit);
      };

     //create hooks for css transforms
     var rtn = function(v){return v;};
     var xy = [['X','Y'],'X','Y'];
     var abcdxy = [['A','B','C','D','X','Y'],'A','B','C','D','X','Y']
     var props = [
         {prop: 'rotate',
             matrix: [function(v){ return Math.cos(v); },
                 function(v){ return -Math.sin(v); },
                 function(v){ return Math.sin(v); },
                 function(v){ return Math.cos(v); } ],
             unit: 'rad',
             subProps: [''],
             fnc: toRadian},
         {prop: 'scale',
             matrix: [[rtn,0,0,rtn],
                 [rtn,0,0,1],
                 [1,0,0,rtn]],
             unit: '',
             subProps: xy,
             fnc: parseFloat,
             _default:1},
         {prop: 'skew',
             matrix: [[1,rtn,rtn,1],
                 [1,rtn,0,1],
                 [1,0,rtn,1]],
             unit: 'rad',
             subProps: xy,
             fnc: toRadian},
         {prop: 'translate',
             matrix: [[1,0,0,1,rtn,rtn],
                 [1,0,0,1,rtn,0],
                 [1,0,0,1,0,rtn]],
             standardUnit: 'px',
             subProps: xy,
             fnc: parseFloat},
         {prop: 'matrix',
             matrix: [[rtn,rtn,rtn,rtn,rtn,rtn],
                 [rtn,0,0,1,0,0],
                 [1,rtn,0,1,0,0],
                 [1,0,rtn,1,0,0],
                 [1,0,0,rtn,0,0],
                 [1,0,0,1,0,rtn]],
             subProps: abcdxy,
             fnc: parseFloat}
         ];

         jQuery.each(props, function(n,prop){
         jQuery.each(prop.subProps, function(num, sub){
             var _cssProp, _prop = prop;

             if( $.isArray(sub) ) {
                 //composite transform
                 _cssProp = _prop.prop;
                 var _sub = sub;
                 $.cssHooks[_cssProp] = {
                     set: function( elem, val, unit ) {
                         jQuery.each(_sub, function(num, x){
                             $.cssHooks[_cssProp+x].set(elem, val, unit);
                         });
                     },
                     get: function( elem, computed ) {
                         var val = [];
                         jQuery.each(_sub, function(num, x){
                             val.push( $.cssHooks[_cssProp+x].get(elem, val) );
                         });
                         //hack until jQuery supports animating multiple properties
                         return val[0] || val[1];
                     }
                 }
             } else {
                 //independent transfrom
                 _cssProp = _prop.prop+sub;
                 $.cssHooks[_cssProp] = {
                     set: function( elem, val, unit ) {
                         $.data( elem, _cssProp, unit ? val+unit : val);

                         setCSSTransform( elem, _prop.fnc(unit ? val+unit : val), _cssProp,
                          _prop.unit || unit || _prop.standardUnit);
                     },
                     get: function( elem, computed ) {

                         var p = $.data( elem, _cssProp );
                         //console.log(_cssProp+'get:'+p);
                         return p && p !== undefined ? p : _prop._default || 0;
                     }
                 };
             }

             $.fx.step[_cssProp] = function( fx ) {
                 fx.unit = fx.unit === 'px' && $.cssNumber[_cssProp] ? _prop.standardUnit : fx.unit;
                 var unit = ($.cssNumber[_cssProp] ? '' : fx.unit);
                 $.cssHooks[_cssProp].set( fx.elem, fx.now, fx.unit);
              };
         })
     });

     function setCSSTransform( elem, val, prop, unit ){
         if($.support.matrixFilter) {
             return setIEMatrix(elem, val);
         }

         //parse css string
         var allProps = parseCSSTransform(elem);

         //check for value to be set
         var a = /[X|Y]/.exec(prop);
         a = (a === null ? '' : a[0] ? a[0] : a);
         prop = /.*[^XY]/.exec(prop)[0];
         unit = unit === undefined ? '' : unit;

         //create return string
         var result = '';
         var wasUpdated = false;
         var arr;
         if(allProps !== null) {
             for(var item in allProps) {
                 arr = allProps[item];
                 if(prop === item) {
                     //update parsed data with new value
                     if(prop !== 'matrix') {
                         result += prop+'(';
                         result += a === 'X' || a === '' ? val+unit :
                             (arr[0] !== '' ? arr[0] : $.cssHooks[prop+'X'].get(elem)+unit);
                         result += a === 'Y' ? ', '+val+unit :
                             (arr[1] !== '' ? ', '+arr[1] :
                             (prop+'Y' in $.cssHooks ?
                                 ', '+$.cssHooks[prop+'Y'].get(elem)+unit : ''));
                         result += ') ';
                     } else {
                         result += val+' ';
                     }
                     wasUpdated = true;
                 } else {
                     //dump parsed data to string
                     result += item + '(';
                     for(var i=0; i<arr.length; i++) {
                         result += arr[i];
                         if(i < arr.length-1 && arr[i+1] !== '')
                             result += ', '
                         else
                             break;
                     }
                     result += ') ';
                 }
             }
         }

         //if prop was not found to be updated, then dump data
         if(!wasUpdated)
             result += prop+a+'('+val+unit+ ') ';

         //set all transform properties
         elem.style[$.cssProps.transform] = result;
     }


     function parseCSSTransform( elem ) {
         var props, prop, name, transform;
         //break up into single transform calls
         $(elem.style[$.cssProps.transform].replace(/(?:\,\s|\)|\()/g,"|").split(" "))
         //read each data point for the transform call
         .each(function(i, item){
             if(item !== '') {
                 if(props === undefined) props = {}
                 prop = item.split("|");
                 name = prop.shift();
                 transform = /.*[^XY]/.exec(name)[0];
                 if(!props[transform]) props[transform] = ['','','','','',''];
                 if(!/Y/.test(name)) props[transform][0] = prop[0];
                 if(!/X/.test(name)) props[transform][1] = prop[1];
                 if(prop.length == 6) {
                     props[transform][2] = prop[2];
                     props[transform][3] = prop[3];
                     props[transform][4] = prop[4];
                     props[transform][5] = prop[5];
                 }
             }
         });

         return props !== undefined ? props : null ;
     }

     function ieOrigin(o, n, percent) {
         return percent * (o - n);
     }

     function toRadian(value) {
         if(typeof value === 'number') {
             return parseFloat(value);
         }
         if(value.indexOf("deg") != -1) {
             return parseInt(value,10) * (Math.PI * 2 / 360);
         } else if (value.indexOf("grad") != -1) {
             return parseInt(value,10) * (Math.PI/200);
         }
     }

     $.rotate = {
       radToDeg: function radToDeg( rad ) {
           return rad * 180 / Math.PI;
       }
     };

     //special case for IE matrix
     function setIEMatrix( elem, mat ) {
         var inverse, current, ang, org, originX, originY,
         runTransform = $.cssProps.transformOrigin === 'matrixFilter' ? true : false;

         current = [$.cssHooks.scaleX.get(elem),
                     toRadian($.cssHooks.skewY.get(elem)),
                     toRadian($.cssHooks.skewX.get(elem)),
                     $.cssHooks.scaleY.get(elem),
                     $.cssHooks.translateX.get(elem),
                     $.cssHooks.translateY.get(elem)];

         //start by multiply inverse of transform origin by matrix
         if(runTransform) {
             elem.style.filter = [
                 "progid:DXImageTransform.Microsoft.Matrix"
                 +"(M11=1,M12=0,M21=0,M22=1,SizingMethod='auto expand')"
             ].join('');
             var Wp = $.cssHooks.transformOriginX.get(elem);
             var Hp = $.cssHooks.transformOriginY.get(elem);
             Wp = Wp.indexOf('%') > 0 ?
                 (/[\d]*/.exec(Wp) / 100) : Wp;
             Hp = Hp.indexOf('%') > 0 ?
                 (/[\d]*/.exec(Hp) / 100) : Hp;

             var Wb = elem.offsetWidth;
             var Hb = elem.offsetHeight;
         }

         //multiply old matrix to new matrix
         if( typeof mat !== 'array' || mat.length !== 6 ) {
             mat = current;
         } else {
             mat = [ ( (current[0]*mat[0]) + (current[1]*mat[2]) ),
                     ( (current[0]*mat[1]) + (current[1]*mat[3]) ),
                     ( (current[2]*mat[0]) + (current[3]*mat[2]) ),
                     ( (current[2]*mat[1]) + (current[3]*mat[3]) ),
                     mat[4],
                     mat[5]
                     ];
         }

         //multiply the transform and rotation matrixes
         ang = $.data(elem, 'rotate');
         if(ang) {
             ang = toRadian(ang);
             var cos = Math.cos(ang);
             var sin = Math.sin(ang);

             ang = [cos, -sin, sin, cos];
             mat = [ ( (mat[0]*ang[0]) + (mat[1]*ang[2]) ),
                     ( (mat[0]*ang[1]) + (mat[1]*ang[3]) ),
                     ( (mat[2]*ang[0]) + (mat[3]*ang[2]) ),
                     ( (mat[2]*ang[1]) + (mat[3]*ang[3]) ),
                     mat[4],
                     mat[5]
                     ];
         }

         //apply the matrix as a IE filter
         elem.style.filter = [
             "progid:DXImageTransform.Microsoft.Matrix(",
             "M11="+mat[0]+", ",
             "M12="+mat[1]+", ",
             "M21="+mat[2]+", ",
             "M22="+mat[3]+", ",
             "SizingMethod='auto expand'",
             ")"
             ].join('');

         if (runTransform) {
             var Wo = elem.offsetWidth;
             var Ho = elem.offsetHeight;
             elem.style.position = 'relative';
             elem.style.left = Wp * (Wb - Wo) + (parseInt(mat[4]) || 0);
             elem.style.top  = Hp * (Hb - Ho) + (parseInt(mat[5]) || 0);
         }
             //$('#console').append('<div> trans:'+Wp+":"+Wb+":"+Wo+":"+mat[4]+":"+elem.style.left+'</div>');


     }

 })(jQuery);
