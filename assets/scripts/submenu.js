const subMenueeee = document.querySelector("#submenu1");
const breadcrumb =document.querySelector('#breadcrumb');
const headerContainer =document.querySelector('#header-container');
let nameClickHandler = ""
function addSubmenu(a) {
  let li = document.createElement("li");
  li.dataset.content = a;
  li.onclick=liDataGet
  li.innerHTML = `
     <a data-content="${a}" class="group/one flex justify-between items-center px-3 py-4 border-b border-gray-200 " href="${window.location.pathname==="/index.html"?"assets/pages/category.html":"./category.html"}">
     <span   class="text-sm group-hover/one:text-orange-90 duration-300 pointer-events-none">${a}</span>
     <span class="pointer-events-none">
         <svg class="w-4 h-4 group-hover/one:text-orange-90 duration-300 pointer-events-none">
             <use href="#arrow-left" ></use>
          </svg>
     </span>
 </a>
 <ul class="absolute duration-300 flex flex-wrap invisible opacity-0 top-0 right-80 *:w-[30%] p-5 border border-gray-200 h-full  min-w-[500px] max-w-[1000px] bg-white-s rounded-2xl">
 </ul>
`;
  subMenueeee.appendChild(li);
}
function stylesubsubmenu(a,b,c,d) {
    a.children[1].style.opacity=b
    a.children[1].style.visibility=c
    a.children[1].style.right=d
}
function addsubsubmenu(a, c) {
  const x = document.querySelectorAll("#submenu1>li");
  x.forEach((lis , i)=>{
  let datasetc = lis.dataset.content
lis.addEventListener('mousemove',()=>{
    stylesubsubmenu(lis,"1","visible","256px")
})
lis.addEventListener('mouseout',()=>{
    stylesubsubmenu(lis,"0","hidden","320px")
})
  if(datasetc == a){
   let arrsub = c.subsubmenu
   arrsub.map((val)=>{
    let li =document.createElement('li')
    li.onclick=liDataGet
    li.innerHTML = `
    <a href="${window.location.pathname=="/index.html" || window.location.pathname=="/virgool/"?"./assets/pages/category.html":"./category.html"}" data-content="${val}" data-bcontent="${datasetc}" class=" w-full h-full"><span class="text-sm pointer-events-none">${val}</span></a>
    `;
    x[i].children[1].appendChild(li)
   })
  }
  })
}
function submenuone(a) {
  const url = `https://6794a4b3aad755a134ea00b9.mockapi.io/Krist/v1/${a}/`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.map((val, i) => {
        addSubmenu(val.submenu , i);
        addsubsubmenu(val.submenu,val);
      });
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

submenuone("menu");

 function liDataGet(e){
  nameClickHandler = [ e.target.dataset.bcontent?e.target.dataset.bcontent:"", e.target.dataset.content ]
  localStorage.setItem('data',JSON.stringify(nameClickHandler))
}
function breadcrumbone() {
  const local =  JSON.parse(localStorage.getItem('data'));
  if(window.location.pathname === "/assets/pages/category.html"){
    breadcrumb.innerHTML=  `
  <span class="flex items-center gap-1.5 ml-6" ><svg class="w-6 h-6" ><use href="#home"></use></svg> <span class="pt-1.5" >صفحه اصلی</span></span>
  <span class="ml-5 pt-1.5"><svg class="w-6 h-6 "><use href="#arrow-left"></use></svg></span>
  <span class="flex items-center pt-1.5 ml-5 ${local[0]?'':'text-orange-90'}">${local[0]}</span>
  ${!local[0]== ''?'<span class="ml-8 pt-1.5"><svg class="w-6 h-6 "><use href="#arrow-left"></use></svg></span>':""}
  <span class="flex items-center pt-1.5 text-orange-90">${local[1]}</span>
  `
  }
  
}
breadcrumbone()
console.log(nameClickHandler)
console.log(headerContainer.clientWidth)
console.log(window.location.pathname)