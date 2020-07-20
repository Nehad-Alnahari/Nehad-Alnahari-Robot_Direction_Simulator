
    var x = 200;
    var y = 200;
    var arr = [];
    
    
    function myFunction(dir) {
        var input = document.getElementById(dir).value;
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        switch(dir) {
            case 'f':
                arr.push({dir:'F' , val:input});
            
                ctx.beginPath();
                ctx.moveTo(x, y);
                y=y-input;
                ctx.lineTo(x, y);
                ctx.lineTo(x-5, y+5);
                ctx.lineTo(x, y);
                ctx.lineTo(x+5, y+5);
                ctx.moveTo(x, y);
                ctx.stroke();
                break;

            case 'l':
                arr.push({dir:'L' , val:input});
                
                ctx.beginPath();
                ctx.moveTo(x, y);
                x=x-input;
                ctx.lineTo(x, y);
                ctx.lineTo(x+5, y+5);
                ctx.lineTo(x, y);
                ctx.lineTo(x+5, y-5);
                ctx.moveTo(x, y);
                ctx.stroke();
                break;

            case 'r':
                arr.push({dir:'R' , val:input});

                ctx.beginPath();
                ctx.moveTo(x, y);
                x=x+(parseInt(input));
                ctx.lineTo(x, y);
                ctx.lineTo(x-5, y+5);
                ctx.lineTo(x, y);
                ctx.lineTo(x-5, y-5);
                ctx.moveTo(x, y);
                ctx.stroke();
                break;

            case 'd':
                arr.push({dir:'D' , val:input});

                ctx.beginPath();
                ctx.moveTo(x, y);
                y=y+(parseInt(input));
                ctx.lineTo(x, y);
                ctx.lineTo(x-5, y-5);
                ctx.lineTo(x, y);
                ctx.lineTo(x+5, y-5);
                ctx.moveTo(x, y);
                ctx.stroke();
                break;
        } 
        
    }

    function save() {
        
        pathname = document.getElementById("savepath").value;
        arr.push(pathname);

        $.ajax({ 
            method: "post", 
            url: "insert.php", 
            data: {path: JSON.stringify(arr)}, 
            success: function() { 
                    alert("Success"); 
                } 
        }); 
        console.log(JSON.stringify(arr));
        console.log(arr);
        //reset();
    }

    function reset(){
        arr=[];
        location.reload();
    }

    