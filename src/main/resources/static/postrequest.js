$(document).ready(
	function(){
		//Submit form
		$("#bookForm").submit(function(event){
			event.preventDefault();
			ajaxPost();
		});
		
		function ajaxPost(){
			//Prepare form data
			var formData = {
				bookId: $("#bookId").val(),
				bookName: $("#bookName").val(),
				author: $("#author").val()
			}
			
			//do post
			$.ajax({
				
				type: "POST",
				contentType: "application/json",
				url: "addBook",
				data: JSON.stringify(formData),
				dataType: "json",
				success: function(result){
					if(result.status == "success"){
						$("#postResult").html(
							""+result.data.bookName +"Post Successfully !! "
						);
					}
					else{
						$("#postResult").html("<strong>Error</strong>");
					}
					console.log(result);
				},
				error : function(e){
					alert("Error !!");
					console.log("ERROR : ", e);
				}
				
			});
		}
	})