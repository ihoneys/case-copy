import styled from "styled-components";

import positive from "@/assets/img/positive.png" 

export const WriteWrapper = styled.div`
    padding-bottom: 80px;
`

export const HeaderWrapper = styled.div`
    background-color: #EDEDED;
`

export const TabsWrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: #EDEDED;
    .tabs-item{
        width: 50%;
        height: .44rem;
        text-align: center;
        line-height: .44rem;
        background-color: #F5F5F5;
        border-top-left-radius: .16rem;
        border-top-right-radius: .16rem;
        font-size: .16rem;
        font-weight: 500;
    }
    .active {
        color: #00C6B8;
        background-color: #fff;
    }
`

export const FormWrapper = styled.div`
    padding: .18rem 0rem 0rem .15rem;
    background-color: #ffffff;
    box-sizing: border-box;
    .label-icon{
        color: #F65C44;
        padding-right: .07rem;
        font-size: .12rem;
    }
`

export const FormItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: .01rem solid #E7E7E7;
    &:last-child {
        border-bottom: none;
    }
    .label-item{
        width: 1.2rem    
    }

    input::-webkit-input-placeholder {
        font-size: .15rem;
        color: #999999;
    }
`

export const RecordHeader = styled.div`
    font-size: .15rem;
    padding: .15rem;
`
export const RecordBotttomWrapper = styled.div` 
    background-color: #fff;
    padding: .15rem 0rem .15rem .15rem;
    font-size: .15rem;
    .my-radio .am-radio {
        padding: .025rem;
        border: .01rem solid #ccc;
        border-radius: 50%;
    }
    .record-list{
        margin-top: .1rem;
        border-bottom: .01rem solid #E7E7E7;
        padding-bottom: .15rem;
        padding-right: .15rem;
    }
    .title{
        font-weight: bold;
    }
    .remarks{
        background-color: #f5f5f5;
        border-radius: .04rem;
        margin-top: .1rem;
        textarea::-webkit-input-placeholder {
            font-size: .15rem;
            color: #999999;
        }
    }
    .remarks-wrapper{
        padding-right: .15rem;
        margin-top: .15rem;
        margin-bottom: .3rem;
    }
    .agreement{
        color: #666666;
        font-size: .12rem;
    }
    .protocol{
        color: #00C6B8;
        font-size: .12rem;
    }
`

export const UploaderWrapper = styled.div`
    .card-id{
        height: .44rem;
        line-height: .44rem;
    }
    .uploader-flex{
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-left: .1rem;
    }
    .uploader-wrapper{
        display: flex;
        margin-left: -0.1rem;
    }
    .card-name{
        color: #999999;
        font-size: .13rem;
    }
    .m-image-picker-upload-btn{
        background-image: url(${positive});
        background-size: 100%; 
        background-repeat:no-repeat;
        width: 8rem;
    }
`
