
        var gq=['福建师范大学','国防青年中心','中国人民解放军','中国人民武装警察部队'];
         document.onclick=function(x){
            var span=document.createElement('span');
            span.style.left=x.clientX+'px';
            span.style.top=x.clientY+'px';
            span.style.color='yellow';
            span.style.position='absolute';
            span.style.transition=1+'s';
            /*输出文字*/ 
            span.innerHTML=gq[Math.floor(Math.random()*gq.length)];
            /*添加span*//*动画*/
            setTimeout(function(){
                span.style.opacity = "1"
                span.style.transform = "translateY(-100px)"
            },100)
            setTimeout(function(){
                span.style.opacity = "0"
                span.style.transform = "translateY(-230px)"
            },1500)
          
           /*body. .appendchidh*/
            var chi=document.getElementsByTagName('span');
            for(var i = 0;i<chi.length;i++){
                if(chi[i].style.opacity === "0"){
                    document.body.removeChild(chi[i])
                }
            }
            document.body.appendChild(span);
         }
    