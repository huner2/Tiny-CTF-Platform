a = document.getElementById('hint');
b = document.getElementById('show');
c = document.getElementById('hide');
$(b).click(function(){
    b.style.display = "none";
    a.style.display = "inline";
    c.style.display = "inline";
});
$(c).click(function(){
    c.style.display = "none";
    a.style.display = "none";
    b.style.display = "inline";
});
$(b).hover(function(){
    b.style.color = "#2a6496";
},function(){
    b.style.color = "#428bca";
});
$(c).hover(function(){
   c.style.color = "#2a6496";
},function(){
   c.style.color = "#428bca";
});