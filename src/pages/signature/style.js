import styled from "styled-components";

export const SignWrapper = styled.div`
    background-color: #ffffff;
    .title{
        text-align: center;
    }
    .content{
        padding: .2rem .15rem;
    }
    .content-list li{
        margin-top: .2rem;
    }
    .column-name{
        color: #999999;
    }
    .matter{
        line-height: .24rem;
    }
    .signature-column{
        margin-top: .1rem;
        .sign-image{
            width: 1.02rem;
            height: .3rem;
        }
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
        font-size: .14rem;
        border-radius: .04rem;
        border: .01rem solid #979797;
        width: 1.68rem;
        height: .44rem;
        text-align: center;
        line-height: .42rem;
        margin-top: .4rem;
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
        font-size: .24rem;
        color: #FFFFFF;
        font-weight: bold;
        margin-bottom: .2rem;
    }
    .sign-area{
        box-sizing: border-box;
        width: 100%;
        height: 1.42rem;
        border: .02rem dashed #00C6B8;
        background-color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: .18rem;
        color: #999;
        padding: .1rem;
    }
    .confirm{
        width: 1.67rem;
        height: .44rem;
        background: #FFFFFF;
        border-radius: .24rem;
        color: #00C6B8;
        font-size: .16rem;    
    }
    .confirm-btn{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .3rem .1rem;
    }
    .reset{
        color: #333;
    }
    .write-name-canvas{
        width: 3.75rem;
        height: 1.2rem;
    }
    .am-icon{
        color: #FFFFFF; 
        width: .3rem;
        height: .3rem;
    }
    .close-sign{
        position: absolute;
        right: .1rem;
        top: -0.5rem;
    }
`