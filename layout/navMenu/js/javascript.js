// window.onload=function(){
//     var aA=document.getElementsByTagName('a');
//     for(var i=0;i<aA.length;i++)
//         aA[i].onmouseover=function(){
//             clearInterval(this.time);
//             var This=this;
//             This.time=setInterval(function(){
//               This.style.width=This.offsetWidth+8+"px";
//               if(This.offsetWidth>=160){
//                 clearInterval(This.time);
//               }             
//             },30)
//         }
// }
//          aA[i].onmouseout=function(){
//             clearInterval(this.time);
//             var This=this;
//             This.time=setInterval(function(){
//               This.style.width=This.offsetWidth-8+"px";
//               if(This.offsetWidth<=120){
//                 This.style.width="120px";
//                 clearInterval(This.time);
//               }             
//             },30)
//         }
//      }   
// }

window.onload=function(){
    var oNav=document.getElementsByTagName('ul')[0];
    var aA=oNav.getElementsByTagName('a');
    for(var i=0; i<aA.length; i++){
        aA[i].onmouseover=function(){
            if(this.className!="on"){
                clearInterval(this.timer);
                var This=this;
                This.time=setInterval(function(){
                    This.style.width=This.offsetWidth+8+"px";
                    if(This.offsetWidth>=120)
                    clearInterval(This.time);
                },30)
            }
        }
        aA[i].onmouseout=function(){
            if(this.className!="on"){
                clearInterval(this.time);
                var This=this;
                this.time=setInterval(function(){
                    This.style.width=This.offsetWidth-8+"px";
                    if(This.offsetWidth<=80){
                        This.style.width='80px';
                        clearInterval(This.time);
                    }
                },30)
            }
        }
    }
}