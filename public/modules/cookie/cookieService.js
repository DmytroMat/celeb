app.service('cookieService', ['$http','$timeout', function ($http) {
    
    const frontcms_process_ENDPOINT   = '/api/frontcms/process' ;
  
    var frontcms = {};

    frontcms.getProcessList = function() {
        var url=frontcms_process_ENDPOINT+"/getAll?index=cookie";
            return $http.get(url).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }
    // home.saveContent = function(id,contentObj) {
    //     var url=home_ENDPOINT+"/update/"+id;
    //     console.log(url);
    //     return $http.post(url,{ content: contentObj }).then(function(response, status) {
    //         if (response.data == null) return null;
    //         return response.data;
    //     });
    // }

    // home.deleteContent = function(id) {
    //     var url=homeDelete_ENDPOINT+"/"+id;
    //     return $http.get(url).then(function(response, status) {
    //         if (response.data == null) return null;
    //         return response.data;
    //     });
    // }

   // return home;
   return frontcms;
}]);