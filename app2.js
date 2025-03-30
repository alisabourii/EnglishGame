async function translateText(text, fromLang, toLang) {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${fromLang}&tl=${toLang}&dt=t&q=${encodeURIComponent(text)}`;

    const response = await fetch(url);
    const data = await response.json();

    return toString(data[0][0][0]); // Çevrilmiş metni döndürür
}

