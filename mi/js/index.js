/**
 * Created by Administrator on 2016/10/18.
 */

// 顶部导航部分js
$('#gwc-bar').on({
    mouseenter:function (){$('.gwc-tab').slideDown(300);$('#gwc').css({'background':'white','color':'#ff6700'})},
    mouseleave:function(){ $('.gwc-tab').slideUp(100);$('#gwc').css({'background':'#424242','color':'#b0b0b0'})}
    });

//头部部分-搜索框
var headerSeachRanger = (function () {
    return{
        init:function () {
            $('#header .search').focus('click',function () {
                $('#header .search').css('border','1px solid #ff6700');
                $('#header .btn').css('border','1px solid #ff6700');
            });
            $('#header .search').blur('click',function () {
                $('#header .search').css('border','1px solid #e0e0e0');
                $('#header .btn').css('border','1px solid #e0e0e0');
            });
        }
    }
})()
headerSeachRanger.init();

// 头部部分-上部选项卡
var headerTabTopRanger = (function () {
    return{
        init:function () {
            tab ();
            function tab (){
                var t;
                var jasonHeader = {小米5s:['mi5!160x110.jpg','小米5s'],小米5PLUS:['5splus-220!160x110.jpg','小米5PULS'],平板:['mipad2-16!160x110.jpg','平板']};
                $('#header-tab-bar li:eq(8)'). mouseenter(function () {
                    //加定时器让鼠标悬停0.15s才执行
                    t = setTimeout(function () {
                        $('#header-tab').slideDown(250);
                        $('#header-tab img').attr('src', './imgs/' + jasonHeader['小米5s'][0] + '')
                        $('#header-tab .name').html(jasonHeader['小米5s'][1])
                    }, 150);
                }).mouseleave(function(){
                    clearTimeout(t);});

                $('#header-tab-bar li:eq(7)'). mouseenter(function () {
                    t = setTimeout(function () {
                        $('#header-tab').slideDown(250);
                        $('#header-tab img').attr('src', './imgs/' + jasonHeader['小米5PLUS'][0] + '');
                        $('#header-tab .name').html(jasonHeader['小米5PLUS'][1]);
                    }, 150);
                }).mouseleave(function(){
                    clearTimeout(t);});
                $('#header-tab-bar li:eq(6)'). mouseenter(function () {
                    t = setTimeout(function () {
                        $('#header-tab').slideDown(250);
                        $('#header-tab img').attr('src', './imgs/' + jasonHeader['平板'][0] + '');
                        $('#header-tab .name').html(jasonHeader['平板'][1]);
                    }, 150);
                }).mouseleave(function(){
                    clearTimeout(t);});
            }

            $('#header-tab-bar ul').on({
                mouseleave:function(){ $('#header-tab').slideUp(250);}
            });
            $('#header-tab').mouseenter(function () {
                $(this).stop();
            });
            $('#lunbo').mouseenter(function () {
                $('#header-tab').slideUp(250);
            });

        }
    }
})()
headerTabTopRanger.init();

