!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/scripts/",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(1),i=r(o);n(4),n(6),function(t){function e(t,e){t.when("/",{template:"qgrid demo page"}).when("/sandbox",{templateUrl:"sandbox/index.html",controller:i.default,controllerAs:"$ctrl"}),e.html5Mode(!1).hashPrefix("!")}function n(){}t.module("demo",["ngRoute","qgrid"]).config(e).controller("Demo.Controller",n),e.$inject=["$routeProvider","$locationProvider"],n.$inject=[]}(angular)},function(t,e){"use strict";function n(){this.rows=[{firstName:"Alex"},{firstName:"Pavel"}],this.columns=[{key:"firstName",label:"First Name"},{key:"lastName",label:"Last Name"},{key:"birthDate",label:"Date of Birth"},{key:"location",label:"Location"},{key:"zipCode",label:"Zip"}]}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){this.model=new l.default,u.default.assign(this.model,t)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),l=r(i),a=n(5),u=r(a);e.default={templateUrl:"qgrid.html",controller:o,bindToController:!0,bindings:{rows:"=",columns:"="}},o.$inject=["$scope"]},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function t(){n(this,t),this.rows=[],this.columns=[],this.selection=[],this.sorting=[]};e.default=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(2),i=r(o);!function(t){function e(t){t.put("qgrid.html",n(8))}t.module("qgrid",[]).component("qGrid",i.default).run(e),e.$inject=["$templateCache"]}(angular)},function(t,e){"use strict";function n(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),l=function(){function t(){r(this,t)}return i(t,null,[{key:"assign",value:function(t){for(var e=arguments.length,r=Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];return Object.assign.apply(Object,[t].concat(n(r.map(function(t){return Object.entries(t).filter(function(t){var e=o(t,2),n=(e[0],e[1]);return void 0!==n}).reduce(function(t,e){var n=o(e,2),r=n[0],i=n[1];return t[r]=i,t},{})}))))}}]),t}();e.default=l},function(t,e,n){"use strict";n(7),function(t){function e(){}t.module("qgrid").run(e),e.$inject=["$templateCache"]}(angular)},function(t,e){},function(t,e){t.exports='<div class="qgrid">\n\t<table>\n\t\t<thead>\n\t\t<tr>\n\t\t\t<th ng-repeat="$column in model.columns">\n\t\t\t\t<label>{{$column.title}}</label>\n\t\t\t</th>\n\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t<tr ng-repeat="$row in model.rows">\n\t\t\t<td ng-repeat="$column in model.columns track by $index">\n\t\t\t\t{{$row[$column.key]}}\n\t\t\t</td>\n\t\t</tr>\n\t\t</tbody>\n\t\t<tfoot>\n\t\t</tfoot>\n\t</table>\n</div>'}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYnVuZGxlLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjMTA4ZGU4N2Y5OGNiMzczYTE5OCIsIndlYnBhY2s6Ly8vLi9kZW1vL2luZGV4LmpzIiwid2VicGFjazovLy8uL2RlbW8vc2FuZGJveC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ncmlkL2dyaWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZ3JpZC9ncmlkLm1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWVzL2RlZmF1bHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZ3JpZC9ncmlkLmh0bWwiXSwibmFtZXMiOlsibW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImluc3RhbGxlZE1vZHVsZXMiLCJleHBvcnRzIiwibW9kdWxlIiwiaWQiLCJsb2FkZWQiLCJjYWxsIiwibSIsImMiLCJwIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX2luZGV4IiwiX2luZGV4MiIsImFuZ3VsYXIiLCJTZXR1cCIsIiRyb3V0ZVByb3ZpZGVyIiwiJGxvY2F0aW9uUHJvdmlkZXIiLCJ3aGVuIiwidGVtcGxhdGUiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCJjb250cm9sbGVyQXMiLCJodG1sNU1vZGUiLCJoYXNoUHJlZml4IiwiQ29udHJvbGxlciIsImNvbmZpZyIsIiRpbmplY3QiLCJ0aGlzIiwicm93cyIsImZpcnN0TmFtZSIsImNvbHVtbnMiLCJrZXkiLCJsYWJlbCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCIkc2NvcGUiLCJtb2RlbCIsIl9ncmlkMiIsIl91dGlsaXR5MiIsImFzc2lnbiIsIl9ncmlkIiwiX3V0aWxpdHkiLCJiaW5kVG9Db250cm9sbGVyIiwiYmluZGluZ3MiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiR3JpZE1vZGVsIiwic2VsZWN0aW9uIiwic29ydGluZyIsIiR0ZW1wbGF0ZUNhY2hlIiwicHV0IiwiY29tcG9uZW50IiwicnVuIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiYXJyIiwiQXJyYXkiLCJpc0FycmF5IiwiaSIsImFycjIiLCJsZW5ndGgiLCJmcm9tIiwiX3NsaWNlZFRvQXJyYXkiLCJzbGljZUl0ZXJhdG9yIiwiX2FyciIsIl9uIiwiX2QiLCJfZSIsInVuZGVmaW5lZCIsIl9zIiwiX2kiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm5leHQiLCJkb25lIiwicHVzaCIsImVyciIsIl9jcmVhdGVDbGFzcyIsImRlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJVdGlsaXR5IiwiX2xlbiIsImFyZ3VtZW50cyIsInNvdXJjZXMiLCJfa2V5IiwiYXBwbHkiLCJjb25jYXQiLCJtYXAiLCJ4IiwiZW50cmllcyIsImZpbHRlciIsIl9yZWYiLCJfcmVmMiIsInJlZHVjZSIsIl9yZWYzIiwiX3JlZjQiXSwibWFwcGluZ3MiOiJDQUFTLFNBQVVBLEdDSW5CLFFBQUFDLEdBQUFDLEdBR0EsR0FBQUMsRUFBQUQsR0FDQSxNQUFBQyxHQUFBRCxHQUFBRSxPQUdBLElBQUFDLEdBQUFGLEVBQUFELElBQ0FFLFdBQ0FFLEdBQUFKLEVBQ0FLLFFBQUEsRUFVQSxPQU5BUCxHQUFBRSxHQUFBTSxLQUFBSCxFQUFBRCxRQUFBQyxJQUFBRCxRQUFBSCxHQUdBSSxFQUFBRSxRQUFBLEVBR0FGLEVBQUFELFFBdkJBLEdBQUFELEtBcUNBLE9BVEFGLEdBQUFRLEVBQUFULEVBR0FDLEVBQUFTLEVBQUFQLEVBR0FGLEVBQUFVLEVBQUEsWUFHQVYsRUFBQSxLRE1NLFNBQVNJLEVBQVFELEVBQVNILEdFNUNoQyxZRm9EQyxTQUFTVyxHQUF1QkMsR0FBTyxNQUFPQSxJQUFPQSxFQUFJQyxXQUFhRCxHQUFRRSxRQUFTRixHRWxEeEYsR0FBQUcsR0FBQWYsRUFBQSxHRmdES2dCLEVBQVVMLEVBQXVCSSxFRTlDdENmLEdBQVEsR0FDUkEsRUFBUSxHQUVSLFNBQVdpQixHQU1WLFFBQVNDLEdBQU1DLEVBQWdCQyxHQUM5QkQsRUFDRUUsS0FBSyxLQUNMQyxTQUFVLG9CQUVWRCxLQUFLLFlBQ0xFLFlBQWEscUJBQ2JDLHFCQUNBQyxhQUFjLFVBR2hCTCxFQUNFTSxXQUFVLEdBQ1ZDLFdBQVcsS0FJZCxRQUFTQyxNQXRCVFgsRUFBUWIsT0FBTyxRQUFTLFVBQVcsVUFDakN5QixPQUFPWCxHQUNQTSxXQUFXLGtCQUFtQkksR0FFaENWLEVBQU1ZLFNBQVcsaUJBQWtCLHFCQWlCbkNGLEVBQVdFLFlBSVRiLFVGOENHLFNBQVNiLEVBQVFELEdHL0V2QixZQUVlLFNBQVN5QixLQUN2QkcsS0FBS0MsT0FBU0MsVUFBVyxTQUFVQSxVQUFXLFVBQzlDRixLQUFLRyxVQUNIQyxJQUFLLFlBQWFDLE1BQU8sZUFDekJELElBQUssV0FBWUMsTUFBTyxjQUN4QkQsSUFBSyxZQUFhQyxNQUFPLGtCQUN6QkQsSUFBSyxXQUFZQyxNQUFPLGFBQ3hCRCxJQUFLLFVBQVdDLE1BQU8sUUgwRXpCQyxPQUFPQyxlQUFlbkMsRUFBUyxjQUM5Qm9DLE9BQU8sSUFFUnBDLEVBQVFXLFFHcEZlYyxHSDRGbEIsU0FBU3hCLEVBQVFELEVBQVNILEdJOUZoQyxZSjhHQyxTQUFTVyxHQUF1QkMsR0FBTyxNQUFPQSxJQUFPQSxFQUFJQyxXQUFhRCxHQUFRRSxRQUFTRixHSTlGeEYsUUFBU2dCLEdBQVdZLEdBQ25CVCxLQUFLVSxNQUFRLEdBQUFDLEdBQUE1QixRQUdiNkIsRUFBQTdCLFFBQVE4QixPQUFPYixLQUFLVSxNQUFPRCxHSjhFM0JILE9BQU9DLGVBQWVuQyxFQUFTLGNBQzlCb0MsT0FBTyxHSWpHVCxJQUFBTSxHQUFBN0MsRUFBQSxHSnNHSzBDLEVBQVMvQixFQUF1QmtDLEdJckdyQ0MsRUFBQTlDLEVBQUEsR0p5R0syQyxFQUFZaEMsRUFBdUJtQyxFQUl2QzNDLEdBQVFXLFNJMUdSUyxZQUFhLGFBQ2JDLFdBQVlJLEVBQ1ptQixrQkFBa0IsRUFDbEJDLFVBQ0NoQixLQUFNLElBQ05FLFFBQVMsTUFJWE4sRUFBV0UsU0FBVyxXSnNIaEIsU0FBUzFCLEVBQVFELEdLckl2QixZTDZJQyxTQUFTOEMsR0FBZ0JDLEVBQVVDLEdBQWUsS0FBTUQsWUFBb0JDLElBQWdCLEtBQU0sSUFBSUMsV0FBVSxxQ0FKaEhmLE9BQU9DLGVBQWVuQyxFQUFTLGNBQzlCb0MsT0FBTyxHQUtSLElLN0lvQmMsR0FDcEIsUUFBQUEsS0FBY0osRUFBQWxCLEtBQUFzQixHQUNidEIsS0FBS0MsUUFDTEQsS0FBS0csV0FDTEgsS0FBS3VCLGFBQ0x2QixLQUFLd0IsV0xpSk5wRCxHQUFRVyxRS3RKWXVDLEdMMEpmLFNBQVNqRCxFQUFRRCxFQUFTSCxHQUUvQixZQU1BLFNBQVNXLEdBQXVCQyxHQUFPLE1BQU9BLElBQU9BLEVBQUlDLFdBQWFELEdBQVFFLFFBQVNGLEdNcEt4RixHQUFBaUMsR0FBQTdDLEVBQUEsR05rS0swQyxFQUFTL0IsRUFBdUJrQyxJTWhLckMsU0FBVzVCLEdBTVYsUUFBU0MsR0FBTXNDLEdBQ2RBLEVBQWVDLElBQUksYUFBY3pELEVBQVEsSUFOMUNpQixFQUFRYixPQUFPLFlBQ2JzRCxVQUFVLFFBRFpoQixFQUFBNUIsU0FFRTZDLElBQUl6QyxHQUVOQSxFQUFNWSxTQUFXLG1CQUlmYixVTnNLRyxTQUFTYixFQUFRRCxHT2pMdkIsWVA2TEMsU0FBU3lELEdBQW1CQyxHQUFPLEdBQUlDLE1BQU1DLFFBQVFGLEdBQU0sQ0FBRSxJQUFLLEdBQUlHLEdBQUksRUFBR0MsRUFBT0gsTUFBTUQsRUFBSUssUUFBU0YsRUFBSUgsRUFBSUssT0FBUUYsSUFBT0MsRUFBS0QsR0FBS0gsRUFBSUcsRUFBTSxPQUFPQyxHQUFlLE1BQU9ILE9BQU1LLEtBQUtOLEdBRTFMLFFBQVNaLEdBQWdCQyxFQUFVQyxHQUFlLEtBQU1ELFlBQW9CQyxJQUFnQixLQUFNLElBQUlDLFdBQVUscUNBVmhIZixPQUFPQyxlQUFlbkMsRUFBUyxjQUM5Qm9DLE9BQU8sR0FHUixJQUFJNkIsR0FBaUIsV0FBYyxRQUFTQyxHQUFjUixFQUFLRyxHQUFLLEdBQUlNLE1BQWVDLEdBQUssRUFBVUMsR0FBSyxFQUFXQyxFQUFLQyxNQUFXLEtBQU0sSUFBSyxHQUFpQ0MsR0FBN0JDLEVBQUtmLEVBQUlnQixPQUFPQyxjQUFtQlAsR0FBTUksRUFBS0MsRUFBR0csUUFBUUMsUUFBb0JWLEVBQUtXLEtBQUtOLEVBQUdwQyxRQUFZeUIsR0FBS00sRUFBS0osU0FBV0YsR0FBM0RPLEdBQUssSUFBb0UsTUFBT1csR0FBT1YsR0FBSyxFQUFNQyxFQUFLUyxFQUFPLFFBQVUsS0FBV1gsR0FBTUssRUFBVyxRQUFHQSxFQUFXLFNBQU8sUUFBVSxHQUFJSixFQUFJLEtBQU1DLElBQVEsTUFBT0gsR0FBUSxNQUFPLFVBQVVULEVBQUtHLEdBQUssR0FBSUYsTUFBTUMsUUFBUUYsR0FBUSxNQUFPQSxFQUFZLElBQUlnQixPQUFPQyxXQUFZekMsUUFBT3dCLEdBQVEsTUFBT1EsR0FBY1IsRUFBS0csRUFBYSxNQUFNLElBQUlaLFdBQVUsNERBRWxsQitCLEVBQWUsV0FBYyxRQUFTQyxHQUFpQkMsRUFBUUMsR0FBUyxJQUFLLEdBQUl0QixHQUFJLEVBQUdBLEVBQUlzQixFQUFNcEIsT0FBUUYsSUFBSyxDQUFFLEdBQUl1QixHQUFhRCxFQUFNdEIsRUFBSXVCLEdBQVdDLFdBQWFELEVBQVdDLGFBQWMsRUFBT0QsRUFBV0UsY0FBZSxFQUFVLFNBQVdGLEtBQVlBLEVBQVdHLFVBQVcsR0FBTXJELE9BQU9DLGVBQWUrQyxFQUFRRSxFQUFXcEQsSUFBS29ELElBQWlCLE1BQU8sVUFBVXBDLEVBQWF3QyxFQUFZQyxHQUFpSixNQUE5SEQsSUFBWVAsRUFBaUJqQyxFQUFZMEMsVUFBV0YsR0FBaUJDLEdBQWFSLEVBQWlCakMsRUFBYXlDLEdBQXFCekMsTU96TDVnQjJDLEVQK0xOLFdBQ2IsUUFBU0EsS0FDUjdDLEVBQWdCbEIsS0FBTStELEdBNkJ2QixNQTFCQVgsR0FBYVcsRUFBUyxPQUNyQjNELElBQUssU0FDTEksTUFBTyxTT3JNSzhDLEdBQW9CLE9BQUFVLEdBQUFDLFVBQUE5QixPQUFUK0IsRUFBU25DLE1BQUFpQyxFQUFBLEVBQUFBLEVBQUEsS0FBQUcsRUFBQSxFQUFBQSxFQUFBSCxFQUFBRyxJQUFURCxFQUFTQyxFQUFBLEdBQUFGLFVBQUFFLEVBQ2pDLE9BQU83RCxRQUFPTyxPQUFQdUQsTUFBQTlELFFBQWNnRCxHQUFkZSxPQUFBeEMsRUFBeUJxQyxFQUFRSSxJQUFJLFNBQUFDLEdBQUEsTUFDM0NqRSxRQUFPa0UsUUFBUUQsR0FDYkUsT0FBTyxTQUFBQyxHQUFBLEdBQUFDLEdBQUF0QyxFQUFBcUMsRUFBQSxHQUFPbEUsR0FBUG1FLEVBQUEsR0FBQUEsRUFBQSxVQUE0QmhDLFVBQVZuQyxJQUN6Qm9FLE9BQU8sU0FBQy9GLEVBQURnRyxHQUFBLEdBQUFDLEdBQUF6QyxFQUFBd0MsRUFBQSxHQUFPekUsRUFBUDBFLEVBQUEsR0FBWXRFLEVBQVpzRSxFQUFBLFNBQXdCakcsR0FBSXVCLEdBQU9JLEVBQU8zQixnQlB5TjdDa0YsSUFHUjNGLEdBQVFXLFFPak9ZZ0YsR1BxT2YsU0FBUzFGLEVBQVFELEVBQVNILEdRdk9oQyxZQUVBQSxHQUFRLEdBRVIsU0FBV2lCLEdBTVYsUUFBU0MsTUFKVEQsRUFBUWIsT0FBTyxTQUNidUQsSUFBSXpDLEdBRU5BLEVBQU1ZLFNBQVcsbUJBS2ZiLFVSMk9HLFNBQVNiLEVBQVFELEtBTWpCLFNBQVNDLEVBQVFELEdTL1B2QkMsRUFBQUQsUUFBQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGxvYWRlZDogZmFsc2Vcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvc2NyaXB0cy9cIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdHZhciBfaW5kZXggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXHRcblx0dmFyIF9pbmRleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmRleCk7XG5cdFxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXHRcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblx0XG5cdChmdW5jdGlvbiAoYW5ndWxhcikge1xuXHRcdGFuZ3VsYXIubW9kdWxlKCdkZW1vJywgWyduZ1JvdXRlJywgJ3FncmlkJ10pLmNvbmZpZyhTZXR1cCkuY29udHJvbGxlcignRGVtby5Db250cm9sbGVyJywgQ29udHJvbGxlcik7XG5cdFxuXHRcdFNldHVwLiRpbmplY3QgPSBbJyRyb3V0ZVByb3ZpZGVyJywgJyRsb2NhdGlvblByb3ZpZGVyJ107XG5cdFx0ZnVuY3Rpb24gU2V0dXAoJHJvdXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSB7XG5cdFx0XHQkcm91dGVQcm92aWRlci53aGVuKCcvJywge1xuXHRcdFx0XHR0ZW1wbGF0ZTogJ3FncmlkIGRlbW8gcGFnZSdcblx0XHRcdH0pLndoZW4oJy9zYW5kYm94Jywge1xuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJ3NhbmRib3gvaW5kZXguaHRtbCcsXG5cdFx0XHRcdGNvbnRyb2xsZXI6IF9pbmRleDIuZGVmYXVsdCxcblx0XHRcdFx0Y29udHJvbGxlckFzOiAnJGN0cmwnXG5cdFx0XHR9KTtcblx0XG5cdFx0XHQkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUoZmFsc2UpLmhhc2hQcmVmaXgoJyEnKTtcblx0XHR9XG5cdFxuXHRcdENvbnRyb2xsZXIuJGluamVjdCA9IFtdO1xuXHRcdGZ1bmN0aW9uIENvbnRyb2xsZXIoKSB7fVxuXHR9KShhbmd1bGFyKTtcblxuLyoqKi8gfSxcbi8qIDEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHRcdHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRleHBvcnRzLmRlZmF1bHQgPSBDb250cm9sbGVyO1xuXHRmdW5jdGlvbiBDb250cm9sbGVyKCkge1xuXHRcdHRoaXMucm93cyA9IFt7IGZpcnN0TmFtZTogJ0FsZXgnIH0sIHsgZmlyc3ROYW1lOiAnUGF2ZWwnIH1dO1xuXHRcdHRoaXMuY29sdW1ucyA9IFt7IGtleTogJ2ZpcnN0TmFtZScsIGxhYmVsOiAnRmlyc3QgTmFtZScgfSwgeyBrZXk6ICdsYXN0TmFtZScsIGxhYmVsOiAnTGFzdCBOYW1lJyB9LCB7IGtleTogJ2JpcnRoRGF0ZScsIGxhYmVsOiAnRGF0ZSBvZiBCaXJ0aCcgfSwgeyBrZXk6ICdsb2NhdGlvbicsIGxhYmVsOiAnTG9jYXRpb24nIH0sIHsga2V5OiAnemlwQ29kZScsIGxhYmVsOiAnWmlwJyB9XTtcblx0fVxuXG4vKioqLyB9LFxuLyogMiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdFx0dmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHR2YXIgX2dyaWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXHRcblx0dmFyIF9ncmlkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dyaWQpO1xuXHRcblx0dmFyIF91dGlsaXR5ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblx0XG5cdHZhciBfdXRpbGl0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsaXR5KTtcblx0XG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cdFxuXHRleHBvcnRzLmRlZmF1bHQgPSB7XG5cdFx0dGVtcGxhdGVVcmw6ICdxZ3JpZC5odG1sJyxcblx0XHRjb250cm9sbGVyOiBDb250cm9sbGVyLFxuXHRcdGJpbmRUb0NvbnRyb2xsZXI6IHRydWUsXG5cdFx0YmluZGluZ3M6IHtcblx0XHRcdHJvd3M6ICc9Jyxcblx0XHRcdGNvbHVtbnM6ICc9J1xuXHRcdH1cblx0fTtcblx0XG5cdFxuXHRDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZSddO1xuXHRmdW5jdGlvbiBDb250cm9sbGVyKCRzY29wZSkge1xuXHRcdHRoaXMubW9kZWwgPSBuZXcgX2dyaWQyLmRlZmF1bHQoKTtcblx0XHQvLyBUT0RPOiBpbnZlc3RpZ2F0ZSBob3cgdG8gdHJhY2sgY2hhbmdlcyBpbiB0aGlzIGNhc2Vcblx0XHQvLyBvciBnZXQgcmlkIG9mICRzY29wZSBvciBvZiBHcmlkTW9kZWxcblx0XHRfdXRpbGl0eTIuZGVmYXVsdC5hc3NpZ24odGhpcy5tb2RlbCwgJHNjb3BlKTtcblx0fVxuXG4vKioqLyB9LFxuLyogMyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdFx0dmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXHRcblx0dmFyIEdyaWRNb2RlbCA9IGZ1bmN0aW9uIEdyaWRNb2RlbCgpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgR3JpZE1vZGVsKTtcblx0XG5cdFx0dGhpcy5yb3dzID0gW107XG5cdFx0dGhpcy5jb2x1bW5zID0gW107XG5cdFx0dGhpcy5zZWxlY3Rpb24gPSBbXTtcblx0XHR0aGlzLnNvcnRpbmcgPSBbXTtcblx0fTtcblx0XG5cdGV4cG9ydHMuZGVmYXVsdCA9IEdyaWRNb2RlbDtcblxuLyoqKi8gfSxcbi8qIDQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdHZhciBfZ3JpZCA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cdFxuXHR2YXIgX2dyaWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ3JpZCk7XG5cdFxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXHRcblx0KGZ1bmN0aW9uIChhbmd1bGFyKSB7XG5cdFx0YW5ndWxhci5tb2R1bGUoJ3FncmlkJywgW10pLmNvbXBvbmVudCgncUdyaWQnLCBfZ3JpZDIuZGVmYXVsdCkucnVuKFNldHVwKTtcblx0XG5cdFx0U2V0dXAuJGluamVjdCA9IFsnJHRlbXBsYXRlQ2FjaGUnXTtcblx0XHRmdW5jdGlvbiBTZXR1cCgkdGVtcGxhdGVDYWNoZSkge1xuXHRcdFx0JHRlbXBsYXRlQ2FjaGUucHV0KCdxZ3JpZC5odG1sJywgX193ZWJwYWNrX3JlcXVpcmVfXyg4KSk7XG5cdFx0fVxuXHR9KShhbmd1bGFyKTtcblxuLyoqKi8gfSxcbi8qIDUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHRcdHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0dmFyIF9zbGljZWRUb0FycmF5ID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH0gfTsgfSgpO1xuXHRcblx0dmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblx0XG5cdGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXHRcblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblx0XG5cdHZhciBVdGlsaXR5ID0gZnVuY3Rpb24gKCkge1xuXHRcdGZ1bmN0aW9uIFV0aWxpdHkoKSB7XG5cdFx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgVXRpbGl0eSk7XG5cdFx0fVxuXHRcblx0XHRfY3JlYXRlQ2xhc3MoVXRpbGl0eSwgbnVsbCwgW3tcblx0XHRcdGtleTogJ2Fzc2lnbicsXG5cdFx0XHR2YWx1ZTogZnVuY3Rpb24gYXNzaWduKHRhcmdldCkge1xuXHRcdFx0XHRmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgc291cmNlcyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcblx0XHRcdFx0XHRzb3VyY2VzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcblx0XHRcdFx0fVxuXHRcblx0XHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24uYXBwbHkoT2JqZWN0LCBbdGFyZ2V0XS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHNvdXJjZXMubWFwKGZ1bmN0aW9uICh4KSB7XG5cdFx0XHRcdFx0cmV0dXJuIE9iamVjdC5lbnRyaWVzKHgpLmZpbHRlcihmdW5jdGlvbiAoX3JlZikge1xuXHRcdFx0XHRcdFx0dmFyIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMiksXG5cdFx0XHRcdFx0XHQgICAga2V5ID0gX3JlZjJbMF0sXG5cdFx0XHRcdFx0XHQgICAgdmFsdWUgPSBfcmVmMlsxXTtcblx0XG5cdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZDtcblx0XHRcdFx0XHR9KSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGFuZ3VsYXIvZGVmaW5lZHVuZGVmaW5lZCwgbm8tdW51c2VkLXZhcnNcblx0XHRcdFx0XHQucmVkdWNlKGZ1bmN0aW9uIChvYmosIF9yZWYzKSB7XG5cdFx0XHRcdFx0XHR2YXIgX3JlZjQgPSBfc2xpY2VkVG9BcnJheShfcmVmMywgMiksXG5cdFx0XHRcdFx0XHQgICAga2V5ID0gX3JlZjRbMF0sXG5cdFx0XHRcdFx0XHQgICAgdmFsdWUgPSBfcmVmNFsxXTtcblx0XG5cdFx0XHRcdFx0XHRyZXR1cm4gb2JqW2tleV0gPSB2YWx1ZSwgb2JqO1xuXHRcdFx0XHRcdH0sIHt9KTtcblx0XHRcdFx0fSkpKSk7XG5cdFx0XHR9XG5cdFx0fV0pO1xuXHRcblx0XHRyZXR1cm4gVXRpbGl0eTtcblx0fSgpO1xuXHRcblx0ZXhwb3J0cy5kZWZhdWx0ID0gVXRpbGl0eTtcblxuLyoqKi8gfSxcbi8qIDYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5cdFxuXHQoZnVuY3Rpb24gKGFuZ3VsYXIpIHtcblx0XG5cdFx0YW5ndWxhci5tb2R1bGUoJ3FncmlkJykucnVuKFNldHVwKTtcblx0XG5cdFx0U2V0dXAuJGluamVjdCA9IFsnJHRlbXBsYXRlQ2FjaGUnXTtcblx0XHRmdW5jdGlvbiBTZXR1cCgpIC8qJHRlbXBsYXRlQ2FjaGUqL3tcblx0XHRcdC8vIGhlcmUnbGwgYmUgY3VzdG9tIHRlbXBsYXRlc1xuXHRcdH1cblx0fSkoYW5ndWxhcik7XG5cbi8qKiovIH0sXG4vKiA3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG4vKioqLyB9LFxuLyogOCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInFncmlkXFxcIj5cXG5cXHQ8dGFibGU+XFxuXFx0XFx0PHRoZWFkPlxcblxcdFxcdDx0cj5cXG5cXHRcXHRcXHQ8dGggbmctcmVwZWF0PVxcXCIkY29sdW1uIGluIG1vZGVsLmNvbHVtbnNcXFwiPlxcblxcdFxcdFxcdFxcdDxsYWJlbD57eyRjb2x1bW4udGl0bGV9fTwvbGFiZWw+XFxuXFx0XFx0XFx0PC90aD5cXG5cXHRcXHQ8L3RyPlxcblxcdFxcdDwvdGhlYWQ+XFxuXFx0XFx0PHRib2R5PlxcblxcdFxcdDx0ciBuZy1yZXBlYXQ9XFxcIiRyb3cgaW4gbW9kZWwucm93c1xcXCI+XFxuXFx0XFx0XFx0PHRkIG5nLXJlcGVhdD1cXFwiJGNvbHVtbiBpbiBtb2RlbC5jb2x1bW5zIHRyYWNrIGJ5ICRpbmRleFxcXCI+XFxuXFx0XFx0XFx0XFx0e3skcm93WyRjb2x1bW4ua2V5XX19XFxuXFx0XFx0XFx0PC90ZD5cXG5cXHRcXHQ8L3RyPlxcblxcdFxcdDwvdGJvZHk+XFxuXFx0XFx0PHRmb290PlxcblxcdFxcdDwvdGZvb3Q+XFxuXFx0PC90YWJsZT5cXG48L2Rpdj5cIlxuXG4vKioqLyB9XG4vKioqKioqLyBdKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYnVuZGxlLmpzIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3NjcmlwdHMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYzEwOGRlODdmOThjYjM3M2ExOTgiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBTYW5kYm94IGZyb20gJy4vc2FuZGJveC9pbmRleCc7XG5cbnJlcXVpcmUoJy4uL3NyYy9pbmRleCcpO1xucmVxdWlyZSgnLi4vc3JjL3RoZW1lcy9kZWZhdWx0L2luZGV4Jyk7XG5cbihmdW5jdGlvbiAoYW5ndWxhcikge1xuXHRhbmd1bGFyLm1vZHVsZSgnZGVtbycsIFsnbmdSb3V0ZScsICdxZ3JpZCddKVxuXHRcdC5jb25maWcoU2V0dXApXG5cdFx0LmNvbnRyb2xsZXIoJ0RlbW8uQ29udHJvbGxlcicsIENvbnRyb2xsZXIpO1xuXG5cdFNldHVwLiRpbmplY3QgPSBbJyRyb3V0ZVByb3ZpZGVyJywgJyRsb2NhdGlvblByb3ZpZGVyJ107XG5cdGZ1bmN0aW9uIFNldHVwKCRyb3V0ZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikge1xuXHRcdCRyb3V0ZVByb3ZpZGVyXG5cdFx0XHQud2hlbignLycsIHtcblx0XHRcdFx0dGVtcGxhdGU6ICdxZ3JpZCBkZW1vIHBhZ2UnXG5cdFx0XHR9KVxuXHRcdFx0LndoZW4oJy9zYW5kYm94Jywge1xuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJ3NhbmRib3gvaW5kZXguaHRtbCcsXG5cdFx0XHRcdGNvbnRyb2xsZXI6IFNhbmRib3gsXG5cdFx0XHRcdGNvbnRyb2xsZXJBczogJyRjdHJsJ1xuXHRcdFx0fSk7XG5cblx0XHQkbG9jYXRpb25Qcm92aWRlclxuXHRcdFx0Lmh0bWw1TW9kZShmYWxzZSlcblx0XHRcdC5oYXNoUHJlZml4KCchJyk7XG5cdH1cblxuXHRDb250cm9sbGVyLiRpbmplY3QgPSBbXTtcblx0ZnVuY3Rpb24gQ29udHJvbGxlcigpIHtcblx0fVxuXG59KShhbmd1bGFyKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2VzbGludC1sb2FkZXIhLi9kZW1vL2luZGV4LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250cm9sbGVyKCkge1xuXHR0aGlzLnJvd3MgPSBbe2ZpcnN0TmFtZTogJ0FsZXgnfSwge2ZpcnN0TmFtZTogJ1BhdmVsJ31dO1xuXHR0aGlzLmNvbHVtbnMgPSBbXG5cdFx0e2tleTogJ2ZpcnN0TmFtZScsIGxhYmVsOiAnRmlyc3QgTmFtZSd9LFxuXHRcdHtrZXk6ICdsYXN0TmFtZScsIGxhYmVsOiAnTGFzdCBOYW1lJ30sXG5cdFx0e2tleTogJ2JpcnRoRGF0ZScsIGxhYmVsOiAnRGF0ZSBvZiBCaXJ0aCd9LFxuXHRcdHtrZXk6ICdsb2NhdGlvbicsIGxhYmVsOiAnTG9jYXRpb24nfSxcblx0XHR7a2V5OiAnemlwQ29kZScsIGxhYmVsOiAnWmlwJ31cblx0XTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2VzbGludC1sb2FkZXIhLi9kZW1vL3NhbmRib3gvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBHcmlkTW9kZWwgZnJvbSAnLi9ncmlkLm1vZGVsJztcbmltcG9ydCBVdGlsaXR5IGZyb20gJy4uLy4uL3NlcnZpY2VzL3V0aWxpdHknO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHRlbXBsYXRlVXJsOiAncWdyaWQuaHRtbCcsXG5cdGNvbnRyb2xsZXI6IENvbnRyb2xsZXIsXG5cdGJpbmRUb0NvbnRyb2xsZXI6IHRydWUsXG5cdGJpbmRpbmdzOiB7XG5cdFx0cm93czogJz0nLFxuXHRcdGNvbHVtbnM6ICc9J1xuXHR9XG59O1xuXG5Db250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZSddO1xuZnVuY3Rpb24gQ29udHJvbGxlcigkc2NvcGUpIHtcblx0dGhpcy5tb2RlbCA9IG5ldyBHcmlkTW9kZWwoKTtcblx0Ly8gVE9ETzogaW52ZXN0aWdhdGUgaG93IHRvIHRyYWNrIGNoYW5nZXMgaW4gdGhpcyBjYXNlXG5cdC8vIG9yIGdldCByaWQgb2YgJHNjb3BlIG9yIG9mIEdyaWRNb2RlbFxuXHRVdGlsaXR5LmFzc2lnbih0aGlzLm1vZGVsLCAkc2NvcGUpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2dyaWQvZ3JpZC5qcyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZE1vZGVsIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5yb3dzID0gW107XG5cdFx0dGhpcy5jb2x1bW5zID0gW107XG5cdFx0dGhpcy5zZWxlY3Rpb24gPSBbXTtcblx0XHR0aGlzLnNvcnRpbmcgPSBbXTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2dyaWQvZ3JpZC5tb2RlbC5qcyIsImltcG9ydCBHcmlkIGZyb20gJy4vY29tcG9uZW50cy9ncmlkL2dyaWQnO1xuXG4oZnVuY3Rpb24gKGFuZ3VsYXIpIHtcblx0YW5ndWxhci5tb2R1bGUoJ3FncmlkJywgW10pXG5cdFx0LmNvbXBvbmVudCgncUdyaWQnLCBHcmlkKVxuXHRcdC5ydW4oU2V0dXApO1xuXG5cdFNldHVwLiRpbmplY3QgPSBbJyR0ZW1wbGF0ZUNhY2hlJ107XG5cdGZ1bmN0aW9uIFNldHVwKCR0ZW1wbGF0ZUNhY2hlKSB7XG5cdFx0JHRlbXBsYXRlQ2FjaGUucHV0KCdxZ3JpZC5odG1sJywgcmVxdWlyZSgnLi9jb21wb25lbnRzL2dyaWQvZ3JpZC5odG1sJykpO1xuXHR9XG59KShhbmd1bGFyKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxpdHkge1xuXHRzdGF0aWMgYXNzaWduKHRhcmdldCwgLi4uc291cmNlcykge1xuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKHRhcmdldCwgLi4uc291cmNlcy5tYXAoeCA9PlxuXHRcdFx0T2JqZWN0LmVudHJpZXMoeClcblx0XHRcdFx0LmZpbHRlcigoW2tleSwgdmFsdWVdKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGFuZ3VsYXIvZGVmaW5lZHVuZGVmaW5lZCwgbm8tdW51c2VkLXZhcnNcblx0XHRcdFx0LnJlZHVjZSgob2JqLCBba2V5LCB2YWx1ZV0pID0+IChvYmpba2V5XSA9IHZhbHVlLCBvYmopLCB7fSkpKTtcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9zZXJ2aWNlcy91dGlsaXR5LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuL2JvZHkuc2NzcycpO1xuXG4oZnVuY3Rpb24gKGFuZ3VsYXIpIHtcblxuXHRhbmd1bGFyLm1vZHVsZSgncWdyaWQnKVxuXHRcdC5ydW4oU2V0dXApO1xuXG5cdFNldHVwLiRpbmplY3QgPSBbJyR0ZW1wbGF0ZUNhY2hlJ107XG5cdGZ1bmN0aW9uIFNldHVwKC8qJHRlbXBsYXRlQ2FjaGUqLykge1xuXHRcdC8vIGhlcmUnbGwgYmUgY3VzdG9tIHRlbXBsYXRlc1xuXHR9XG5cbn0pKGFuZ3VsYXIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vZXNsaW50LWxvYWRlciEuL3NyYy90aGVtZXMvZGVmYXVsdC9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJxZ3JpZFxcXCI+XFxuXFx0PHRhYmxlPlxcblxcdFxcdDx0aGVhZD5cXG5cXHRcXHQ8dHI+XFxuXFx0XFx0XFx0PHRoIG5nLXJlcGVhdD1cXFwiJGNvbHVtbiBpbiBtb2RlbC5jb2x1bW5zXFxcIj5cXG5cXHRcXHRcXHRcXHQ8bGFiZWw+e3skY29sdW1uLnRpdGxlfX08L2xhYmVsPlxcblxcdFxcdFxcdDwvdGg+XFxuXFx0XFx0PC90cj5cXG5cXHRcXHQ8L3RoZWFkPlxcblxcdFxcdDx0Ym9keT5cXG5cXHRcXHQ8dHIgbmctcmVwZWF0PVxcXCIkcm93IGluIG1vZGVsLnJvd3NcXFwiPlxcblxcdFxcdFxcdDx0ZCBuZy1yZXBlYXQ9XFxcIiRjb2x1bW4gaW4gbW9kZWwuY29sdW1ucyB0cmFjayBieSAkaW5kZXhcXFwiPlxcblxcdFxcdFxcdFxcdHt7JHJvd1skY29sdW1uLmtleV19fVxcblxcdFxcdFxcdDwvdGQ+XFxuXFx0XFx0PC90cj5cXG5cXHRcXHQ8L3Rib2R5PlxcblxcdFxcdDx0Zm9vdD5cXG5cXHRcXHQ8L3Rmb290PlxcblxcdDwvdGFibGU+XFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2dyaWQvZ3JpZC5odG1sXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=