$(function(){
    var img=$('.img_box a');
    var bots=$('.flo .bot');
    var kaiduan=false;
        var moveTo=function(el,dir) {
            kaiduan=true;
            if(dir=="right"){
                img.filter('.active').removeClass('active').addClass('leave')
                    .delay(1000).queue(function(){
                    $(this).removeClass("leave").dequeue();
                    kaiduan=false;
                })
                $(el).addClass('right');
                $(el).get(0).offsetWidth;
                $(el).removeClass("right").addClass("active");
            }else if(dir=="left"){
                img.filter(".active").removeClass("active").addClass("right").delay(1000).queue(function(){
                    $(this).removeClass("right").dequeue();
                    kaiduan=false;
                })
                $(el).addClass("leave");
                $(el).get(0).offsetWidth;
                $(el).removeClass("leave").addClass("active")
            }
            bots.removeClass('active').eq(img.index(el)).addClass('active');

        }

   var  moveRight=function(){
        var active=img.filter(".active");
        var el=active.next().length? active.next():img.eq(0);
        moveTo(el,"right")
    }
    var moveLeft=function(){
        var active=img.filter(".active");
        var el=active.prev().length? active.prev():img.eq(-1);
        moveTo(el,"left")
    }
    bots.on('click',function(){
        if(kaiduan){return;}
        var c=img.index(img.filter(".active"));
        var n=$(this).index()
        if(c==n){
            return;
        }
        if(c<n){
            moveTo(img.eq($(this).index()),"right")
        }
        if(c>n){
            moveTo(img.eq($(this).index()),"left")

        }
    })
    $(".left1").on('click',function(){
        moveRight();
    })
    $(".right1").on('click',function(){
        clearInterval(t)
        moveLeft();
    })
    $(".banner").on("mouseover",function () {
        $(".btm").css("display","block")
        $(".left1").css("display","block")

    })
    $(".banner").on("mouseout",function () {
        $(".btm").css("display","none")

    })
  t=setInterval(moveRight,3000)

    $(".top1 span").on("click",function(){
        $(this).parent().parent().find("a").slideToggle();
        $(this).parent().toggleClass("font")
    })


    var flag=true;
    $(".header_box .list .a").on("click",function(){
        if(flag){
            $(this).parent().toggleClass("list1").removeClass("list2");
            flag=false;
            return
        }else if(flag==false){
            $(this).parent().removeClass("list1").toggleClass("list2");
            flag=true;
        }
       
        
    })
})

