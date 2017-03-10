window.onload = function() {
        oResults = document.getElementById("results-p");
        oneline = document.getElementsByClassName("one-line");
        twoline = document.getElementsByClassName("two-line");
        threeline = document.getElementsByClassName("three-line");
        fourline = document.getElementsByClassName("four-line");
        fiveline = document.getElementsByClassName("five-line");


        // console.log(oneline);
        var equ = 0;
        allClick(oneline[0], "click", clearClick); //删除全部
        function clearClick() {
            oResults.value = "";
        }

        function allClick(obj, type, handle) {
            try { //兼容chrome firefox opera safari ie9以上版本
                obj.addEventListener(type, handle, false);
            } catch (e) {
                // try { //IE8与以下版本
                //     obj.attachEvent("on" + type, handle);
                // } catch (e) { //早期浏览器
                //     obj["on" + type] = handle;
                // }
            }
        }

        allClick(oneline[1], "click", deletOne); //删除一个数
        function deletOne() {
            var str = oResults.value;
            var len = str.length - 1;
            var s = str.substring(0, len);
            oResults.value = s;
        }

        allClick(oneline[2], "click", precentClick); //%
        function precentClick() { //%
            var str = oResults.value;
            var num = 0;
            if (str.length == 0) {

            } else if ((v = str.indexOf("+")) > 0) {
                percent(v);

            } else if ((v = str.indexOf("-")) > 0) {
                percent(v);


            } else if ((v = str.indexOf("*")) > 0) {
                percent(v);


            } else if ((v = str.indexOf("/")) > 0) {
                percent(v);


            } else if ((v = str.indexOf(".")) > 0) {
                percent(v);


            } else {
                num = accDiv(Number(str), 100);
                oResults.value = num;

            }
        }
        allClick(oneline[3], "click", divisionClick); //  /
        function divisionClick() { //  /
            fuhao("/");

        }

        //三角函数判断
        function trigonometric(i, divisor2, str, type) {
            var lue = 0;
            equ = 0;
            for (lue = i; lue < str.length - 1; lue++) {
                divisor2 += divisor[lue];
            }
            if (divisor2 != 0) {
                if (type == "sin") {
                    oResults.value = Math.sin(parseFloat(jisuan()) * Math.PI / 180);
                } else if (type == "cos") {
                    oResults.value = Math.cos(parseFloat(jisuan()) * Math.PI / 180);

                } else if (type == "tan") {
                    oResults.value = Math.tan(parseFloat(jisuan()) * Math.PI / 180);

                } else if (type == "sqrt") {
                    oResults.value = Math.sqrt(parseFloat(jisuan()));
                }
            }
        }
        allClick(oneline[4], "click", sinClick); //sin
        function sinClick() {
            var str = oResults.value;
            var i = 0;
            regExpp();
            if ((i = str.indexOf("+")) > 0) {
                divisor2 = trigonometric(i, divisor2, str, "sin");
            } else if ((i = str.indexOf("-")) > 0) {
                divisor2 = trigonometric(i, divisor2, str, "sin");

            } else if ((i = str.indexOf("*")) > 0) {
                divisor2 = trigonometric(i, divisor2, str, "sin");

            } else if ((i = str.indexOf("/")) > 0) {
                divisor2 = trigonometric(i, divisor2, str, "sin");

            } else {
                oResults.value = Math.sin(parseFloat(str) * Math.PI / 180);
            }
        }



        allClick(twoline[0], "click", seventCLick); // 7
        function seventCLick() {
            afterZero(7);

        }
        allClick(twoline[1], "click", eightCLick); // 8
        function eightCLick() {
            afterZero(8);

        }
        allClick(twoline[2], "click", nineCLick); // 9
        function nineCLick() {
            afterZero(9);

        }
        allClick(twoline[3], "click", multiplicativeClick); // *
        function multiplicativeClick() {
            fuhao("*");
        }
        allClick(twoline[4], "click", cosClick); // cos
        function cosClick() {
            var str = oResults.value;
            var i = 0;
            regExpp();
            if ((i = str.indexOf("+")) > 0) {
                divisor2 = trigonometric(i, divisor2, str, "cos");
            } else if ((i = str.indexOf("-")) > 0) {
                divisor2 = trigonometric(i, divisor2, str, "cos");

            } else if ((i = str.indexOf("*")) > 0) {
                divisor2 = trigonometric(i, divisor2, str, "cos");

            } else if ((i = str.indexOf("/")) > 0) {
                divisor2 = trigonometric(i, divisor2, str, "cos");

            } else {
                oResults.value = Math.cos(parseFloat(str) * Math.PI / 180);
            }

        }

        allClick(threeline[0], "click", fourCLick); // 4
        function fourCLick() {
            afterZero(4);

        }
        allClick(threeline[1], "click", fiveCLick); // 5
        function fiveCLick() {
            afterZero(5);

        }
        allClick(threeline[2], "click", sixCLick); // 6
        function sixCLick() {
            afterZero(6);

        }
        allClick(threeline[3], "click", subCLick); // -
        function subCLick() {
            fuhao("-");
        }
        allClick(threeline[4], "click", tanClick); // tan

        function tanClick() {
            var str = oResults.value;
            var i = 0;
            regExpp();
            if ((i = str.indexOf("+")) > 0) {
                divisor2 = trigonometric(i, divisor2, str, "tan");
            } else if ((i = str.indexOf("-")) > 0) {
                divisor2 = trigonometric(i, divisor2, str, "tan");

            } else if ((i = str.indexOf("*")) > 0) {
                divisor2 = trigonometric(i, divisor2, str, "tan");

            } else if ((i = str.indexOf("/")) > 0) {
                divisor2 = trigonometric(i, divisor2, str, "tan");

            } else {
                oResults.value = Math.tan(parseFloat(str) * Math.PI / 180);
            }

        }

        allClick(fourline[0], "click", oneCLick); // 1
        function oneCLick() {
            afterZero(1);
        }
        allClick(fourline[1], "click", twoCLick); // 2
        function twoCLick() {
            afterZero(2);
        }
        allClick(fourline[2], "click", threeCLick); // 3
        function threeCLick() {
            afterZero(3);
        }
        allClick(fourline[3], "click", addCLick); // +
        function addCLick() {
            fuhao("+");

        }
        allClick(fourline[3], "click", sqrtCLick); // gen hao
        function sqrtCLick() {
            var str = oResults.value;
            var i = 0;
            regExpp();
            if ((i = str.indexOf("+")) > 0) {
                divisor2 = trigonometric(i, divisor2, str, "sqrt");
            } else if ((i = str.indexOf("-")) > 0) {
                divisor2 = trigonometric(i, divisor2, str, "sqrt");

            } else if ((i = str.indexOf("*")) > 0) {
                divisor2 = trigonometric(i, divisor2, str, "sqrt");

            } else if ((i = str.indexOf("/")) > 0) {
                divisor2 = trigonometric(i, divisor2, str, "sqrt");

            } else {
                oResults.value = Math.sqrt(parseFloat(str));
            }

        }

        allClick(fiveline[0], "click", zeroCLick); // 0
        function zeroCLick() {
            oResults.value = oResults.value + "0";
        }
        allClick(fiveline[1], "click", dianClick); // 小数点
        function dianClick() {
            var str = oResults.value;
            var len = str.length - 1;
            if (str.length == 0) {
                oResults.value = "0.";

            } else if (len == str.indexOf("+")) {
                oResults.value = str + "0.";

            } else if (len == str.indexOf("-")) {
                oResults.value = str + "0.";

            } else if (len == str.indexOf("*")) {
                oResults.value = str + "0.";

            } else if (len == str.indexOf("/")) {
                oResults.value = str + "0.";

            } else {
                twoDian();
            }
        }

        allClick(fiveline[2], "click", equarClick); // =
        function equarClick() {
            var str = oResults.value;
            var i = 0;
            equ = 1;
            if ((o = str.indexOf("/")) > 0) {
                regExpp();
                for (lue = i; lue < str.length - 1; lue++) {
                    divisor2 += divisor[lue];
                }
                if (divisor2 == "0") {
                    oResults.value = "NAN";
                } else {
                    oResults.value = jisuan();
                }
            } else {
                oResults.value = jisuan();

            }
        }

        //将所有字符串按正则表达式分解
        function regExpp() {
            valueNum = oResults.value;
            divisor = new Array();
            divisor2 = "";
            var reg = /(\+)|(\*)|(\-)|\//g;
            var v = 0;
            var dian = 0;
            divisor = valueNum.replace(reg, "").split("");

        }

        //查看第一个数是不是0,是的话就替换
        //调用:afterZero(v)
        //参数，点击按钮的数字
        function afterZero(v) {
            var str = oResults.value;

            if (equ == 0) {
                if (str == "0") {
                    oResults.value(v);

                } else {
                    oResults.value = oResults.value + v;

                }
            } else if (equ == 1) {
                equ = 0;
                oResults.value = v;

            }
        }

        //查看第一个数后面有没有符号，有的话替换，没有的话不显示
        //调用 fuhao(f)
        //参数：点击的符号
        function fuhao(f) {
            var str = oResults.value;
            var len = str.length - 1;
            regExpp();
            // console.log(len);
            if (len == -1) {

            } else if (len == str.indexOf("+")) {
                oResults.value = divisor.join("") + f;
            } else if (len == str.indexOf("-")) {
                oResults.value = divisor.join("") + f;

            } else if (len == str.indexOf("*")) {
                oResults.value = divisor.join("") + f;

            } else if (len == str.indexOf("/")) {
                oResults.value = divisor.join("") + f;

            } else {
                oResults.value = oResults.value + f;

            }
        }

        //点击%时判断前面是不是符号
        //调用 percent(v)
        //参数：符号出现的位置
        function percent(v) {
            regExpp();
            var str = oResults.value;
            var num = 0;
            // for (va = 1; va < v; va++) {
            //     divisor[0] += divisor[va];
            // }
            var divisor2 = "";
            for (lue = v; lue < str.length - 1; lue++) {
                divisor2 += divisor[lue];

            }
            if (divisor2.length != 0) {
                // console.log('divisor2:'+divisor2);
                num = accDiv(Number(divisor2), 100);
                oResults.value = divisor[0] + "+" + num;
            }
        }

        function accDiv(num1, num2) {
            // console.log('num1'+typeof(num1)+'num2'+typeof(num2))
            // console.log("jjj"+ Number(num1)/Number(num2));
            return Number(num1) / Number(num2);
        }
        //计算判断符号后面的数是否存在小数点
        //调用twoDian()
        //返回值：计算的精确结果
        function twoDian() {
            regExpp();
            var str = oResults.value;
            var len = str.length - 1;
            var lastStr = "";
            var i;
            if ((i = str.indexOf("+")) != -1 || (i = str.indexOf("-")) != -1 || (i = str.indexOf("*")) != -1 || (i = str.indexOf("/")) != -1) {
                for (; i < len; i++) {
                    lastStr += divisor[i];
                }
                if (-1 == lastStr.indexOf(".")) {
                    oResults.value = oResults.value + ".";
                }
            } else if ((str.indexOf(".")) < 0) {
                    oResults.value = oResults.value + ".";
                }
            }



            function jisuan() {
                regExpp();
                if ((v = valueNum.indexOf("+")) > 0) { //加
                    return fenDuanZiFu(v, "+");

                } else if ((v = valueNum.indexOf("-")) > 0) { //减
                    return fenDuanZiFu(v, "-");



                } else if ((v = valueNum.indexOf("*")) > 0) { //乘
                    return fenDuanZiFu(v, "*");



                } else if ((v = valueNum.indexOf("/")) > 0) { //除
                    return fenDuanZiFu(v, "/");
                }

            }

            function fenDuanZiFu(v, type) {
                var first = "";
                var last = "";
                for (var i = 0; i < divisor.length; i++) {
                    if (i >= v) {
                        last += divisor[i];
                    } else {
                        first += divisor[i];
                    }
                }
                console.log('first' + first + 'last:' + last)
                if (type == "+") {
                    return Number(first) + Number(last);
                } else if (type == "-") {
                    return Number(first) - Number(last);
                } else if (type == "*") {
                    return Number(first) * Number(last);
                } else if (type == "/") {
                    return Number(first) / Number(last);
                }

            }
        }
