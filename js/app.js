var app = angular.module('app', []);
	
	app.controller('controller', function($scope,$http) {
			$scope.app = {
				paiementsMode: {
					mtn: {icon: "data:image/png;base64,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"}
				},
				init: function(){
					var $this = this;

				},
				paiement: {
					montant: "",
					telephone: "",
					password: "",
					to:"gfam.monde@gmail.com",
					pay: function(){
						var $this = this;

						$(".fa.check").css({display:"none"});
			            $(".fa.loading").css({display:"inline-block"});
			            $(".fa.loading").attr( "title","loading");

			            var error = false;
			            if(isNaN($this.montant) || $this.montant == "" || parseInt($this.montant)<=0){
			            	$(".paiement-montant-input .fa.check").css({display:"none"});
			           		$(".paiement-montant-input .fa.bad").css({display:"inline-block"});
			            	$(".paiement-montant-input .fa.bad").attr( "title","entrez un montant > 0");

			            	error = true;
			            }

			            if(isNaN($this.telephone) || $this.telephone == "" || $this.telephone.length<8){
			            	$(".paiement-tel-input .fa.check").css({display:"none"});
			           		$(".paiement-tel-input .fa.bad").css({display:"inline-block"});
			            	$(".paiement-tel-input .fa.bad").attr( "title","entrez un numéro de téléphone");

			            	error = true;
			            }

			            if(!$this.password || $this.password == ""){
			            	$(".paiement-password-input .fa.check").css({display:"none"});
			           		$(".paiement-password-input .fa.bad").css({display:"inline-block"});
			            	$(".paiement-password-input .fa.bad").attr( "title","entrez un mot de passe");

			            	error = true;
			            }


			            if(!error){
			            	var url = "https://developer.mtn.cm/OnlineMomoWeb/faces/transaction/transactionRequest.xhtml";
				            	url += "?";
				            	url += "idbouton=2";
				            	url += "&typebouton=PAIE";
				            	url += "&_amount="+$this.montant;
				            	url += "&_tel="+$this.telephone;
								url += "&_clP="+$this.password;
								url += "&_email="+$this.to;

				            $http({
						        method : "GET",
						        url : url
						    }).then(function mySuccess(response) {
						        alert(response.data);
						        $this.success(response.data);
						    }, function myError(response) {
						        $this.error(response.statusText);
						    });
			            }
			            else{
			            	$this.error("Veuillez remplir convenablement le formulaire");
			            }
			            
					},
					error: function(message){
			            $(".paiement-buttons-input .fa.check").css({display:"none"});

			            if(message==""){
			            	$(".fa.check").css({display:"none"});
			           		$(".fa.none").css({display:"inline-block"});
			            }
			            $(".paiement-global-container .form-container .error-container").html(message!=""?message:"<i class='fa check fa-times bad'></i> Erreur survenue lors du paiement");
					},
					success: function(message){
						$(".fa.check").css({display:"none"});
			            $(".fa.valid").css({display:"inline-block"});
			            $(".fa.valid").attr( "title",message);

			            $(".paiement-buttons-input .fa.check").css({display:"none"});

			            $(".paiement-global-container .form-container .error-container").text("");
					}
				}
			} 

			$scope.app.init();
			
	});
