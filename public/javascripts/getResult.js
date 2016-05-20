// $(document).ready(function(){
// 	setInterval('getResult()',5000);

// function getResult(){
// 	var workitem = $('#resultRTCid').html();
// 	$.ajax({
// 		url:'/workitem/getResult',
// 		type:'get',
// 		data:{
// 			'workitem':workitem,
// 		},
// 		success:function(data){
// 			console.log(data);
// 			var result = data.result;
// 			var votes = data.votes;
// 			votes.forEach(function(vote){
// 				var width,color;
// 				var score = vote.score;
// 				if(score==100){
// 					width="100%"; 
// 					color="#da3907";
// 				}else if(score>13&&score<100){
// 					width=score*1.5+"%"; 
// 					color="#dd6a15";
// 				}else if(score<20&&score>0.5){
// 					width=score*1.5+"%";  
// 					color="#dcfc08";
// 				}else if(score==0.5){
// 					width=score*2+"%"; 
// 					color="#38f353";
// 				}else if(score==0){
// 					width="0.5%"; 
// 					color="#cbfcd2";
// 				}else if(score=='coffee'){
// 					width="10%"; 
// 					color="#af7905";
// 				}else if(score=='q'){
// 					width="10%"; 
// 					color="#144bd6";
// 				}
// 				$('.resultHead:contains("'+vote.user+'"")').next('.resultInside').css({'width':width,'background':color});
// 			});
// 		},
// 		error:function(){}
// 	});
// }
// });


