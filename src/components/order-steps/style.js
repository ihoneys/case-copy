import styled from "styled-components";

export const OrderStepsWrapper = styled.div`
    background-color: #ffffff;
    border-radius: 6px;
    padding: 20px 14px;
    font-size: 12px;
    color: #666666;
    position: relative;
    z-index: 2;
    .image-icon{
        width: 30px;
        height: 30px;
        display: block;
        margin-bottom: 8px;
        z-index: 8888;
    }
    .active-color {
        color: #00C6B8;
        font-weight: bold;
    }
    .error-reason{
        padding: 7px 10px;
        background: #F5F5F5;
        border-radius: 4px;
        color: #FA5151;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 12px;
        &::before {
            content: "";
            position:absolute;
            top:-8px;
            left: 134px;
            display: block;
            width:0;
            height:0;
            border-width:0 8px 8px;
            border-style:solid;
            border-color:transparent transparent #F5F5F5;/*透明 透明  黄*/
            
        }
    }
`