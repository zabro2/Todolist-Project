let counter = 0;

function addNewList() {
    let listName = $("#newlistname").val();
    if (listName != "") {
        /* put list html code here */
        $(".lists").append("<div class='list' id='list" + counter + "'>" +
            "<div class='header'>" +
            "<div class='listtitleholder'>" +
            "<i class='fas fa-times timeslistname'></i>" +
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
        "<i class='fas fa-times'>" +
        "</i>" +
        "<div class='itemname' contenteditable='true'>sample text" +
        "</div>" +
        "<button id='markdonebtn' onclick='markDone(this)'>done</button>" +
        "</div>");
}

function markDone(element) {
    $(element).parent().addClass('done');
}