import styled from "styled-components";

export const PositionBtn = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    padding: .11rem .15rem;
    background-color: #fff;
    z-index: 10;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .handle-btn{
        box-shadow: 0rem .04rem .06rem 0rem rgba(0,155,143,0.17);
        height: .44rem;
        border-radius: .5rem;
    }
`