(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{JTHd:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("Wbzz"),r=function(){return Object(a.useStaticQuery)("2928712368").settingsJson.authors}},Jmu9:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var a=n("JTHd"),r=function(e){var t=e.authorIDs,n=Object(a.a)().filter((function(e){return t.find((function(t){return t===e.id}))}));return n.map((function(e,t){return n.length===t+1?e.name:e.name+", "}))},o={label:"Authors",fields:[{label:"Authors",name:"rawJson.authors",component:"group-list",itemProps:function(e){return{key:e.id,label:e.name}},defaultItem:function(){return{name:"New Author",id:Math.random().toString(36).substr(2,9),email:"",link:""}},fields:[{label:"Name",name:"name",component:"text",parse:function(e){return e||""}},{label:"Email",name:"email",component:"text",parse:function(e){return e||""}},{label:"Link",name:"link",component:"text",parse:function(e){return e||""}}]}]}},wznA:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s})),n.d(t,"ListNav",(function(){return d}));var a=n("q1tI"),r=n.n(a),o=n("vOnD"),l=n("7heW"),i=n("S8eP"),m=n("Jmu9"),u=n("Wbzz"),c=n("0qiq");function s(e){var t=e.data,n=e.pageContext,a=Object(l.useLocalJsonForm)(t.page,p)[0],o=(Object(l.useLocalJsonForm)(t.authors,m.a)[0],n.slug),s=(n.limit,n.skip,n.numPages),f=n.currentPage,g=1===f,b=f===s,h=f-1==1?o:o+"/"+(f-1).toString(),k=o+"/"+(f+1).toString();return a.title=g?a.title:a.title+" - "+f,r.a.createElement(c.a,{page:a},r.a.createElement(r.a.Fragment,null,t.posts&&t.posts.edges.map((function(e){return r.a.createElement(i.k,{article:!0,key:e.node.id},e.node.frontmatter.draft&&r.a.createElement(i.b,null,"Draft"),r.a.createElement("h2",null,r.a.createElement(u.Link,{to:e.node.frontmatter.path},e.node.frontmatter.title)),r.a.createElement("p",null,e.node.excerpt),r.a.createElement(i.g,null,r.a.createElement(i.i,null,e.node.frontmatter.date),e.node.frontmatter.authors&&r.a.createElement(i.i,null,r.a.createElement("em",null,"By")," ",r.a.createElement(m.b,{authorIDs:e.node.frontmatter.authors})),r.a.createElement(i.h,null,r.a.createElement(u.Link,{to:e.node.frontmatter.path},"Read Article →"))))})),r.a.createElement(d,null,!g&&r.a.createElement(u.Link,{to:h,rel:"prev"},"← Newer"),!b&&r.a.createElement(u.Link,{to:k,rel:"next"},"Older →"))))}var d=o.default.div.withConfig({displayName:"list__ListNav",componentId:"sc-1lfoa4f-0"})(["display:flex;width:100%;justify-content:center;a{display:inline-block;padding:0.5rem 1rem;}"]),p={label:"Page",fields:[{label:"Title",name:"rawJson.title",component:"text"},{label:"Hero",name:"rawJson.hero",component:"group",fields:[{label:"Headline",name:"headline",component:"text"},{label:"Textline",name:"textline",component:"text"},{label:"Image",name:"image",component:"image",parse:function(e){return"../images/"+e},uploadDir:function(){return"/content/images/"},previewSrc:function(e){return e.jsonNode.hero&&e.jsonNode.hero.image?e.jsonNode.hero.image.childImageSharp.fluid.src:""}},{label:"Actions",name:"ctas",component:"group-list",itemProps:function(e){return{key:e.link,label:e.label}},fields:[{label:"Label",name:"label",component:"text"},{label:"Link",name:"link",component:"text"},{label:"Primary",name:"primary",component:"toggle"},{label:"Arrow",name:"arrow",component:"toggle"}]},{label:"Large",name:"large",component:"toggle"}]}]}}}]);
//# sourceMappingURL=component---src-templates-list-js-5e28920e921e11c0e28b.js.map