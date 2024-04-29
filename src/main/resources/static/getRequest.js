/*GET:*/
$(document).ready(
	function(){
		//get request
		
		
		$("#getAllBooks").click(function(event){
			event.preventDefault();
			ajaxGet();
		});
		
		//do get
		function ajaxGet(){
			$.ajax({
				type: "GET",
				url: "getBooks",
				success: function(result){
					if(result.status == "success"){
						$('#getResult ul').empty();
						var bookList = "";
						$.each(result.data, function(i, book){
							var book = "Book Name"+book.bookName+
							", Author = "+book.author + "<br>";
							$('#getResult .list-group').append(book)
						});
						console.log("Success", result); 
					}
					else{
						$("#getResult").html("<strong>Error</strong>");
						console.log("Fail : ", result);
					}
				},
				error : function(e){
					$("#getResult").html("<strong>ERROR</strong>");
					console.log("ERROR :",e);
				}
			});
		}
	})