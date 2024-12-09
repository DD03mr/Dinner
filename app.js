        function checkFortune() {
            var colour = document.getElementById('food-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "凶"; // デフォルトの値

            if (colour === "肉っしょ" && == "たまご" ) {
                result = "小吉";
            } else if (colour === "肉っしょ" && =="") {
                result = "中吉";
            } else if (colour === "肉っしょ" && == "ねぎ") {
                result = "凶";
            } else if (colour === "魚かな" && == "たまご" ) {
                result = "中吉";
            } else if (colour === "魚かな" && == "" ) {
                result = "中吉";
            } else if (colour === "魚かな" && == "ねぎ") {
                result = "大凶";
            } else if (colour === "麺だね" && == "たまご") {
                result = "凶";
            } else if (colour === "麺だね" && == "") {
                result = "大吉";
            } else if (colour === "麺だね" && == "ねぎ") {
                result = "中吉";
            }

            document.getElementById('result-output').innerText = "あなた今日の晩御飯は【" + result + "】です";
        }
