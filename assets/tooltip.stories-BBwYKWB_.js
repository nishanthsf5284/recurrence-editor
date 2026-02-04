import{j as e}from"./index-7s7xaQU8.js";import{s as a}from"./dataSource-CrVxx1x3.js";import{i as w,S as l,D as d,W as c,M as p,j as T}from"./month-view-Cf91h4wJ.js";import"./index-CC6F48bw.js";import"./index-qiR4Kxfn.js";const H=e.jsx("path",{d:"M8 1V3H16V1H18V3H20C21.1046 3 22 3.89543 22 5V8V10V21C22 22.1046 21.1046 23 20 23H4C2.89543 23 2 22.1046 2 21V10V8V5C2 3.89543 2.89543 3 4 3H6V1H8ZM4 10V21H20V10H4ZM20 8H4V5H6H8H16H18H20V8Z",fillRule:"evenodd",clipRule:"evenodd",fill:"currentcolor"}),V=w(H),N={title:"Scheduler/ToolTip",argTypes:{view:{control:"select",options:["Day","Week","WorkWeek","Month"],description:"Controlled mode to set the Scheduler view"},locale:{control:"select",options:["en-US","fr-CH","ar"],description:"Locale for date/time formatting (if your app/provider wires it)"},eventTooltip:{control:"object",description:"Enable appointment tooltip. boolean for default tooltip, or an object of SchedulerTooltipProps for custom behavior/content."}},parameters:{docs:{description:{component:"Meta configuration for the Storybook stories"}}}},r={parameters:{controls:{disable:!0}},render:()=>{const t={dataSource:a};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"control-section",children:e.jsx("div",{className:"scheduler-control",children:e.jsxs(l,{height:"550px",width:"100%",defaultSelectedDate:new Date(2021,0,10),eventSettings:t,startHour:"05:00",endHour:"20:00",eventTooltip:!0,children:[e.jsx(d,{}),e.jsx(c,{}),e.jsx(p,{})]})})})})}},n={parameters:{controls:{disable:!0}},render:()=>{const s={content:({data:o})=>e.jsx("div",{style:{padding:8,display:"flex",fontSize:"14px",gap:"8px"},children:e.jsxs("div",{style:{margin:"0px",fontSize:"12px"},children:[e.jsxs("div",{style:{fontSize:"16px",display:"flex",alignItems:"center",gap:"6px",paddingBottom:"10px"},children:[e.jsx(V,{width:20,height:20}),e.jsx("strong",{children:(o==null?void 0:o.subject)??"Untitled"})]}),e.jsxs("div",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(T,{width:25,height:25}),e.jsx("i",{children:String((o==null?void 0:o.location)??"")})]})]})}),animation:{open:{effect:"FadeIn",duration:200,delay:0},close:{effect:"FadeOut",duration:200,delay:0}},position:"BottomCenter",followCursor:!0},y={dataSource:a};return e.jsx("div",{className:"control-section",children:e.jsx("div",{className:"scheduler-control",children:e.jsxs(l,{height:"550px",width:"100%",defaultSelectedDate:new Date(2021,0,10),eventSettings:y,startHour:"05:00",endHour:"20:00",eventTooltip:s,children:[e.jsx(d,{}),e.jsx(c,{}),e.jsx(p,{})]})})})}},D=({})=>{const t={dataSource:a},s={animation:{open:{effect:"FadeIn",duration:200,delay:0},close:{effect:"FadeOut",duration:200,delay:0}},position:"BottomCenter",sticky:!0};return e.jsx("div",{className:"control-section",children:e.jsx("div",{className:"scheduler-control",children:e.jsxs(l,{height:"550px",width:"100%",defaultSelectedDate:new Date(2021,0,10),eventSettings:t,startHour:"05:00",endHour:"20:00",eventTooltip:s,children:[e.jsx(d,{}),e.jsx(c,{}),e.jsx(p,{})]})})})},i={render:t=>e.jsx(D,{...t}),args:{view:"Week",eventTooltip:{animation:{open:{effect:"FadeIn",duration:200,delay:0},close:{effect:"FadeOut",duration:200,delay:0}},position:"BottomCenter",sticky:!0,followCursor:!0}}};var u,m,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const eventSettings = {
      dataSource: scheduleData
    };
    return <>\r
        <div className="control-section">\r
            <div className="scheduler-control">\r
                <Scheduler height={'550px'} width={'100%'} defaultSelectedDate={new Date(2021, 0, 10)} eventSettings={eventSettings} startHour='05:00' endHour='20:00' eventTooltip={true}>\r
                    <DayView />\r
                    <WeekView />\r
                    <MonthView />\r
                </Scheduler>\r
            </div>\r
        </div>\r
        </>;
  }
}`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var f,x,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const tooltipContent: SchedulerTooltipProps['content'] = ({
      data
    }: {
      data?: any;
    }) => {
      return <div style={{
        padding: 8,
        display: 'flex',
        fontSize: '14px',
        gap: '8px'
      }}>\r
                <div style={{
          margin: '0px',
          fontSize: '12px'
        }}>\r
                    <div style={{
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            paddingBottom: '10px'
          }}>\r
                        <DayIcon width={20} height={20} />\r
                        <strong>{data?.subject ?? 'Untitled'}</strong>\r
                    </div>\r
                    <div style={{
            fontSize: '13px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>\r
                        <LocationIcon width={25} height={25} />\r
                        <i>{String(data?.location ?? '')}</i>\r
                    </div>\r
                </div>\r
            </div>;
    };
    const defaultTooltipObject: SchedulerTooltipProps = {
      content: tooltipContent,
      animation: {
        open: {
          effect: 'FadeIn',
          duration: 200,
          delay: 0
        },
        close: {
          effect: 'FadeOut',
          duration: 200,
          delay: 0
        }
      },
      position: 'BottomCenter',
      followCursor: true
    };
    const eventSettings = {
      dataSource: scheduleData
    };
    return <div className="control-section">\r
            <div className="scheduler-control">\r
                <Scheduler height={'550px'} width={'100%'} defaultSelectedDate={new Date(2021, 0, 10)} eventSettings={eventSettings} startHour='05:00' endHour='20:00' eventTooltip={defaultTooltipObject}>\r
                    <DayView />\r
                    <WeekView />\r
                    <MonthView />\r
                </Scheduler>\r
            </div>\r
        </div>;
  }
}`,...(v=(x=n.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var S,g,j;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <TooltipPropsSample {...args as TooltipStoryArgs} />,
  args: {
    view: 'Week',
    eventTooltip: {
      animation: {
        open: {
          effect: 'FadeIn',
          duration: 200,
          delay: 0
        },
        close: {
          effect: 'FadeOut',
          duration: 200,
          delay: 0
        }
      },
      position: 'BottomCenter',
      sticky: true,
      followCursor: true
    }
  }
}`,...(j=(g=i.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};const M=["EventTooltipSample","TooltipTemplateSample","EventTooltipProps"];export{i as EventTooltipProps,r as EventTooltipSample,n as TooltipTemplateSample,M as __namedExportsOrder,N as default};
