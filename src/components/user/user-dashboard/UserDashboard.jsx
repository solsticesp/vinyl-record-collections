import { useContext, useEffect, useState } from "react";
import SaveRecordsModal from "../user-modals/SaveRecordsModal";
import DeleteRecordModal from "../user-modals/DeleteRecordModal";
import UserRecordListItem from "../user-record-list-item/UserRecordListItem";
import RecordInfoModal from "../user-modals/RecordInfoModal";
import Spinner from "../../shared/Spinner";
import { recordApi } from "../../../api";
import AuthContext from "../../../contexts/auth-context";
import ErrorModal from "../../error/ErrorModal";
import ErrorDisclaimer from "../../error/ErrorDisclaimer";

export default function UserDashboard() {
    const { accessToken, user } = useContext(AuthContext)

    const [loading, setLoading] = useState(true)
    const [records, setRecords] = useState([]);
    const [showSaveRecordsModal, setShowSaveRecordsModal] = useState(false);
    const [selectedRecord, setSelectedRecord] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [recordToDelete, setRecordToDelete] = useState(null);
    const [showRecordInfoModal, setShowRecordInfoModal] = useState(false);
    const [recordToView, setRecordToView] = useState(null);

    const [inlineError, setInlineError] = useState(null);
    const [modalError, setModalError] = useState(null);

    const infoRecordHandler = (record) => {
        setRecordToView(record);
        setShowRecordInfoModal(true)
    };

    const addRecordBtnHandler = () => {
        setSelectedRecord(null);
        setShowSaveRecordsModal(true);
    };

    const editRecordHandler = (record) => {
        setSelectedRecord(record);
        setShowSaveRecordsModal(true);
    };

    const deleteRecordHandler = (id) => {
        setRecordToDelete(id);
        setShowDeleteModal(true);
    }

    useEffect(() => {
        if (!accessToken || !user?.id) return;

        recordApi.getAll(accessToken, user.id)
            .then(setRecords)
            .catch(error => setInlineError(error.apiResponse.msg))
            .finally(() => setLoading(false));
    }, [accessToken, user?.id]);


    const saveRecordHandler = async (record) => {
        const isEdit = selectedRecord !== null;

        try {
            if (isEdit) {
                await recordApi.update(
                    selectedRecord.id,
                    record,
                    accessToken
                );
            } else {
                await recordApi.create(record, accessToken, user.id);
            }

            const updatedRecords = await recordApi.getAll(accessToken, user.id);

            setRecords(updatedRecords);
            setShowSaveRecordsModal(false);
            setSelectedRecord(null);
        } catch (error) {
            setModalError(error.apiResponse.msg);
        }
    };

    const confirmDeleteHandler = async () => {
        try {
            await recordApi.remove(recordToDelete, accessToken)

            const updatedRecords = await recordApi.getAll(accessToken, user.id);

            setRecords(updatedRecords);
            setShowDeleteModal(false);
            setRecordToDelete(null);
        } catch (error) {
            setModalError(error.apiResponse.msg)
        }
    };

    const closeErrorModalHadler = () => {
        setModalError(null);
    }

    return (
        <>
            {inlineError
                ? <ErrorDisclaimer errorText={inlineError} />
                : (

                    <div className="page admin-page">
                        <section className="catalog-header">
                            <div>
                                <span className="eyebrow">USER</span>
                                <h1>
                                    RECORD<br />
                                    MANAGEMENT
                                </h1>
                            </div>
                            <p className="catalog-intro">
                                Manage your vinyl collection,
                                add new records, edit existing ones,
                                or remove records.
                            </p>
                        </section>

                        <div className="admin-toolbar">
                            <span>{records.length} RECORDS</span>
                            <button className="add-record-btn" onClick={() => { addRecordBtnHandler() }}>
                                + ADD NEW RECORD
                            </button>
                        </div>

                        <section className="admin-table">
                            <div className="admin-table-header">
                                <span>IMAGE</span>
                                <span>ARTIST</span>
                                <span>TITLE</span>
                                <span>CATEGORY</span>
                                <span>ACTIONS</span>
                            </div>

                            {loading ? (
                                <Spinner />
                            ) : (
                                records.map(record => (
                                    <UserRecordListItem
                                        key={record.id}
                                        record={record}
                                        onInfo={infoRecordHandler}
                                        onEdit={editRecordHandler}
                                        onDelete={deleteRecordHandler}
                                    />
                                ))
                            )}
                        </section>

                        {showRecordInfoModal && (
                            <RecordInfoModal
                                record={recordToView}
                                onClose={() => setShowRecordInfoModal(false)}
                            />
                        )}

                        {showSaveRecordsModal && (
                            <SaveRecordsModal
                                onClose={() => setShowSaveRecordsModal(false)}
                                record={selectedRecord}
                                onSave={saveRecordHandler}
                            />
                        )}

                        {showDeleteModal && (
                            <DeleteRecordModal
                                record={records.find(record => record.id === recordToDelete)}
                                onClose={() => {
                                    setShowDeleteModal(false);
                                    setRecordToDelete(null);
                                }}
                                onConfirm={confirmDeleteHandler}
                            />
                        )}

                        {modalError && <ErrorModal errorText={modalError} onClose={closeErrorModalHadler} />}
                    </div>
                )
            }
        </>

    );
}

