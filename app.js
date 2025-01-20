function checkFortune() {
            var colour = document.getElementById('food-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "親子丼"; // デフォルトの値
 
            if (colour === "肉っしょ" && == "たまご" ) {
                result = "親子丼";
            } else if (colour === "肉っしょ" && =="大根") {
                result = "豚バラ大根";
            } else if (colour === "肉っしょ" && == "ねぎ") {
                result = "よだれ鶏";
            } else if (colour === "魚かな" && == "たまご" ) {
                result = "白身魚フライ~タルタルソースを添えて~";
            } else if (colour === "魚かな" && == "大根" ) {
                result = "ぶり大根";
            } else if (colour === "魚かな" && == "ねぎ") {
                result = "白身魚の酒蒸し";
            } else if (colour === "麺だね" && == "たまご") {
                result = "カルボナーラ";
            } else if (colour === "麺だね" && == "大根") {
                result = "おろしうどん";
            } else if (colour === "麺だね" && == "ねぎ") {
                result = "ネギたっぷりラーメン";
            }
 
            document.getElementById('result-output').innerText = "あなた今日の晩御飯は【" + result + "】です";
        }       

