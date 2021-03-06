import styled from "styled-components";

export const CardRightStyle = styled.div`
    background-color: #FFF;
    display: flex;
    width: 230px;
    height: 100px;
    padding: 12px;
    border: 1px solid #DDE2FF;
    border-radius: 10px;
    font-family: 'Mulish', sans-serif;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;

    .analysis {
        display: inline-grid;
        align-items: center;
        text-align: center;
        align-content: center;

        .principalInfo {
            font-size: 20px;
            font-weight: 900;
            color: #C4C4C4;  
        }

        .value {
            font-size: 28px;
            font-weight: 700;
            color: #000;
        
        }

        .positive {
            color: #219653;
        }

        .select {
            text-decoration: underline
        }
    }
`