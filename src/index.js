
function getElementsByClassName(element, names) {
            if (element.getElementsByClassName) {
                return element.getElementsByClassName(names);
            } else {
                var elements = element.getElementsByTagName('*');
                var result = [];
                var element,
                    classNameStr,
                    flag;
                names = names.split(' ');
                for (var i = 0; element = elements[i]; i++) {
                    classNameStr = ' ' + element.className + ' ';
                    flag = true;
                    for (var j = 0, name; name = names[j]; j++) {
                        if (classNameStr.indexOf(' ' + name + '') == -1) {
                            flag = false;
                            break;
                        }
                    }
                    if (flag) {
                        result.push(element);
                    }
                }
                return result;
            }
        }

//添加cookie
function setCookie (name, value, expires, path, domain, secure) {
    var cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    if (expires){
        cookie += '; expires=' + expires.toGMTString();}
        if (path){
            cookie += '; path=' + path;}
            if (domain){
                cookie += '; domain=' + domain;}
                if (secure){
                    cookie += '; secure=' + secure;}
                    document.cookie = cookie;
                }

//获取cookie

function getcookie () {
    var cookie = {};
    var all = document.cookie;
    if (all === '')
        return cookie;
    var list = all.split('; ');
    for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var p = item.indexOf('=');
        var name = item.substring(0, p);
        name = decodeURIComponent(name);
        var value = item.substring(p + 1);
        value = decodeURIComponent(value);
        cookie[name] = value;
    }
    return cookie;
}
//删除 cookie
var cookies=getcookie();
function removeCookie (name, path, domain) {
    document.cookie = name + '='
    + '; path=' + path
    + '; domain=' + domain
    + '; max-age=0';
}


var tip_click=document.getElementById('tip_click');
tip_click.onclick=function(){
    if(confirm('确定要关闭么？')){
        
        setCookie('tip_click','1',date);
    }
}
var tip=getElementsByClassName(document,'tip')[0];
window.onload=function(){
      if(getcookie()['tip_click']==1){
        tip.style.display='none';
    }else{
        tip.style.display='block';
    }
     if(getcookie()['followSuc']==1){
            $('head_follow_link').style.display='none';
            $('head_follow_link1').style.display='block';
        }
}
window.onbeforeunload=function(){

}
//封装getElementById
var $ = function (id) {
    return document.getElementById(id);
}
var imgArr=['image/banner1.jpg','image/banner2.jpg','image/banner3.jpg'];
var imgUrl=['http://open.163.com','http://study.163.com','http://www.icourse163.org'];
var imgCount=0;
// var mSlide=document.getElementsByClassName("m_slide")[0];
var mSlide=document.getElementById("j_side");
var date = new Date("December 31, 2020");
//切换动画
var animation=function(ele,from,to){
    var distance=Math.abs(to-from);
    var steplength=distance/100;
    var sign=(to-from)/distance;
    var offset=0;
    var step=function(){
        var tmpOffset=offset+steplength;
        if(tmpOffset<distance){
            ele.style.opacity=from+tmpOffset*sign;
            offset=tmpOffset;

        }else{
            ele.style.opacity=to;
            clearInterval(intervalID);
        }
    }
    ele.style.opacity=from;
    var intervalID=setInterval(step,5);

}

