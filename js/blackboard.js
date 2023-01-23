// const { createApp, ref } = Vue;
// const app = createApp({
//   setup() {
//     const showContent = ref(false);

//     const openModal = () => {
//       console.log("click");
//       showContent.value = true;
//     };

//     const closeModal = () => {
//       showContent.value = false;
//     };

//     return {
//       showContent,
//       openModal,
//       closeModal,
//     };
//   },
// });

// app.component("open-modal", {
//   template: `
//           <div id="overlay" v-on:click="clickEvent">
//               <div id="content" v-on:click="stopEvent">
//                 <p><slot></slot></p>
//                 <button v-on:click="clickEvent">close</button>
//               </div>
//           </div>
//           `,
//   setup(props, context) {
//     const clickEvent = () => {
//       context.emit("from-child");
//     };
//     const stopEvent = (e) => {
//       event.stopPropagation();
//     };
//     return {
//       clickEvent,
//       stopEvent,
//     };
//   },
// });

// app.mount("#app");
// Vue.createApp({
//   data() {
//     return {
//       editor: ClassicEditor,
//       // editorData: "<p>Content of the editor.</p>",
//       editorConfig: {
//         // The configuration of the editor.
//       },
//     };
//   },
// })
//   .use(CKEditor)
//   .mount("#app");
CKEDITOR.replace("editor", {
  //    uiColor: '#EEEEEE',
  //    width:800,
  //    height: 200,
});
// const Vue = require("vue");
// const CKEditor = require("ckeditor4-vue/dist/legacy.js");
// Vue.use(CKEditor);

// export default {
//   props: {},
//   data() {
//     return {
//       editorUrl: "//cdn.ckeditor.com/4.15.0/full/ckeditor.js",
//       editorConfig: {
//         language: "ja",
//         height: "380px",
//       },
//     };
//   },
// };
