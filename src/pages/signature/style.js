import styled from "styled-components";

export const SignWrapper = styled.div`
    background-color: #ffffff;
    .title{
        text-align: center;
    }
    .content{
        padding: 20px 15px;
    }
    .content-list li{
        margin-top: 20px;
    }
    .column-name{
        color: #999999;
    }
    .matter{
        line-height: 24px;
    }
    .signature-column{
        margin-top: 10px;
    }
    .column-width{
        display: inline-block;
        width: 65%;
        text-align: right;
        color: #999999;       
    }
    .entrusted{
        background-color: #ffffff;
        font-weight: 500;
        font-size: 14px;
        border-radius: 4px;
        border: 1px solid #979797;
        width: 168px;
        height: 44px;
        text-align: center;
        line-height: 42px;
        margin-top: 40px;
    }
`

export const MaskWrapper = styled.div`
     position:fixed;
     top: 0;
     right: 0;
     left: 0;
     bottom: 0;
     z-index: 99;
     background:rgba(0,0,0,0.8);
`

export const ContentWrapper = styled.div`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
    z-index: 200;
    width: 100%;
    .title{
        font-size: 24px;
        color: #FFFFFF;
        font-weight: bold;
        margin-bottom: 20px;
    }
    .sign-area{
        box-sizing: border-box;
        width: 100%;
        height: 112px;
        border: 2px dashed #00C6B8;
        background-color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        color: #999;
    }
    .confirm{
        width: 167px;
        height: 44px;
        background: #FFFFFF;
        border-radius: 24px;
        color: #00C6B8;
        font-size: 16px;    
    }
    .confirm-btn{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
    }
`