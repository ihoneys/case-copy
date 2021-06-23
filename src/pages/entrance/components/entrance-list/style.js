import styled from "styled-components"
export const ListLayout = styled.ul`

    width: 100%;
    box-sizing: border-box;
    .item-list{
        display: flex;   
        flex-direction: column;
        margin-bottom: .3rem;
        .item-column{
            display: flex;
            align-items: center;
            .item-title{
                font-weight: bold;
                margin-left: .1rem;
            }
            .item-content{
                margin-top: .09rem;
                margin-left: .1rem;
                font-size: .14rem;
                color: #666;
            }
            .item-icon{
                width: .26rem;
                height: .26rem;
            }  
        }
       
    }
`