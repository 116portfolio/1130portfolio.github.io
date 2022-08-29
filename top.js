//参戦MAPモーダル
function openModal(modalName){
    $(".map-modal").hide();
    $(".map-modal." + modalName).show();
}
function closenModal(){
    $(".map-modal").hide();
}