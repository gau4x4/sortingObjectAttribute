let sortObject=(arg,propSort)=>{
  let arrTemp=[];
  arg.forEach(function(item){
     arrTemp.push(item[propSort])
  });
 return arrTemp.sort(function(a,b){return b-a;})
}

 const obj=[{id:12},{id:2},{id:1},{id:10},{id:32},{id:92},{id:9},{id:13},{id:123}];

console.log(sortObject(obj,"id"));
