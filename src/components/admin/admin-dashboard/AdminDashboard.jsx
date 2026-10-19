// import { Link } from "react-router";
import { useEffect, useState } from "react";
import SaveRecordsModal from "../admin-modals/SaveRecordsModal";
import DeleteRecordModal from "../admin-modals/DeleteRecordModal";
import AdminRecordListItem from "../admin-record-list-item/AdminRecordListItem";
import RecordInfoModal from "../admin-modals/RecordInfoModal";
import Spinner from "../../shared/Spinner";
import request from "../../../utils/request";

export default function AdminDashboard() {
    const [loading, setLoading] = useState(true)
    const [records, setRecords] = useState([]);

    const [showSaveRecordsModal, setShowSaveRecordsModal] = useState(false);
    const [selectedRecord, setSelectedRecord] = useState(null);

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [recordToDelete, setRecordToDelete] = useState(null);

    const [showRecordInfoModal, setShowRecordInfoModal] = useState(false);
    const [recordToView, setRecordToView] = useState(null);

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
        request("/records")
            .then(setRecords)
            .catch(error => console.error(error))
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const saveRecordHandler = async (record) => {
        const isEdit = selectedRecord !== null;

        try {
            await request(
                isEdit
                    ? `/records?id=eq.${selectedRecord.id}`
                    : "/records",
                isEdit ? "PATCH" : "POST",
                record
            );

            const updatedRecords = await request("/records");

            setRecords(updatedRecords);
            setShowSaveRecordsModal(false);
            setSelectedRecord(null);
        } catch (error) {
            alert(`Error ${isEdit ? "updating" : "adding"} record: ${error.message}`);
        }
    };

    const confirmDeleteHandler = async () => {
        try {
            await request(
                `/records?id=eq.${recordToDelete}`,
                "DELETE"
            );

            const updatedRecords = await request("/records");

            setRecords(updatedRecords);
            setShowDeleteModal(false);
            setRecordToDelete(null);
        } catch (error) {
            alert("Error deleting record: " + error.message);
        }
    };

    return (
        <div className="page admin-page">
            <section className="catalog-header">
                <div>
                    <span className="eyebrow">ADMIN</span>
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
                        <AdminRecordListItem
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
        </div>
    );
}

