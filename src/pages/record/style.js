import styled from "styled-components";

export const RecordWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f5f5f5;
    padding: .15rem .12rem;
    box-sizing: border-box;    
    .am-list-body{
        background-color: #f5f5f5;
    }
`

export const ContentWrapper = styled.div`
    background-color: #fff;
    border-radius: .06rem;
    margin-bottom: .1rem;    
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
    font-size: .14rem;
    border-top-left-radius: .06rem;
    border-top-right-radius: .06rem;
    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: .08rem;
        &:last-child {
            margin-bottom: 0;
        }
    }
`

export const BottomBtn = styled.div`
    text-align: right;
    padding: .08rem .15rem;
    display: flex;
    justify-content: flex-end;
    .no-default-width {
        width: .9rem !important;
    }
`

export const ButtonWrapper = styled.button`   
    display: flex;
    align-items: center;
    justify-content: center;
    width:.76rem;
    height: .3rem;
    border-radius: .5rem;
    font-size: .12rem;
    background-color: #fff;
    margin-left: .06rem;    
`