var imgItem=mSlide.getElementsByTagName('img')[0];
var autoSlide=1439196225318;
var autoSlideSrc='auto_id_';
//创建img轮播图
function addimg (){
    if(imgCount==imgArr.length)
    {
        imgCount=0;
    }
    $('auto_id_1439196225318').className="";
    $('auto_id_1439196225319').className="";
    $('auto_id_1439196225320').className="";

    var img=document.createElement('img');
    img.src=imgArr[imgCount];
    // img.style.height='460px';
    // img.style.width='1616px';
    mSlide.href=imgUrl[imgCount];
    mSlide.appendChild(img);
    autoSlide+=imgCount;
    autoSlideSrc+=autoSlide;

    $(autoSlideSrc).className="js-selected";
    imgCount++
    autoSlide=1439196225318;
    autoSlideSrc='auto_id_';
}
addimg ();
//触发器，执行轮播图动态切换
var bbb=setInterval(function(){
    if(isHover){
        return;
    }
    if(mSlide.getElementsByTagName('img')[0])
    {
        mSlide.removeChild(mSlide.getElementsByTagName('img')[0]);
        addimg ();
        animation(mSlide.getElementsByTagName('img')[0],0,1);
    }else{
        addimg ();
        animation(mSlide.getElementsByTagName('img')[0],0,1);
    }
},5000);

var isHover = false;

function play() { 
    isHover = false;
}
function stop() {
    isHover = true;
                //clearTimeout(bbb);
            }

            mSlide.onmouseover = stop;
            mSlide.onmouseout = play;

//轮播图切换按钮事件
$('auto_id_1439196225318').onclick=function(){
    isHover=true;
    imgCount=0;
    if(mSlide.getElementsByTagName('img')[0])
    {
        mSlide.removeChild(mSlide.getElementsByTagName('img')[0]);
        addimg ();
        animation(mSlide.getElementsByTagName('img')[0],0,1);
    }else{
        addimg ();
        animation(mSlide.getElementsByTagName('img')[0],0,1);
    }
    setTimeout(function(){
        sHover=flase;

    },5000);
}
$('auto_id_1439196225319').onclick=function(){
    isHover=true;
    imgCount=1;
    if(mSlide.getElementsByTagName('img')[0])
    {
        mSlide.removeChild(mSlide.getElementsByTagName('img')[0]);
        addimg ();
        animation(mSlide.getElementsByTagName('img')[0],0,1);
    }else{
        addimg ();
        animation(mSlide.getElementsByTagName('img')[0],0,1);
    }
    setTimeout(function(){
        sHover=flase;
    },5000);
}
$('auto_id_1439196225320').onclick=function(){
    isHover=true;
    imgCount=2;
    if(mSlide.getElementsByTagName('img')[0])
    {
        mSlide.removeChild(mSlide.getElementsByTagName('img')[0]);
        addimg ();
        animation(mSlide.getElementsByTagName('img')[0],0,1);
    }else{
        addimg ();
        animation(mSlide.getElementsByTagName('img')[0],0,1);
    }
    setTimeout(function(){
        sHover=flase;
    },5000);
};


$('video_close').onclick=function(){
    $('zhezhao').style.display='none';
    $('video').style.display='none';
    $('video_play').pause();
};
$('ontents_right_img').onclick=function(){
    $('zhezhao').style.display='block';
    $('video').style.display='block';
    $('video_play').play();
};

$('login_close').onclick=function(){
    $('zhezhao').style.display='none';
    $('login').style.display='none';
};





// Ajax请求GET方法的封装
function serialize (data){
    if(!data) return;
    var pairs=[];
    for(var name in data){
        if(!data.hasOwnProperty(name)) continue;
        if(typeof data[name]==='function') continue;
        var value=data[name].toString();
        name=encodeURIComponent(name);
        value=encodeURIComponent(value);
        pairs.push(name+'='+value);
    }
    return pairs.join('&');
}
//登陆成功后触发事件

function loginCallBack(responseText){
    if(responseText!=1){
        alert('登录失败');
        return;
    }
    if(responseText==1)
        alert('登录成功');
        get(urlFollow,'',followCallBack);
        $('zhezhao').style.display='none';
        $('login').style.display='none';
        var date = new Date("December 31, 2020");
        setCookie('loginSuc',hex_md5($("username").value),date);
        setCookie('password',hex_md5($("password").value),date);
}



