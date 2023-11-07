import PrimaryButton from "../../../../../Components/PrimaryButton";
// import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
import styled from 'styled-components';
function Addresses() {
    const title = {
        fontSize: 24,
        color: 'rgb(15, 23, 42)'
    }
    const blockTitle = {
        padding: '21px',
        border: '1px solid #ccc',
        justifyContent: 'space-between'
    }

    const List = styled.div`
    margin-left: -8px;
`;
    return (

        <div className='d-inline-flex flex-column gap-2 mt-4 col' style={blockTitle}>
            <div style={title}>Адреса заведений</div>
            <List  className='d-inline-flex flex-column gap-3' >
                <ListElement >Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement >Санкт-Петербург, Казанская ул, 7</ListElement>
                <PrimaryButton>Добавить филиал</PrimaryButton>
            </List>

        </div>

    );
}

export default Addresses;