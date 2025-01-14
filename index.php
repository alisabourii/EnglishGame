<?php
// Oturum başlat
session_start();

// Eğer oturum değişkeni yoksa, birinci sayfaya yönlendir
if (!isset($_SESSION['kullanici_adi'])) {
    header('Location: sayfa1.php');
    exit();
}

// Kullanıcı adını session'dan al
$level = $_SESSION['kullanici_adi'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="style.css">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="style.css">
    <script>
        var selector = [];
    </script>
    <?php if($level == "1"){?>
        <script>selector = [
                { "color": "#f82", "label": "apple" },
                { "color": "#0bf", "label": "pear" },
                { "color": "#fa0", "label": "table" },
                { "color": "#0f8", "label": "pen" },
                { "color": "#80f", "label": "notebook" },
                { "color": "#f08", "label": "car" },
                { "color": "#08f", "label": "house" },
                { "color": "#ff0", "label": "road" },
                { "color": "#0ff", "label": "dog" },
                { "color": "#f0f", "label": "cat" },
                { "color": "#a52", "label": "flower" },
                { "color": "#5a5", "label": "tree" },
                { "color": "#2a8", "label": "sea" },
                { "color": "#e67", "label": "lake" },
                { "color": "#f30", "label": "sun" },
                { "color": "#2b8", "label": "moon" },
                { "color": "#39f", "label": "star" },
                { "color": "#c9d", "label": "mountain" },
                { "color": "#a1f", "label": "river" },
                { "color": "#f11", "label": "tea" },
                { "color": "#1f7", "label": "coffee" },
                { "color": "#ff5", "label": "water" },
                { "color": "#e60", "label": "bread" },
                { "color": "#d34", "label": "cheese" },
                { "color": "#f70", "label": "milk" },
                { "color": "#97f", "label": "oil" },
                { "color": "#3f9", "label": "egg" },
                { "color": "#f3a", "label": "meat" },
                { "color": "#08a", "label": "fish" },
                { "color": "#8e9", "label": "chicken" },
                { "color": "#f5c", "label": "duck" }
            ]; </script> <?php }?>
    <?php if($level == "2"){?>
        <script>selector = [{ "color": "#f82", "label": "School" },
                { "color": "#0bf", "label": "Teacher" }]; </script> <?php }?>
    <?php if($level == "3"){?>
        <script>selector = [{ "color": "#f82", "label": "Cyber" },
                { "color": "#0bf", "label": "Hacher" }]; </script> <?php }?>
</head>
<body onload="generateRoutate(selector)">
        <div class="carouseDiv">
        <div id="wheelOfFortune" style="margin-top: 1%; margin-left: 0%;">
                <canvas id="wheel" width="600" height="600"></canvas>
                <div id="spin"></div>
        </div>
        </div>
        <div class="panelDiv">
           <h1>Come to learn words!</h1>
            <div class="smallDiv">
                <label style="font-size: 25px"> What is mind  <label id="word" style="color: gold"></label><label>?</label>
            </div>

            <div class="smallDiv">
                <input placeholder="Cevabınız" style="height: 21px; width: 40%; font-size: 18px; color: black" id="answer"  >
                <button id="sumbitBtn" style=""  class="btn btn-secondary" onclick="controlTranslate()">Sumbit</button>
            </div>
            <br>
            <div style="height: 542px">
                <h1>Total Score:</h1>
                <h1 style="margin-left: 12%" id="score">0</h1>
            </div>



        </div>
        <script src="app.js"></script>
</body>
</html>