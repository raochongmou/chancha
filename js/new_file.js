window.onload=function(){
	  //获取节点
      var sli = document.getElementsByName("sli");
      var set =document.getElementsByName("set");
      //console.log(sli);
      //console.log(set);     
	  for(var i = 0; i<sli.length;i++){
      sli[i].index = i;
      sli[i].onclick = function(){
      for(var j = 0; j <sli.length; j++){
      sli[j].style.backgroundColor = "#f8f8f8";
      sli[j].style.color = "black";
      set[j].style.display ="none";
      }      
	  sli[this.index].style.color = "white";
	  sli[this.index].style.backgroundColor = "rgb(0,149,59)";
	  set[this.index].style.display ="block";
	}
      } 	       	       
	
	
	var pic = document.getElementById("pic");
	var imgs = pic.getElementsByTagName("img");
	
	var ul1 = document.getElementById("ul1");
	var lis = ul1.getElementsByTagName("li");
	
	
	var ban = document.getElementById("ban");
	var leftbtn = document.getElementById("left");
	var rightbtn = document.getElementById("right");
	//console.log(right);
	var index = 0//放的是要展示的图片的索引
	function move(){
		index++;
		if(index ==4){
			index = 0;
		}
	for(var i =0;i<imgs.length;i++ ){
			imgs[i].className = "";
			//小圆点背景色变黑
			lis[i].className = "";
		}
	//索引一致显示
		imgs[index].className = "show";
	//索引一致变红
		lis[index].className = "red";	
		
	}
	//开定时器
	var t =setInterval(move,2000);
	
//	4.移入banner,停
	
	ban.onmouseover = function(){
		
		clearInterval(t);
		
	}
		
	ban.onmouseout = function(){
		t =setInterval(move,1000);
		
		
	}
	
//	6.移入小圆点,显示和移入的小圆点索引一致的图片

  for(var j =0;j<lis.length;j++ ){
  	    lis[j].suoyin = j;
  	    
		lis[j].onmouseover = function(){
			index = this.suoyin;//把this.suoyin赋值给全局变量，解决移入小圆点乱跑的问题
			fu();
}
	}
//7.点左显示前一张
  leftbtn.onclick = function(){
  	index--;
  	if(index < 0){
  		index =3;
  	}
  	fu();
  }
 //8.点右显示后一张 
 
 rightbtn.onclick = function(){
  	index++;
  	if(index  >3){
  		index = 0;
  	}
  	fu();
 
   }
//9.把重复使用的代码封装函数在需要的位置直接调用
function fu (){
	for(var i =0;i<imgs.length;i++ ){
				imgs[i].className = "";
				//小圆点背景色变黑
				lis[i].className = "";
			}
	//console.log(index);
  	imgs[index].className = "show"; 	
  	lis[index].className = "red";
  	
  
    }
	
	
	
	
	
	//播放
	var bofang=document.getElementById("bofang");
	//console.log(bofang);
	var qqa=document.getElementsByClassName("qqa")[0];
	var bj=document.getElementsByClassName("bj")[0];
	//console.log(qqa);
	var mp4=document.getElementById("mp4");	
    //console.log(mp4);
	bofang.onclick=function(){
		
		mp4.style.display="block";
		bj.style.display="block";
		mp4.play();
	}  	       	       






// 饶从谋js代码块
   // 2商品详情等选项卡
	//获取详细商品等五个选项卡按钮节点
	var switchBtn = document.getElementsByName("switchBtnOne");
	//console.log(switchBtn);//检测节点
	//获取四个div选项卡节点
	var sel = document.getElementsByClassName("sel");
   //console.log(sel);//检测节点
   //茶图左右按钮
   //获取茶图按钮节点
   var leftBtns = document.getElementsByClassName("leftBtns")[0];
   //console.log(leftBtn);
   var rightBtns = document.getElementsByClassName("rightBtns")[0];
   //console.log(rightBtn);
   ////获取每一个小图img外div的节点
   var lunboImg = document.getElementsByClassName("lunboImg");
   //console.log(lunboImg);
   //获取大图外div节点
   var scaleImg = document.getElementsByClassName("scaleImg")[0];
   // console.log(scaleImg);
   //获取每一个大图节点
   var bigImg = document.getElementsByName("imgDis");
   //console.log(bigImg);
   //获取被放大外层
   var picImg = document.getElementById("pic-big");
   console.log(picImg);
   //获取被放大的图片节点
   var bigedImg = picImg.getElementsByTagName("img");
   var x = 0;
   //给每个按钮添加点击事件
   for(var i=0;i<switchBtn.length;i++){
   	   // 自定义索引
   	   switchBtn[i].suoYin = i;
   	   // 为选项卡按钮添加点击事件
   	   switchBtn[i].onclick = function(){
   	   // 外层for循环遍历每个选项卡对应的内容盒子节点
   	   for(var j=0;j<sel.length;j++){
   	   // 控制选项卡改变相应内容样式
   	   sel[j].style.display = "none";
   	   switchBtn[j].style.color = "#000";
   	   switchBtn[j].style.backgroundColor = "#F1F1F1";
   	   }//内层for循环结束
   	   // 控制选项卡改变相应内容样式(当前选项卡样式)
   	   switchBtn[this.suoYin].style.color = "#fff";
   	   sel[this.suoYin].style.display = "block";
   	   switchBtn[this.suoYin].style.backgroundColor = "#00953E";
   	}//switchBtn[i].onclick点击事件结束
   }//外层for循环结束
   //商品选项卡结束
   
   
   //购买加减按钮
   //获取中间一个input的节点
   var inps = document.getElementsByName("inps")[0];
   //console.log(inps);
   //加的按钮
   function add(){
   	//为+号按钮添加点击事件触发input值自加
   	inps.nextElementSibling.onclick =function(){
   		inps.value++;
   	}
   }
   add();

   function sub(){
   	//为-号按钮添加点击事件触发input值自减
   	inps.previousElementSibling.onclick =function(){
   		// if判断input值的临界值不能是负数
   		if(inps.value<=0){
   			alert("购买数量最小值不能小于0哦！");
   			inps.value = 0;
   		}else if(inps.value>0){
   			inps.value--;
   		}
   	}
   }
   sub();
   //购物物品放大和选项卡效果js
   //遍历每一个按钮
   for(var i=0;i<lunboImg.length;i++){
   	  // 下方的小图片初始化显示第一张，其他隐藏
   	  lunboImg[0].style.border = "2px solid green";
      lunboImg[i].style.border = "1px solid black";
      // 上方大图初始化显示第一张，其他隐藏
      bigImg[i].style.display = "none";
      bigImg[0].style.display = "block";
      // 放大图片初始化显示第一张，其他隐藏
      bigedImg[0].style.display = "block";
      bigedImg[i].style.display = "none";


      // 自定义索引
      lunboImg[i].suoYin = i;
      // 下方图片点击按钮遍历
      lunboImg[i].onclick = function(){
      // 外层for循环遍历上方没放大的大图片
      for(var j=0;j<bigImg.length;j++){
      // 点击时同步样式改变
      lunboImg[j].style.border = "1px solid black";
      bigImg[j].style.display = "none";
      bigedImg[j].style.display = "none";
      }
      // 点击时同步样式改变(三个框图片同时进行操作)
      lunboImg[this.suoYin].style.border = "2px solid green";
      bigImg[this.suoYin].style.display = "block";
      bigedImg[this.suoYin].style.display = "block";
      }//内层for循环结束
   }//外层for循环结束
   //获取评价框按钮节点
   var kuang = document.getElementsByClassName("kuang");
   //console.log(kuang);
   //获取商品评价节点文本内容节点
   var numSays = document.getElementsByClassName("numSays")[0];
   //console.log(numSays);
   //获取勾勾框的节点
   var greens = document.getElementsByClassName("green");
   //console.log(greens);
   //获取每个框里数字文本节点
   var saysPeople = document.getElementsByName("saysPeople");
   //console.log(saysPeople);
   //遍历每一个评价勾选框节点
   for(var i=0;i<kuang.length;i++){
 	kuang[i].index = i;//自定义索引
   	kuang[i].onclick = function(){//为每一个评价勾选框节点添加点击事件
   		//if语句的开关灯效果
   		if(greens[this.index].style.display == "block"){
   		   //商品评价节点文本内容数字添加加法
   		   numSays.innerHTML = parseInt(numSays.innerHTML) - parseInt(this.firstElementChild.nextElementSibling.innerHTML);
   		   //隐藏勾勾
   		   greens[this.index].style.display = "none";
   		}else{
   			//商品评价节点文本内容数字添加减法
   			numSays.innerHTML = parseInt(numSays.innerHTML) + parseInt(this.firstElementChild.nextElementSibling.innerHTML);
   			//显示勾勾
   			greens[this.index].style.display = "block";
   	    }	
   	 }
   }
   // 放大镜
   function scales(){
   // 获取与放大镜相关的操作节点
   var pics = document.getElementById('pics'),
       bec = document.getElementById('pic-big'),
       mov = document.getElementById('mov'),
       shoppingCar = document.getElementById("shoppingCar");
       //console.log(pics,bec,mov,shoppingCar);
       //move小方块坐标位置定义初始值为0的变量
	   var newX = 0,
	   newY = 0,
	   nowDisX = 0,
	   nowDisY = 0;

        // 给上方大图片添加鼠标移入事件
        pics.onmouseover = function (e) {
            bec.style.display = 'block'; //移入效果
            mov.style.display = 'block';
 
            nowDisX = mov.offsetLeft; //当前move块距父级右侧距离
            nowDisY = mov.offsetTop;    //当前move块距父级顶部距离
            e.preventDefault();//阻止浏览器默认行为
            document.onmousemove = function (e) {
                e.preventDefault();//阻止浏览器默认行为
                newX = e.clientX; // 获取当前鼠标X轴位置
                newY = e.pageY; // 获取当前鼠标Y轴位置(注意:此处获取鼠标当前位置不受滚动条影响)
 
                var nowX = newX - shoppingCar.offsetLeft - (mov.offsetWidth / 2)-60;
                 //获取移动时move块距父级左侧距离
                var nowY = newY - shoppingCar.offsetTop - (mov.offsetWidth / 2)-60;
                //获取移动时move块距父级顶部距离
                var maxX = pics.offsetWidth - mov.offsetWidth;
                //设置move块的X轴最大移动距离
                var maxY = pics.offsetHeight - mov.offsetHeight;
                //设置move块的Y轴最大移动距离


                if (nowX <= 0) {
                    nowX = 0; //X轴最小值判断
                };
                if (nowX >= maxX) {
                    nowX = maxX;//X轴最大值判断
                };
                if (nowY <= 0) {
                    nowY = 0; //Y轴最小值判断
                };
                if (nowY >= maxY) {
                    nowY = maxY;//Y轴最大值判断
                };


                bec.scrollLeft = nowX * 2; // 大图横向显示显示位置
                bec.scrollTop = nowY * 2;    // 大图纵向显示位置
                mov.style.left = nowX + 'px'; //当前的move块X轴位置
                mov.style.top = nowY + 'px'; //当前的move块Y轴位置
            }
        }
        pics.onmouseout = function () {
            bec.style.display = 'none'; // 移出效果
            mov.style.display = 'none';
        }
      }//放大镜方法结束
      scales();
}
