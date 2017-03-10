 inputNumber = document.getElementById("numinput"); //输入框
 submitBtn = document.getElementById("sumbit"); //提交按钮
 cleatBtn = document.getElementById("clear"); //清零按钮
 greedText = document.getElementById("greed"); //显示框
 submitBtn.onclick = function() { //提交
     greedText.innerText = ""; //清零
     var str=inputNumber.value;
     var v=0;
     var num = parseInt(str); //获取input中的数据并转换为数字
     // console.log();
     if ((v=str.indexOf("-"))>-1) {
         greedText.innerText = "请输入数字>0";
     } else {

         if (!isNaN(num)) { //判断类型NAN
             if (num>-1&&num <= 10) { //判断区间
                 greedText.innerText = "10等生";
             } else if (10 < num && num <= 20) {
                 greedText.innerText = "9等生";
             } else if (20 < num && num <= 30) {
                 greedText.innerText = "8等生";
             } else if (30 < num && num <= 40) {
                 greedText.innerText = "7等生";
             } else if (40 < num && num <= 50) {
                 greedText.innerText = "6等生";
             } else if (50 < num && num <= 60) {
                 greedText.innerText = "5等生";
             } else if (60 < num && num <= 70) {
                 greedText.innerText = "4等生";
             } else if (70 < num && num <= 80) {
                 greedText.innerText = "3等生";
             } else if (80 < num && num <= 90) {
                 greedText.innerText = "2等生";
             } else if (90 < num && num <= 100) {
                 greedText.innerText = "1等生";
             } else {
                 greedText.innerText = "请输入数字<100";
             }
         } else {
             greedText.innerText = "error TYPE";
         }
     }
 }
 cleatBtn.onclick = function() { //清零
     inputNumber.value = " ";
 }
