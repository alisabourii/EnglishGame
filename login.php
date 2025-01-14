<?php
// Oturum başlat
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Kullanıcı adını session değişkenine kaydet
    $_SESSION['kullanici_adi'] = $_POST['kullanici_adi'];
    // İkinci sayfaya yönlendir
    header('Location: index.php');
    exit();
}
?>
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Leran English</title>
    <link rel="stylesheet" href="loginStyle.css">
</head>
<body>
<h1 style="color: aliceblue;">Welcome To Reality</h1><br>
<form method="post" action="">
    <input type="text" id="kullanici_adi" name="kullanici_adi" required hidden="true">

    <div class="buttons">
        <button class="glow-on-hover" onclick="document.getElementById('kullanici_adi').value = '1';" type="submit">Level1</button><br><br>
        <button class="glow-on-hover" onclick="document.getElementById('kullanici_adi').value = '2';" type="submit">Level2</button><br><br>
        <button class="glow-on-hover" onclick="document.getElementById('kullanici_adi').value = '3';" type="submit">Level3</button>
    </div>
</form>


<script src="loginJS.js"></script>
</body>
</html>