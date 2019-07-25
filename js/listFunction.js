        // 先宣告有哪些影城
        var locate = ["台北威秀影城", "板橋秀泰影城", "桃園大江星橋影城", "台中星光影城", "高雄義大世界國賓影城"];

        // 針對不同影城各自有放映的電影，儲存在不同陣列
        var movie = new Array();
        movie[0] = ["蜘蛛人", "蜘蛛人2", "蜘蛛人3", "蜘蛛人:驚奇再起", "蜘蛛人:驚奇再起2", "蜘蛛人:返校日", "蜘蛛人:離家日"]
        movie[1] = ["鋼鐵人", "鋼鐵人2", "鋼鐵人3"]
        movie[2] = ["雷神索爾", "雷神索爾2：黑暗世界", "雷神索爾3：諸神黃昏", "雷神索爾4:不要雷我"]
        movie[3] = ["復仇者聯盟1", "復仇者聯盟2:奧創紀元", "復仇者聯盟3:無限之戰", "復仇者聯盟3:終局之戰"]
        movie[4] = ["黑豹", "美國隊長", "美國隊長2：酷寒戰士", "美國隊長3：英雄內戰"]

        // 影城的列表透過for迴圈和append建置
        for (i = 0; i < locate.length; i++) {
            $("#location-list").append(`<option value=${i}>${locate[i]}</option>`);
        }

        // 由於一開始就有影城，配合默認影城有上映的電影先建置起來
        for (i = 0; i < movie[0].length; i++) {
            $('#movie-list').append(`<option value=0_${i}>${movie[0][i]}</option>`);
        }

        // 當選取其他影城的時候，改變放映的電影列表。利用影城的value
        $('#location-list').change(function () {
            $('#movie-list').empty()
            for (i = 0; i < movie[this.value].length; i++) {
                $('#movie-list').append(`<option value=0_${i}>${movie[this.value][i]}</option>`);
            }
        })

        // 設定每天最多只能選到下禮拜二的日期
        // 這邊我需要設定當天的變數d，當天是禮拜幾做顯示運算(tempDay)，還有為了轉換成直覺上比較容易理解星期幾，所以有wkDay做轉換
        var d = new Date;
        tempDay = d.getDay();
        var wkDay = ['日', '一', '二', '三', '四', '五', '六']

        // 由於星期日在Date裡面是0，所以這裡做判斷，若是為0，就代表顯示日、一、二
        if (tempDay < 2) {
            for (i = 0; i < 2 - tempDay + 1; i++) {
                $('#date-list').append(`<option value=${d.getTime()}>${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}(${wkDay[d.getDay()]})</option>`);
                d.setDate(d.getDate() + 1);
            }

            // 若是星期二只顯示星期二可選
        } else if (tempDay == 2) {
            $('#date-list').append(`<option value=${d.getTime()}>${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}(${wkDay[d.getDay()]})</option>`);
        }

        // 其他天則根據當天和下周二的差距顯示
        else {
            for (i = 0; i < 9 - tempDay + 1; i++) {
                $('#date-list').append(`<option value=${d.getTime()}>${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}(${wkDay[d.getDay()]})</option>`);
                d.setDate(d.getDate() + 1);
            }
        }