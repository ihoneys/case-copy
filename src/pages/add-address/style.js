import styled from "styled-components";

export const AddressWrapper = styled.div`
    background-color: #F5F5F5;
    min-height: 100vh;
    .am-input-label-5{
        font-size: 15px;
        color: #333333;
    }
    input{
        text-align: right;
    }
    input::-webkit-input-placeholder {
        font-size: 15px;
        color: #999999;
    }
    /* .my-style{
        width: 100px !important;
        font-size: 15px !important;
        color: #333333 !important;
    } */
    .my-picker{
        .am-list-content{
            min-width: 100px !important;
            font-size: 15px !important;

        }
       
    }
    .tips{
        .am-list-content{
            min-width: 250px !important;
            font-size: 15px !important;
            color: #333333 !important;
        }
        .tips-content{
            color: #999999;
            font-size: 12px;
        }
    }
    .am-list-extra{
        flex: 1;
        color: #333333 !important;
        font-size: 15px !important;
    }
    .am-list-line{ 
        border-bottom: 1px solid #F5F5F5;
        &:last-child {
            border-bottom: none
        }
    }
`