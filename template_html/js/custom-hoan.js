$(function(){
	Confirm.init('sm');
	
	$('.close-btn span').unbind();
	$('.close-btn span').bind('click', function(e)
	{
		e.preventDefault();
		Confirm.show('Xóa lịch tiêm chủng', 'Bạn có chắc muốn xóa lịch tiêm này không?', {
			'Delete' : {
				'primary' : true,
				'callback' : function()
				{
					Confirm.show('Message', 'Bạn đã xóa lịch tiêm chung');
				}
			}
		});
	});
	$( "#datepicker" ).datepicker();
});
