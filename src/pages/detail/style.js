import styled from "styled-components";
export const DetailWrapper = styled.div`
    height: 100vh;
    padding: .1rem .12rem;
    background-color: #f5f5f5;
    .headerline{
        color: #333;
        font-size: .18rem;
        font-weight: bold;
    }
`

export const ContentWrapper = styled.div`
    padding: .2rem .15rem;
    border-radius: .08rem;
    font-size: .15rem;  
    background-color: #fff;
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
