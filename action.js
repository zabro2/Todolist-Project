let counter = 0;

function addNewList() {
    let listName = $("#newlistname").val();
    if (listName != "") {
        /* put list html code here */
        $(".lists").append("<div class='list' id='list" + counter + "'>" +
            "<div class='header'>" +
            "<div class='listtitleholder'>" +
            "<i class='fas fa-times timeslistname' onclick='deleteList(this)'></i>" +
            "<div class='listtitle' contenteditable='true'>" + listName +
            "</div>" +
            "<i class='fas fa-plus' onclick='addNewItem(" + counter + ")'></i>" +
            "</div>" +
            "</div>" + "<div class='itemholder' id='itemholder" + counter + "'>" +
            "</div>");
        $("#newlistname").val("");
        $("#newlistname").focus();
        counter++;
    }
}

function checkKey(event) {
    switch (event.keyCode) {
        case 13:
            addNewList();
            break;
    }
}

function addNewItem(par) {
    let itemHolder = $("#itemholder" + par);
    itemHolder.append("<div class='item'>" +
        "<i class='fas fa-times' onclick='deleteItem(this)'>" +
        "</i>" +
        "<div class='itemname' contenteditable='true'>sample text" +
        "</div>" +
        "<i class='fas fa-check' onclick='markDone(this)'></i>" +
        "</div>");
}

function deleteList(element) {
    $(element).parent().parent().parent().remove();
}

function deleteItem(element) {
    $(element).parent().remove();
}

function markDone(element) {
    if ($(element).parent().hasClass('done')) {
        $(element).parent().removeClass('done');
        // $(element).prev().css('text-decoration', 'none');
        $(element).css('color', 'black');
    } else {
        $(element).parent().addClass('done');
        // $(element).prev().css('text-decoration', 'line-through');
        $(element).css('color', 'orange');
    }
}

function clearCompleted() {
    $(".done").remove();
}