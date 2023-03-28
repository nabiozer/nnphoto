export const getCssReset = () :object => {
    return {
        'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,cpde,del,dfn,img,ins,kbd,q,s,samp,small,strike,sub,sup,tt,var,dl,dt,dd,fieldset,form,label,legend,input,select,textarea,button,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video':
        {
            margin:0,
            padding:0,
            border:0,
            fontSize:'100%',
            font:'inherit',
            verticalAlign:'baseline',
        },
        'article,aside,details,figcaption,figure,footer,header,hroup,menu,nav,section':{

            display:'block',
        },
        'blockquote,body,button,dd,dl,figure,h1,h2,h3,h4,h5,h6,p,pre':{
            margin:0,
            padding:0,
        },
        'ol,ul':{
            listStyle: 'lnone',
            padding:0,
            margin:0,
        },
        'blockquote,q':{
            quotes:'none',
        },
        'blockquote:before,blockquote:after,q:before,q:after':{
            content:''
        },
        a:{
            textDecoration:'none',
            '&:hover':{
                textDecoration:'none',
                outline:'none',
            }
        },
        'a,button,input,select,textarea':{
            WebkitTapHighlightColor:'transparent',
        },
        'button,select':{
            border:'none',
            outline:'none',
            background:'none',
            fontFamily:'inherit'
        },
        ':focus':{
            outline:0,
        },
        img:{
            border:0
        },
        'input::-ms-clear':{
            display:'none'
        },
        input:{
            '&:-webkit-autofill':{
                WebkitBoxShadow:'0 0 0 1000px white inset'
            },
        },
        table:{
            borderCollapse:'collapse',
            borderSpacing:0,
        },
        '*' :{
            WebkitBoxSizing:'border-box',
            MozBoxSizing:'border-box',
            boxSizing:'border-box',
            outline:'none !important'
        }

    }
}