import styled from "styled-components";

export const RecordWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f5f5f5;
    padding: .15rem .12rem;
    box-sizing: border-box;
`

export const ContentWrapper = styled.div`
    background-color: #fff;
    border-radius: .06rem;
    .orange{
        border: .01rem solid #FF9F4F;
        color: #FF9F4F;
    }
    .black{
        border: .01rem solid #BEBEBE;
        color: #333333;
    }
    .green{
        border: .01rem solid #00C6B8;
        color: #00C6B8; 
    }
`
export const ColumnList = styled.ul`
    padding: .2rem .15rem;
    border-bottom: .01rem solid #f5f5f5;
    margin-top: -0.08rem;
    font-size: .14rem;
    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: .08rem;
    }
`

export const BottomBtn = styled.div`
    text-align: right;
    padding: .08rem .15rem; 
    .no-default-width {
        width: 90px !important;
    }
`

export const ButtonWrapper = styled.button`
    width:70px;
    height: .3rem;
    line-height: .28rem;
    border-radius: .5rem;
    font-size: .14rem;
    background-color: #fff;
    margin-left: .06rem;
    width: .7rem;
`
