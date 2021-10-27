import{_ as n,c as s,o as a,a as e}from"./app.18ab0afe.js";const m='{"title":"Dexie","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u7248\u672C\u63A7\u5236","slug":"\u7248\u672C\u63A7\u5236"},{"level":2,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B"},{"level":2,"title":"\u67E5\u8BE2\u6784\u9020\u5668","slug":"\u67E5\u8BE2\u6784\u9020\u5668"},{"level":2,"title":"\u7ED3\u679C\u5C01\u88C5","slug":"\u7ED3\u679C\u5C01\u88C5"},{"level":2,"title":"all","slug":"all"},{"level":2,"title":"getLength","slug":"getlength"},{"level":2,"title":"\u6DF1\u5165\u4E86\u89E3 Dexie.js","slug":"\u6DF1\u5165\u4E86\u89E3-dexie-js"}],"relativePath":"drivers/dexie.md","lastUpdated":1635327656214}',p={},t=e(`<h1 id="dexie" tabindex="-1">Dexie <a class="header-anchor" href="#dexie" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u6CE8\u610F\u4E8B\u9879</p><p><a href="https://dexie.org/" target="_blank" rel="noopener noreferrer">Dexie.js</a> \u662F\u4E00\u4E2A\u4F18\u96C5\u7684\u3001\u94FE\u5F0F\u8BED\u6CD5\u7684 IndexedDB \u7684\u5305\u88C5\u5668\uFF0CGithub \u4E0A\u641C\u7D22 IndexedDB\uFF0C\u5B83\u5728\u7ED3\u679C\u4E2D\u6392\u540D\u7B2C\u4E00\u3002</p><p>IndexedDB \u662F Web \u6570\u636E\u5E93\uFF0C\u5B83\u7684\u5BB9\u91CF\u548C<a href="https://web.dev/storage-for-the-web/#how-much" target="_blank" rel="noopener noreferrer">\u7528\u6237\u786C\u76D8\u5927\u5C0F\u6709\u5173</a>\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5B58\u50A8\u90E8\u5206 JavaScript \u5BF9\u8C61\u3002\u6CE8\u610F\uFF0C\u548C LocalStorage \u4E0D\u540C\u7684\u662F\uFF0C <strong>IndexedDB \u662F\u5F02\u6B65\u7684\u3002</strong></p></div><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-bash line-numbers-mode"><pre><code><span class="token comment"># \u5B89\u88C5 Dexie \u672C\u4F53</span>
<span class="token function">npm</span> i dexie@3
<span class="token comment"># \u5B89\u88C5 Kurimudb \u7684 Dexie \u9A71\u52A8</span>
<span class="token function">npm</span> i kurimudb-driver-dexie@5
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u7248\u672C\u63A7\u5236" tabindex="-1">\u7248\u672C\u63A7\u5236 <a class="header-anchor" href="#\u7248\u672C\u63A7\u5236" aria-hidden="true">#</a></h2><p>Dexie \u9A71\u52A8\u5728\u4F7F\u7528\u524D\uFF0C\u9700\u8981\u5148\u58F0\u660E\u6570\u636E\u5E93\u7684\u7248\u672C\uFF0C\u63A8\u8350\u9605\u8BFB <a href="https://dexie.org/docs/Tutorial/Design#database-versioning" target="_blank" rel="noopener noreferrer">Dexie \u5B98\u65B9\u6587\u6863</a>\uFF0C\u4E0B\u65B9\u662F\u7ED3\u5408 Kurimudb \u4F7F\u7528\u7684\u4E00\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// \u521B\u5EFA\u4E00\u4E2A /models/migrations/index.js \u6587\u4EF6</span>

<span class="token keyword">import</span> Dexie <span class="token keyword">from</span> <span class="token string">&quot;dexie&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> db <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dexie</span><span class="token punctuation">(</span><span class="token string">&quot;kurimudb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

db<span class="token punctuation">.</span><span class="token function">version</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">stores</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// \u4E00\u4E2A\u8868\u5BF9\u5E94\u4E00\u4E2A\u6A21\u578B\uFF0C\u9700\u548C Kurimudb \u4E2D\u7684\u6A21\u578B\u540D\u4E00\u81F4\u3002</span>
  IndexedDbState<span class="token operator">:</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// ++id \u4EE3\u8868\u4E3B\u952E\u662F\u81EA\u589E\u7684</span>
  IndexedDbList<span class="token operator">:</span> <span class="token string">&quot;++id&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u4E3A\u4E86\u4F7F kurimudb \u7684\u586B\u5145\u529F\u80FD\u6B63\u5E38\u5DE5\u4F5C\uFF0C\u5FC5\u987B\u62E5\u6709\u6B64\u8868</span>
db<span class="token punctuation">.</span><span class="token function">version</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">stores</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  _seed<span class="token operator">:</span> <span class="token string">&quot;_id&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> db<span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><em>\u7248\u672C\u7684\u987A\u5E8F\u662F\u4E0D\u91CD\u8981\u7684\uFF0CDexie.js \u4F1A\u5728\u8FC1\u79FB\u4E0D\u540C\u7248\u672C\u65F6\uFF0C\u81EA\u52A8\u5BF9\u7248\u672C\u8FDB\u884C\u6392\u5E8F\u3002\u6240\u4EE5\uFF0C\u4F60\u53EF\u4EE5\u628A\u65B0\u7684\u7248\u672C\u5199\u5728\u4E0A\u9762\uFF0C\u907F\u514D\u672A\u6765\u7248\u672C\u8FC7\u591A\u65F6\uFF0C\u964D\u4F4E\u4EE3\u7801\u53EF\u8BFB\u6027\u3002</em></p><h2 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h2><p>\u7531\u4E8E IndexedDB \u662F\u5F02\u6B65\u7684\uFF0C\u4F7F\u7528\u6B64\u9A71\u52A8\u7684\u6A21\u578B\u5FC5\u987B\u4E3A\u5F02\u6B65\u6A21\u578B\uFF0C\u5373\u7EE7\u627F <code>AsyncModels</code>\u3002\u5F02\u6B65\u6A21\u578B\u4E2D\uFF0C\u6240\u6709\u7684 Kurimudb \u65B9\u6CD5\uFF0C\u5747\u8FD4\u56DE\u7684\u4E3A <strong>Promise \u5BF9\u8C61</strong>\u3002</p><div class="language-js line-numbers-mode"><div class="highlight-lines"><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br><br></div><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> AsyncModels <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;kurimudb&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> DexieDriver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;kurimudb-driver-dexie&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> migrations <span class="token keyword">from</span> <span class="token string">&#39;../models/migrations&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token keyword">class</span> <span class="token class-name">IndexedDbState</span> <span class="token keyword">extends</span> <span class="token class-name">AsyncModels<span class="token punctuation">.</span>keyValue</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;IndexedDbState&#39;</span><span class="token punctuation">,</span>
      driver<span class="token operator">:</span> DexieDriver<span class="token punctuation">,</span>
      db<span class="token operator">:</span> migrations<span class="token punctuation">,</span> <span class="token comment">// \u5C06\u4F60\u58F0\u660E\u597D\u7248\u672C\u7684 Dexie \u5B9E\u4F8B\uFF0C\u4F20\u5165\u5230 db \u9009\u9879\u4E2D</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u7531\u4E8E JavaScript \u4E2D <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy" target="_blank" rel="noopener noreferrer">Proxy</a> \u53EA\u652F\u6301\u540C\u6B65\u64CD\u4F5C\uFF0C\u56E0\u6B64\u5F02\u6B65\u6A21\u578B\u4E2D <code>data</code> \u5BF9\u8C61\u662F<strong>\u53EA\u8BFB\u7684</strong>\uFF0C\u8BFB\u53D6\u7684\u7ED3\u679C\u5C06\u662F <strong>Promise \u5BF9\u8C61</strong>\uFF0C\u4F60\u53EF\u4EE5\u5728\u5176\u524D\u52A0\u4E0A <code>await</code> \u5173\u952E\u5B57\u4EE5\u7B49\u5F85\u5176\u8FD4\u56DE\u7ED3\u679C\u3002</p><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// \u8BFB\u53D6</span>
<span class="token keyword">let</span> say <span class="token operator">=</span> <span class="token keyword">await</span> indexedDbState<span class="token punctuation">.</span>data<span class="token punctuation">.</span>say<span class="token punctuation">;</span> <span class="token comment">// \u7531\u4E8E\u8FD4\u56DE\u7684\u662F Promise \u5BF9\u8C61\uFF0C\u56E0\u6B64\u9700\u8981\u52A0 await \u5173\u952E\u5B57</span>
<span class="token keyword">let</span> say <span class="token operator">=</span> <span class="token keyword">await</span> indexedDbState<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&quot;say&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6216\u8005\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4F7F\u7528 getItem \u65B9\u6CD5</span>

<span class="token comment">// \u5220\u9664</span>
<span class="token comment">// \u5F02\u6B65\u6A21\u578B\u4E2D\uFF0Cdata \u662F\u53EA\u8BFB\u7684\uFF0C\u5220\u9664\u8BF7\u4F7F\u7528 removeItem \u65B9\u6CD5\u4EE3\u66FF</span>
<span class="token comment">// delete indexedDbState.data.say; // \u6211\u4EEC\u4E0D\u80FD\u8FD9\u4E48\u505A</span>
<span class="token keyword">await</span> indexedDbState<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">&quot;say&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u8BBE\u7F6E</span>
<span class="token keyword">await</span> indexedDbState<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&quot;say&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5224\u65AD\u662F\u5426\u5B58\u5728</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">await</span> indexedDbState<span class="token punctuation">.</span><span class="token function">hasItem</span><span class="token punctuation">(</span><span class="token string">&quot;say&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="\u67E5\u8BE2\u6784\u9020\u5668" tabindex="-1">\u67E5\u8BE2\u6784\u9020\u5668 <a class="header-anchor" href="#\u67E5\u8BE2\u6784\u9020\u5668" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u4ECE\u4E00\u7EC4\u6570\u636E\u4E2D\u9AD8\u6548\u7387\u5730\u7B5B\u9009\uFF0C\u662F IndexedDB \u7684\u7279\u8272\u4E4B\u4E00\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 <a href="https://dexie.org/docs/Table/Table" target="_blank" rel="noopener noreferrer">Dexie</a>\uFF0C\u4EE5\u94FE\u5F0F\u8C03\u7528\u7684\u8BED\u6CD5\uFF0C\u6765\u7F16\u5199\u67E5\u8BE2\u6761\u4EF6\uFF1A</p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">await</span> noteList<span class="token punctuation">.</span>storage<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">below</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u4F7F\u7528 <code>query</code> \u51FD\u6570\uFF0C\u53EF\u4EE5\u83B7\u5F97\u5F53\u524D\u6A21\u578B\u6240\u5728\u8868\u7684 <a href="https://dexie.org/docs/Table/Table" target="_blank" rel="noopener noreferrer">Dexie Table</a> \u5BF9\u8C61\u3002\u4F7F\u7528\u5B83\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u94FE\u5F0F\u8C03\u7528\u7684\u8BED\u6CD5\u6765\u67E5\u8BE2\u4E00\u4E2A\u6216\u591A\u4E2A\u6570\u636E\u3002</p><div class="warning custom-block"><p class="custom-block-title">\u6CE8\u610F\u4E8B\u9879</p><p>\u5C3D\u7BA1\u901A\u8FC7 <code>query</code> \u51FD\u6570\uFF0C\u6211\u4EEC\u80FD\u591F\u4EE5\u64CD\u4F5C Dexie \u7684\u65B9\u5F0F\u5B8C\u6210\u5F88\u591A\u4E8B\u60C5\uFF0C\u4F46\u662F\uFF0C\u6211\u4EEC\u63A8\u8350\u53EA\u5728\u9700\u8981\u6309\u6761\u4EF6\u67E5\u8BE2\u7684\u573A\u666F\u4F7F\u7528\u5B83\u3002\u589E\u3001\u5220\u3001\u6539\u8BF7\u4F7F\u7528 Kurimudb \u6765\u5B8C\u6210\uFF0C\u5426\u5219\uFF0C\u5C06\u4E0D\u4F1A\u89E6\u53D1\u8BA2\u9605\uFF0C\u4E5F\u4E0D\u80FD\u5F88\u597D\u7684\u5229\u7528 Kurimudb \u7F13\u5B58\u3002</p></div><h2 id="\u7ED3\u679C\u5C01\u88C5" tabindex="-1">\u7ED3\u679C\u5C01\u88C5 <a class="header-anchor" href="#\u7ED3\u679C\u5C01\u88C5" aria-hidden="true">#</a></h2><p>\u4E3A\u4E86\u66F4\u597D\u7684\u5229\u7528 Indexeddb \u7684\u6027\u80FD\uFF0C\u5F53\u4F60\u5B58\u5165\u975E\u5BF9\u8C61\u7684\u503C\u65F6\uFF0C\u6211\u4EEC\u4F1A\u5C06\u5176\u5305\u88C5\u6210\u4E00\u4E2A\u5BF9\u8C61\uFF1A</p><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// \u5B58\u5165\u4E00\u4E2A\u975E\u5BF9\u8C61\u7684\u503C\uFF1A</span>
configState<span class="token punctuation">.</span>data<span class="token punctuation">.</span>hello <span class="token operator">=</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// \u5B9E\u9645\u5B58\u5165\u5230 Indexedb \u7684\u503C\u662F\uFF1A</span>
<span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span>
  $__value<span class="token operator">:</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5176\u4E2D\uFF0C<code>id</code> \u662F\u4F60\u4E3A\u6B64\u8868\u8BBE\u7F6E\u7684\u4E3B\u952E\u540D\u3002\u5F53\u4F60\u4F7F\u7528 Dexie.js \u8FDB\u884C\u67E5\u8BE2\u65F6\uFF0C\u9700\u6CE8\u610F\uFF0C\u6309\u7167\u5B9E\u9645\u5B58\u5165\u7684\u6570\u636E\u683C\u5F0F\u6765\u8FDB\u884C\u67E5\u8BE2\u3002</p><h2 id="all" tabindex="-1">all <a class="header-anchor" href="#all" aria-hidden="true">#</a></h2><p>\u83B7\u53D6\u6B64\u6A21\u578B\u5DF2\u5B58\u5165\u7684\u5168\u90E8\u6570\u636E\uFF0C\u6309\u63D2\u5165\u987A\u5E8F\u6392\u5E8F\uFF0C\u8FD4\u56DE\u503C\u4E3A <a href="/others/#KMap">Promise&lt;KMap \u5BF9\u8C61&gt;</a>\u3002</p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">await</span> yourModel<span class="token punctuation">.</span>storage<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="getlength" tabindex="-1">getLength <a class="header-anchor" href="#getlength" aria-hidden="true">#</a></h2><p>\u83B7\u53D6\u5DF2\u5B58\u5165\u6570\u636E\u7684\u6761\u6570\uFF0C\u8FD4\u56DE\u503C\u4E3A <code>Promise&lt;number&gt;</code>\u3002</p><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">await</span> yourModel<span class="token punctuation">.</span>storage<span class="token punctuation">.</span><span class="token function">getLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u6DF1\u5165\u4E86\u89E3-dexie-js" tabindex="-1">\u6DF1\u5165\u4E86\u89E3 Dexie.js <a class="header-anchor" href="#\u6DF1\u5165\u4E86\u89E3-dexie-js" aria-hidden="true">#</a></h2><p>Dexie.js \u7684\u529F\u80FD\u975E\u5E38\u4E30\u5BCC\uFF0C\u5F3A\u70C8\u63A8\u8350\u9605\u8BFB <a href="https://dexie.org/docs/API-Reference" target="_blank" rel="noopener noreferrer">Dexie Api \u6587\u6863</a> \u548C <a href="https://dexie.org/docs/Tutorial/Best-Practices#1-understand-promises" target="_blank" rel="noopener noreferrer">Dexie \u6700\u4F73\u5B9E\u8DF5</a>\uFF01</p>`,30),o=[t];function c(l,r,i,u,d,k){return a(),s("div",null,o)}var h=n(p,[["render",c]]);export{m as __pageData,h as default};