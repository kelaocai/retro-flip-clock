(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,84968,e=>{"use strict";var t=e.i(73503),s=e.i(25082);function i({value:e,prevValue:i,animationDuration:r=500,cardWidth:a="w-24",cardHeight:n="h-32",fontSize:o=90,textColor:l="#e8e8e8",backgroundColor:d="#1a1a1a"}){let[c,x]=(0,s.useState)(!1),[f,m]=(0,s.useState)(e),[p,h]=(0,s.useState)(e);return(0,s.useEffect)(()=>{if(e!==i&&e!==p){x(!0),m(p);let t=setTimeout(()=>{h(e),x(!1)},r);return()=>clearTimeout(t)}},[e,i,p,r]),(0,t.jsxs)("div",{className:`relative ${a} ${n}`,style:{perspective:"1200px"},children:[(0,t.jsx)("style",{children:`
        @keyframes flipDown {
          0% {
            transform: rotateX(0deg);
            opacity: 1;
          }
          100% {
            transform: rotateX(-90deg);
            opacity: 0.3;
          }
        }

        @keyframes flipUp {
          0% {
            transform: rotateX(90deg);
            opacity: 0.3;
          }
          100% {
            transform: rotateX(0deg);
            opacity: 1;
          }
        }

        .flip-card-front {
          backface-visibility: hidden;
        }

        .flip-card-back {
          backface-visibility: hidden;
        }

        .flip-split-top {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(135deg, ${d} 0%, #2d2d2d 50%, ${d} 100%);
          border: 2px solid #0a0a0a;
          border-radius: 0.5rem 0.5rem 0 0;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.8);
          transform-origin: bottom center;
          animation: ${c?`flipDown ${r}ms cubic-bezier(0.645, 0.045, 0.355, 1) forwards`:"none"};
        }

        .flip-split-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(135deg, ${d} 0%, #2d2d2d 50%, ${d} 100%);
          border: 2px solid #0a0a0a;
          border-radius: 0 0 0.5rem 0.5rem;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.8);
          transform-origin: top center;
          animation: ${c?`flipUp ${r}ms cubic-bezier(0.645, 0.045, 0.355, 1) forwards`:"none"};
        }

        .middle-divider {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(to right, #000 0%, #444 50%, #000 100%);
          z-index: 20;
          box-shadow: inset 0 1px 2px rgba(0,0,0,0.9), 0 1px 1px rgba(255,255,255,0.05);
          transform: translateY(-50%);
        }

        .flip-card-svg {
          width: 100%;
          height: 100%;
        }
      `}),(0,t.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-[#2d2d2d] to-[#1a1a1a] border-2 border-[#0a0a0a] rounded-lg shadow-xl",style:{backfaceVisibility:"hidden"},children:(0,t.jsxs)("svg",{className:"flip-card-svg",viewBox:"0 0 120 160",children:[(0,t.jsx)("defs",{children:(0,t.jsxs)("linearGradient",{id:"textGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[(0,t.jsx)("stop",{offset:"0%",stopColor:l,stopOpacity:"0.95"}),(0,t.jsx)("stop",{offset:"50%",stopColor:l,stopOpacity:"1"}),(0,t.jsx)("stop",{offset:"100%",stopColor:l,stopOpacity:"0.9"})]})}),(0,t.jsx)("text",{x:"60",y:"110",fontSize:o,fontWeight:"900",textAnchor:"middle",fontFamily:"Arial, sans-serif",fill:"rgba(0, 0, 0, 0.4)",children:p}),(0,t.jsx)("text",{x:"60",y:"108",fontSize:o,fontWeight:"900",textAnchor:"middle",fontFamily:"Arial, sans-serif",fill:"url(#textGradient)",children:p})]})}),c&&(0,t.jsx)("div",{className:"flip-split-top",children:(0,t.jsxs)("svg",{className:"flip-card-svg",viewBox:"0 0 120 80",preserveAspectRatio:"xMidYMin meet",children:[(0,t.jsx)("defs",{children:(0,t.jsxs)("linearGradient",{id:"textGradientTop",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[(0,t.jsx)("stop",{offset:"0%",stopColor:l,stopOpacity:"0.95"}),(0,t.jsx)("stop",{offset:"50%",stopColor:l,stopOpacity:"1"}),(0,t.jsx)("stop",{offset:"100%",stopColor:l,stopOpacity:"0.9"})]})}),(0,t.jsx)("text",{x:"60",y:"110",fontSize:o,fontWeight:"900",textAnchor:"middle",fontFamily:"Arial, sans-serif",fill:"rgba(0, 0, 0, 0.4)",children:f}),(0,t.jsx)("text",{x:"60",y:"108",fontSize:o,fontWeight:"900",textAnchor:"middle",fontFamily:"Arial, sans-serif",fill:"url(#textGradientTop)",children:f})]})}),c&&(0,t.jsx)("div",{className:"flip-split-bottom",children:(0,t.jsxs)("svg",{className:"flip-card-svg",viewBox:"0 0 120 80",preserveAspectRatio:"xMidYMax meet",children:[(0,t.jsx)("defs",{children:(0,t.jsxs)("linearGradient",{id:"textGradientBottom",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[(0,t.jsx)("stop",{offset:"0%",stopColor:l,stopOpacity:"0.95"}),(0,t.jsx)("stop",{offset:"50%",stopColor:l,stopOpacity:"1"}),(0,t.jsx)("stop",{offset:"100%",stopColor:l,stopOpacity:"0.9"})]})}),(0,t.jsx)("text",{x:"60",y:"30",fontSize:o,fontWeight:"900",textAnchor:"middle",fontFamily:"Arial, sans-serif",fill:"rgba(0, 0, 0, 0.4)",children:e}),(0,t.jsx)("text",{x:"60",y:"28",fontSize:o,fontWeight:"900",textAnchor:"middle",fontFamily:"Arial, sans-serif",fill:"url(#textGradientBottom)",children:e})]})}),(0,t.jsx)("div",{className:"middle-divider"})]})}function r({format:e="24h",showSeconds:r=!0,onTimeChange:a,containerClassName:n,cardWidth:o="w-24 md:w-28",cardHeight:l="h-32 md:h-40",animationDuration:d=500,isImmersive:c=!1}){let[x,f]=(0,s.useState)({hours:"00",minutes:"00",seconds:"00"}),m=(0,s.useRef)({hours:"00",minutes:"00",seconds:"00"});return(0,s.useEffect)(()=>{let t=()=>{let t=new Date,s=t.getHours();"12h"===e&&(s=s%12||12);let i={hours:String(s).padStart(2,"0"),minutes:String(t.getMinutes()).padStart(2,"0"),seconds:String(t.getSeconds()).padStart(2,"0")};f(e=>e.hours!==i.hours||e.minutes!==i.minutes||e.seconds!==i.seconds?(m.current={...e},a?.(i),i):e)};t();let s=setInterval(t,1e3);return()=>clearInterval(s)},[e,a]),(0,t.jsx)("div",{className:"perspective",style:{perspective:"1200px"},children:(0,t.jsxs)("div",{className:`flex items-center justify-center gap-4 md:gap-6 px-8 md:px-12 py-12 md:py-16 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] rounded-2xl ${n||""}`,style:{boxShadow:`
            0 40px 100px rgba(0, 0, 0, 0.9),
            inset 0 1px 0 rgba(255, 255, 255, 0.03),
            inset 0 -8px 20px rgba(0, 0, 0, 0.8)
          `,border:"1px solid rgba(255, 255, 255, 0.05)"},children:[(0,t.jsx)("div",{className:"absolute top-0 left-0 right-0 h-3 bg-gradient-to-b from-[#333333] to-transparent rounded-t-2xl"}),(0,t.jsx)("div",{className:"absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-[#0a0a0a] to-transparent rounded-b-2xl"}),(0,t.jsxs)("div",{className:"flex flex-col items-center gap-3",children:[(0,t.jsx)(i,{value:x.hours,prevValue:m.current.hours,cardWidth:o,cardHeight:l,animationDuration:d}),(0,t.jsx)("span",{className:"text-[#888888] text-xs md:text-sm tracking-widest font-mono font-bold",children:"H"})]}),(0,t.jsxs)("div",{className:"flex flex-col items-center gap-3 px-1",children:[(0,t.jsxs)("svg",{width:"32",height:"120",viewBox:"0 0 32 120",className:"drop-shadow-lg",children:[(0,t.jsx)("circle",{cx:"16",cy:"30",r:"3",fill:"#999999"}),(0,t.jsx)("circle",{cx:"16",cy:"90",r:"3",fill:"#999999"})]}),(0,t.jsx)("div",{className:"w-6 h-px bg-gradient-to-r from-transparent via-[#444444] to-transparent"})]}),(0,t.jsxs)("div",{className:"flex flex-col items-center gap-3",children:[(0,t.jsx)(i,{value:x.minutes,prevValue:m.current.minutes,cardWidth:o,cardHeight:l,animationDuration:d}),(0,t.jsx)("span",{className:"text-[#888888] text-xs md:text-sm tracking-widest font-mono font-bold",children:"M"})]}),r&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"flex flex-col items-center gap-3 px-1",children:[(0,t.jsxs)("svg",{width:"32",height:"120",viewBox:"0 0 32 120",className:"drop-shadow-lg",children:[(0,t.jsx)("circle",{cx:"16",cy:"30",r:"3",fill:"#999999"}),(0,t.jsx)("circle",{cx:"16",cy:"90",r:"3",fill:"#999999"})]}),(0,t.jsx)("div",{className:"w-6 h-px bg-gradient-to-r from-transparent via-[#444444] to-transparent"})]}),(0,t.jsxs)("div",{className:"flex flex-col items-center gap-3",children:[(0,t.jsx)(i,{value:x.seconds,prevValue:m.current.seconds,cardWidth:o,cardHeight:l,animationDuration:d}),(0,t.jsx)("span",{className:"text-[#888888] text-xs md:text-sm tracking-widest font-mono font-bold",children:"S"})]})]})]})})}function a({onToggle:e}){let[i,r]=(0,s.useState)(!1);return(0,t.jsx)("button",{onClick:()=>{let t=!i;r(t),e(t),t&&document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen().catch(()=>{console.log("Fullscreen request was denied")})},className:`fixed top-6 right-6 z-50 px-4 py-2 rounded-lg backdrop-blur-md transition-all duration-300 font-semibold text-sm ${i?"hidden":""}`,style:{backgroundColor:"rgba(255, 255, 255, 0.1)",border:"1px solid rgba(255, 255, 255, 0.2)",color:"#888888"},title:i?"Exit Immersive Mode":"Enter Immersive Mode",children:"Full"})}function n(){let[e,i]=(0,s.useState)(!1),[n,o]=(0,s.useState)(!1);return((0,s.useEffect)(()=>{i(!0);let e=()=>{document.fullscreenElement||o(!1)};return document.addEventListener("fullscreenchange",e),()=>document.removeEventListener("fullscreenchange",e)},[]),e)?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a,{onToggle:o}),n?(0,t.jsxs)("div",{className:"fixed inset-0 bg-black flex items-center justify-center overflow-hidden",children:[(0,t.jsx)("div",{className:"fixed inset-0 flex items-end justify-center pb-8 pointer-events-none",children:(0,t.jsx)("div",{className:"text-center",children:(0,t.jsx)("p",{className:"text-gray-500 text-sm font-light tracking-wider",children:"Press ESC to exit"})})}),(0,t.jsx)("div",{className:"w-full h-full flex items-center justify-center",style:{perspective:"2000px"},children:(0,t.jsx)(r,{isImmersive:!0})})]}):(0,t.jsx)("div",{className:"min-h-screen flex items-center justify-center p-4",style:{background:"linear-gradient(135deg, #2a2620 0%, #3d3530 50%, #2a2620 100%)"},children:(0,t.jsxs)("div",{className:"flex flex-col items-center gap-12",children:[(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsx)("h1",{className:"text-5xl md:text-6xl font-bold text-retro-gold mb-2 tracking-widest font-mono drop-shadow-lg",children:"⏱ FLIP CLOCK"}),(0,t.jsx)("p",{className:"text-retro-tan text-lg md:text-xl tracking-wider font-light",children:"Classic Mechanical Timepiece"}),(0,t.jsx)("div",{className:"w-32 h-px bg-gradient-to-r from-transparent via-retro-gold to-transparent mt-4 mx-auto"})]}),(0,t.jsx)(r,{}),(0,t.jsxs)("div",{className:"text-center mt-8",children:[(0,t.jsx)("p",{className:"text-retro-tan text-xs md:text-sm tracking-widest",children:"© 1976 — MECHANICAL ENGINEERING"}),(0,t.jsx)("p",{className:"text-retro-brown text-xs mt-2",children:"Made with analog precision"})]})]})})]}):null}e.s(["default",()=>n],84968)}]);