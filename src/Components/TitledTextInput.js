import styled from "styled-components";

const Input = styled.input`
    outline: none;
    // border-radius: 0px;
    // border: solid #152842 1px;
    // background-color: #D9E2EF;
    color: #0F172A;
    padding: 8px 16px 8px 16px!important;
    gap:16px;
    size:15px;
    /* Steel Gray / 50 */
background: #F8FAFC;
/* Steel Gray / 200 */
border: 1px solid #E2E8F0;
border-radius: 24px;
    &:hover {
        background-color: #D9E2EFB8;
    }
`;


const TitleStyled = styled.div`
/* Text caption rg */
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 12px;
/* identical to box height, or 100% */
/* Steel Gray / 400 */
color: #94A3B8!important;
`;
function TitledTextInput({ title, def }) {
    const Title = title === undefined ?
        (<div></div>) :
        <TitleStyled>{title}</TitleStyled>;
    return (
        <div className='d-flex flex-column gap-2'>
        
            <TitleStyled className="caption">{Title}</TitleStyled> 
            <Input className='p-2' defaultValue={def} ></Input>
        </div>
    );
}


export default TitledTextInput;
