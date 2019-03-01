let counter = 0;

function addNewList() {
    let listName = $("#newlistname").val();
    if (listName != "") {
        /* put list html code here */
        $(".lists").append("<div id='list" + counter +  "'>" +
            "<div class='header'>" + 
            "<div class='listtitleholder'>" + 
            "<i class='fas fa-times'></i>" +
            "<div class='listtitle' contenteditable='true'>" + listName + 
            "</div>" + 
            "<i class='fas fa-plus' onclick='addNewItem(" + counter + ")'></i>" +
            "</div>" +
            "<div class='itemholder'>" +
            "</div>" + "</div>");
        $("#newlistname").val("");
        $("#newlistname").focus();
        counter ++;
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
    let itemHolder = $("#list" + par);
    itemHolder.append("<div class='item'>" +
        "<i class='fas fa-times'>" +
        "</i>" +
        "<div class='itemname' contenteditable='true'>sample text" +
        "</div>" + "</div>");
}
