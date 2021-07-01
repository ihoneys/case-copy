import styled from "styled-components";
export const DetailWrapper = styled.div`
    min-height: 100vh;
    padding: .1rem .12rem;
    background-color: #f5f5f5;
    box-sizing: border-box;
    .headerline{
        color: #333;
        font-size: .18rem;
        font-weight: bold;
    }
    .background{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 74px;
        background: linear-gradient(180deg, #00C6B8 0%, #F5F5F5 100%);
        z-index: 1;
    }
    .count-wrapper{
        position: relative;
        height: 64px;
        line-height: 64px;
        border-radius: 6px;
        z-index: 999;
        box-sizing: border-box;
        background-color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        .count-icon{
            width: 24px;
            height: 24px;
            z-index: 999;
        }
    }
`

export const ContentWrapper = styled.div`
    padding: .2rem .15rem;
    border-radius: .08rem;
    font-size: .15rem;  
    background-color: #fff;
    margin-top: 10px;
`

export const AddressWrapper = styled.div`
    padding: .2rem .15rem;
    border-radius: .08rem;
    font-size: .15rem;
    margin-top: .1rem;
    background-color: #ffffff;
    .info-name{
        color: #333333;
        font-size: .16rem;
        font-weight: bold;
    }
    .info-phone{
        font-size: .14rem;
        color: #333333;
        font-weight: bold;
        margin-left: .15rem;
    }
    .info-text{
        font-size: .14rem;
        color: #666666;
        margin-top: .04rem;
    }
    .address-info{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: .2rem;
    }
    .address-icon{
        width: .16rem;
        height: .19rem;
    }
    .arrow-icon{
        width: .24rem;
        height: .24rem;
    }
`
