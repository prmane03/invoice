        
$(document).ready(function(){
    
        
    $('#dab').click(function(){ 
         alert("inside on change");
        no=document.getElementById("num").value;
        alert(no);
        
        $.getJSON("/show_invoice",{flag:1,num:no,user:$('#user').text()},function(data){ 
//json function started here
            $("#date").text(data.date);
            $("#provider").text(data.provider );
            $("#providerrep").text(data.provider_rep);
            $("#providerinfo").text(data.provider_info);
            $("#customername").text(data.customer_name);
            $("#customeraddress").text(data.customeraddress);
            alert("inside json function");
            alert(data.pro);
            alert(data.pro[0]);
            
            alert("below dictinary");
                        
            //got values just add to rows now one by ome
            var rnum=0;
            alert(data.pro.length)
            //for loop to feed data in table
            var i;
            for (i = 0; i < data.pro.length; i++) { 
         
                (++rnum);
                $('tbody').append('<tr><td > <p>'+rnum+'</p></td><td>'+data.pro[i]+'</td> <td>'+data.pri[i]+'</td> <td>'+data.qty[i]+'</td><td>'+data.tot[i]+'</td></tr>');
            }//for loop end
         
         //this is to find total sum
            var sum = data.tot.reduce(function(a, b){
            return a + b;
                }, 0);
            $("#total_amu").text(sum);
                
                
            } );//json funcion end
        });//click event ends

})//ready function end here