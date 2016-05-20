$(document).ready(function(){
	var theight = $('.header').height() + $('.main').height();
	var mheight = $('body').height()- theight;
	$('.footer').css('margin-top',mheight);
});
function submit(id){
	document.getElementById(id).submit();
}
function jump(data){
}
function submitedit(id){
	var members=[];
	$('.memberHead').each(function(member){
		if($(this).attr('user'))
			members.push($(this).attr('user'));
	});
	$('#create_members').val(members);
	document.getElementById(id).submit();
}
function inviteMember(){
	var invite = $('#inviteInput').val();
	var newMember = $('.memberHead.hasMember').first().clone();
	$(newMember).find('img').attr('src','/images/project.jpg');
	$(newMember).attr('user',invite);
	$(newMember).insertBefore($('.memberHead.border.addNew'));
	$('#inviteInput').val('');
	$('#inviteBtn').addClass('ui-state-disabled');
	$('#inviteMember-screen').click();
}
function invitePress(){
	var invite = $('#inviteInput').val();
	if(isEmail(invite))
		$('#inviteBtn').removeClass('ui-state-disabled');
	else
		$('#inviteBtn').addClass('ui-state-disabled');
}
function cancelInvite(){
	$('#inviteMember-screen').click();
}
function isEmail(val){
	var myreg = /^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/;
	if(!myreg.test(val))
		return false;
	else
		return true;
}

function cancelNewType(){
	$('#newType-screen').click();
}
function newType(){
	var input = $('#newTypeInput').val();
	if(input){
		var newType = $('.ui-checkbox').last().clone();
		//need ajax to create new type
		$(newType).find('input').attr('id','');
		$(newType).find('input').attr('name','');
		$(newType).find('label').attr('for','');
		$(newType).find('label').html(input);
		$('.ui-checkbox').last().find('label').removeClass('ui-last-child');
		$(newType).insertAfter($('.ui-checkbox').last());
		$('#newTypeInput').val('');
		$('#newType-screen').click();
	}
	else
		return;
}

