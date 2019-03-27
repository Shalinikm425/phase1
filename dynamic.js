function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status=="200"){
    callback(xhr.responseText);
  }
}
xhr.send();
}
loadJson("dynamic.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  profile(data.profile);
  Career_Objectives(data.Career_Objectives);
  edu(data.educ);
  skills(data.skills);
})

var left=document.querySelector(".left");
function profile(p){
  var image=document.createElement("img");
  image.src=p.image;
  left.append(image);

  var h2=document.createElement("h2");
  h2.textContent=p.name;
  left.append(h2);

  var h3=document.createElement("h3");
  h3.textContent=p.Designation;
  left.append(h3);

  var h4=document.createElement("h3");
  h4.textContent=p.Phoneno;
  left.append(h4);

  var h5=document.createElement("h3");
  h5.textContent=p.Mailid;
  left.append(h5);
}
var right=document.querySelector(".right");
function Career_Objectives(q) {
  var h2=document.createElement("h2");
  h2.textContent="Career Objective";
  right.append(h2);
  var hr=document.createElement("hr");
  right.append(hr);
  var cr=document.createElement("p");
  cr.textContent=q.info;
  right.append(cr);
}

  function edu(e) {
    var hrr=document.createElement("h2");
    hrr.textContent="Educational Details";
    right.append(hrr);
  var hr=document.createElement("hr");
     right.append(hr);
    var table=document.createElement("table");
  //  table.border="2";
    right.append(table);
    var tr1="<tr><th>sno</th><th>Qualification</th><th>Institute</th><th>y.o.p</th><th>percentage</th></tr>";
    var tr2=" ";
    for(var i=0;i<e.length;i++)
    {
      tr2=tr2+"<tr><td>"+e[i].sno+"</td><td>"+e[i].Qualification+"</td><td>"+e[i].Institute+"</td><td>"+e[i].yop+"</td><td>"+e[i].per+"</td></tr>";
     }
    table.innerHTML=tr1+tr2;
    right.append(table);

}
function skills(s){
  var hr=document.createElement("h2");
  hr.textContent="Skills";
  right.append(hr);
  var hr2=document.createElement("hr");
     right.append(hr2);
     var ul=document.createElement("ul");
     for(var i in s){
       var li=document.createElement("li");
       li.innerHTML=s[i].name+":"+s[i].info;
       ul.append(li);
     }
     right.append(ul);
}
