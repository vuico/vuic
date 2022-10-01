const html = "<h1 id=\"config\" tabindex=\"-1\">Config <a class=\"header-anchor\" href=\"#config\" aria-hidden=\"true\">#</a></h1>\n<p>To set custom options for the Vuic you need to pass VuicConfig as second argument to the app.use() function:</p>\n<pre><code class=\"language-typescript\"><div class=\"htw-relative htw-not-prose __histoire-code\"><div class=\"htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40\">typescript</div><pre class=\"shiki\" style=\"background-color: #0d1117\"><code><span class=\"line\"><span style=\"color: #8B949E\">// src/main.ts</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #FF7B72\">import</span><span style=\"color: #C9D1D9\"> { VuicPlugin, Config } </span><span style=\"color: #FF7B72\">from</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #A5D6FF\">&quot;@vuico/vuic&quot;</span><span style=\"color: #C9D1D9\">;</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #FF7B72\">const</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #79C0FF\">config</span><span style=\"color: #FF7B72\">:</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FFA657\">Config</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> {</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  theme: {</span><span style=\"color: #FF7B72\">...</span><span style=\"color: #C9D1D9\">},</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  defaultSettings: {</span><span style=\"color: #FF7B72\">...</span><span style=\"color: #C9D1D9\">},</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">};</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">app.</span><span style=\"color: #D2A8FF\">use</span><span style=\"color: #C9D1D9\">(VuicPlugin, config);</span></span>\n<span class=\"line\"></span></code></pre></div></code></pre>\n";
const frontmatter = {"group":"configuration","title":"Config","icon":"carbon:settings"};
const relativePath = "src/stories/configuration/Config.story.md";

export { frontmatter, html, relativePath };
