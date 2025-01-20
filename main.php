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
        <script>selector = [
                { "color": "#f82", "label": "pomegranate" },
                { "color": "#0bf", "label": "quince" },
                { "color": "#fa0", "label": "countertop" },
                { "color": "#0f8", "label": "stylus" },
                { "color": "#80f", "label": "manuscript" },
                { "color": "#f08", "label": "automobile" },
                { "color": "#08f", "label": "residence" },
                { "color": "#ff0", "label": "highway" },
                { "color": "#0ff", "label": "canine" },
                { "color": "#f0f", "label": "feline" },
                { "color": "#a52", "label": "blossom" },
                { "color": "#5a5", "label": "foliage" },
                { "color": "#2a8", "label": "ocean" },
                { "color": "#e67", "label": "reservoir" },
                { "color": "#f30", "label": "solarium" },
                { "color": "#2b8", "label": "celestial body" },
                { "color": "#39f", "label": "constellation" },
                { "color": "#c9d", "label": "escarpment" },
                { "color": "#a1f", "label": "tributary" },
                { "color": "#f11", "label": "camellia" },
                { "color": "#1f7", "label": "espresso" },
                { "color": "#ff5", "label": "beverage" },
                { "color": "#e60", "label": "loaf" },
                { "color": "#d34", "label": "fromage" },
                { "color": "#f70", "label": "lactose" },
                { "color": "#97f", "label": "lubricant" },
                { "color": "#3f9", "label": "ovum" },
                { "color": "#f3a", "label": "protein" },
                { "color": "#08a", "label": "aquatic vertebrate" },
                { "color": "#8e9", "label": "poultry" },
                { "color": "#f5c", "label": "mallard" }
            ]; </script> <?php }?>
    <?php if($level == "3"){?>
        <script>selector = [
                { "color": "#f82", "label": "punicaceae" },
                { "color": "#0bf", "label": "cydonia" },
                { "color": "#fa0", "label": "credenza" },
                { "color": "#0f8", "label": "graphium" },
                { "color": "#80f", "label": "codicil" },
                { "color": "#f08", "label": "vehiculum" },
                { "color": "#08f", "label": "domicilium" },
                { "color": "#ff0", "label": "carriageway" },
                { "color": "#0ff", "label": "canidae" },
                { "color": "#f0f", "label": "felidae" },
                { "color": "#a52", "label": "inflorescence" },
                { "color": "#5a5", "label": "phyllotaxy" },
                { "color": "#2a8", "label": "pelagic" },
                { "color": "#e67", "label": "lacustrine" },
                { "color": "#f30", "label": "heliacal" },
                { "color": "#2b8", "label": "sublunary" },
                { "color": "#39f", "label": "asterism" },
                { "color": "#c9d", "label": "orogeny" },
                { "color": "#a1f", "label": "fluviatile" },
                { "color": "#f11", "label": "camelliales" },
                { "color": "#1f7", "label": "caffeol" },
                { "color": "#ff5", "label": "potable" },
                { "color": "#e60", "label": "panification" },
                { "color": "#d34", "label": "caseiculture" },
                { "color": "#f70", "label": "galactose" },
                { "color": "#97f", "label": "oleaginous" },
                { "color": "#3f9", "label": "zygote" },
                { "color": "#f3a", "label": "myoglobin" },
                { "color": "#08a", "label": "ichthyic" },
                { "color": "#8e9", "label": "galliformes" },
                { "color": "#f5c", "label": "anas platyrhynchos" }
            ]; </script> <?php }?>
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
        <input class="form-control" placeholder="Cevabınız" style=" font-size: 18px; color: black" id="answer"  >
        <button id="sumbitBtn" style=""  class="btn btn-secondary" onclick="controlTranslate()">Sumbit</button>
    </div>
    <br><br>
    <div style="">
        <h1>Total Score:</h1>
        <h1 id="score">0</h1>
        <button style="width: 50%" onclick="window.location='index.php'">Back To Choice</button>
    </div>
</div>
<script src="app.js"></script>
</body>
</html>