function checkFortune() {
    console.log("checkFortune");
 
    var colour = document.getElementById('colour-select').value;
    var food = document.getElementById('food-select').value;
 
    var result = "親子丼"; // デフォルトの料理
 
    if (colour === "肉っしょ" && food === "たまご") {
        result = "親子丼";
    } else if (colour === "肉っしょ" && food === "大根") {
        result = "豚バラ大根";
    } else if (colour === "肉っしょ" && food === "ねぎ") {
        result = "よだれ鶏";
    } else if (colour === "魚かな" && food === "たまご") {
        result = "白身魚フライ~タルタルソースを添えて~";
    } else if (colour === "魚かな" && food === "大根") {
        result = "ぶり大根";
    } else if (colour === "魚かな" && food === "ねぎ") {
        result = "白身魚の酒蒸し";
    } else if (colour === "麺だね" && food === "たまご") {
        result = "カルボナーラ";
    } else if (colour === "麺だね" && food === "大根") {
        result = "おろしうどん";
    } else if (colour === "麺だね" && food === "ねぎ") {
        result = "ネギたっぷりラーメン";
    }
 
    document.getElementById('result-output').innerText = "あなたの今日の晩御飯は【" + result + "】です";
}
 
 
