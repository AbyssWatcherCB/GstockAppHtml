var produits = [];
function menu(o) {
    $(".DV").hide();
    var d = "#" + o;
    $(d).show();
}
function nouveau()
{
    $('#txtNOM').val("");
    $('#txtPRIX').val("");
    $("#txtNOM").focus();1
}
function save()
{
    var OneProduit = [];
    OneProduit.nom = $("#txtNOM").val();
    OneProduit.prix = $("#txtPRIX").val();
    var t = "<tr><td>" + $("#txtNOM").val() + "</td><td>" + $("#txtPRIX").val() + "</td></tr>";
    // alert(t);
    $("#tbPRODUIT tbody").append(t);
    
    produits.push(OneProduit);
    console.log(produits)
    addProduitSelect(produits)
}
function addProduitSelect(produits){
    opt=''
    $("#ventSelect").html('')
    for (elt of produits){
        opt+=`<option value="${elt.nom}" id="${elt.nom}">${elt.nom}</option>`
        $("#ventSelect").append(opt)
        console.log(elt)
        opt=''
    }
}
function calculResulta(){
    
    $("#qntVent").on("click",function(){
        valor=$("#ventSelect").find(":selected").val()
        for( elt of produits){
            if(elt.nom == valor){
                qnt=$("#qntVent").val()
                resulta=qnt*elt.prix
                $("#result").html(resulta)
                
            }
            alert(qnt)
            }
    
    
        })
}
    $(document).ready(function(){


    })