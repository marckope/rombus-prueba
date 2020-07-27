$(function () {
    'use strict';
    var habilidadArray = $.map(habilidad, function (value, key) { return { value: value, data: key }; });
    $.mockjax({
        url: '*',
        responseTime: 2000,
        response: function (settings) {
            var query = settings.data.query,
                queryLowerCase = query.toLowerCase(),
                re = new RegExp('\\b' + $.Autocomplete.utils.escapeRegExChars(queryLowerCase), 'gi'),
                suggestions = $.grep(habilidadArray, function (habilidad) {
                     // return country.value.toLowerCase().indexOf(queryLowerCase) === 0;
                    return re.test(habilidad.value);
                }),
                response = {
                    query: query,
                    suggestions: suggestions
                };

            this.responseText = JSON.stringify(response);
        }
    });    
    $('#autocomplete-dynamic').autocomplete({
        lookup: habilidadArray
    });
});