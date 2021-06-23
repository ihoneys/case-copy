import styled from "styled-components"
import headerImage from "@/assets/img/enter-header.png"
export const EntranceWrapper = styled.div`
    max-width: 100%;
    min-height: 100%;
    background-color: #fff;
`

export const HeaderWrapper = styled.div`
    height: 1.69rem;
    background-image: url(${headerImage});
    background-size: 100% 100%;
`

export const ContentWrapper = styled.div`
    padding: .3rem .15rem;
`

export const BottomWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .bottom-left{
        background: linear-gradient(270deg, #679DF5 0%, #2E5BDD 100%);
    }
    .bottom-right{
        background: linear-gradient(90deg, #00ADA1 0%, #00CB9E 100%);
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.68rem;
    height: .7rem;
    border-radius: .04rem;
    font-size: .14rem;
    color: #ffffff;
    font-weight: bold;
    .boottom-icon{
        width: .28rem;
        height: .28rem;
        margin-right: .06rem;
    }
`
