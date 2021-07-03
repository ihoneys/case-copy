import styled from "styled-components";
export const StepsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    background-color: #EDEDED;
    padding: .3rem;
    .steps-list{
        display: flex;
        align-items: center;
        flex-direction: column;        
    }
    .current-index{
        width: .26rem;
        height: .26rem;        
        border-radius: 50%;   
        text-align: center;
        line-height: .26rem;
        margin-bottom: .1rem;
        z-index: 20;
        background-color: #D8D8D8;
        font-size: .14rem;
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
        font-size: .12rem;
    }    
`