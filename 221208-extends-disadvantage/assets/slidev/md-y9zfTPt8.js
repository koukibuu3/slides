import{d as p,f as m,o as x,g as t,j as i,n as a,b as u,w as n,ac as r,v as f,x as g,C as c}from"../modules/vue-oCnVYpiE.js";import{u as v,f as w}from"./context-D-1t8Wkt.js";import"../index-CRhX2Eh5.js";import"../modules/shiki-4wX0T6ml.js";const y=p({__name:"two-cols",props:{class:{type:String},layoutClass:{type:String}},setup(o){const e=o;return(s,d)=>(x(),m("div",{class:a(["slidev-layout two-columns w-full h-full grid grid-cols-2",e.layoutClass])},[t("div",{class:a(["col-left",e.class])},[i(s.$slots,"default")],2),t("div",{class:a(["col-right",e.class])},[i(s.$slots,"right")],2)],2))}}),k={__name:"slides.md__slidev_2",setup(o){const{$clicksContext:e,$frontmatter:s}=v();return e.setup(),(d,l)=>(x(),u(y,f(g(c(w)(c(s),1))),{right:n(_=>l[0]||(l[0]=[t("div",{class:"p-8 bg-green-700"},[t("div",{class:"text-6xl text-white text-center my-8",style:{"font-weight":"600"}}," 密結合 "),t("div",{class:"text-2xl text-white text-center my-4"}," 構成要素間の結びつきや互いの依存関係が強く、各々の独立性が低い状態のこと。 "),t("div",{class:"text-2xl text-white text-center my-4"},[t("span",{class:"underline"},"各要素が互いに深く結びついているため、一部分の変更が他の要素に及ぼす度合いが大きい。"),t("br"),r("障害が起こりやすい状態。 ")])],-1)])),default:n(()=>[l[1]||(l[1]=t("div",{class:"p-8 bg-green-700"},[t("div",{class:"text-6xl text-white text-center my-8",style:{"font-weight":"600"}}," 疎結合 "),t("div",{class:"text-2xl text-white text-center my-4"}," 構成要素間の結びつきや互いの依存関係が弱く、各々の独立性が高い状態のこと。 "),t("div",{class:"text-2xl text-white text-center my-4"},[r(" 一部の修正が他の要素に及ぼす度合いが小さいため、拡張性や可読性に優れる。"),t("br"),r("障害が起こりにくい状態。 ")])],-1))]),_:1},16))}};export{k as default};