//主轮播图部分
var mainTabRanger = (function () {
    return {
        init:function () {
            function lunbo(arrImg) {
                var num = 0;
                var timer=null;
                for(var i=0;i<arrImg.length;i++){
                    $('#imgbox').append($('<a href="#"><img src="" alt=""></a> '));
                    // alert( $('#imgbox img').eq(i).attr('src'))
                    // alert(arrImg[i])
                    $('#imgbox img').eq(i).attr('src',arrImg[i]);
                    $('#ballbox').append($('<li></li>'));
                }

                $('img:eq(0)').css('display','block');
                $('#lunbo li').attr('class','gray');
                $('#lunbo li').eq(num).attr('class','active');
                //图片往前切换函数
                move();
                function move() {
                    if(num<arrImg.length-1){
                        num++;
                    }else{num=0};
                    $('#lunbo img').css('display','none');
                    $('#lunbo img').eq(num).fadeIn();
                    $('#lunbo li').attr('class','gray');
                    $('#lunbo li').eq(num).attr('class','active');
                    // alert(num)
                }
                $('#next').click(function () {
                    move();
                });
                $('#last').click(function () {
                    if(num>0){
                        num--;
                    }else{num=arrImg.length-1};
                    $('#lunbo img').css('display','none');
                    $('#lunbo img').eq(num).fadeIn();
                    $('#lunbo li').attr('class','gray');
                    $('#lunbo li').eq(num).attr('class','active');
                });
                $('#ballbox').on('click','li',function () {
                    if(num!=$(this).index()){
                        num = $(this).index();
                        $('#lunbo li').attr('class','gray');
                        $(this).attr('class','active');
                        $('#lunbo img').css('display','none');
                        $('#lunbo img').eq(num).fadeIn();
                    }
                });
                function auto() {
                    timer = window.setInterval(function () {
                        move();
                    },3000);
                }
                auto();
                $('#lunbo').mouseover(function () {
                    window.clearInterval(timer);
                });
                $('#lunbo').mouseout(function () {
                    timer = window.setInterval(function () {
                        move();
                    },3000);
                });
                $('#lunbo .lunbo-move').mouseenter(function () {
                    // alert(1)
                    $('#lunbo .lunbo-move').fadeTo(100,0.8);
                });
                $('#lunbo .lunbo-move').mouseleave(function () {
                    // alert(1)
                    $('#lunbo .lunbo-move').fadeTo(100,0.1);
                });
            }
            lunbo(['./imgs/1.jpg','./imgs/2.jpg','./imgs/3.jpg','./imgs/4.jpg']);
        }
    }
})()
mainTabRanger.init();

//头部部分-侧边选项卡
var headerTabRanger = (function () {
    return{
        init:function () {
            var arrHeader = {小米5s:['小米5s','5sdaohang80.jpg'],小米笔记本:['小米笔记本','maxbar80.jpg'],电视:['电视','mi5bar80.jpg'],小米音响:['小米音响','5sdaohang80.jpg'],小米背包:['小米背包','maxbar80.jpg'],平板:['平板','mi5bar80.jpg']}

            $('.lunbo-tab-content li').eq(0).mouseenter(function () {
                $('.lunbo-tab-div').css('display','block');
                $('.lunbo-tab-div span').html(''+arrHeader['小米5s'][0]+'');
                $('.lunbo-tab-div img').attr('src','./imgs/'+arrHeader['小米5s'][1]+'');
            });
            $('.lunbo-tab-content li').eq(1).mouseenter(function () {
                $('.lunbo-tab-div').css('display','block');
                $('.lunbo-tab-div span').html(''+arrHeader['小米笔记本'][0]+'');
                $('.lunbo-tab-div img').attr('src','./imgs/'+arrHeader['小米笔记本'][1]+'');
            });
            $('.lunbo-tab-content li').eq(2).mouseenter(function () {
                $('.lunbo-tab-div').css('display','block');
                $('.lunbo-tab-div span').html(''+arrHeader['电视'][0]+'');
                $('.lunbo-tab-div img').attr('src','./imgs/'+arrHeader['电视'][1]+'');
            });
            $('.lunbo-tab-content li').eq(3).mouseenter(function () {
                $('.lunbo-tab-div').css('display','block');
                $('.lunbo-tab-div span').html(''+arrHeader['小米音响'][0]+'');
                $('.lunbo-tab-div img').attr('src','./imgs/'+arrHeader['小米音响'][1]+'');
            });
            $('.lunbo-tab-content li').eq(4).mouseenter(function () {
                $('.lunbo-tab-div').css('display','block');
                $('.lunbo-tab-div span').html(''+arrHeader['小米背包'][0]+'');
                $('.lunbo-tab-div img').attr('src','./imgs/'+arrHeader['小米背包'][1]+'');
            });
            $('.lunbo-tab-content li').eq(5).mouseenter(function () {
                $('.lunbo-tab-div').css('display','block');
                $('.lunbo-tab-div span').html(''+arrHeader['平板'][0]+'');
                $('.lunbo-tab-div img').attr('src','./imgs/'+arrHeader['平板'][1]+'');
            });
            $('.lunbo-tab-content ').mouseleave(function () {
                $('.lunbo-tab-div').css('display','none');
            });
            $('.lunbo-tab-content ').mouseenter(function () {
                $('#header-tab').slideUp(250);
            });
            $('.lunbo-tab-div').mouseenter(function () {
                $(this).css('display','block');
            });
            $('.lunbo-tab-div ').mouseleave(function () {
                $('.lunbo-tab-div').css('display','none');
            });
        }
    }
})()
headerTabRanger.init();

