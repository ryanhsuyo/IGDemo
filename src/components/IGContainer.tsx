// const IGContainer:React.FC = () => {
//     return (
//     <>
//         <div className="lg:max-w-[1024px] lg:mx-auto" />
//     </>
//     )
// }


// export default IGContainer


import styled from 'styled-components'

const IGContainer = styled.div`
max-width:1024px;
margin:0 auto;
@media only screen and (max-width: 1024px) {
    max-width: 100%;
}
`;
export default IGContainer;
