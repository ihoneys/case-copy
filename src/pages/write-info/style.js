import styled from "styled-components";

export const HeaderWrapper = styled.div`
    background-color: #EDEDED;
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

export const FormWrapper = styled.div`
    padding: 18px 0px 0px 15px;
    background-color: #ffffff;
    box-sizing: border-box;
`

export const FormItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #E7E7E7;
    &:last-child {
        border-bottom: none;
    }
    .label-item{
        width: 120px    
    }
    .label-icon{
        color: #F65C44;
        padding-right: 7px;
        font-size: 12px;
    }
    input::-webkit-input-placeholder {
        font-size: 15px;
        color: #999999;
    }
`

export const RecordHeader = styled.div`
    font-size: 15px;
    padding: 15px;
`
export const RecordBotttomWrapper = styled.div` 
    background-color: #fff;
    padding: 15px 0px 15px 15px;
    font-size: 15px;
    .my-radio .am-radio {
        padding: 2.5px;
        border: 1px solid #ccc;
        border-radius: 50%;
    }
    .record-list{
        margin-top: 10px;
        border-bottom: 1px solid #E7E7E7;
        padding-bottom: 15px;
        padding-right: 15px;
    }
    .title{
        font-weight: bold;
    }
    .remarks{
        background-color: #DEDFE0;
        border-radius: 4px;
        margin-top: 10px;
        textarea::-webkit-input-placeholder {
            font-size: 15px;
            color: #999999;
        }
    }
    .remarks-wrapper{
        padding-right: 15px;
        margin-top: 15px;
        margin-bottom: 30px;
    }
    .agreement{
        margin-left: 6px;
    }
`

