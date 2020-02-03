//alert('hello');
//Accordion acoordeon
/*
<div id="accordion">
<h3>Section 1</h3>
<div>
  <p>
  Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer
  ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit
  amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut
  odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
  </p>
</div>
<h3>Section 2</h3>
<div>
  <p>
  Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet
  purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor
  velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In
  suscipit faucibus urna.
  </p>
</div>
<h3>Section 3</h3>
<div>
  <p>
  Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque lobortis.
  Phasellus pellentesque purus in massa. Aenean in pede. Phasellus ac libero
  ac tellus pellentesque semper. Sed ac felis. Sed commodo, magna quis
  lacinia ornare, quam ante aliquam nisi, eu iaculis leo purus venenatis dui.
  </p>
  <ul>
    <li>List item one</li>
    <li>List item two</li>
    <li>List item three</li>
  </ul>
</div>
<h3>Section 4</h3>
<div>
  <p>
  Cras dictum. Pellentesque habitant morbi tristique senectus et netus
  et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in
  faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia
  mauris vel est.
  </p>
  <p>
  Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus.
  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
  inceptos himenaeos.
  </p>
</div>
</div>
//css
#accordion{
  width:50%;
  margin:auto;
}
//js
  $( function() {
    $( "#accordion" ).accordion();
  } );
*/

  var pays =["French","Brazil","Britain","Canada","Deutsh","Japan","US"];
  var flagPays=["img/French.png","img/Brazil.png","img/Britain.png","img/Canada.png","img/Deutsh.png","img/Japan.png","img/US.png"];
  var point=0;
  $(document).ready(function(){
    function randomize(arr){
      //ici
      return arr.sort(function(){
        return .6 -Math.random();
      });
    }

    /**/
      randomize(flagPays);
      $.each(flagPays, function(index,value){
        var flag = value.slice(4,-4);
        //scope de draggable = scope
          $('<div class="dr_custom draggablez"> <img src="'+  value +'" class="imgTaille" >  </div>').appendTo( "#flag" ).draggable({ revert: true,scope:flag });
      });

     randomize(pays);
     $.each(pays, function(index,value){
       $(' <div  class="dr_custom droppablez"> '+  value +'  </div>').appendTo("#nameFlag").droppable({scope:value,
         drop:function(event,ui){
           $(ui.draggable).append($(this).text());
           point++;
           console.log(point);
           $(this).hide("explode",500);
          if(point == pays.length){
            $("<div><p>you have completed the game do you want to play again?</p></div>")
            .dialog({
              modal: true,
              buttons:[
                {text:"Yes",
                  click:function(){window.location.reload();
                  }
                },
                {text:"No",
                  click:function(){
                    $(this).dialog("close");
                  }
                } ]


            });
          }
         }
       });
     });


  });
