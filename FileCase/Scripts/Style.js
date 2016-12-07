
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
        //文件树打开延时
        $(function () {
            $(".tree").treemenu({ delay: 300 }).openActive();
        });

        //列表显示和图标显示切换
        $('#btn1').click(function () {
            $('#img1').attr('src', "../FileCase/img/list1.jpg");
            $('#img2').attr('src', "../FileCase/img/icon0.gif");
            $("#public_List").css('display', 'inline');
            $("#public_Img").css('display', 'none');
        });
        $('#btn2').click(function () {
            $('#img2').attr('src', "../FileCase/img/icon1.gif");
            $('#img1').attr('src', "../FileCase/img/list0.jpg");
            $("#public_List").css('display', 'none');
            $("#public_Img").css('display', 'inline');
        });

        //右键点击事件
        $('.tree').bind("contextmenu", function (e) {   //限制鼠标右键点击
            return false;
        });
        $('.tree').children().contextMenu('myMenu1', {
            bindings: {
                'new': function (t) {
                    alert('Trigger was ' + t.id + '\nAction was Open');
                },
                'privilege': function (t) {
                    alert('Trigger was ' + t.id + '\nAction was pricilege');
                },
                'rename': function (t) {
                    alert('Trigger was ' + t.id + '\nAction was Email');
                },
                'trash': function (t) {
                    alert('Trigger was ' + t.id + '\nAction was Save');
                },
                'delete': function (t) {
                    alert('Trigger was ' + t.id + '\nAction was Delete');
                }
            }
        });

        //选中相片div
        $('.photo').click(function () {
            $(this).toggleClass('choose');
        });

        //移除选中的项
        $("#deleteelement").click(function () {
            $("input[name='checkAll']:checked").each(function () { // 遍历选中的checkbox
                $(this).parent().parent().remove();
            });
            if ($("input[name='checkAll']").length == 0) {
                document.all.selAll.checked = false;
            }
            /*if( $("input[name='checkAll']:checked").length==0)
            {
                 document.getElementById("showandhide").style.display="none";
            }*/
        });

        //上传文件插件
        $('#ssi-upload').ssi_uploader({
            url: 'filecase/new_file.html', maxFileSize: 6, allowed: ['jpg', 'jpeg', 'gif', 'txt', 'png', 'pdf', 'zip', 'doc', 'docx', 'xls', 'ppt', 'pptx', 'psd']
        });
    })




