        function checkFortune() {
            var colour = document.getElementById('colour-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "凶"; // デフォルトの値

            if (colour === "肉っしょ" && number === 18時) {
                result = "小吉";
            } else if (colour === "肉っしょ" && number === 20時) {
                result = "中吉";
            } else if (colour === "肉っしょ" && number === 22時) {
                result = "凶";
            } else if (colour === "魚かな" && number === 18時) {
                result = "中吉";
            } else if (colour === "魚かな" && number === 20時) {
                result = "中吉";
            } else if (colour === "魚かな" && number === 22時) {
                result = "大凶";
            } else if (colour === "麺だね" && number === 18時) {
                result = "凶";
            } else if (colour === "麺だね" && number === 20時) {
                result = "大吉";
            } else if (colour === "麺だね" && number === 22時) {
                result = "中吉";
            }

            document.getElementById('result-output').innerText = "あなた今日の晩御飯は【" + result + "】です";
        }
