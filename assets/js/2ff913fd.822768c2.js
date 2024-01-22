"use strict";(self.webpackChunk_6_r_1_h_24=self.webpackChunk_6_r_1_h_24||[]).push([[549],{5328:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=s(5893),n=s(1151);const o={slug:"/notes/image/modifier_iso",sidebar_position:1,title:"Modifier un ISO"},t="Modifier un ISO d'installation Windows.",d={id:"notes/perso_windows/iso/modifier_iso",title:"Modifier un ISO",description:"Cette proc\xe9dure explique comment modifier un ISO d\xe9marrable pour l'installation de Windows.",source:"@site/docs/notes/perso_windows/iso/modifier_iso.md",sourceDirName:"notes/perso_windows/iso",slug:"/notes/image/modifier_iso",permalink:"/h24-6r1/notes/image/modifier_iso",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/notes/image/modifier_iso",sidebar_position:1,title:"Modifier un ISO"},sidebar:"tutorialSidebar",previous:{title:"Extraire un ISO",permalink:"/h24-6r1/notes/image/extraire_iso"},next:{title:"Image WIM",permalink:"/h24-6r1/notes/perso_windows/wim"}},c={},l=[{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Proc\xe9dure",id:"proc\xe9dure",level:2},{value:"R\xe9f\xe9rences",id:"r\xe9f\xe9rences",level:2}];function a(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:"modifier-un-iso-dinstallation-windows",children:"Modifier un ISO d'installation Windows."}),"\n",(0,r.jsxs)(i.p,{children:["Cette proc\xe9dure explique comment modifier un ",(0,r.jsx)(i.strong,{children:"ISO"})," d\xe9marrable pour l'installation de ",(0,r.jsx)(i.strong,{children:"Windows"}),"."]}),"\n",(0,r.jsx)(i.h2,{id:"pr\xe9requis",children:"Pr\xe9requis"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:["Installer ",(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.a,{href:"https://learn.microsoft.com/fr-ca/windows-hardware/get-started/adk-install",children:"Windows Assessment and Deployment Kit (Windows ADK)"})}),"."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"proc\xe9dure",children:"Proc\xe9dure"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.a,{href:"/h24-6r1/notes/image/extraire_iso",children:"Extraire le fichier ISO de Windows 10 ou 11"})})," dans le dossier de travail."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Effectuez les modifications dans le dossier de travail. Il est possible d'ajouter, de modifier ou  de supprimer des fichiers dans le dossier d'extraction."}),"\n",(0,r.jsxs)(i.admonition,{type:"tip",children:[(0,r.jsxs)(i.p,{children:["Il est possible d'int\xe9grer le fichier ",(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.code,{children:"ei.cfg"})})," et ",(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.code,{children:"pid.txt"})})," directement dans un ",(0,r.jsx)(i.strong,{children:"ISO"}),"."]}),(0,r.jsxs)(i.p,{children:["Il est possible de remplacer le fichier ",(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.code,{children:"sources\\install.wim"})})," pour avoir une nouvelle image d'installation."]})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Ouvrez l'invite de commandes ",(0,r.jsx)(i.strong,{children:"Environnement de d\xe9ploiement et d'outils de cr\xe9ation d'images"})," en tant qu'administrateur."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{src:s(1754).Z+"",width:"790",height:"645"})}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Utilisez la commande ci-dessous pour compiler le ",(0,r.jsx)(i.strong,{children:"ISO"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.code,{children:"oscdimg.exe -m -o -u2 -udfver102 -bootdata:2#p0,e,b[fichier boot\\etfsboot.com]#pEF,e,b[fichier efi\\microsoft\\boot\\efisys.bin] [dossier du iso extrait] [nouveau fichier iso]"})}),"."]}),"\n",(0,r.jsxs)(i.admonition,{title:"Exemple",type:"note",children:[(0,r.jsxs)(i.p,{children:["Le fichier ",(0,r.jsx)(i.strong,{children:"ISO"})," a \xe9t\xe9 extrait dans le dossier ",(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.code,{children:"c:\\iso\\extract"})}),"."]}),(0,r.jsxs)(i.p,{children:["Le nouveau fichier ",(0,r.jsx)(i.strong,{children:"ISO"})," est ",(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.code,{children:"c:\\iso\\Win11_22H3_Pro.iso"})}),"."]}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"oscdimg.exe -m -o -u2 -udfver102 -bootdata:2#p0,e,bc:\\iso\\extract\\boot\\etfsboot.com#pEF,e,bc:\\iso\\extract\\efi\\microsoft\\boot\\efisys.bin c:\\iso\\extract c:\\iso\\Win11_22H3_Pro.iso\n"})})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"r\xe9f\xe9rences",children:"R\xe9f\xe9rences"}),"\n",(0,r.jsxs)(i.p,{children:["Pour plus d'information sur ",(0,r.jsx)(i.strong,{children:"oscdimg.exe"}),"."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.a,{href:"https://learn.microsoft.com/fr-fr/troubleshoot/windows-server/deployment/create-iso-image-for-uefi-platforms?source=recommendations",children:"https://learn.microsoft.com/fr-fr/troubleshoot/windows-server/deployment/create-iso-image-for-uefi-platforms?source=recommendations"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.a,{href:"https://learn.microsoft.com/fr-fr/windows-hardware/manufa",children:"https://learn.microsoft.com/fr-fr/windows-hardware/manufa"})})]})}function h(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1754:(e,i,s)=>{s.d(i,{Z:()=>r});const r=s.p+"assets/images/adk_1-79aceaf7cd87bb5491f366ab14164836.png"},1151:(e,i,s)=>{s.d(i,{Z:()=>d,a:()=>t});var r=s(7294);const n={},o=r.createContext(n);function t(e){const i=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),r.createElement(o.Provider,{value:i},e.children)}}}]);