//小米明星单品-为你推荐，共用翻页轮播部分
var fyRanger = (function () {
    return {
        init:function () {
            function fynext () {
                $('.fylb ul').animate({left:-1240},600,'swing');
                $('.fylb .next').css('color','#e0e0e0');
                $('.fylb .pre').css('color','#ff6700');
                fyleft = parseInt($('.fylb ul').css('left'));
            }
            function fypre () {
                $('.fylb ul').animate({left:0},600,'swing');
                $('.fylb .pre').css('color','#e0e0e0');
                $('.fylb .next').css('color','#ff6700');
                fyleft = parseInt($('.fylb ul').css('left'));
            }
            var fyleft = 0 ;
            var fytimer = setInterval(function () {
                if(fyleft==0){
                    fynext ();
                }else if(fyleft<0){
                    fypre();
                }
            },4000);

            $('.fylb .next').click(function () {
                fynext ();
            });
            $('.fylb .pre').click(function () {
                fypre ();
            });
        }
    }
})()
fyRanger.init();

// 商品展示-搭配-配件
var dpRanger = (function () {
    return{
        init:function () {
            $('#dp .hd-box .ejyx-a').mouseenter(function () {
                $('#dp .dy').css('display','none');
                $('#dp .ejyx').css('display','block');
                $('#dp .hd-box .dy-a').css({'color':'black','borderColor':'transparent'});
                $(this).css({'color':'#ff6700','borderColor':'#ff6700'});
            });
            $('#dp .hd-box .ejyx-a').mouseleave(function () {
                $(this).css({'color':'#ff6700','borderColor':'#ff6700'});
            });
            $('#dp .hd-box .dy-a').mouseenter(function () {
                $('#dp .ejyx').css('display','none');
                $('#dp .dy').css('display','block');
                $(this).css({'color':'#ff6700','borderColor':'#ff6700'});
                $('#dp .hd-box .ejyx-a').css({'color':'black','borderColor':'transparent'});
            });
            $('#dp .hd-box .dy-a').mouseleave(function () {
                $(this).css({'color':'#ff6700','borderColor':'#ff6700'});
            });

        }
    }
})()
dpRanger.init();

// 主内容区-内容
var nrRanger = (function () {
    return {init:function () {
        // 用二维数组存四个轮播图的初始变量,第一个是left值,第二个是指示小球下标
        var nrArr = [[0,0],[0,0],[0,0],[0,0]];
// 逐个和相应的变量绑定点击事件
        for (var i=0;i<nrArr.length;i++){
            $('.nr-lb>li').eq(i).find('.next').click(function () {
                // alert( $(this).parent().index())
                // alert(nrArr[$(this).parent().index()][0])
                if(nrArr[$(this).parent().index()][0]>-882){
                    nrArr[$(this).parent().index()][0]-=294;
                    nrArr[$(this).parent().index()][1]++;
                    $('.nr-lb>li').eq($(this).parent().index()).find('.nr-lb-ul').css('left',nrArr[$(this).parent().index()][0]);
                    $('.nr-lb>li').eq($(this).parent().index()).find('.ballbox').find('li').find('a').css('background','#b0b0b0');
                    $('.nr-lb>li').eq($(this).parent().index()).find('.ballbox').find('li').eq(nrArr[$(this).parent().index()][1]).find('a').css('background','#ff6700');
                }
            });
            $('.nr-lb>li').eq(i).find('.pre').click(function () {
                if(nrArr[$(this).parent().index()][0]<0){
                    nrArr[$(this).parent().index()][0]+=294;
                    nrArr[$(this).parent().index()][1]--;
                    $('.nr-lb>li').eq($(this).parent().index()).find('.nr-lb-ul').css('left',nrArr[$(this).parent().index()][0]);
                    $('.nr-lb>li').eq($(this).parent().index()).find('.ballbox').find('li').find('a').css('background','#b0b0b0');
                    $('.nr-lb>li').eq($(this).parent().index()).find('.ballbox').find('li').eq(nrArr[$(this).parent().index()][1]).find('a').css('background','#ff6700');
                }
            });
//函数里不能用任何++的值,会得到循环完的值,用this作为控制的方法
        }
    }}
})();
nrRanger.init();

