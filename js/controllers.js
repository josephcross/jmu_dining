var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope, $window, $http) {
    $http.get('js/data.json').success(function(data) {
        $scope.locations = data;
        
        $scope.hideClosed = true;
        var now = new Date();
        var day = now.getDay();
        var hour = now.getHours();
        var minutes = now.getMinutes();
        var time = (hour * 60 + minutes);

        var $1am = 60;
        var $2am = 120;
        var $7am = 420;
        var $730am = 450;
        var $8am = 480;
        var $830am = 510;
        var $9am = 540;
        var $930am = 570;
        var $10am = 600;
        var $1030am = 630;
        var $1045am = 645;
        var $11am = 660;
        var $1130am = 690;
        var $noon = 720;
        var $123pm = 750;
        var $1pm = 780;
        var $130pm = 810;
        var $2pm = 840;
        var $230pm = 870;
        var $3pm = 900;
        var $330pm = 930;
        var $4pm = 960;
        var $430pm = 990;
        var $5pm = 1020;
        var $530pm = 1050;
        var $6pm = 1080;
        var $630pm = 1110;
        var $7pm = 1140;
        var $730pm = 1170;
        var $8pm = 1200;
        var $830pm = 1230;
        var $9pm = 1260;
        var $930pm = 1290;
        var $10pm = 1320;
        var $1030pm = 1350;
        var $11pm = 1380;
        var $1130pm = 1410;
        var $midnight = 1440;
       
// chik-fil-a       
       switch(day) {
            case 0:
                    break;
            case 1: 
            case 2: 
            case 3: 
            case 4: 
            case 5: if( time >= $730am && time < $9pm ) {
                        $scope.locations[0].isOpen = true;
                    };
                    break;
            case 6: if( time >= $11am && time < $9pm ) {
                        $scope.locations[0].isOpen = true;
                    };
                    break;
            default: alert("error");
        };
        
// d-hall and e-hall
        switch(day) {
		case 1:
		case 2:
		case 3:
		case 4:
		case 5: if( time >= $7am && time < $10pm ) {
				    $scope.locations[1].isOpen = true;
                    $scope.locations[6].isOpen = true;
				} else if( time >= $11am && time < $2pm ) {
					$scope.locations[1].isOpen = true;
                    $scope.locations[6].isOpen = true;
				} else if( time >= $430pm && time < $8pm ) {
					$scope.locations[1].isOpen = true;
                    $scope.locations[6].isOpen = true;
				};
				break;
		case 6: if ( time >= $10am && time < $2pm ) {
                    $scope.locations[1].isOpen = true;
                    $scope.locations[6].isOpen = true;
                } else if ( time >= $430pm && time < $730pm ) {
                    $scope.locations[1].isOpen = true;
                    $scope.locations[6].isOpen = true;
                };
                break;
		case 0: if ( time >= $10am && time < $3pm ) {
                    $scope.locations[1].isOpen = true;
                    $scope.locations[6].isOpen = true;
                } else if ( time >= $430pm && time < $730pm ) {
                    $scope.locations[1].isOpen = true;
                    $scope.locations[6].isOpen = true;
                };
				break;
		default: alert("Error");
	};
        
// bistro 1908      
       switch(day) {
            case 1: 
            case 2: 
            case 3: 
            case 4: if ( time >= $11am && time < $8pm ) {
                        $scope.locations[2].isOpen = true;
                    };
                    break;
            case 5: if( time >= $11am && time < $3pm ) {
                       $scope.locations[2].isOpen = true;
                    };
                    break;
            case 6:
            case 0: 
                    break;
            default: alert("error");
        };
        
// dog pound
        switch(day) {
            case 1: 
                    break;
            case 2: if ( time > $10pm ) {
                        $scope.locations[3].isOpen = true;
                    };
                    break;
            case 3:
            case 4: if ( time < $2am || time >= $10pm ) {
                        $scope.locations[3].isOpen = true;
                    };
                    break;
            case 5: 
            case 6: if ( time < $2am || time >= $8pm ) {
                        $scope.locations[3].isOpen = true;
                    };
                    break;
            case 0: if ( time < $2am ) {
                        $scope.locations[3].isOpen = true;
                    };
                    break;
            default: alert("error");
        };
        
// dunkin' donuts
        switch(day) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5: if ( time >= $7am && time < $7pm ) {
                        $scope.locations[4].isOpen = true;
                    };
                    break;
            case 6: if ( time >= $10am && time < $4pm ) {
                        $scope.locations[4].isOpen = true;
                    };
                    break;
            case 0: if ( time > $11am && time < $7pm ) {
                        $scope.locations[4].isOpen = true;
                    };
                    break;
            default: alert("error");
        };
        
// grace street market
        switch(day) {
            case 1:
            case 2:
            case 3:
            case 4: if ( time >= $8am && time < $8pm ) {
                        $scope.locations[5].isOpen = true;
                    };
                    break;
            case 5: if ( time >= $8am && time < $3pm ) {
                        $scope.locations[5].isOpen = true;
                    };
                    break;
            case 6: 
            case 0: 
                    break;
            default: alert("error");
        };
        
// einstein bros. bagels
        switch(day) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5: if ( time >= $730am && time < $3pm ) {
                        $scope.locations[7].isOpen = true;
                    };
                    break;
            case 6: 
                    break;
            case 0: if ( time >= $noon && time < $4pm ) {
                        $scope.locations[7].isOpen = true;
                    };
                    break;
            default: alert("error");
        };
        
// festival
        switch(day) {
            case 1:
            case 2:
            case 3:
            case 4: if ( time >= $11am && time < $9pm ) {
                        $scope.locations[8].isOpen = true;
                    };
                    break;
            case 5: if ( time >= $11am && time < $8pm ) {
                        $scope.locations[8].isOpen = true;
                    };
                    break;
            case 6: 
            case 0: if ( time >= $noon && time < $8pm ) {
                        $scope.locations[8].isOpen = true;
                    };
                    break;
            default: alert("error");
        };

//jemmy's
        switch(day) {
            case 1:
            case 2:
            case 3:
            case 4: if ( time >= $430pm && time < $midnight ) {
                        $scope.locations[9].isOpen = true;
                    };
                    break;
            case 5: if ( time >= $430pm && time < $8pm ) {
                        $scope.locations[9].isOpen = true;
                    };
                    break;
            case 6:             
            case 0: if ( time >= $1pm && time < $midnight ) {
                        $scope.locations[9].isOpen = true;
                    };
                    break;
            default: alert("error");
        };

// lakeside express
        switch(day) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5: if ( time >= $11am && time < $3pm ) {
                        $scope.locations[10].isOpen = true;
                    };
                    break;
            case 6:             
            case 0:
                    break;
            default: alert("error");
        };
        
