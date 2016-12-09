
    window.onload = function () {
        var inputs = document.getElementsByName("checkAll");
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].onclick = setSelectAll;
        }
        var all = document.getElementById("selAll");
        all.onclick = selectAll;
    }



    //全选的复选框
    function selectAll() {
        var selAll = document.getElementById("selAll");
        var obj = document.getElementsByName("checkAll");
        if (selAll.checked == true) {
            for (var i = 0; i < obj.length; i++) {
                obj[i].checked = true;
            }
        } else {
            for (var i = 0; i < obj.length; i++) {
                obj[i].checked = false;
            }
        }
    }

    //	列表的复选框
    function setSelectAll() {
        var obj = document.getElementsByName("checkAll");
        var count = obj.length;
        var selectCount = 0;
        for (var i = 0; i < count; i++) {
            if (obj[i].checked == true) {
                selectCount++;
            }
        }
        if (count == selectCount) {
            document.all.selAll.checked = true;
        } else {
            document.all.selAll.checked = false;
        }
    }

    $(document).ready(function () {

        //列表显示和图标显示切换
        $('#btn1').click(function () {
            $('#img1').attr('src', '/Images/list1.jpg');
            $('#img2').attr('src', '/Images/icon0.gif');
            $("#public_List").css('display', 'inline');
            $("#public_Img").css('display', 'none');
        });
        $('#btn2').click(function () {
            $("#img2").attr('src', '/Images/icon1.gif');
            $('#img1').attr('src', '/Images/list0.jpg');
            $("#public_List").css('display', 'none');
            $("#public_Img").css('display', 'inline');
        });
        //选中相片div
        $('.photo').click(function () {
            $(this).toggleClass('choosepicture');
        });

        //移除选中的项
        $("#deleteelement").click(function () {
            $("input[name='checkAll']:checked").each(function () { // 遍历选中的checkbox
                $(this).parent().parent().remove();
            });
            if ($("input[name='checkAll']").length == 0) {
                document.all.selAll.checked = false;
            }   
        });
    })


    $(function () {
        var show_per_page = 2;//每页5项
        var number_of_items = $("#public_List table tr").length;//总共有多少项
        var number_of_pages = Math.ceil(number_of_items / show_per_page);//获得总共有多少页
        //显示页数和每页存放的项
        $("#pages").text(number_of_pages);
        $("#items_of_page").text(show_per_page);

        $("#current_page").val(0);
        //循环生成页码
        var ul_html = '<li><a class="previous_link" href="javascript:previous();">&laquo;</a></li>';
        var current_link = 0;
        while (number_of_pages > current_link) {
            ul_html += '<li><a class="page_link" href="javascript:go_to_page(' + current_link + ')" longdesc="' + current_link + '">' + (current_link + 1) + '</a></li>';
            current_link++;
        }
        ul_html += '<li><a class="previous_link" href="javascript:next();">&raquo;</a></li>';

        $("#page_navigation").html(ul_html);//把页码放置在ul里面
        $('#page_navigation .page_link:first').addClass('pageactive');//页面加载时为第一个页码添加pageactive样式
        $('#public_List table tr').css('display', 'none');//先隐藏所有的项
        $('#public_List table tr').slice(0, show_per_page).css('display', 'table-row');	//slice遍历，显示前五个段落	
    });


    function previous() {
        new_page = parseInt($('#current_page').val()) - 1;
        if ($('.pageactive').parent().prev().children('.page_link').length == true) {
            go_to_page(new_page);
        }
    }
    function next() {
        new_page = parseInt($('#current_page').val()) + 1;
        //if there is an item after the current active link run the function
        if ($('.pageactive').parent().next().children('.page_link').length == true) {
            go_to_page(new_page);
        }
    }
    function go_to_page(page_num) {
        var show_per_page = parseInt($('#items_of_page').text());//5
        start_from = page_num * show_per_page;
        end_on = start_from + show_per_page;
        $('#public_List table tr').css('display', 'none').slice(start_from, end_on).css('display', 'table-row');
        $('.page_link[longdesc=' + page_num + ']').addClass('pageactive');
        $('.page_link[longdesc=' + page_num + ']').parent().siblings().children('.pageactive').removeClass('pageactive');
        $('#current_page').val(page_num);
    }







