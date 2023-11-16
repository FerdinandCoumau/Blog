import{d as w,X as b,Y as d,b as a,c as o,n as r,J as s,a0 as l,D as g,t as k,f as c,e as p,g as B,F as C,a2 as N,W as V,O as h,$ as P,aw as U}from"./entry.170f331b.js";const z={class:"flex flex-col lg:flex-row items-start gap-6"},A={class:"flex-1"},F=w({inheritAttrs:!1,__name:"PageHeader",props:{headline:{default:void 0},title:{default:""},description:{default:""},icon:{default:null},links:{default:()=>[]},ui:{default:()=>({})},class:{default:void 0}},setup(u){const f={wrapper:"relative border-b border-gray-200 dark:border-gray-800 py-8",container:"flex flex-col lg:flex-row lg:items-center lg:justify-between",headline:"mb-4 text-sm/6 font-semibold text-primary capitalize flex items-center gap-1.5",title:"text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight",description:"mt-4 text-lg text-gray-500 dark:text-gray-400",icon:{wrapper:"flex",base:"w-10 h-10 flex-shrink-0 text-primary"},links:"flex flex-wrap items-center gap-1.5 mt-4 lg:mt-0"},n=u,{ui:t,attrs:m}=b("page.header",d(n,"ui"),f,d(n,"class"));return(e,$)=>{var y;const v=P,x=U;return a(),o("div",h({class:s(t).wrapper},s(m)),[e.headline||e.$slots.headline?(a(),o("p",{key:0,class:r(s(t).headline)},[l(e.$slots,"headline",{},()=>[g(k(e.headline),1)])],2)):c("",!0),p("div",z,[e.icon||e.$slots.icon?(a(),o("div",{key:0,class:r(s(t).icon.wrapper)},[l(e.$slots,"icon",{},()=>[B(v,{name:e.icon,class:r(s(t).icon.base)},null,8,["name","class"])])],2)):c("",!0),p("div",A,[p("div",{class:r(s(t).container)},[p("h1",{class:r(s(t).title)},[l(e.$slots,"title",{},()=>[g(k(e.title),1)])],2),(y=e.links)!=null&&y.length||e.$slots.links?(a(),o("div",{key:0,class:r(s(t).links)},[l(e.$slots,"links",{},()=>[(a(!0),o(C,null,N(e.links,(i,_)=>(a(),V(x,h({key:_},{...i,target:i.target||"_blank",color:i.color||"white"},{onClick:i.click}),null,16,["onClick"]))),128))])],2)):c("",!0)],2),e.description||e.$slots.description?(a(),o("p",{key:0,class:r(s(t).description)},[l(e.$slots,"description",{},()=>[g(k(e.description),1)])],2)):c("",!0),l(e.$slots,"default")])])],16)}}}),I=w({inheritAttrs:!1,__name:"PageBody",props:{prose:{type:Boolean,default:!1},ui:{default:()=>({})},class:{default:void 0}},setup(u){const f={wrapper:"mt-8 pb-24",prose:"prose prose-primary dark:prose-invert max-w-none"},n=u,{ui:t,attrs:m}=b("page.body",d(n,"ui"),f,d(n,"class"));return(e,$)=>(a(),o("div",h({class:[s(t).wrapper,e.prose&&s(t).prose]},s(m)),[l(e.$slots,"default")],16))}});export{F as _,I as a};