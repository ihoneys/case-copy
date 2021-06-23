import styled from "styled-components";

export const HeaderWrapper = styled.div`
    background-color: #EDEDED;
    padding: 30px 30px 20px;
`

export const TabsWrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: #EDEDED;
    .tabs-item{
        width: 50%;
        height: 44px;
        text-align: center;
        line-height: 44px;
        background-color: #F5F5F5;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        font-size: 16px;
        font-weight: 500;
    }
    .active {
        color: #00C6B8;
        background-color: #fff;
    }
`