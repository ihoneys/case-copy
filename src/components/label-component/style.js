import styled from "styled-components";


export const LabelWrapper = styled.div`
    font-size: 15px;
    /* padding-bottom: 15px; */
    .title{
        font-weight: bold;
    }
    .describe{
        font-size: 12px;
        color: #666666;
        align-items: end;
    }
    .label{
        width: 108px;
        text-align: center;
        border-radius: 50px;
        background-color: #F8F8F8;
        font-size: 14px;   
        /* padding: 8px 0;  */
        height: 30px;
        line-height: 30px;
        margin-left: 10px;
        margin-top: 15px;
        
    }
    .label-flex{
        margin-left: -10px;
        /* margin-bottom: -15px; */
        /* margin-top: 20px; */
    }
    .active-color {
        border: 1px solid #00C6B8;
        background-color: #F0FCFB;    
        box-sizing: border-box;
        color: #00C6B8
    }
`