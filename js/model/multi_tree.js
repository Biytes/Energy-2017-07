$(".tree_view_multi").delegate("label input:checkbox", "change", function() {
    var
        checkbox = $(this),
        nestedList = checkbox.parent().next().next(),
        selectNestedListCheckbox = nestedList.find("label:not([for]) input:checkbox"); //lable 没有for的，而且input类型为checkbox的标签

    if (checkbox.is(":checked")) {
        return selectNestedListCheckbox.prop("checked", true);
    }
    selectNestedListCheckbox.prop("checked", false);

    if (nestedList.is(":checked")) {
        alert("test..");
    }
});
