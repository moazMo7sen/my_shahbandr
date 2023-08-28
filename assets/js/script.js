var screen_width = $(window).width();
if (screen_width > 768) {
  $("aside").addClass("active");
  $(".txt").toggleClass("d-inline");
  $(".aside-link").toggleClass("swim");
}
$(".arrow-aside").on("click", function (e) {
  e.stopPropagation();
  $("aside").toggleClass("active");
  $(".txt").toggleClass("d-inline");
  $(".aside-link").toggleClass("swim");

  if ($("aside").hasClass("active")) {
    $(".aside-icon").css("transform", "rotate(0)");
  } else {
    $(".aside-icon").css("transform", "rotate(180deg)");
  }
});

$(".toggle-aside").on("click", function (e) {
  e.stopPropagation();
  $("aside").toggleClass("active");
  $(".txt").toggleClass("d-inline");
  $(".aside_overlay").addClass("active");
});

$(".aside_overlay").on("click", function (e) {
  $("aside").removeClass("active");
  $(".aside_overlay").removeClass("active");
  $(".txt").removeClass("d-inline");
});

//   $(document).on("click", function (e) {
//     e.stopPropagation();
//   $("aside").removeClass("active");
//   $(".txt").removeClass("d-inline");
// });

//select 2
$("select", document).each(function (i, ele) {
  $(this).select2({
    dropdownParent: $("#drop_list_con"),
    language: {
      noResults: function () {
        return "لا توجد نتائج مطابقة.";
      },
    },
  });
});

// slider
$("#slider-range-min").slider({
  range: "min",
  value: 0,
  min: 0,
  max: 100,
  slide: function (event, ui) {
    $("#amount").val(ui.value);
  },
});
$("#amount").val($("#slider-range-min").slider("value"));

//imageUploader
$(".input-images").imageUploader({});

//shipping_checkbox && form add_order
$("#d-checkbox").on("change", showShipping);
function showShipping() {
  if ($("#d-checkbox").is(":checked")) {
    $(".d_container").css("display", "block");
  } else {
    $(".d_container").css("display", "none");
  }
}

// datatable
new DataTable("#dataTable", {
  columnDefs: [{ orderable: false, targets: "_all" }],
  info: false,
  sDom: "Rfrtlip",
  searching: false,
  paging: false,
  ordering: false,
  oLanguage: {
    sSearch: "",
  },
  responsive: true,
  language: {
    url: "//cdn.datatables.net/plug-ins/1.13.5/i18n/ar.json",
    paginate: {
      next: false,
      previous: false,
    },
  },
});

// drop_list

$(".btn_open").each(function (i, ele) {
  $(ele).on("click", function (e) {
    e.stopPropagation();

    $(this).toggleClass("active");
    let id = $(this).attr("id");
    let curent_ele = id.substring(0, id.lastIndexOf("_"));

    if ($(this).hasClass("active")) {
      $("#" + curent_ele).removeClass("hide");
      $("#" + curent_ele).addClass("anima");
    } else {
      $("#" + curent_ele).removeClass("anima");
      $("#" + curent_ele).addClass("hide");
    }
  });
});
$(document).on("click", function (event) {
  $("#drop_list_btn").removeClass("active");
  $("#drop_list").addClass("hide");
});

//close modal
$("#btn_modal").on("click", function () {
  $(".modal ").modal("hide");
});

// jquery-validation
$.validator.setDefaults({
  ignore: ":not(select:hidden, input:visible, textarea:visible)",
});

$("#payment_acount").validate({
  rules: {
    payment_acount_fName: {
      required: true,
      minlength: 2,
      pattern: /^[^!@#$%^&*()]*$/,
    },

    payment_acount_lName: {
      required: true,
      minlength: 2,
      pattern: /^[^!@#$%^&*()]*$/,
    },
    payment_acount_pNanem: {
      required: true,
      minlength: 2,
      pattern: /^[^!@#$%^&*()]*$/,
    },

    payment_acount_password: {
      required: true,
      minlength: 8,
    },
    payment_acount_nPassword: {
      minlength: 8,
    },
    payment_acount_ncPassword: {
      minlength: 8,
      equalTo: '[name="payment_acount_nPassword"]',
    },
  },
  messages: {
    payment_acount_fName: {
      minlength: jQuery.validator.format("الرجاء إدخال {2} أحرف على الأقل"),
      required: "الرجاء إدخال اسم مستخدم",
      pattern: "ادخل اسم مستخدم صحيح",
    },
    payment_acount_lName: {
      minlength: jQuery.validator.format("الرجاء إدخال {2} أحرف على الأقل"),
      required: "الرجاء إدخال اسم مستخدم",
      pattern: "ادخل اسم مستخدم صحيح",
    },
    payment_acount_pNanem: {
      minlength: jQuery.validator.format("الرجاء إدخال {2} أحرف على الأقل"),
      required: "الرجاء إدخال اسم مستخدم",
      pattern: "ادخل اسم مستخدم صحيح",
    },

    payment_acount_password: {
      minlength: jQuery.validator.format("الرجاء إدخال {8} أحرف على الأقل"),
      required: " الرجاء إدخال كلمة المرور",
    },
    payment_acount_nPassword: {
      minlength: jQuery.validator.format("الرجاء إدخال {8} أحرف على الأقل"),
      required: "الرجاء إدخال كلمة المرور جديدة",
    },
    payment_acount_ncPassword: {
      minlength: jQuery.validator.format("الرجاء إدخال {8} أحرف على الأقل"),
      required: "الرجاء تأكيد كلمة المرور جديدة",
      equalTo: "كلمة المرور غير متطابقة",
    },
  },
});
$("#payment_gateway").validate({
  ignore: [],
  rules: {
    card_name: {
      required: true,
      minlength: 2,
      pattern: /^[^!@#$%^&*()]*$/,
    },
    card_number: {
      required: true,
      minlength: 2,
      pattern: /^[^!@#$%^&*()]*$/,
      number: true,
    },
    card_expiration: {
      required: true,
    },
    card_country: {
      required: true,
    },

    card_cvc: {
      required: true,
      minlength: 2,
    },
  },
  messages: {
    card_name: {
      minlength: jQuery.validator.format("الرجاء إدخال {2} أحرف على الأقل"),
      required: "الرجاء إدخال اسم مستخدم",
      pattern: "ادخل اسم مستخدم صحيح",
    },
    card_country: {
      required: "الرجاء إدخال الدولة",
    },
    card_number: {
      minlength: jQuery.validator.format("الرجاء إدخال رقم بطاقة صحيح"),
      required: "الرجاء إدخال رقم البطاقة",
      pattern: "الرجاء إدخال رقم بطاقة صحيح",
      number: "الرجاء إدخال رقم بطاقة صحيح",
    },
    card_expiration: {
      required: "الرجاء إدخال تاريخ ",
    },
    card_cvc: {
      minlength: jQuery.validator.format("الرجاء إدخال رقم صحيح"),
      required: " الرجاء إدخال رقم ",
    },
  },
  errorPlacement: function (error, element) {
    if (element.attr("name") == "card_expiration") {
      error.insertAfter(".card_expiration_error");
    } else if (element.attr("name") == "card_country") {
      error.insertAfter(".card_country_error");
    } else {
      error.insertAfter(element);
    }
  },
});

$(document).ready(function () {
  $("#pickyDate").datepicker({
    format: "mm/yyyy",
    orientation: "bottom ",
    container: $("#parent-container"),
    language: "ar",
  });
});
