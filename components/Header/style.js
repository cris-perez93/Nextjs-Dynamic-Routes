import styled from "@emotion/styled";



export const ContainerHeader = styled.header`
  
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  


`
export const ContainerAvatar = styled.div`
 
  display: flex;
  justify-content:space-evenly;
  width: 200px;
  align-items: center;
`



export const Navigation = styled.ul`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content:space-evenly;
`
export const NavElement = styled.li`
  &:hover{
      color:#5AA057;
      cursor: pointer;
  }
`