 inputStr = document.getElementById("strinput"); //输入框
 submitBtn = document.getElementById("sumbit"); //提交按钮
 greedText = document.getElementById("greed"); //显示框

 submitBtn.onclick = function() { //提交
     var str1 = inputStr.value.split(" "); //获取input中的字符串并转换为数组
     var num = {}; //次数
     var position = {}; //位置
     // 遍历字符串数组，确定每个数组的个数和位置
     str1.forEach(function(value, index) {
         // statements
         if (num[value]) {
             num[value]++;
             position[value] += "," + index;

         } else {
             num[value] = 1;
             position[value] = "" + index;
         }
     });

 
     var m=0;
     var x=0;
     var max=new Array();
// 寻找出现的次数最多时为多少次

     for (i in num){
        if(num[i]>m){
            m=num[i];
        }
     }
// 把出现最多的次数的字母找出来

     for(i in num){
        if(num[i]==m){
            max[x]=i;
            x++;
        }

     }
     // console.log("max="+max);
// 把出现最多的次数的字母的位置找出来
     for (var i=0;i<max.length;i++){
        var x=max[i];
        console.log(max[i]+":");
        console.log(position[x]);
     }









     // var array3 = new Array();                         //array3数组用于存放出现多次的字母的下标
     // var s;                                            //s用于存放出现次数最多的字母
     // var num = 0;                                      //num用于存放出现的次数
     // var sta = 0;                                      //sta用于存放出现最多的次数
     // for (var i = 0, length = str1.length; i < length; i++) { //循环找出相同的字母
     //     var array1 = new Array();
     //     if (-1 != array3.indexOf(i)) {                 //判断索引i是否在array3中，若出现则表示是一个遍历过且重复的字母，则不需要再遍历
     //         continue;
     //     }
     //     for (var j = 0, length = str1.length; j < length; j++) { //循环找出相同的字母

     //         if (str1[i] == str1[j]) {                  //判断字母是否相同
     //             num += 1;
     //             array1.push(j);
     //             array3.push(j);
     //         }
     //     }
     //     if (num > sta) {                               //判断是否出现次数最多
     //         var array2 = new Array();
     //         s = str1[i];
     //         sta = num;
     //         array2 = array1;
     //     }
     //     num = 0;
     // }
     // greedText.innerText = "出现次数最多的字母=" + s + "---" + "总次数=" + sta + "---" + "每一个所在的位置=" + array2;

 }