// let's go local
        switch(day) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5: if ( time >= $1045am && time < $2pm ) {
                        $scope.locations[11].isOpen = true;
                    };
                    break;
            case 6:             
            case 0:
                    break;
            default: alert("error");
        };

// madison grill
        switch(day) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5: if ( time >= $11am && time < $2pm ) {
                        $scope.locations[12].isOpen = true;
                    } else if ( time >= $5pm && time < $830pm ) {
                        $scope.locations[12].isOpen = true;
                    };
                    break;
            case 6:             
            case 0:
                    break;
            default: alert("error");
        };
        
// market one
        switch(day) {
            case 1:
            case 2:
            case 3:
            case 4:if ( time >= $730am && time < $9pm ) {
                        $scope.locations[13].isOpen = true;
                    };
                    break;
            case 5: if ( time >= $730am && time < $2pm ) {
                        $scope.locations[13].isOpen = true;
                    };
                    break;
            case 6:             
            case 0:
                    break;
            default: alert("error");
        };
        
// mister chips
        switch(day) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5: if ( time >= $730am ) {
                        $scope.locations[14].isOpen = true;
                    };
                    break;
            case 6:             
            case 0: if ( time >= $11am && time < $11pm ) {
                        $scope.locations[14].isOpen = true;
                    };
                    break;
            default: alert("error");
        };

// mrs. greens
        switch(day) {
            case 1:
            case 2:
            case 3:
            case 4: if ( time >= $11am && time < $730pm ) {
                        $scope.locations[15].isOpen = true;
                    };
                    break;
            case 5: if ( time >= $11am  && time < $230pm ) {
                        $scope.locations[15].isOpen = true;
                    };
                    break;
            case 6:             
            case 0: 
                    break;
            default: alert("error");
        };
        
