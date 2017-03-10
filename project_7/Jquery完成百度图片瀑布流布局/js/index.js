$(document).ready(function() {
    $(window).on("load", function() {
        imgLocation();
        var dataImg = { "data": [{ "src": "1.jpeg"}, {"src": "2.jpeg"}, {"src": "3.jpeg"}, {"src": "4.jpeg"}, {"src": "5.jpeg"}, {"src": "6.jpeg"}, {"src": "7.jpeg"}, {"src": "8.jpeg"}, {"src": "9.jpeg"}, {"src": "10.jpeg" }] };

        window.onscroll = function() {
            // alert();
            console.log('scrollside'+scrollside());
            if (scrollside()) {
                $.each(dataImg.data, function(index, value) {
                    var box = $("<div>").addClass("box").appendTo("#container");
                    var content = $("<div>").addClass("content").appendTo(box);
                    $("<img>").attr("src", "./img/" + $(value).attr("src")).appendTo(content);

                });
                imgLocation();

            }
        }
        windoe.onresize=function(){
                imgLocation();

        }
    });
});

function scrollside() {
    var box = $(".box");
    var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
    var documentHeight = $(document).width();
    var scrollHeight = $(window).scrollTop();
    return (lastboxHeight < scrollHeight + documentHeight) ? true : false;

}

function imgLocation() {

    var box = $(".box");
    var boxWinth = box.eq(0).width();
    var num = Math.floor($(window).width() / boxWinth);
    var boxArr = [];
    box.each(function(index, value) {
        value.style.cssText="";
        var boxHeight = box.eq(index).height();
        if (index < num) {
            boxArr[index] = boxHeight;

        } else {
            var minboxHeight = Math.min.apply(null, boxArr);
            var minboxIndex = $.inArray(minboxHeight, boxArr);
            $(value).css({
                "position": "absolute",
                "top": minboxHeight,
                "left": box.eq(minboxIndex).position().left
            });
            boxArr[minboxIndex] = box.eq(index).height() + boxArr[minboxIndex];
            console.log('boxArr[minboxIndex]' + boxArr[minboxIndex]);
        }
    });
}
