<?php
// Oturum başlat
session_start();

// Eğer oturum değişkeni yoksa, birinci sayfaya yönlendir
if (!isset($_SESSION['kullanici_adi'])) {
    header('Location: sayfa1.php');
    exit();
}

// Kullanıcı adını session'dan al
$kullanici_adi = $_SESSION['kullanici_adi'];
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
</head>
<body onload="generateRoutate(this)">
        <div class="carouseDiv">
        <div id="wheelOfFortune" style="margin-top: 1%; margin-left: 20%;">
                <canvas id="wheel" width="600" height="600"></canvas>
                <div id="spin">SPIN asd asd asd as dasd as dasd asd asd as d</div>
        </div>
        </div>
        <div class="panelDiv"><p>Merhaba, <strong><?php echo htmlspecialchars($kullanici_adi); ?></strong>! Bu bilgiyi birinci sayfadan aldık.</p>
        </div>
        <script src="app.js"></script>
</body>
</html>