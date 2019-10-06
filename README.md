# Ingestly Survey


## Setup
1. You must completed the installation of Ingestly.
2. Place `ingestly-survey.js` to your website, and load the file like `<script src="ingestly-survey.js"></script>` in your form page which you want to use for survey.
3. Add the following few lines of JavaScript into the form page. The code is adding an Event Listener to the submit button.

```html
<script>
document.getElementById('form_button').addEventListener('click', function(){
  ingestlySurvey.submitResult('Simple Form', document.getElementById('simple_form'));
}, false);
</script>
```

Ingestly Survey transmit values of the form to Ingestly by calling `trackAction` method. The data is available in `custom_attr` column in BigQuery.
This mechanism is not good at security so do not send PII or any sensitive information by this code.

## Special Thanks

This library is forked from [Atlas Quick Survey](https://github.com/Nikkei/atlas-tracking-js/blob/master/plugins/QuickSurvey/aqs.js) under [Atlas Tracking JS](https://github.com/Nikkei/atlas-tracking-js/). Thank you Nikkei for publishing the code under MIT license.


# Ingestly Survey

## セットアップ
1. Ingestlyの導入が完了していること。
2. `ingestly-survey.js` をウェブサイトに設置し、 `<script src="ingestly-survey.js"></script>` のようにファイルをサーベイを実施したいフォームページで読み込む。
3. 以下の数行のJavaScriptをフォームページに追加する。このコードはイベントリスナーを送信ボタンに追加している。

```html
<script>
document.getElementById('form_button').addEventListener('click', function(){
  ingestlySurvey.submitResult('Simple Form', document.getElementById('simple_form'));
}, false);
</script>
```

Ingestly Survey はフォームの値を `trackAction` メソッドを呼び出すことで送信しています。データはBigQueryのカラム `custom_attr` で利用可能です。
この仕組みはセキュリティ的には優れていないため、個人情報やセンシティブな情報をこのコードで送信しないでください。


## 謝辞

このライブラリは [Atlas Tracking JS](https://github.com/Nikkei/atlas-tracking-js/) 下の [Atlas Quick Survey](https://github.com/Nikkei/atlas-tracking-js/blob/master/plugins/QuickSurvey/aqs.js) からフォークしました。コードをMITライセンスの基公開してくださる日経に感謝します。
