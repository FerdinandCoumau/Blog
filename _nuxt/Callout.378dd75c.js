import{d as y,x as v,X as x,Y as c,I as i,Z as d,b as a,c as _,W as n,w,f as s,n as u,J as e,O as C,e as I,E as A,$ as B}from"./entry.170f331b.js";import{r as E}from"./slot.e83509a5.js";import"./node.e4a9c3bc.js";const L=I("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),F=y({inheritAttrs:!1,__name:"Callout",props:{icon:{default:void 0},color:{default:"primary"},to:{default:void 0},target:{default:void 0},ui:{default:()=>({})},class:{default:void 0}},setup(p){const g=v(),m={wrapper:"block pl-4 pr-6 py-3 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm/6 my-5 last:mb-0 font-normal group relative prose-code:bg-white dark:prose-code:bg-gray-900",to:"hover:border-[--color-light] dark:hover:border-[--color-dark] hover:text-[--color-light] dark:hover:text-[--color-dark] border-dashed hover:border-solid hover:text-gray-800 dark:hover:text-gray-200",icon:{base:"w-4 h-4 mr-2 inline-flex items-center align-sub text-[--color-light] dark:text-[--color-dark]"},externalIcon:{name:g.ui.icons.external,base:"w-4 h-4 absolute right-2 top-2 text-gray-400 dark:text-gray-500 group-hover:text-[--color-light] dark:group-hover:text-[--color-dark]"}},o=p,{ui:t,attrs:f}=x("content.callout",c(o,"ui"),m,c(o,"class")),b=i(()=>{var r;return o.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((r=d[o.color])==null?void 0:r["500"])||o.color}),h=i(()=>{var r;return o.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((r=d[o.color])==null?void 0:r["400"])||o.color});return(r,U)=>{const k=A,l=B;return a(),_("div",C({class:[e(t).wrapper,r.to&&e(t).to]},e(f),{style:{"--color-light":e(b),"--color-dark":e(h)}}),[r.to?(a(),n(k,{key:0,to:r.to,target:r.target,class:"focus:outline-none",tabindex:"-1"},{default:w(()=>[L]),_:1},8,["to","target"])):s("",!0),r.icon?(a(),n(l,{key:1,name:r.icon,class:u(e(t).icon.base)},null,8,["name","class"])):s("",!0),r.to&&r.target==="_blank"?(a(),n(l,{key:2,name:e(t).externalIcon.name,class:u(e(t).externalIcon.base)},null,8,["name","class"])):s("",!0),E(r.$slots,"default",{unwrap:"p"})],16)}}});export{F as default};
