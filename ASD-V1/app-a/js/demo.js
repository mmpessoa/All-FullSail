/* 
Michelle M. Pessoa
ASD-1205
Project 2
Due date: 10 May 2012 
.JS Document
*/


$(document).ready(function(){       // load jQuery 1.5
    function loadfail(){
        alert("Error: Failed to read file!");
    }
 
    function parse(document){
        $(document).find("combo").each(function(){
           $('.combo1').append(
            '' + $(this).find('text').text() +
            ''
           );
        });
    }
 
    $.ajax({
        url: 'data.xml',    // name of file with our data
        dataType: 'xml',    // type of file we will be reading
        success: parse,     // name of function to call when done reading file
        error: loadfail     // name of function to call when failed to read
    });
});