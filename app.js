        function checkFortune() {
            var colour = document.getElementById('colour-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "凶"; // デフォルトの値

            if (colour === "肉っしょ" && number === 0) {
                result = "小吉";
            } else if (colour === "肉っしょ" && number === 1) {
                result = "中吉";
            } else if (colour === "肉っしょ" && number === 2) {
                result = "凶";
            } else if (colour === "魚かな" && number === 0) {
                result = "中吉";
            } else if (colour === "魚かな" && number === 1) {
                result = "中吉";
            } else if (colour === "魚かな" && number === 2) {
                result = "大凶";
            } else if (colour === "麺だね" && number === 0) {
                result = "凶";
            } else if (colour === "麺だね" && number === 1) {
                result = "大吉";
            } else if (colour === "麺だね" && number === 2) {
                result = "中吉";
            }

            document.getElementById('result-output').innerText = "あなた今日の晩御飯は【" + result + "】です";
        }
