(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1820aa3a"],{1:function(e,a){},2:function(e,a){},3:function(e,a){},"67df":function(e,a,t){"use strict";var n=t("8ba6"),r=t.n(n);r.a},"8ba6":function(e,a,t){},a137:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"app-container"},[t("upload-excel-component",{attrs:{"on-success":e.handleSuccess,"before-upload":e.beforeUpload}}),e._v(" "),t("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.tableData,border:"","highlight-current-row":""}},e._l(e.tableHeader,function(e){return t("el-table-column",{key:e,attrs:{prop:e,label:e}})}),1)],1)},r=[],l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("input",{ref:"excel-upload-input",staticClass:"excel-upload-input",attrs:{type:"file",accept:".xlsx, .xls"},on:{change:e.handleClick}}),e._v(" "),t("div",{staticClass:"drop",on:{drop:e.handleDrop,dragover:e.handleDragover,dragenter:e.handleDragover}},[e._v("\n    Drop excel file here or\n    "),t("el-button",{staticStyle:{"margin-left":"16px"},attrs:{loading:e.loading,size:"mini",type:"primary"},on:{click:e.handleUpload}},[e._v("\n      Browse\n    ")])],1)])},s=[],o=(t("7f7f"),t("1146")),i=t.n(o),u={props:{beforeUpload:Function,onSuccess:Function},data:function(){return{loading:!1,excelData:{header:null,results:null}}},methods:{generateData:function(e){var a=e.header,t=e.results;this.excelData.header=a,this.excelData.results=t,this.onSuccess&&this.onSuccess(this.excelData)},handleDrop:function(e){if(e.stopPropagation(),e.preventDefault(),!this.loading){var a=e.dataTransfer.files;if(1===a.length){var t=a[0];if(!this.isExcel(t))return this.$message.error("Only supports upload .xlsx, .xls, .csv suffix files"),!1;this.upload(t),e.stopPropagation(),e.preventDefault()}else this.$message.error("Only support uploading one file!")}},handleDragover:function(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"},handleUpload:function(){this.$refs["excel-upload-input"].click()},handleClick:function(e){var a=e.target.files,t=a[0];t&&this.upload(t)},upload:function(e){if(this.$refs["excel-upload-input"].value=null,this.beforeUpload){var a=this.beforeUpload(e);a&&this.readerData(e)}else this.readerData(e)},readerData:function(e){var a=this;return this.loading=!0,new Promise(function(t,n){var r=new FileReader;r.onload=function(e){var n=e.target.result,r=i.a.read(n,{type:"array"}),l=r.SheetNames[0],s=r.Sheets[l],o=a.getHeaderRow(s),u=i.a.utils.sheet_to_json(s);a.generateData({header:o,results:u}),a.loading=!1,t()},r.readAsArrayBuffer(e)})},getHeaderRow:function(e){var a,t=[],n=i.a.utils.decode_range(e["!ref"]),r=n.s.r;for(a=n.s.c;a<=n.e.c;++a){var l=e[i.a.utils.encode_cell({c:a,r:r})],s="UNKNOWN "+a;l&&l.t&&(s=i.a.utils.format_cell(l)),t.push(s)}return t},isExcel:function(e){return/\.(xlsx|xls|csv)$/.test(e.name)}}},c=u,d=(t("67df"),t("2877")),p=Object(d["a"])(c,l,s,!1,null,"d2407dd6",null),f=p.exports,h={name:"UploadExcel",components:{UploadExcelComponent:f},data:function(){return{tableData:[],tableHeader:[]}},methods:{beforeUpload:function(e){var a=e.size/1024/1024<1;return!!a||(this.$message({message:"Please do not upload files larger than 1m in size.",type:"warning"}),!1)},handleSuccess:function(e){var a=e.results,t=e.header;this.tableData=a,this.tableHeader=t}}},g=h,v=Object(d["a"])(g,n,r,!1,null,null,null);a["default"]=v.exports}}]);