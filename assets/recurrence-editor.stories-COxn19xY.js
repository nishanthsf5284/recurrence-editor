import{j as e}from"./index-7s7xaQU8.js";import{r as u}from"./index-CC6F48bw.js";import{P as p,R as m}from"./recurrence-editor-CRAuYJ8k.js";import"./index-qiR4Kxfn.js";const x=({firstDayOfWeek:t=0,direction:i="ltr"})=>{const[n,l]=u.useState("FREQ=DAILY;INTERVAL=1;COUNT=1"),c=d=>{l(d.value)};return e.jsx("div",{className:"control-section sf-content-center",style:{flexDirection:"column"},children:e.jsxs(p,{dir:i,children:[e.jsxs("div",{className:"scheduler-control",children:[e.jsx("label",{className:"mr-2",children:"Rule Output"}),e.jsx("div",{className:"sf-content-center sf-radius-2",style:{marginBottom:"12px",fontSize:"14px",width:"530px",height:"auto",border:"1px solid #969696",flex:"1"},children:e.jsx("div",{style:{padding:"8px 4px",textAlign:"center",minHeight:"20px",overflow:"hidden",overflowWrap:"break-word"},children:n})})]}),e.jsx("div",{className:"scheduler-control",style:{maxWidth:"460px"},children:e.jsx(m,{value:n,onChange:c,firstDayOfWeek:t})})]})})},y={title:"Scheduler/Recurrence Editor",parameters:{layout:"padded"},tags:["autodocs"]},r={name:"Rule Generation",render:t=>e.jsx(x,{...t}),args:{firstDayOfWeek:0,direction:"ltr"},parameters:{control:{include:["firstDayOfWeek","direction"]}},argTypes:{firstDayOfWeek:{control:"select",options:[0,1,2,3,4,5,6]},direction:{control:"select",options:["ltr","rtl"]}}};var o,s,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Rule Generation',
  render: args => <RuleGenerator {...args} />,
  args: {
    firstDayOfWeek: 0,
    direction: 'ltr'
  },
  parameters: {
    control: {
      include: ['firstDayOfWeek', 'direction']
    }
  },
  argTypes: {
    firstDayOfWeek: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6]
    },
    direction: {
      control: 'select',
      options: ['ltr', 'rtl']
    }
  }
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const j=["RuleGeneration"];export{r as RuleGeneration,j as __namedExportsOrder,y as default};
