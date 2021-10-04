import React from "react";
import ModalCommon from "@components/modalCommon";
import PatientsForm from "./PatientsForm";

export default function PatientsModal(props) {

    const [modalIsOpen, setModalOpen] = React.useState(false);
    const modelOpenHandler = () => {
        setModalOpen(true);
    }
    const modelCloseHandler = (params) => {
        setModalOpen(false);
    }

    return (
        <ModalCommon open={modalIsOpen} modelCloseHandler={modelCloseHandler} width='600px'>
            <PatientsForm formSubmitHandler={formSubmitHandler} />
        </ModalCommon>
    );
}