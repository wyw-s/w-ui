
// const hljs = require('highlight.js')
// const {
//   stripScript,
//   stripTemplate,
//   genInlineComponentText
// } = require('./util');
// const md = require('./config');
//
// // const md = require('markdown-it')({
// //   highlight: function (str, lang) {
// //     if (lang && hljs.getLanguage(lang)) {
// //       try {
// //         // 得到经过highlight.js之后的html代码
// //         const preCode = hljs.highlight(lang, str, true).value
// //         // 以换行进行分割
// //         const lines = preCode.split(/\n/).slice(0, -1)
// //         // 添加自定义行号
// //         let html = lines.map((item, index) => {
// //           return '<li><span class="line-num" data-line="' + (index + 1) + '"></span>' + item + '</li>'
// //         }).join('')
// //         html = '<ol>' + html + '</ol>'
// //         // 添加代码语言
// //         if (lines.length) {
// //           html += '<b class="name">' + lang + '</b>'
// //         }
// //         return '<pre class="hljs"><code class="wyw">' + html + '</code></pre>'
// //       } catch (__) {}
// //     }
// //     // 未添加代码语言，此处与上面同理
// //     const preCode = md.utils.escapeHtml(str)
// //     const lines = preCode.split(/\n/).slice(0, -1)
// //     let html = lines.map((item, index) => {
// //       return '<li><span class="line-num" data-line="' + (index + 1) + '"></span>' + item + '</li>'
// //     }).join('')
// //     html = '<ol>' + html + '</ol>'
// //     return '<pre class="hljs"><code class="wyw">' + html + '</code></pre>'
// //     }
// // })
//
// module.exports = function(source, e) {
//   console.log(source, e, '-----------')
//   const content = md.render(source);
//   return `<template><section class="markdown-body">${content}</section></template>`;
// };


const {
  stripScript,
  stripTemplate,
  genInlineComponentText
} = require('./util');
const md = require('./config');

module.exports = function(source) {
  const content = md.render(source);

  const startTag = '<!--element-demo:';
  const startTagLen = startTag.length;
  const endTag = ':element-demo-->';
  const endTagLen = endTag.length;

  let componenetsString = '';
  let id = 0; // demo 的 id
  let output = []; // 输出的内容
  let start = 0; // 字符串开始位置

  let commentStart = content.indexOf(startTag);
  let commentEnd = content.indexOf(endTag, commentStart + startTagLen);
  while (commentStart !== -1 && commentEnd !== -1) {
    output.push(content.slice(start, commentStart));

    const commentContent = content.slice(commentStart + startTagLen, commentEnd);
    const html = stripTemplate(commentContent);
    const script = stripScript(commentContent);
    let demoComponentContent = genInlineComponentText(html, script);
    const demoComponentName = `element-demo${id}`;
    output.push(`<template slot="source"><${demoComponentName} /></template>`);
    componenetsString += `${JSON.stringify(demoComponentName)}: ${demoComponentContent},`;

    // 重新计算下一次的位置
    id++;
    start = commentEnd + endTagLen;
    commentStart = content.indexOf(startTag, start);
    commentEnd = content.indexOf(endTag, commentStart + startTagLen);
  }

  // 仅允许在 demo 不存在时，才可以在 Markdown 中写 script 标签
  // todo: 优化这段逻辑
  let pageScript = '';
  if (componenetsString) {
    pageScript = `<script>
      export default {
        name: 'component-doc',
        components: {
          ${componenetsString}
        }
      }
    </script>`;
  } else if (content.indexOf('<script>') === 0) { // 硬编码，有待改善
    start = content.indexOf('</script>') + '</script>'.length;
    pageScript = content.slice(0, start);
  }

  output.push(content.slice(start));
  return `
    <template>
      <section class="content element-doc">
        ${output.join('')}
      </section>
    </template>
    ${pageScript}
  `;
};
