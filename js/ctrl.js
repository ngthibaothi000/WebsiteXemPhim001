$(document).ready(function(){
    $('#eye').click(function(){
      var boxField = $(this).prev(); // Trường nhập mật khẩu trước đó
      var icon = $(this).find('i'); // Icon mắt
      if (boxField.attr('type') === 'password') { // show
        // Nếu mật khẩu đang ẩn, hiển thị mật khẩu và chuyển icon sang "mắt đóng"
        boxField.attr('type', 'text');
        icon.addClass('fa-eye');
        icon.removeClass('fa-eye-slash');
      } else {
        // Ngược lại, ẩn mật khẩu và chuyển icon sang "mắt mở"
        boxField.attr('type', 'password');
        icon.addClass('fa-eye-slash');
        icon.removeClass('fa-eye');
      }
    });
  });