function unfollow(){
    console.log('ssss');
    var mydate=new Date();  
    mydate.setDate(mydate.getDate()-100);  
    var str=document.cookie;  
    str="followSuc= ;expires="+mydate.toGMTString();  
    document.cookie=str;  
    location.reload();

/*    removeCookie('followSuc','1');
*/}



function followCallBack(responseText){
    if(responseText==1){
        alert('关注成功');
        setCookie('followSuc','1',date);
        $('head_follow_link').style.display='none';
        $('head_follow_link1').style.display='block';
    }
}

options1={pageNo:'1',psize:'20',type:'10'};

function pageData (responseText) {
    var pageDatas = {};
    var pageDatasCount=[];
    var num=1;
    var all = responseText;
    if (all === '')
        return responseText;
    var list = all.split(',"');
    // console.log(list);
    for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var p = item.indexOf('":');
        var name = item.substring(0, p);
        if(name.substring(0,2)=='{"'){
            name=name.substring(2);
        }
        name = decodeURIComponent(name);
        var value = item.substring(p + 2);

        if(value.substring(0,1)=='"'){
            value=value.substring(1);
        }
        if(value.substring(value.length-1)=='"'){
            value=value.substring(0,value.length-1);
        }
        if(name=='description'&&value.length>40){
            value=value.substring(0,40)+'...';
        }

        if(name=='list'){
            value=value.substring(7);
            name='id';
        }
        if(name=='boughtInfoDto'){

            name=value.substring(2,10);
            value=value.substring(12);
        }
        if(name=='pagination'){
            name=value.substring(2,15);
            value=value.substring(17);
        }
        if(value.substring(value.length-1)=='}')
        {
            value=value.substring(0,value.length-1);
        }
        // if(value.substring(value.length-2)=='}]')
        // {
        //     value=value.substring(0,value.length-2);
        // }


        // 编码解码

        // value = decodeURIComponent(value);
        
        // console.log(name+'----'+value);
        pageDatas[name] = value;
        if(name=='courseType'|| name=='totalPage'){
            var q = value.indexOf('}');
            pageDatas['courseType']=value.substring(0, q);
            // console.log(value);
            // console.log(pageDatas['courseType']);
            pageDatasCount.push(pageDatas);
            num++;
            pageDatas={};
            if(num<21){
                pageDatas['id']=value.substring(q+8);
            }
            // console.log(pageDatasCount[num]);
            // console.log(value);
            // console.log(pageDatas['id']);

        }

    }
    return pageDatasCount;
}

function pageCallBack(responseText){

    var data=pageData (responseText);
    if(data.length!=21){
        return;
    }
    // console.log(responseText);
    // for(var name in data[1]){
    //     console.log('name:'+name+';value:'+data[1][name]);
    // }
    // console.log(JSON.parse(responseText));
    // console.log(JSON.parse(responseText).list);
    // console.log(JSON.parse(responseText).list.length);
    var i=0,j=1;
    var txt=''; txt+='<ul class="contents_ul">';
    for (; i < 20; ) {
       
        for(;j<5;j++){

            txt+='<li class="contents_ul_li"><img class="contents_ul_li_img" src='+data[i]['middlePhotoUrl']+' alt=""><p>'+data[i]['name']+'</p><span>'+data[i].provider+'</span><div class="contents_ul_fc">'+data[i].learnerCount+'</div><div class="contents_ul_mon">￥'+data[i].price+'</div><div class="contents_ul_float" style="display:none;"><img class="contents_ul_li_img0" src='+data[i]['middlePhotoUrl']+' alt=""><h2>'+data[i]['name']+'</h2><p id="contents_ul_float_fc">'+data[i]['learnerCount']+'人在学</p><span>发布者：'+data[i]['provider']+'</span><span>分类： '+data[i]['categoryName']+'</span><div class="contents_ul_float_foot" >'+data[i]['description']+'</div></div></li>';
            i++
        }
        j=1;
       
    }; txt+='</ul>';

    $('contents_left').innerHTML=txt;
    pageFloat();

}
function pageFloat(){
    var page=getElementsByClassName(document,'contents_ul_li_img');
    var page0=getElementsByClassName(document,'contents_ul_float');
     for(var i=0;i<20;i++){
        page[i].onmouseover=function(){
            getElementsByClassName(this.parentNode,'contents_ul_float')[0].style.display='block';

        };
        page0[i].onmouseleave=function(){
            this.style.display='none';

        };
    }
}