// dukes
        switch(day) {
            case 1:
            case 2:
            case 3:
            case 4: if ( time >= $11am && time < $10pm ) {
                        $scope.locations[16].isOpen = true;
                    };
                    break;
            case 5: 
            case 6: if ( time >= $11am  && time < $9pm ) {
                        $scope.locations[16].isOpen = true;
                    };
                    break;            
            case 0: if ( time >= $330pm && time < $10pm ) {
                        $scope.locations[16].isOpen = true;
                    };
                    break;
            default: alert("error");
        };
        
// UREC smoothie bar
        switch(day) {
            case 1:
            case 2:
            case 3:
            case 4: if ( time >= $1pm && time < $1030pm ) {
                        $scope.locations[17].isOpen = true;
                    };
                    break;
            case 5: if ( time >= $1pm && time < $9pm ) {
                        $scope.locations[17].isOpen = true;
                    };
                    break;
            case 6:            
            case 0: 
                    break;
            default: alert("error");
        };
        
// carrier starbucks
        switch(day) {
            case 1:
            case 2:
            case 3:
            case 4: if ( time >= $730am ) {
                        $scope.locations[18].isOpen = true;
                    };
                    break;
            case 5: if ( time >= $730am && time < $6pm ) {
                        $scope.locations[18].isOpen = true;
                    } else if ( time < $1am ) {
                        $scope.locations[18].isOpen = true;
                    };
                    break;
            case 6: if ( time >= $noon && time < $6pm ) {
                        $scope.locations[18].isOpen = true;
                    };
                    break;           
            case 0: if ( time >= $noon ) {
                        $scope.locations[18].isOpen = true;
                    };
                    break;
            default: alert("error");
        };
        
// ecl starbucks
        switch(day) {
            case 1:
            case 2:
            case 3: if ( time >= $730am ) {
                        $scope.locations[19].isOpen = true;
                    };
                    break;
            case 4: if ( time >= $730am && time < $11pm ) {
                        $scope.locations[19].isOpen = true;
                    } else if ( time < $1am ) {
                        $scope.locations[19].isOpen = true;
                    };
                    break;
            case 5: if ( time >= $730am && time < $3pm ) {
                        $scope.locations[19].isOpen = true;
                    };
                    break;
            case 6: 
                    break;           
            case 0: if ( time >= $noon ) {
                        $scope.locations[19].isOpen = true;
                    };
                    break;
            default: alert("error");
        };

// top dog
        switch(day) {
            case 1:
            case 2:
            case 3: 
            case 4: if ( time >= $1030am && time < $8pm ) {
                        $scope.locations[19].isOpen = true;
                    };
                    break;
            case 5: if ( time >= $1030am && time < $330pm ) {
                        $scope.locations[20].isOpen = true;
                    };
                    break;
            case 6: 
                    break;           
            case 0: if ( time >= $5pm && time < $9pm ) {
                        $scope.locations[20].isOpen = true;
                    };
                    break;
            default: alert("error");
        };
        
        
        
        
        
        
        
});
  

    
    
    
    
    
    
    
    
    
    
    
// link to campusdish pages
    $scope.openLink = function(location) {
        $window.location.href = location.link;
    };

// filter by main/east campus
    $scope.campusIncludes = [];
    $scope.includeCampus = function(campus) {
        var i = $.inArray(campus, $scope.campusIncludes);
        if (i > -1) {
            $scope.campusIncludes.splice(i,1);
        } else {
            $scope.campusIncludes.push(campus);
        }
    }
    
   $scope.campusFilter = function(location) {
        if ($scope.campusIncludes.length > 0) {
            if ($.inArray(location.campus, $scope.campusIncludes) < 0)
            return;
        }   
        return location;
    }
    
    
});


function ContactController($scope, $http) {
  $scope.success = false;
  $scope.error = false;
  $scope.send = function () {
 
  var htmlBody = 
                 '<div>Message: ' + $scope.user.body + '</div>' +
                 '<div>Date: ' + (new Date()).toString() + '</div>';
  
    $http({
      url: 'https://api.postmarkapp.com/email',
      method: 'POST',
      data: {
        'From': 'jtccross@gmail.com',
        'To': 'jtccross@gmail.com',
        'HtmlBody': htmlBody,
        'Subject': 'New Contact Form Submission'
      },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Postmark-Server-Token': '8569dcd45-6a1a-4e7b-ae75-ea37629de4'
      }
    }).
    success(function (data) {
    	$scope.success = true;
    	$scope.user = {};
    }).
    error(function (data) {
    	$scope.error = true;
    });
  }
}

