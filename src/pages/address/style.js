import styled from "styled-components";

export const AddressWrapper = styled.div`
    background-color: #F5F5F5;
    min-height: 100vh;
    padding: 10px 12px;
    box-sizing: border-box;
    .address-content{
        font-size: 14px;
        color: #666666;
        width: 90%;
        line-height: 20px;
    }
    .edit-icon{
        width: 14px;
        height: 14px;
    }
    .address-name{
        font-size: 16px;
        font-weight: bold;
    }
    .address-phone{
        font-weight: bold;
        font-size: 14px;
        margin-left: 15px;
    }
    .without{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        color: #707070;
        font-size: 14px;
        img {
            width: 240px;
            height: 179px;
        }
    }
`

export const ListWrapper = styled.div`
    background-color: #ffffff;
    border-radius: 6px;
    padding: 15px;
    margin-bottom: 12px;   
`