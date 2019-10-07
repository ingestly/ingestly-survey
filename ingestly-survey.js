var ingestlySurvey = {
    buildResult: function (name, elm) {
        inputTags = elm.getElementsByTagName('input');
        optionTags = elm.getElementsByTagName('option');
        textAreas = elm.getElementsByTagName('textarea');
        resultObj = {
            'survey_name': name,
            'survey_result': {}
        };
        if (inputTags.length > 0) {
            for (var i = 0; i < inputTags.length; i++) {
                var key = inputTags[i].name;
                var val = inputTags[i].value;
                if (inputTags[i].type === 'radio' || inputTags[i].type === 'checkbox') {
                    if (inputTags[i].checked) {
                        if (!resultObj['survey_result'][key]) {
                            resultObj['survey_result'][key] = {};
                        }
                        resultObj['survey_result'][key][val] = true;
                    }
                } else if (inputTags[i].type === 'text' || inputTags[i].type === 'date') {
                    if (val.length > 0) {
                        resultObj['survey_result'][key] = val;
                    }
                }
            }
        }
        if (optionTags.length > 0) {
            for (var i = 0; i < optionTags.length; i++) {
                var key = optionTags[i].parentNode.name;
                var val = optionTags[i].value;
                if (optionTags[i].selected) {
                    resultObj['survey_result'][key] = val;
                }
            }
        }
        if (textAreas.length > 0) {
            for (var i = 0; i < textAreas.length; i++) {
                var key = textAreas[i].name;
                var val = textAreas[i].value;
                if (val.length > 0) {
                    resultObj['survey_result'][key] = val;
                }
            }
        }
        return resultObj;
    },
    submitResult: function (name, elm) {
        var result = this.buildResult(name, elm);
        Ingestly.trackAction('answer', 'survey', result);
    }
};
