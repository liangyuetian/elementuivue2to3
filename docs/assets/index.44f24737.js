import{C as t,V as e}from"./vendor.d6aee48f.js";import{a as s}from"./tasks.5e0783c3.js";import{n as a}from"./index.5ef69292.js";var l=Object.defineProperty,i=Object.getOwnPropertyDescriptor;let r=class extends e{constructor(){super(...arguments),this.list=[],this.listLoading=!0,this.listQuery={page:1,limit:20}}created(){this.getList()}async getList(){this.listLoading=!0,await s(this.listQuery).then((t=>{t&&t.data.list&&(this.list=t.data.list)})).finally((()=>{this.listLoading=!1}))}};r=((t,e,s,a)=>{for(var r,n=a>1?void 0:a?i(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(a?r(e,s,n):r(n))||n);return a&&n&&l(e,s,n),n})([t({name:"Table",filters:{statusFilter:t=>({published:"success",draft:"gray",deleted:"danger"}[t]),parseTime:t=>{}}})],r);const n={};var o=a(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-router"},[s("h3",{staticClass:"page-title"},[t._v("人像库：")]),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[s("el-table-column",{attrs:{align:"center",label:"TaskId",width:"295"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.task_id)+" ")]}}])}),s("el-table-column",{attrs:{label:"TaskName"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.title)+" ")]}}])}),s("el-table-column",{attrs:{"class-name":"status-col",label:"Status",width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-switch",{model:{value:e.row.status,callback:function(s){t.$set(e.row,"status",s)},expression:"scope.row.status"}})]}}])}),s("el-table-column",{attrs:{align:"center",prop:"created_at",label:"Created at",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("i",{staticClass:"el-icon-time"}),s("span",[t._v(t._s(e.row.timestamp))])]}}])})],1)],1)}),[],!1,(function(t){for(let e in n)this[e]=n[e]}),null,null,null);o.options.__file="src/views/task/index.vue";var c=o.exports;export default c;
