import{o as t,e as o,a8 as r,d as l,D as p,h as g,g as s,H as i,B as d}from"./index-2e588a01.js";const m={class:"markdown-body"},_=r(`<h2>配置</h2><p>设置全局配置</p><pre><code class="language-shell">git config --global user.name &quot;[name]&quot;
git config --global user.email &quot;[email]&quot;
</code></pre><h2>开始使用</h2><p>创建 git 存储库</p><pre><code class="language-shell">git init
</code></pre><p>克隆现有的 git 存储库</p><pre><code class="language-shell">git clone [url]
</code></pre><h2>提交</h2><p>提交所有跟踪的更改</p><pre><code class="language-shell">git commit -am &quot;[commit message]&quot;
</code></pre><p>向上次提交添加新的修改</p><pre><code class="language-shell">git commit --amend --no-edit
</code></pre><h2>我犯了一个错误</h2><p>更改最后提交消息</p><pre><code class="language-shell">git commit --amend
</code></pre><p>撤消最近的提交并保留更改</p><pre><code class="language-shell">git reset HEAD~1
</code></pre><p>撤消“N”最近的提交并保留更改</p><pre><code class="language-shell">git reset HEAD~N
</code></pre><p>撤消最近的提交并摆脱更改</p><pre><code class="language-shell">git reset HEAD~1 --hard
</code></pre><p>将分支重置为远程状态</p><pre><code class="language-shell">git fetch origin
git reset --hard origin/[branch-name]
</code></pre><h2>其他</h2><p>将本地master分支重命名为main</p><pre><code class="language-shell">git branch -m master main
</code></pre>`,27),h=[_],u={__name:"git-memo.content",setup(c,{expose:e}){return e({frontmatter:{}}),(n,x)=>(t(),o("div",m,h))}},f=l({__name:"git-memo",setup(c){i(a=>({"2f6ba480":s(e).cardColor}));const e=p();return(a,n)=>(t(),o("div",null,[g(s(u))]))}});const q=d(f,[["__scopeId","data-v-3f9f904a"]]);export{q as default};
