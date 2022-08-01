function translit(word) {
  //  Функция, выполняющая транслитерацию текста
  const vocabulary = {
    а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'jo', ж: 'zh', з: 'z', и: 'i', й: 'jj', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'kh', ц: 'c', ч: 'ch', ш: 'sh', щ: 'shh', ъ: '"', ы: 'y', ь: '\'', э: 'eh', ю: 'ju', я: 'ja', А: 'A', Б: 'B', В: 'V', Г: 'G', Д: 'D', Е: 'E', Ё: 'JO', Ж: 'ZH', З: 'Z', И: 'I', Й: 'JJ', К: 'K', Л: 'L', М: 'M', Н: 'N', О: 'O', П: 'P', Р: 'R', С: 'S', Т: 'T', У: 'U', Ф: 'F', Х: 'KH', Ц: 'C', Ч: 'CH', Ш: 'SH', Щ: 'SHH', Ъ: '"', Ы: 'Y', Ь: '\'', Э: 'EH', Ю: 'JU', Я: 'JA',
  };
  let result = '';
  for (let i = 0; i < word.length; i += 1) {
    if (word[i] in vocabulary) {
      result += vocabulary[word[i]];
    } else {
      result += word[i];
    }
  }
  return result;
}

// function getMaxLength(winlen) {
//   //  Функция, рассчитывающая длину укороченного слова в зависимости от размера окна
//   let result = 0;
//   if (winlen > 1090) {
//     result = 30;
//   } else if (winlen < 1089 && winlen > 767) {
//     result = 25;
//   } else {
//     result = 18;
//   }
//   return result;
// }

function cutLongText(text, maxLen) {
  //  Функция, обрезающая длинный текст
  let result = '';
  for (let i = 0; i < maxLen; i += 1) {
    result += text[i];
  }
  result += '...';
  return result;
}

function translitResult() {
  //  Функция с событием для кнопки
  //
  //  Получение текста из поля ввода
  const maxLength = 8;
  const text = document.createElement('div');
  const inputText = document.getElementById('inputWord').value;
  if (inputText.length > maxLength) {
    text.title = inputText;
    text.innerText = cutLongText(inputText, maxLength);
  } else {
    text.innerText = inputText;
  }
  const key = document.querySelector('.in');
  key.appendChild(text);

  // Транслит
  const newText = document.createElement('div');
  const outputText = translit(inputText);
  if (outputText.length > maxLength) {
    newText.title = outputText;
    newText.innerText = cutLongText(outputText, maxLength);
  } else {
    newText.innerText = outputText;
  }
  const val = document.querySelector('.out');
  val.appendChild(newText);
}

//  вешанье(навесивание? весинье? :D) события на кнопку
const btn = document.querySelector('button');
btn.addEventListener('click', translitResult);
