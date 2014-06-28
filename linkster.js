/*
Linkster.js ( Links Library.)

Author : Anand Sudhanaboina
Website : codehate.com
Email: anand@codehate.com
External Dependencies: Jquery
 */


/*
Linkster.js object
 */
linkster = {

    /*
    Configuration passed to linkster.init(<<config>>);
     */
    config : 0,

    /*
    Function: init(<<config)
    Description: initializes the linkster.config from the local parameter & register a event handler on `a` tags.
     */
    init : function(config){
        linkster.config = config;
        if( linkster.isJquery() ==0 ){
            alert("Linkster dependencies : \n\nNo Jquery Found.");
        }else{
            linkster.register();
        }
    },

    isJquery : function(){
        if(typeof jQuery == 'undefined'){
            return 0;
        }else{
            return 1;
        }
    },

    /*
    Function; register
    Description: registers `click` event for `a` tags.
     */
    register : function(){
        $("a").on("click",linkster._click);
    },


    /*
    Function: _click
    Description: function which handle the click events & blocks directing the user if the href is found in the config array.
     */
    _click : function(e){

        href = $(this).attr("href");
        hostName = linkster.getHostname(href);

        _domainExists = linkster.domainExists(hostName);
        if(_domainExists){
            alert(href+"\n\n Url has been blocked, contact site admin.\n\nBlocked by linkester.js")
            return false;
        }else{
            return true;
        }
    },

    /*
     Function: getHostname
     Description: returns the host of the specified absolute url.
     */
    getHostname : function(url){
        a = document.createElement("a");
        a.setAttribute("href",url);
        hostName = a.hostname;
        delete a;
        return hostName;
    },

    /*
    function: domainExists
    Description: checks hostname in the linkster.config array.
    Uses : linkster.domainExists(<<hostname>>);
     */
    domainExists : function(hostname){
    return jQuery.inArray(hostname,linkster.config)==-1?0:1;
    }
}