//使用单例模式

$(document).ready(function() {

    // 实现百度更多产品下拉
    var baiduDown = {
        init: function() {
            this.render();
            this.bind();
        },
        render: function() {
            this.$more = $('.more');
        },
        bind: function() {
            var _this = this;
            _this.$more.hover(function() {
                $(_this.$more).find('#box').css('display', 'block');
            }, function() {
                $(_this.$more).find('#box').css('display', 'none');
            });
        }
    }
    baiduDown.init();
    //左侧天气
    var weatherMenu = {
        init: function() {
            this.render();
            this.bind();
        },
        render: function() {
            this.$smodweather = $(".s-mod-weather");

        },
        bind: function() {
            var _this = this;
            _this.$smodweather.hover(function() {
                $(".weather-detail").slideDown();
            }, function() {
                $(".weather-detail").slideUp();
            });
        }
    }
    weatherMenu.init();

    //用户经过我的关注右侧信息显示
    var myAttentionShow = {
        init: function() {
            this.render();
            this.bind();
        },
        render: function() {
            this.$myAttention = $('.s-mblock-title');
        },
        bind: function() {
            var _this = this;
            _this.$myAttention.hover(function() {
                $(_this.$myAttention).children('.s-setbar').show();
            }, function() {
                $(_this.$myAttention).children('.s-setbar').hide();
            });
        }
    }
    myAttentionShow.init();



    //我的关注标签页区域内容切换
    var myAttentionTab = {
        init: function() {
            this.render();
            this.bind();
        },
        render: function() {
            this.$div_li = $("div.tab ul li");
        },
        bind: function() {
            this.$div_li.hover(function() {
                $(this).addClass("menu-selected")
                    .siblings().removeClass('menu-selected');
                var index = $(this).index();
                $("div.tab_box > div").eq(index).show().siblings().hide();
            })
        }
    }
    myAttentionTab.init();

    // 用户点击我的关注下拉显示，并改变icon
    //点击我的导航小三角的切换
    var changIcont = {
        init: function() {
            this.render();
            this.bind();
        },
        render: function() {
            this.$s_block_container = $(".s-block-container");
        },
        bind: function() {
            var _this = this;
            _this.$s_block_container.click(function(event) {
                if ($(this).children('.s-mblock-content').is(":hidden")) {
                    $(this).children('.s-mblock-content').css('display', 'block');
                    changIcon($(this).children('.s-mblock-content'));
                } else {
                    $(this).children('.s-mblock-content').css('display', 'none');
                    changIcon($(this).children('.s-mblock-content'));

                }
            });

        }
    }
    changIcont.init();

    function changIcon(mainNode) {
        if (mainNode) {
            if (!mainNode.is(":hidden")) {
                $('.mine-title-icon>em').css({
                    'top': '3px',
                    'left': 0,
                    'border': '5px dashed transparent',
                    'border-top': '5px solid #666'
                })
            } else {
                $('.mine-title-icon>em').css({
                    'top': 0,
                    'left': '3px',
                    'border-top': '5px dashed transparent',
                    'border-left': '5px solid #666'
                })
            };
        }
    }

    // 打开上次保存的换肤主题

    var localImg = {
        init: function() {
            this.render();
            this.bind();
        },
        render: function() {
            this.bgImg = localStorage.getItem('bgImg');
        },
        bind: function() {
            if (this.bgImg) {
                $("body").css("background", this.bgImg);
                $("body").css("background-size", "100%");
                $('.content').children('.logo').attr('src', 'img/logo_white.png');
            }
        }
    }
    localImg.init();
    // 皮肤下拉
    var skinDown = {
        init: function() {
            this.render();
            this.bind();
        },
        render: function() {
            this.$skin = $(".skin");
        },
        bind: function() {
            this.$skin.click(function() {
                $(".skin-wrapper").animate({
                    height: "309px"
                }, 500);
            })
        }
    }
    skinDown.init();

    // 皮肤收起
    var skinBack = {
        init: function() {
            this.render();
            this.bind();
        },
        render: function() {
            this.$backtop = $(".back-top");
        },
        bind: function() {
            var that = this;
            that.$backtop.click(function() {
                $(".skin-wrapper").animate({
                    height: "0px"
                }, 500);
            })
        }
    }
    skinBack.init();
    // 换肤内容标签页切换
    var titleSelect = {
        init: function() {
            this.render();
            this.bind();
        },
        render: function() {
            this.$title_li = $("div.title-tab ul li");
        },
        bind: function() {
            this.$title_li.click(function() {
                $(this).addClass("title-selected").siblings().removeClass('title-selected');
                var index = $(this).index();
                $("div.bg-tabBox > div").eq(index).show().siblings().hide();
            })
        }
    }
    titleSelect.init();

    // 热门标签页的皮肤
    var hotBoxImgSelect = {
        init: function() {
            this.render();
            this.bind();
        },
        render: function() {
            this.$hotBoxImg = $(".hot-box img");
        },
        bind: function() {
            var that = this;
            var i = 1;
            that.$hotBoxImg.hover(function() {
                i = $(that.$hotBoxImg).index(this);
                $(".bg-preview").css("background", 'url(img/bg' + i + 's.jpg) no-repeat');
                $(".bg-preview").css("background-size", "264px 180px");
            });
            // 点击换肤，body背景更换
            that.$hotBoxImg.click(function() {
                $("body").css("background", 'url(img/bg' + i + '.jpg) no-repeat');
                $("body").css("background-size", "100%");
                $('.content').children('.logo').attr('src', 'img/logo_white.png');
                //保存的换肤主题
                localStorage.setItem('bgImg', 'url(img/bg' + i + '.jpg) no-repeat');
            });
        }
    }
    hotBoxImgSelect.init();

    // 游戏标签页的皮肤
    var gameBoxImgSelect = {
        init: function() {
            this.render();
            this.bind();
        },
        render: function() {
            this.$gameBoxImg = $(".game-box img");
        },
        bind: function() {
            var that = this;
            var i = 1;
            that.$gameBoxImg.hover(function() {
                i = $(that.$gameBoxImg).index(this);
                $(".bg-preview").css("background", 'url(img/bg' + (i + 12) + 's.jpg) no-repeat');
                $(".bg-preview").css("background-size", "264px 180px");
            });
            // 点击换肤，body背景更换
            that.$gameBoxImg.click(function() {
                $("body").css("background", 'url(img/bg' + (i + 12) + '.jpg) no-repeat');
                $("body").css("background-size", "100%");
                $('.content').children('.logo').attr('src', 'img/logo_white.png');
                //保存的换肤主题
                localStorage.setItem('bgImg', 'url(img/bg' + (i + 12) + '.jpg) no-repeat');
            });
        }
    }
    gameBoxImgSelect.init();
    // 返回顶部
    var toTop = {
        init: function() {
            this.render();
            this.bind();
        },
        render: function() {
            this.$document = $(window);
        },
        bind: function() {
            var _this = this;
            if ($(_this.$document).scrollTop() == 0) {
                $(".top").hide();
            }
            $(window).scroll(function(event) {
                if ($(_this.$document).scrollTop() == 0) {
                    $(".top").hide();
                }
                if ($(_this.$document).scrollTop() != 0) {
                    $(".top").show();
                }
            });

            // 鼠标点击回到顶部
            $(".top").click(function(event) {

                $('body,html').animate({ scrollTop: 0 }, 500)
            });

        }
    }
    toTop.init();
});
