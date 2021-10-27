import{_ as n,c as s,o as a,a as p}from"./app.18ab0afe.js";const m='{"title":"\u8BA2\u9605\u53D8\u66F4","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8BA2\u9605","slug":"\u8BA2\u9605"},{"level":2,"title":"\u6279\u91CF\u8BA2\u9605","slug":"\u6279\u91CF\u8BA2\u9605"},{"level":2,"title":"\u81EA\u52A8\u8BA2\u9605","slug":"\u81EA\u52A8\u8BA2\u9605"},{"level":2,"title":"\u5168\u5C40\u81EA\u52A8\u8BA2\u9605","slug":"\u5168\u5C40\u81EA\u52A8\u8BA2\u9605"},{"level":2,"title":"\u8BA2\u9605\u6A21\u578B","slug":"\u8BA2\u9605\u6A21\u578B"},{"level":2,"title":"\u9000\u8BA2","slug":"\u9000\u8BA2"},{"level":2,"title":"\u81EA\u52A8\u9000\u8BA2","slug":"\u81EA\u52A8\u9000\u8BA2"},{"level":3,"title":"Vue3","slug":"vue3"},{"level":3,"title":"React","slug":"react"},{"level":3,"title":"\u5FFD\u7565\u81EA\u52A8\u9000\u8BA2","slug":"\u5FFD\u7565\u81EA\u52A8\u9000\u8BA2"}],"relativePath":"docs/subscribe/index.md","lastUpdated":1635162757659}',t={},e=p(`<h1 id="\u8BA2\u9605\u53D8\u66F4" tabindex="-1">\u8BA2\u9605\u53D8\u66F4 <a class="header-anchor" href="#\u8BA2\u9605\u53D8\u66F4" aria-hidden="true">#</a></h1><h2 id="\u8BA2\u9605" tabindex="-1">\u8BA2\u9605 <a class="header-anchor" href="#\u8BA2\u9605" aria-hidden="true">#</a></h2><p>Kurimudb \u4E2D\uFF0C<code>$</code> \u7B26\u53F7\u4EE3\u8868 <code>subscribe</code> \u7684\u7B80\u5199\u3002\u4F60\u53EF\u4EE5\u5728\u4E00\u4E2A\u503C\u540E\u52A0\u4E0A <code>$</code> \u7B26\u53F7\u6765\u8BA2\u9605\u5B83\u7684\u53D8\u66F4\uFF1A</p><div class="language-js line-numbers-mode"><pre><code>configState<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">foo$</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u95ED\u5305\u51FD\u6570\u4F1A\u7ACB\u5373\u6267\u884C\u4E00\u6B21\uFF0C\u65B9\u4FBF\u4F60\u4E3A\u4F60\u89C6\u56FE\u4E2D\u7684\u54CD\u5E94\u5F0F\u53D8\u91CF\u8D4B\u521D\u59CB\u503C\u3002\u5982\u679C\u4F60\u4E0D\u5E0C\u671B\u8FD9\u4E48\u505A\uFF0C\u800C\u662F\u53EA\u5728\u540E\u7EED\u503C\u53D8\u66F4\u65F6\u6267\u884C\uFF0C\u90A3\u4E48\u5982\u4E0B\u5373\u53EF\uFF1A</p><div class="language-js line-numbers-mode"><div class="highlight-lines"><br><br><br><br><div class="highlighted">\xA0</div><br><br></div><pre><code>configState<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">foo$</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> immediate<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528<a href="/docs/model/#\u7C7B-storage-api">\u7C7B Storage Api</a> \u7684\u5F62\u5F0F\u8FDB\u884C\u8BA2\u9605\uFF1A</p><div class="language-js line-numbers-mode"><pre><code>configState<span class="token punctuation">.</span><span class="token function">subscribeItem</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> closFunc<span class="token punctuation">,</span> config<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u6279\u91CF\u8BA2\u9605" tabindex="-1">\u6279\u91CF\u8BA2\u9605 <a class="header-anchor" href="#\u6279\u91CF\u8BA2\u9605" aria-hidden="true">#</a></h2><p>\u5982\u679C\u4F60\u60F3\u4E00\u6B21\u8BA2\u9605\u591A\u4E2A\u503C\u7684\u53D8\u66F4\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>batch$</code> \u51FD\u6570\uFF1A</p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> batch$ <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;kurimudb&#39;</span><span class="token punctuation">;</span>

<span class="token function">batch$</span><span class="token punctuation">(</span><span class="token punctuation">[</span>configState<span class="token punctuation">.</span>data<span class="token punctuation">.</span>foo$<span class="token punctuation">,</span> configState<span class="token punctuation">.</span>data<span class="token punctuation">.</span>bar$<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u81EA\u52A8\u8BA2\u9605" tabindex="-1">\u81EA\u52A8\u8BA2\u9605 <a class="header-anchor" href="#\u81EA\u52A8\u8BA2\u9605" aria-hidden="true">#</a></h2><p>\u624B\u52A8\u58F0\u660E\u8981\u8BA2\u9605\u7684\u503C\u53EF\u80FD\u4F1A\u6709\u4E9B\u7E41\u7410\uFF0C\u6211\u4EEC\u8FD8\u63D0\u4F9B\u4E86\u4E00\u79CD\u4FBF\u6377\u7684\u65B9\u5F0F\u3002\u5F53\u4F60\u5728\u95ED\u5305\u4E2D\u6240\u4F7F\u7528\u7684\u503C\u6709\u4EFB\u4E00\u88AB\u66F4\u6539\u65F6\uFF0C\u90FD\u4F1A\u89E6\u53D1\u4E00\u6B21\u8BA2\u9605\uFF1A</p><div class="language-js line-numbers-mode"><pre><code>configState<span class="token punctuation">.</span><span class="token function">auto$</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>configState<span class="token punctuation">.</span>data<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>configState<span class="token punctuation">.</span>data<span class="token punctuation">.</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5728\u95ED\u5305\u51FD\u6570\u7684\u9996\u6B21\u6267\u884C\u8FC7\u7A0B\u65F6\uFF0CKurimudb \u4F1A\u6536\u96C6\u5176\u4E2D\u54EA\u4E9B\u503C\u88AB\u8BFB\u53D6\uFF0C\u968F\u540E\u8BA2\u9605\u5B83\u4EEC\uFF0C\u56E0\u6B64\uFF0C\u95ED\u5305\u51FD\u6570<strong>\u5FC5\u987B\u662F\u540C\u6B65\u7684</strong>\u3002</p><h2 id="\u5168\u5C40\u81EA\u52A8\u8BA2\u9605" tabindex="-1">\u5168\u5C40\u81EA\u52A8\u8BA2\u9605 <a class="header-anchor" href="#\u5168\u5C40\u81EA\u52A8\u8BA2\u9605" aria-hidden="true">#</a></h2><p>\u524D\u6587\u81EA\u52A8\u8BA2\u9605\u529F\u80FD\u7684\u8303\u56F4\u662F\u4F60\u7684\u6A21\u578B\uFF0C\u5982\u679C\u4F60\u5728\u5176\u4E2D\u8BFB\u53D6\u4E86\u5916\u90E8\u6A21\u578B\u7684\u6570\u636E\uFF0C\u662F\u4E0D\u4F1A\u88AB\u8BA2\u9605\u7684\u3002\u5982\u679C\u4F60\u60F3\u81EA\u52A8\u8BA2\u9605\u4EFB\u4E00\u6A21\u578B\u7684\u6570\u636E\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u5168\u5C40\u81EA\u52A8\u8BA2\u9605\uFF1A</p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> auto$ <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;kurimudb&#39;</span><span class="token punctuation">;</span>

<span class="token function">auto$</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fooState<span class="token punctuation">.</span>data<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>barState<span class="token punctuation">.</span>data<span class="token punctuation">.</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">\u6CE8\u610F\u4E8B\u9879</p><p>\u548C\u81EA\u52A8\u8BA2\u9605\u529F\u80FD\u4E0D\u540C\uFF0C\u7531\u4E8E JavaScript \u7684\u9650\u5236\uFF0C\u5168\u5C40\u81EA\u52A8\u8BA2\u9605\u529F\u80FD\u4E0D\u9002\u7528\u4E8E<strong>\u5F02\u6B65\u6A21\u578B</strong>\u3002\u6211\u4EEC\u60F3\u5230\u4E86\u4E00\u79CD\u53D8\u901A\u7684\u65B9\u5F0F\uFF0C\u6765\u5B9E\u73B0\u652F\u6301\u5F02\u6B65\u6A21\u578B\u7684\u5168\u5C40\u81EA\u52A8\u8BA2\u9605\u529F\u80FD\uFF0C\u4F46\u662F\u6B64\u529F\u80FD\u8FD8\u5728\u5F00\u53D1\u4E2D\u3002</p></div><h2 id="\u8BA2\u9605\u6A21\u578B" tabindex="-1">\u8BA2\u9605\u6A21\u578B <a class="header-anchor" href="#\u8BA2\u9605\u6A21\u578B" aria-hidden="true">#</a></h2><p>\u4F60\u8FD8\u53EF\u4EE5\u8BA2\u9605\u6574\u4E2A\u6A21\u578B\u7684\u53D8\u66F4\uFF0C\u5F53\u6A21\u578B\u4E2D\u6709\u4EFB\u4E00\u503C\u53D8\u66F4\u65F6\uFF0C\u95ED\u5305\u51FD\u6570\u90FD\u4F1A\u89E6\u53D1\u3002</p><p>\u8FD9\u901A\u5E38\u7528\u4E8E\u4F60\u4E0D\u77E5\u9053\u8981\u8BA2\u9605\u7684\u662F\u54EA\u4E2A\u503C\u7684\u573A\u666F\uFF0C\u5982<strong>\u96C6\u5408\u6A21\u578B</strong>\u4E0A\u3002\u4E00\u4E2A\u5E38\u89C1\u7684\u4F8B\u5B50\uFF1A\u5B58\u50A8\u8349\u7A3F\u7684\u96C6\u5408\u6A21\u578B\uFF0C\u89C6\u56FE\u9700\u8981\u5728\u7528\u6237\u4FDD\u5B58/\u65B0\u589E/\u5220\u9664\u8349\u7A3F\u65F6\u5373\u65F6\u53D8\u5316\uFF0C\u8FD9\u65F6\u5C31\u6D3E\u4E0A\u7528\u573A\u5566\u3002</p><p>\u60F3\u8981\u8BA2\u9605\u6A21\u578B\u7684\u53D8\u66F4\uFF0C\u53EA\u9700\u8981\u8C03\u7528 <code>yourModel.$</code> \u51FD\u6570\u5373\u53EF\uFF1A</p><div class="language-js line-numbers-mode"><div class="highlight-lines"><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><br><br><br><br></div><pre><code>ref<span class="token operator">:</span> currentDraftData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

draftList<span class="token punctuation">.</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  currentDraftData <span class="token operator">=</span> draftList<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// in view..</span>

draftList<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ..</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u9000\u8BA2" tabindex="-1">\u9000\u8BA2 <a class="header-anchor" href="#\u9000\u8BA2" aria-hidden="true">#</a></h2><p>\u5F53\u4F60\u6267\u884C\u4E86\u8BA2\u9605\u51FD\u6570\u540E\uFF0C\u8FD4\u56DE\u503C\u5C06\u662F\u4E00\u4E2A\u9000\u8BA2\u51FD\u6570\uFF0C\u6267\u884C\u5B83\uFF0C\u4F1A\u5C06\u6B64\u8BA2\u9605\u9000\u8BA2\uFF1A</p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">const</span> unsubscribe <span class="token operator">=</span> configState<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">foo$</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// ..</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u9000\u8BA2</span>
<span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u81EA\u52A8\u9000\u8BA2" tabindex="-1">\u81EA\u52A8\u9000\u8BA2 <a class="header-anchor" href="#\u81EA\u52A8\u9000\u8BA2" aria-hidden="true">#</a></h2><p>\u5982\u679C\u4F60\u6B63\u5728\u4F7F\u7528 Vue/React \u7B49\u6846\u67B6\uFF0C\u4F60\u53EF\u80FD\u4F1A\u5E0C\u671B\uFF0C\u5728\u7EC4\u4EF6\u88AB\u9500\u6BC1\u65F6\uFF0C\u81EA\u52A8\u9000\u8BA2\u6B64\u7EC4\u4EF6\u4E2D\u4EA7\u751F\u7684\u6240\u6709\u8BA2\u9605\u3002</p><p>\u4F60\u53EF\u4EE5\u5411 <code>kurimudbConfig.autoUnsubscribe</code> \u4E0A\u6302\u8F7D\u4E00\u4E2A\u51FD\u6570\uFF0C\u6B64\u51FD\u6570\u4F1A\u5728\u6BCF\u6B21\u6267\u884C\u8BA2\u9605\u51FD\u6570\u65F6\u6267\u884C\uFF0C\u4F60\u53EF\u4EE5\u5229\u7528\u5B83\u7ED3\u5408\u6240\u4F7F\u7528\u6846\u67B6\u7684\u751F\u547D\u5468\u671F Api\uFF0C\u6765\u5B9E\u73B0\u81EA\u52A8\u9000\u8BA2\u3002</p><h3 id="vue3" tabindex="-1">Vue3 <a class="header-anchor" href="#vue3" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> onBeforeUnmount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> kurimudbConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;kurimudb&#39;</span><span class="token punctuation">;</span>

kurimudbConfig<span class="token punctuation">.</span><span class="token function-variable function">autoUnsubscribe</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">unsubscribe</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">onBeforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="react" tabindex="-1">React <a class="header-anchor" href="#react" aria-hidden="true">#</a></h3><p>\u5F85\u7EED \u{1F438}</p><h3 id="\u5FFD\u7565\u81EA\u52A8\u9000\u8BA2" tabindex="-1">\u5FFD\u7565\u81EA\u52A8\u9000\u8BA2 <a class="header-anchor" href="#\u5FFD\u7565\u81EA\u52A8\u9000\u8BA2" aria-hidden="true">#</a></h3><p>\u5982\u679C\u4F60\u4F7F\u7528\u4E86\u81EA\u52A8\u9000\u8BA2\u529F\u80FD\uFF0C\u5374\u53C8\u4E0D\u5E0C\u671B\u90E8\u5206\u573A\u666F\u4E0B\u81EA\u52A8\u9000\u8BA2\uFF0C\u5982\u4E0B\u5373\u53EF\uFF1A</p><div class="language-js line-numbers-mode"><div class="highlight-lines"><br><br><br><br><div class="highlighted">\xA0</div><br><br></div><pre><code>configState<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">foo$</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> autoUnsubscribe<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,37),o=[e];function c(u,l,i,r,k,d){return a(),s("div",null,o)}var h=n(t,[["render",c]]);export{m as __pageData,h as default};