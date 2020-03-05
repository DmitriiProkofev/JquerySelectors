$(document).ready(function () {

    $('#start').click(function () {

        var tests = []

        tests.push(test1());
        tests.push(test2());
        tests.push(test3());
        tests.push(test4());
        tests.push(test5());
        tests.push(test6());
        tests.push(test7());
        tests.push(test8());
        tests.push(test9());
        tests.push(test10());
        tests.push(test11());

        var result = '';
        var count = 1;

        tests.forEach(function (entry) {
            result += '\nTest' + count + '=' + entry;

            count += 1;
        });

        alert(result);
    });
    

    function test1() {
        if ($('.object-1').length == 3) {
            return true;
        }
        return false;
    }

    function test2() {
        if ($('.object-1.object-2').length == 1) {
            return true;
        }
        return false;
    }

    function test3() {
        if ($('.text-center>.object-1').length == 3) {
            return true;
        }
        return false;
    }

    function test4() {
        if ($('.text-center .object-2').length == 2) {
            return true;
        }
        return false;
    }

    function test5() {
        if ($('[class^="beg"]').length == 1) {
            return true;
        }
        return false;
    }

    function test6() {
        if ($('[class|="begin"]').length == 1) {
            return true;
        }
        return false;
    }

    function test7() {
        if ($('[class*="obj"]').length == 7) {
            return true;
        }
        return false;
    }

    function test8() {
        if ($('[class~="object-2"]').length == 2) {
            return true;
        }
        return false;
    }

    function test9() {
        if ($('[class$="end"]').length == 1) {
            return true;
        }
        return false;
    }

    function test10() {
        if ($('.object-1:first').length == 1) {
            return true;
        }
        return false;
    }

    function test11() {
        if ($('.object-1:nth-child(2)').length == 1) {
            return true;
        }
        return false;
    }

});