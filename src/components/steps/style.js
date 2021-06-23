import styled from "styled-components";
export const StepsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    .steps-list{
        display: flex;
        align-items: center;
        flex-direction: column;        
    }
    .current-index{
        width: 26px;
        height: 26px;        
        border-radius: 50%;   
        text-align: center;
        line-height: 26px;
        margin-bottom: 10px;
        z-index: 8888;
        background-color: #D8D8D8;
        font-size: 14px;
        color: #666666;
    }
    .active {
        color: #fff !important;
        background-color: #00C6B8 !important;
        /* background-color: black; */
    }
    .active-color {
        color: #00C6B8 !important;
    }
    .steps-title{
        color: #666666;
        font-weight: bold;
        font-size: 12px;
    }    
`