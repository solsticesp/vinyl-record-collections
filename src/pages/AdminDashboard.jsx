// import { Link } from "react-router";
import { useEffect, useState } from "react";
import { supabaseUrl, supabaseKey } from "../supabase";
import SaveRecordsModal from "../components/records/SaveRecordsModal";
import DeleteRecordModal from "../components/records/DeleteRecordModal";
import AdminRecordListItem from "../components/records/AdminRecordListItem";
import RecordInfoModal from "../components/records/RecordInfoModal";


import { fetchRecords } from "../utils/fetchRecords";

export default function AdminDashboard() {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        fetchRecords()
            .then(data => {
                console.log(data);
                setRecords(data)
            })
            .catch(error => console.error(error)
            )
    }, []);

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


    const saveRecordHandler = async (record) => {
        const isEdit = selectedRecord !== null;

        try {
            const response = await fetch(
                isEdit
                    ? `${supabaseUrl}/records?id=eq.${selectedRecord.id}`
                    : `${supabaseUrl}/records`,
                {
                    method: isEdit ? "PATCH" : "POST",
                    headers: {
                        apikey: supabaseKey,
                        "Content-Type": "application/json",
                        Prefer: "return=minimal",
                    },
                    body: JSON.stringify(record),
                }
            );

            if (!response.ok) {
                throw new Error(await response.text());
            }

            const updatedRecords = await fetchRecords();
            setRecords(updatedRecords);
            setShowSaveRecordsModal(false);
            setSelectedRecord(null);
        } catch (error) {
            alert(`Error ${isEdit ? "updating" : "adding"} record: ${error.message}`);
        }
    };

    // const saveRecordHandler = async (record) => {
    //     try {
    //         await fetch(`${supabaseUrl}/records`, {
    //             method: 'POST',
    //             headers: {
    //                 apikey: supabaseKey,
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(record)
    //         });

    //         const updatedRecords = await fetchRecords();
    //         setRecords(updatedRecords);
    //     } catch (error) {
    //         alert('Error adding user: ' + error)
    //     } finally {
    //         setShowSaveRecordsModal(false);
    //     }
    // }

    const confirmDeleteHandler = async () => {
        try {
            const response = await fetch(
                `${supabaseUrl}/records?id=eq.${recordToDelete}`,
                {
                    method: "DELETE",
                    headers: {
                        apikey: supabaseKey,
                    },
                }
            );

            if (!response.ok) {
                throw new Error(await response.text());
            }

            const updatedRecords = await fetchRecords();
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

                {records.map(record => (
                    <AdminRecordListItem
                        key={record.id}
                        record={record}
                        onInfo={infoRecordHandler}
                        onEdit={editRecordHandler}
                        onDelete={deleteRecordHandler}
                    />
                ))}
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

