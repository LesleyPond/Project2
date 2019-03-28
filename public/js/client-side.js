$(document).ready(function () {
    $('.carousel').carousel();
    setInterval(function () {
        $('.carousel').carousel('next');
    }, 4000);
    $('.modal').modal();
});

$(document).ready(function () {
    $('.tap-target').tapTarget('open');
});

$("#modal2Open").on("click", function () {
    $("#modal1").modal("close")
    $("#modal2").modal("open")
})

$("#modal1Open").on("click", function () {
    $("#modal2").modal("close")
    $("#modal1").modal("open")
})

let optionNumber = 2;
$("#addMoreOptions").on("click", function () {
    optionNumber++;
    if(optionNumber > 10){
        return
    }
    let newInput = $("<input>");
    newInput.attr("id", "option" + optionNumber);
    newInput.attr("type", "text");
    newInput.addClass("options")
    let newButton = $("<button>")
    newButton.addClass("btn", "btn-blue");
    newButton.text("x");
    newButton.attr("data-id", "option" + optionNumber)
    newButton.addClass("optionDelete");
    $("#moreOptions").append(newInput)
    $("#moreOptions").append(newButton)
})


$(document).on('click', '.optionDelete', function () {
    let buttonID = $(this).attr("data-id")
    console.log(buttonID);
    $(".options").each(function () {
        if (buttonID === $(this).attr("id")) {
            $(this).remove();
        }
    })
    $(this).remove();
    optionNumber --;
})