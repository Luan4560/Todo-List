import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
 
  hr {
    margin: 10px 0;
    width: 120%;
  }

  h2 {
    color: #FE9E0E;
  }

  .main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
 
  .form-content {
  margin: 20px 0;
  }

  .btn {
    margin-top: 35px;
  }

  .btn-link {
    color: #fff;
    font-weight: bold;
    text-decoration: none
  }
`