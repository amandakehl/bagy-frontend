import styled from "styled-components";

export const TableFaturedStyle = styled.div`

.purchases-container {
    background-color: #FFF;
    display: flex;
    width: 546px;
    height: 280px;
    padding: 20px;
    /* margin-top: 35%;
    margin-left: 15%; */
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    font-family: 'Mulish', sans-serif;
    overflow: hidden;

    .scroll {
        overflow: auto; 
        ::-webkit-scrollbar{width:7px;}
        ::-webkit-scrollbar-track{background:#C4C4C4;border-radius:16px}
        ::-webkit-scrollbar-thumb{background:#FC3C8D;border-radius:16px}
    }

    h2 {
        font-size: 25px;
        font-weight: 700;
        padding-bottom: 15px;
    }

    select {
        display: flex;
        position: relative;
        margin-left: 20px;
        font-size: 15px;
        padding: 2px 2px 2px 5px;
        color: #FC3C8D;
        border: none;
        left: 400px;

        option {
        color: #FC3C8D;
        }
    }
    
    .generalValue {
        padding: 3px;
        font-size: 16px;
        font-weight: 700;
        color: #2F80ED;
    }

    tr {
        display: flex;
        justify-content: space-between;
    }

    hr {
        background-color: #CCC;
        border: 0.1px solid #CCC;
        border-radius: 10px;
        width: 96%;
        
    }

    .tablePurchases {
        margin-top: 20px;
        justify-content: space-between;
        align-items: center;
    
        .items {
            padding: 11px;                
        };

        .store {
            font-family: 'Mulish', sans-serif;           
            font-weight: 600;
        };

        .quantity {
            padding: 0 50px;
            color: #9FA2B4;
        };

        .price {
            padding: 0 50px;
            color: #9FA2B4;
        };
    }
    
}
`