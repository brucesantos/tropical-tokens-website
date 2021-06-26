import{spline}from"https://cdn.skypack.dev/@georgedoescode/spline@1.0.1";import SimplexNoise from"https://cdn.skypack.dev/simplex-noise@2.4.0";const path=document.querySelector("path"),root=document.documentElement;let hueNoiseOffset=0,noiseStep=.001;const simplex=new SimplexNoise,points=createPoints();function map(e,t,o,s,n){return(e-t)/(o-t)*(n-s)+s}function noise(e,t){return simplex.noise2D(e,t)}function createPoints(){const e=[],t=2*Math.PI/5;for(let o=1;o<=5;o++){const s=o*t,n=100+75*Math.cos(s),i=100+75*Math.sin(s);e.push({x:n,y:i,originX:n,originY:i,noiseOffsetX:100*Math.random(),noiseOffsetY:100*Math.random()})}return e}!function e(){path.setAttribute("d",spline(points,1,!0));for(let e=0;e<points.length;e++){const t=points[e],o=noise(t.noiseOffsetX,t.noiseOffsetX),s=noise(t.noiseOffsetY,t.noiseOffsetY),n=map(o,-1,1,t.originX-20,t.originX+20),i=map(s,-1,1,t.originY-20,t.originY+20);t.x=n,t.y=i,t.noiseOffsetX+=noiseStep,t.noiseOffsetY+=noiseStep}const t=map(noise(hueNoiseOffset,hueNoiseOffset),-1,1,0,360);root.style.setProperty("--startColor",`hsl(${t}, 100%, 75%)`),root.style.setProperty("--stopColor",`hsl(${t+60}, 100%, 75%)`),hueNoiseOffset+=noiseStep/6,requestAnimationFrame(e)}(),document.querySelector("path").addEventListener("mouseover",(()=>{noiseStep=.01})),document.querySelector("path").addEventListener("mouseleave",(()=>{noiseStep=.001}));