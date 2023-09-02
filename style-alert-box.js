function functionAlert(msg, myYes) {
  let boxConfirm = $("#confirm");
  boxConfirm.find(".message").text(msg);
  boxConfirm
    .find(".yes")
    .unbind()
    .click(function () {
      boxConfirm.hide();
    });
  boxConfirm.find(".yes").click();
  boxConfirm.show();
}
