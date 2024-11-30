const table=[
    {id:"table1" , name:"table-1" ,total:0, items:{} },
    {id:"table2" , name:"table-2" ,total:0, items:{} },
    {id:"table3" , name:"table-3" ,total:0, items:{} },

];

const menuItems=[
    {id:"item1" , name:"biryani" ,price:200 , type:"main course"},
    {id:"item2" , name:"pizza" ,price:200 , type:"main course"},
    {id:"item3" , name:"burger" ,price:200 , type:"stater"}
];

document.addEventListener("DOMContentLoaded",()=>{
    renderMenu(menuItems);
    renderTable(table);
});

 function renderMenu(menuItems){
    const menuContainer=document.getElementById("menu-container");
    menuContainer.innerHTML="";
    menuItems.forEach((item)=>{
        const menuItem=document.createElement("div");
        menuItem.className="menu-item";
        menuItem.id=item.id;
        menuItem.draggable=true;

        menuItem.innerHTML=`
        <h4>${item.name}</h4>
        <p>${item.price.toFixed(3)}</p>
        `;
        menuContainer.append(menuItem)
  });
}


function renderTable(table){
const table
}