// aside show txt
const aside = document.querySelector("aside"),
  txts = document.querySelectorAll(".txt"),
  arrow_aside = document.querySelector(".arrow-aside"),
  toggle_aside = document.querySelector(".toggle-aside");

arrow_aside.addEventListener("click", (e) => {
  e.stopPropagation();
  aside.classList.toggle("active");
  aside.classList.toggle("hover");
});

aside.addEventListener("mouseenter", () => {
  aside.classList.add("hover");
  if (!aside.classList.contains("active")) {
    txts.forEach((txt) => {
      setTimeout(() => {
        txt.style.display = "inline";
      }, 50);
    });
  }
});

aside.addEventListener("mouseleave", () => {
  aside.classList.add("hover");

  if (!aside.classList.contains("active")) {
    txts.forEach((txt) => {
      txt.style.display = "none";
    });
  }
});

// aside small devices

toggle_aside.addEventListener("click", (e) => {
  e.stopPropagation();
  aside.classList.add("active");
  if (aside.classList.contains("active")) {
    txts.forEach((txt) => {
      txt.style.display = "inline";
    });
  }
});

document.addEventListener("click", (e) => {
  e.stopPropagation();
  if (!e.target.classList.contains("aside")) {
    txts.forEach((txt) => {
      txt.style.display = "none";
    });
  }
  aside.classList.remove("active");
});

//select 2
$("#drop_list_status").select2({
  dropdownParent: $("#drop_list_status_con"),
  language: {
    noResults: function () {
      return "لا توجد نتائج مطابقة.";
    },
  },
});

$("#drop_list_productDetails").select2({
  dropdownParent: $("#drop_list_productDetails_con"),
  language: {
    noResults: function () {
      return "لا توجد نتائج مطابقة.";
    },
  },
});
$("#drop_list_tax").select2({
  dropdownParent: $("#drop_list_tax_con"),
  language: {
    noResults: function () {
      return "لا توجد نتائج مطابقة.";
    },
  },
});

$("#drop_list_shippingDetails").select2({
  dropdownParent: $("#drop_list_shipping_con"),
  language: {
    noResults: function () {
      return "لا توجد نتائج مطابقة.";
    },
  },
});
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

$(".drop_list_Recommendedproducts").select2({});
$(".drop_list_marketingProducts").select2({});

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
  $(ele).on("click", function () {
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
