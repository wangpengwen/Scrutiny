!function(){var e=window.__fuse=window.__fuse||{},n=e.modules=e.modules||{};e.dt=function(e){return e&&e.__esModule?e:{default:e}},e.bundle=function(e,r){for(var o in e)n[o]=e[o];r&&r()},e.c={},e.r=function(r){var o=e.c[r];if(o)return o.m.exports;var t=n[r];if(!t)throw new Error("Module "+r+" was not found");return(o=e.c[r]={}).exports={},o.m={exports:o.exports},t(e.r,o.exports,o.m),o.m.exports}}(),__fuse.bundle({1:function(e,n,r){n.__esModule=!0;var o=e(2);const t=o.Graph,d=o.Renderer.Raphael,u=o.Layout.Spring,i=new t;for(const e of window.graphEdges){const[n,r]=e;i.addEdge(n,r,{directed:!0})}new u(i);new d("#paper",i,window.innerWidth/2,window.innerHeight/2).draw()}});
//# sourceMappingURL=app.606e7f97.js.map