function get(url,options,callback){
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
            if((xhr.status>=200&&xhr.status<300)||xhr.status==304){
                callback(xhr.responseText);
            }else{
                alert('Request was unsuccssful:'+xhr.status);
            }
        }
    }
    xhr.open('get',url+"?"+serialize(options),true);
    // xhr.setRequestHeader(header,value);//Content-Type  multipart/form_data
    xhr.send(null);
}

var loginUrl=' http://study.163.com/webDev/login.htm';
// options={userName:'95b9941b277caf1c77ee35fee66fc5f6',password:'a972aec008fd064f00ae77c3a6472cc2'};

var url1='http://study.163.com/webDev/couresByCategory.htm';
// options1={pageNo:'2',psize:'1',type:'10'};
var urlFollow='http://study.163.com/webDev/attention.htm';

get(url1,options1,pageCallBack);
//关注onclick事件
$('contents_title1').onclick=function(){
    get(url1,options1,pageCallBack);
    $('contents_title1').className='contents_title1';
    $('contents_title2').className='contents_title2';
    for(var j=0;j<8;j++){
                // console.log(pageCount[j]);
                pageCount[j].className="";
     }
    pageCount[0].className='page-current';
}
$('contents_title2').onclick=function(){
    var aa={pageNo:'1',psize:'20',type:'20'};
    var link='http://study.163.com/webDev/couresByCategory.htm';
    get(link,aa,pageCallBack);
    $('contents_title2').className='contents_title1';
    $('contents_title1').className='contents_title2';
    for(var j=0;j<8;j++){
                // console.log(pageCount[j]);
                pageCount[j].className="";
            }
    pageCount[0].className='page-current';
}

$('head_follow_link').onclick=function(){
        if(!cookies['loginSuc']){
            // alert("你还没有登录");
            $('zhezhao').style.display='block';
            $('login').style.display='block';
        }
        if(!cookies['followSuc']){
            // alert("你还没有登录");
            $('zhezhao').style.display='block';
            $('login').style.display='block';
        }
}

$('login_submit').onclick=function(){
    var name=hex_md5($("username").value);
    var pwd=hex_md5($("password").value);
    var loginOptions={userName:name,password:pwd};

    get(loginUrl,loginOptions,loginCallBack);
    
}

// var txt='<ul class="contents_ul"><li><img src="image/book01.png" alt=""><p>混音全揭秘 舞曲实战篇 揭秘音乐揭秘混音全揭秘 舞曲实战篇 揭秘音乐揭秘</p><span>音频帮</span><div class="contents_ul_fc">510</div><div class="contents_ul_mon">￥800.00</div></li><li><img src="image/book02.png" alt=""><p>混音全揭秘 舞曲实战篇 揭秘音乐揭秘混音全揭秘 舞曲实战篇 揭秘音乐揭秘</p><span>音频帮</span><div class="contents_ul_fc">510</div><div class="contents_ul_mon">￥800.00</div> </li> <li><img src="image/book03.png" alt=""><p>混音全揭秘 舞曲实战篇 揭秘音乐揭秘混音全揭秘 舞曲实战篇 揭秘音乐揭秘</p><span>音频帮</span><div class="contents_ul_fc">510</div><div class="contents_ul_mon">￥800.00</div></li><li><img src="image/book01.png" alt=""><p>混音全揭秘 舞曲实战篇 揭秘音乐揭秘混音全揭秘 舞曲实战篇 揭秘音乐揭秘</p><span>音频帮</span><div class="contents_ul_fc">510</div><div class="contents_ul_mon">￥800.00</div></li></ul>';

