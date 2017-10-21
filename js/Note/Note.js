
Note = function () {
    function init() {
        document.getElementById("noteText").focus();
    }

    function print() {
        console.log(document.getElementById("noteText").innerHTML);
    }

    function numberList() {
        document.execCommand("insertorderedlist");
        document.getElementById("noteText").focus();
    }

    function bulletList() {
        document.execCommand("insertunorderedlist");
        document.getElementById("noteText").focus();
    }

    return {
        init : init,
        print : print,
        numberList : numberList,
        bulletList : bulletList
    }
}();