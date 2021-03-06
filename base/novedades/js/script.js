            /*localStorage.clear();*/
            function readReadColor(){
                for (var i = 0; i < localStorage.length; i++){
                    if (document.getElementById(localStorage.getItem(localStorage.key(i)))){
                        var current = document.getElementById(localStorage.getItem(localStorage.key(i))).previousElementSibling.getElementsByTagName("h4")[0];
                        current.classList.remove('unread');
                        current.className += " read";
                    } else {
                        localStorage.removeItem(i);
                    }
                }
            }

            function setStorage() {
                if(typeof(Storage)!=="undefined") {
                    localStorage['read ' + currentlyOpen] = currentlyOpen;
                }
            }

            var currentlyOpen = "none";

            document.onkeyup = KeyCheck;       

            function KeyCheck(e) {
                var KeyID = (window.event) ? event.keyCode : e.keyCode;

                switch(KeyID) {
                    case 74:
                        nextPrev("next"); 
                        break;
                    case 75:
                        nextPrev("previous"); 
                        break;
                }
            }

            function toggle(showHideDiv) {
                var ele = document.getElementById(showHideDiv);
                if(ele.style.display == "block") {
                    ele.style.display = "none";
                } else {
                    ele.style.display = "block";
                    currentlyOpen = showHideDiv;
                    current = document.getElementById(currentlyOpen).previousElementSibling.getElementsByTagName("h4")[0];
                    current.classList.remove('unread')
                    current.className += " read";
                    setStorage();
/*                    var imgs = ele.getElementsByTagName('img');
                    for(var i = 0; i < imgs.length; i++) {
                        var thisImg = imgs[i];
                        alert(thisImg);
                        get data-src
                        document.img.src=data-src 
                    }*/
                }
            }  
            function toggleall(changeTo){
                var list = document.getElementsByClassName("itemdescription");
                for (var i = 0; i < list.length; i++) {
                    var e = list[i];
                    e.style.display = changeTo;
                }
            }
            
            function nextPrev(direction){
                var divs = document.getElementsByClassName("itemdescription");
                var selectionDiv = document.getElementById(currentlyOpen);
                for(var i=0; i<divs.length; i++) {
                    if(divs[i] == selectionDiv) {
                        var previous = divs[i+1];
                        var next = divs[i-1];
                        break;
                    }
                }
                
                toggleall('none');
                if(direction == "next"){
                    if(next!=undefined){
                        toggle(next.id);
                        window.location = "#" + next.parentNode.id;
                    }else{
                        var begin=document.getElementById("beggining")
                        begin.style.display="block"
                        setTimeout(function(){begin.style.display="none"},1000);
                    }
                }else{
                    if(previous!=undefined){
                        toggle(previous.id);
                        window.location = "#" + previous.parentNode.id;
                    }else{
                        /*popup("end");*/
                    }
                }
            }

            function markStatus(stat){
                var current = document.getElementById(currentlyOpen).previousElementSibling.getElementsByTagName("h4")[0];
                if(stat == "unread"){
                    current.classList.remove('read')
                    current.className += " unread";
                    localStorage.removeItem('read ' + currentlyOpen);
                    toggle(currentlyOpen);
                }
            }
            
            function markAllRead(){
                var items = document.getElementsByClassName("itemdescription");
                for(var i=0; i<items.length; i++){
                    currentId = items[i].getAttribute('id');
                    localStorage['read ' + currentId] = currentId;
                    readReadColor();
                }
            }
