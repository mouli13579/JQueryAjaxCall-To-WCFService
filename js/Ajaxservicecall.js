$(document).ready(function () {
   // WCFJSON();
});

var Type;
var Url;
var Data;
var ContentType;
var DataType;
var ProcessData;

function WCFJSON() {
    var uesrid = "3";
    Type = "POST";
    Url = "Service.svc/GetUser";
    Data = '{"Id": "' + uesrid + '"}';
    ContentType = "application/json; charset=utf-8";
    DataType = "json"; ProcessData = true;
    CallService();
}

//Generic function to call AXMX/WCF  Service        
function CallService() {
    $.ajax({
        type: Type, //GET or POST or PUT or DELETE verb
        url: Url, // Location of the service
        data: Data, //Data sent to server
        contentType: ContentType, // content type sent to server
        dataType: DataType, //Expected data format from server
        processdata: ProcessData, //True or False
        success: function (msg) {//On Successfull service call
            ServiceSucceeded(msg);
        },
        error: ServiceFailed// When Service call fails
    });
}

function ServiceFailed(result) {
    alert('Service call failed: ' + result.status + '' + result.statusText);
    Type = null; Url = null; Data = null; ContentType = null; DataType = null; ProcessData = null;
}



function ServiceSucceeded(result) {

    if (DataType == "json") {

        resultObject = result.GetUserResult;

        for (i = 0; i < resultObject.length; i++) {
            alert(resultObject[i]);
        }

    }

}
