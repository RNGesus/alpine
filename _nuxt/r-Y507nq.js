import{d as s,ap as i,am as f,z as n,R as d,aq as x,ar as L}from"./BX6cOqEo.js";const a=i({...L,componentName:"NuxtLinkLocale"}),h=s({name:"NuxtLinkLocale",props:{...a.props,locale:{type:String,default:void 0,required:!1}},setup(t,{slots:o}){const l=f(),r=n(()=>{const e=t.to??t.href;return e!=null?l(e,t.locale):e}),u=n(()=>{if(t.external||t.target&&t.target!=="_self")return!0;const e=t.to??t.href;return typeof e=="object"?!1:e===""||e==null||x(e,{acceptRelative:!0})}),c=()=>{const e={...t};return u.value||(e.to=r.value),delete e.href,delete e.locale,e};return()=>d(a,c(),o.default)}});export{h as _};