//页码切换JS
var pageCount=getElementsByClassName(document,'contents_pages')[0].getElementsByTagName('a');

var pages=function(){ 
    for(var i=0;i<8;i++)
        pageCount[i].onclick=function(){
            for(var j=0;j<8;j++){
                // console.log(pageCount[j]);
                pageCount[j].className="";
            }
            this.className='page-current';
            var no=this.text;
            var t=20;
            if($('contents_title1').className=='contents_title1') t=10;
            var aa={pageNo:no,psize:'20',type:t};
            var link='http://study.163.com/webDev/couresByCategory.htm';
            get(link,aa,pageCallBack);

        };
}
var pagePrev=getElementsByClassName(document,'page-prev')[0];
var pageNext=getElementsByClassName(document,'page-next')[0];

pagePrev.onclick=function(){
    var no=1;
    var t=20;
    console.log(no);
    for(var i=0;i<8;i++){
        if(pageCount[i].className=='page-current')
            no=i;
    }
    if(no==0) return;
    console.log(no);
    pageCount[no].className="";
    pageCount[no-1].className='page-current';

    if($('contents_title1').className=='contents_title1') t=10;
    var aa={pageNo:no,psize:'20',type:t};
    var link='http://study.163.com/webDev/couresByCategory.htm';
    get(link,aa,pageCallBack);
}

pageNext.onclick=function(){
    var no=1;
    var t=20;

    for(var i=0;i<8;i++){
        if(pageCount[i].className=='page-current')
            no=i;
    }
    if(no==7) return;

    pageCount[no].className="";
    pageCount[no+1].className='page-current';

    if($('contents_title1').className=='contents_title1') t=10;
    var aa={pageNo:no+2,psize:'20',type:t};
    var link='http://study.163.com/webDev/couresByCategory.htm';
    get(link,aa,pageCallBack);
}

pages();

//热门推介接口调用；
var hotUrl='http://study.163.com/webDev/hotcouresByCategory.htm';

get(hotUrl,'',pageCallBackHot);

function pageCallBackHot(responseText){

    var data=pageData (responseText);

    if(data.length!=20){
        return;
    }

    var i=0;
    var txt='';
    for (; i < 20;i++) {

            txt+='<li class="clearfix"><img class="contents_right_hotlist_img "src="'+data[i]['smallPhotoUrl']+'" alt="" width="50px" height="50px"><p>'+ data[i]['name']+'</p><img src="image/hotlist_log.png" alt=""><b>'+data[i]['learnerCount']+'</b></li>';

    };

    $('contents_right_hotlist_ul').innerHTML=txt;
    

}


//热门推介滚动JS



function startmarquee(speed, delay) {

        var t;
        var oHeight = 700;/** div的高度 **/　
        var p = false;
        var o = document.getElementById("contents_right_hotlist_ul");
        var preTop = 0;
        o.scrollTop = 10;
        // var lh=o.children[0].clientHeight;/*滚动的高度，自动获取li的高度*/
        var lh=70;
        function start() { 
            t = setInterval(scrolling, speed);
            o.scrollTop += 1;            
        }
        function scrolling() {

            if (o.scrollTop % lh != 0
                    && o.scrollTop % (o.scrollHeight - oHeight - 1) != 0) {
                preTop = o.scrollTop;
            
                o.scrollTop += 1;

                if (preTop >= 628 || preTop == o.scrollTop) {

                    setTimeout(function(){o.scrollTop = 0},delay);
                }
            } else {
                clearInterval(t);
                setTimeout(start, delay);
            }
        }
        setTimeout(start, delay);
    }

    /**startmarquee(一次滚动高度,速度,停留时间);**/　　
        startmarquee(20, 5000);