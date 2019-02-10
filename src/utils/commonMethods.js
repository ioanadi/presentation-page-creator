export default {

    textToColorfulChars: function (str) {
        var colorfulHtmlText = '';
        for (var i = 0; i < str.length; i=i+5) {
            colorfulHtmlText = colorfulHtmlText +
            '<span style="color: red">'+ str.charAt(i) + '</span>' +
            '<span style="color: darkblue; font-style: italic;">'+ str.charAt(i+1)+'</span>' +
            '<span style="color: turquoise; font-weight: bold;">'+ str.charAt(i+2)+'</span>' +
            '<span style="color: pink">'+ str.charAt(i+3)+'</span>' +
            '<span style="color: orange; text-decoration: underline">'+ str.charAt(i+4)+'</span>'
            
        }
        return colorfulHtmlText;
    },

};