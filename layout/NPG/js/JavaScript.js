window.onload=function(){
    var oMask=document.getElementById('mask');
     var oSearch=document.getElementById('searchTip');
     var aStep=oSearch.getElementsByTagName('div');
     var aA=oSearch.getElementsByTagName('a');
     var aClose=oSearch.getElementsByTagName('span');
    //读取cookie
    var res=document.cookie.substring(5);
    alert(res);
    
    //如果没有cookie，执行以下动作
    if(res!="www.open.com.cn"){
        alert(res)
    //mask  父框 第一单元显示出来
    oMask.style.display=oSearch.style.display=aStep[0].style.display='block';
    
    //下一步按钮
    for( var i=0; i<aStep.length; i++){
        aA[i].index=i; //为每一个按钮增加一个index属性，为后面引用的
        aA[i].onclick=function(){
            this.parentNode.style.display="none";
            if(this.index< aStep.length-1){
                aStep[this.index+1].style.display="block";
            }
            else if( this.index==aStep.length-1){
                oMask.style.display=oSearch.style.display="none";
            }
        }   
    }
    //关闭按钮
    for(var i=0; i<aClose.length;i++){
        aClose[i].onclick=function(){
            oMask.style.display=oSearch.style.display="none";
        }
    }
    //添加cookie
    var oDate=new Date();
    oDate.setDate(oDate.getDate()+30);
    document.cookie="name=www.open.com.cn;expires="+oDate;
    }

}
