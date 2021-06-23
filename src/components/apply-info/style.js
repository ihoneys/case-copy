import styled from "styled-components"
export const ContentWrapper = styled.ul`
    font-size: .15rem;
    li {
        margin-top: .2rem;
        &:first-child {
           margin-top: 0rem;
        }
    }  
    .headerline{
        color: #333;
        font-size: .18rem;
        font-weight: bold;
    }
    .content-name{     
        color: #999;
    }
    .content-text{
        color: #333;
    }
`